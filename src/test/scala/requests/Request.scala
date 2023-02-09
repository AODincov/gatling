package requests

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Request {

  def getOrders = {
    exec(
      http("getOrders")
        .get("")
        .header("content-type", "application/json")
        .check(status.is(200))
    )
  }

  def postOrder = {
    exec(
      http("new order")
        .post("")
        .header("content-type", "application/json")
        .check(status.is(200))
    )
  }

  def getToken={
    exec(
      http("get token")
        .post("/login")
        .header("content-type", "application/json")
        .body(StringBody(
          "{    \"login\":\"admin\",    \"password\":\"password\"}"
        ))

    )
  }
}
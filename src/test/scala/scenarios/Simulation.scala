package scenarios

import io.gatling.core.Predef.{atOnceUsers, rampUsers, scenario}
import io.gatling.core.structure.PopulationBuilder
import requests.Request.{getToken, postOrder}

object Simulation {
  def getTokenScen= scenario("first scenario")
    .exec(getToken)
}
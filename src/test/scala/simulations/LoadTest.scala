package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef.http
import scenarios.Simulation.getTokenScen

class LoadTest extends Simulation {
  val httpConf = http.baseUrl("http://localhost:4578")

  setUp(
    getTokenScen.inject(
      rampUsersPerSec(100) to 1000 during(60)
    ).protocols(httpConf))
}
package computerdatabase.advanced
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import java.util.concurrent.ThreadLocalRandom
class MyTest extends Simulation {
object GetKV {
    val getKV = exec(
        http("get kv")
          .get("/v1/kv/data/rakuten")
          .header("X-Vault-Namespace", "zpccustomer")
      )
  }
val httpProtocol = http
    .baseUrl("https://us-zsense.zscwp.io:8300")
    .header("X-Vault-Token", "hvs.CAESIIbQaQiHcW2NrVfHe9nOow16A_En9pnaUfXp5X99P-OOGicKImh2cy5VUzl6ZVJ1RmZkcktGOWptcGJGRWlpaHMueXNxRFMQzyk")
  val users = scenario("Users").exec(GetKV.getKV)
setUp(
    users.inject(rampUsers(50000) during (10 seconds))
  ).protocols(httpProtocol)
}

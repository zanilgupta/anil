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
    .header("X-Vault-Token", "hvs.CAESIBM8-NEuUt1hPF4Y6zGvk2kachus0facsRmq3_nJDvJ9GicKImh2cy5xdmlsbUcwNjhuV2tyVVdCanhFODVDdmYueXNxRFMQwyg")
  val users = scenario("Users").exec(GetKV.getKV)
setUp(
    users.inject(rampUsers(1500) during (5 seconds))
  ).protocols(httpProtocol)
}

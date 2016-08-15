package test.java.steps;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Администратор on 13.08.2016.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features",
        plugin = {"json:reports/yandex.json", "pretty", "html:reports"}
)
public class RunCucumberTest {
}

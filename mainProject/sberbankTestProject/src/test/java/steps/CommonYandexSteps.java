package test.java.steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.ru.И;
import cucumber.api.java.ru.Когда;
import main.java.Log;
import main.java.WebDriverManager;
import test.java.CommonWebTest;

import static com.codeborne.selenide.Selenide.open;


/**
 * Created by Администратор on 13.08.2016.
 */
public class CommonYandexSteps extends CommonWebTest{
    @Before
    public void beforeScenario(Scenario scenario) throws Exception {
        this.before(scenario);

    }

    @After
    public void afterScenario() throws Exception {
        this.after();

    }

    @Когда("^открыт браузер \"(.+)\"$")
    public void openBrowser(String browser) throws Exception{
        Log.Info("Открываем браузер "+ browser);
        switch (browser.toLowerCase())
        {   case "chrome":
            WebDriverManager.getDriver(WebDriverManager.DriverType.CHROME, null);
            break;
            case "firefox":
                WebDriverManager.getDriver(WebDriverManager.DriverType.FIREFOX, null);
                break;
            case "ie":
                WebDriverManager.getDriver(WebDriverManager.DriverType.IE, null);
                break;
            default:
                Log.Info("Неизвестный браузер: "+browser);
                Log.Info("Открываем браузер установленный по-умолчанию: CHROME");
                WebDriverManager.getDriver(WebDriverManager.DriverType.CHROME, null);
                break;
        }

    }


    @И("^открыт url \"(.+)\"$")
    public void openUrl(String url) throws Exception{
        Log.Info("Открываем страницу "+ url);
        open("http://"+url);
    }

}

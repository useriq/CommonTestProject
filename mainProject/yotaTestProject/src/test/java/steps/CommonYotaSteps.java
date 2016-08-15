package test.java.steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.ru.Когда;
import main.java.AppStart;
import main.java.Products;
import main.java.Storage;
import main.java.WebDriverManager;
import test.java.CommonWebTest;

import static com.codeborne.selenide.Selenide.sleep;

/**
 * Created by Администратор on 13.08.2016.
 */
public class CommonYotaSteps extends CommonWebTest {
    @Before
    public void beforeScenario(Scenario scenario) throws Exception {
        Products.getInstance().clearPosition();
        AppStart.resetApplicationFolder(); // Очищение папки приложения. Копирование jar приложения
        this.before(scenario);

    }

    @After
    public void afterScenario() throws Exception {
        AppStart.killProcess(Integer.valueOf(Storage.getString("PID")));
        Products.getInstance().clearPosition();
        this.after();

    }

    @Когда("^запущен тестовый сервис$")
    public void startApp () throws Exception {
        AppStart.startService("YOTA");
        sleep(10000);
    }
}


package test.java;
import cucumber.api.Scenario;
import cucumber.api.java.ru.И;
import cucumber.api.java.ru.Когда;
import main.java.AppStart;
import main.java.Log;
import main.java.Storage;
import main.java.WebDriverManager;

import java.util.HashMap;

import static com.codeborne.selenide.Selenide.open;
import static org.junit.Assert.fail;

/**
 * Created by Администратор on 13.08.2016.
 */
public class CommonWebTest extends CommonTest {

    //аналог data для хранения нужных данных
    public static HashMap<String, Object> store = new HashMap<>();

    @Override
    protected void startAndUpdate() {
    }

    /***
     * Действия после завершения сценария
     * @throws Exception
     */
    @Override
    public void after() throws Exception {
        Log.Info("Действия после завершения сценария");
        super.after();
        WebDriverManager.closeAllDrivers();
        Storage.clear();
    }


    @Override
    public void before(Scenario _scenario) throws Exception {
        Log.Info("Действия до начала сценария");
        super.before(_scenario);
        Storage.clear();
    }


}

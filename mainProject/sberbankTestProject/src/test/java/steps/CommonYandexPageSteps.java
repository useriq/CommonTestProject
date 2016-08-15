package test.java.steps;

import cucumber.api.java.ru.Когда;
import cucumber.api.java.ru.То;
import main.java.Log;
import main.java.page.CommonYandexPage;
import test.java.CommonWebTest;

import static org.junit.Assert.assertTrue;

/**
 * Created by Администратор on 14.08.2016.
 */
public class CommonYandexPageSteps extends CommonWebTest{
    @То("^открыта главная страница yandex.ru$")
    public void isCommonYotaPageOpened() {
        assertTrue("Стартовая страница yandex.ru успешно открыта", (new CommonYandexPage(this)).isThatIt());

    }

    @Когда("^на главной странице выбран пункт меню услуг > \"(.+)\"$")
    public void selectServiceMenuItem(String itemServiceMenu) {
        Log.Info("на главной странице выбираем пункт меню услуг > "+itemServiceMenu);
        (new CommonYandexPage(this)).selectServiceMenuItem(itemServiceMenu);


    }

}

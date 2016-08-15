package main.java.page;

import org.openqa.selenium.By;
import test.java.CommonTest;

import static com.codeborne.selenide.Selenide.$;

/**
 * Created by Администратор on 13.08.2016.
 */
public class CommonYandexPage extends CommonWebPage {
    static private final String XPATH_MAIN_PAGE = "//div[@class='row rows__row rows__row_main']";
    static private final String XPATH_SERVICE_MENU_ITEM ="//div[@class='home-arrow__tabs']//a[contains(text(),'#itemServiceMenu')]";

    public CommonYandexPage(CommonTest test) {
        super(test);
        name = "Стартовая страница yandex.ru";
        by = By.xpath(XPATH_MAIN_PAGE);
    }

    public void selectServiceMenuItem(String item){
        $(By.xpath(XPATH_SERVICE_MENU_ITEM.replace("#itemServiceMenu",item))).click();
    }


}

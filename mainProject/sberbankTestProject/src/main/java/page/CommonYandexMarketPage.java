package main.java.page;

import com.codeborne.selenide.Condition;
import main.java.ButtonWeb;
import main.java.Log;
import main.java.Storage;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import test.java.CommonTest;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

/**
 * Created by Администратор on 14.08.2016.
 */
public class CommonYandexMarketPage extends CommonWebPage{

    static private final String XPATH_MAIN_MARKET_PAGE = "//div[@class='headline headline_theme_banner']";
    static private final String XPATH_CATEGORY_MENU_ITEM = "//ul[@class='topmenu__list']//a[contains(text(),'#categoryItem')]";
    static private final String XPATH_CATEGORY_PAGE = "//div[@class='headline headline_theme_banner']//h1[@title='#categoryName']";
    static private final String XPATH_LEFT_MENU_CATALOG_ITEM = "//div[@class='catalog-menu__item'//a[contains(text(),'#catalogItem')]";
    static private final String XPATH_LEFT_MENU_PRODUCT_ITEM = "//div[@class='catalog-menu__list']//a[contains(text(),'#productItem')]";
    static private final String XPATH_PRODUCT_PAGE = "//div[@class='b-page-title b-page-title_type_aura']//h1[contains(text(),'#productName')]";
    static private final String XPATH_PRODUCT_PAGE_WITH_FILTERS = "//div[@class='headline__header']//h1[contains(text(),'#productName')]";
    static private final String XPATH_LINK_MORE_FILTERS = "//div[@class='searchParams']//td[@class='more']//a[contains(text(),'#linkName')]";
    static private final String XPATH_FILTER_PRICE_FROM = "//div[@class='filter-block__body']//*[@id='gf-pricefrom-var']";
    static private final String XPATH_FILTER_PRICE_TO = "//div[@class='filter-block__body']//*[@id='gf-priceto-var']";
    static private final String XPATH_FILTER_FACTORY_NAME = "//div[@class='filter-block__list filter-block__list_type_vendor vendors-list__top i-bem filter-block__list_column_2 filter-block__list_js_inited']//label[@class='checkbox__label' and contains(text(),'#factoryName')]";
    static private final String XPATH_FILTER_FACTORY_NAME_YET = "//div[@class='filter-block__list filter-block__list_type_vendor vendors-list__others filter-block__list_column_2']//label[@class='checkbox__label' and contains(text(),'#factoryName')]";
    static private final String XPATH_FILTER_BUTTONS = "//div[@class='filter-panel-aside__content']//span[@class='button__text' and contains(text(),'#buttonName')]";
    static private final String XPATH_FIND_PRODUCTS_NAME = "//div[@class='snippet-list snippet-list_type_vertical island']//div[@class='snippet-card__content']//span[@class='snippet-card__header-text']";
    static private final String XPATH_PRODUCTS_NAME = "//div[@class='product-card__header']//h1[contains(text(),'#productName')]";
    static private final String XPATH_SEARCH_INPUT = "//input[@id='header-search']";
    static private final String XPATH_SEARCH_SPAN = "//span[@class='suggest2-form__node']";
    static private final String XPATH_FILTER_APPLIED = "//div[@class='filter-applied-results i-bem filter-applied-results_js_inited']";
    static private final String XPATH_SEARCH_BUTTONS_ACTIVE = "//button[@class='button button_size_m button_side_right button_focus_thin button_theme_normal i-bem button_js_inited button_hovered_yes']";

    public CommonYandexMarketPage(CommonTest test) {
        super(test);
        name = "Стартовая страница Яндекс.Маркет";
        by = By.xpath(XPATH_MAIN_MARKET_PAGE);
    }

    public void selectProductMenuItem(String item){
        $(By.xpath(XPATH_CATEGORY_MENU_ITEM.replace("#categoryItem",item))).click();
    }

    public void isCategoryPageOpened(String categoryName){
        assertTrue("Не открылась страница "+categoryName, isThatIt(By.xpath(XPATH_CATEGORY_PAGE.replace("#categoryName",categoryName)),"Категория продуктов "+categoryName));
    }

    public void selectLeftMenuItem(String catalogItem, String productName){
        $(By.xpath(XPATH_LEFT_MENU_PRODUCT_ITEM.replace("#productItem",productName))).click();
    }

    public void isProductPageOpened(String productName){
        assertTrue("Не открылась страница продуктов "+productName,isThatIt(By.xpath(XPATH_PRODUCT_PAGE.replace("#productName",productName)),"Поиска продуктов "+productName));
    }

    public void clickMoreFiltersLink(String linkName){
        $(By.xpath(XPATH_LINK_MORE_FILTERS.replace("#linkName",linkName))).click();
    }

    public void isAdvancedSearchProductPageOpened(String productName){
        assertTrue("Не открылась страница расширенного поиска продукта "+productName,isThatIt(By.xpath(XPATH_PRODUCT_PAGE_WITH_FILTERS.replace("#productName",productName)),"Расширенного поиска продуктов "+productName));
    }

    public void filledFilterPriceFrom(String priceFrom){
        $(By.xpath(XPATH_FILTER_PRICE_FROM)).sendKeys(priceFrom);
    }

    public void filledFilterPriceTo(String priceTo){
        $(By.xpath(XPATH_FILTER_PRICE_TO)).sendKeys(priceTo);
    }

    public void selectFilterManufacturer(String manufacturer) throws InterruptedException {
       if ($(By.xpath(XPATH_FILTER_FACTORY_NAME.replace("#factoryName",manufacturer))).exists()) {
           $(By.xpath(XPATH_FILTER_FACTORY_NAME.replace("#factoryName", manufacturer))).click();
           $(By.xpath(XPATH_FILTER_APPLIED)).waitUntil(Condition.exist,20000);
       }
        else {
           clickButton("фильтре","Ещё");
           if ($(By.xpath(XPATH_FILTER_FACTORY_NAME_YET.replace("#factoryName",manufacturer))).exists()) {
               $(By.xpath(XPATH_FILTER_FACTORY_NAME_YET.replace("#factoryName", manufacturer))).click();
               $(By.xpath(XPATH_FILTER_APPLIED)).waitUntil(Condition.exist,20000);
           }
               else fail("Производитель "+manufacturer+" не найден в фильтре!");
        }

    }

    public void clickButton(String location, String button) throws InterruptedException {

        switch (location.toLowerCase()){
            case "фильтре":
                ButtonWeb btn = new ButtonWeb(By.xpath(XPATH_FILTER_BUTTONS.replace("#buttonName",button)),button);
                btn.click();
                Thread.sleep(2000);
                $(By.xpath(XPATH_FILTER_APPLIED)).waitUntil(Condition.exist,20000);

                break;
            case "поиске":
                ButtonWeb btnSearch = new ButtonWeb(By.xpath(XPATH_SEARCH_SPAN),button);
                Dimension size = btnSearch.getButton().getSize();
                btnSearch.setCursorRihgtSideAndClickOtherElement(size,By.xpath(XPATH_SEARCH_BUTTONS_ACTIVE));


        }
    }

    public void countFindingProducts(String count) throws Exception{
       assertEquals($$(By.xpath(XPATH_FIND_PRODUCTS_NAME)).size(),Integer.valueOf(count),$$(By.xpath(XPATH_FIND_PRODUCTS_NAME)).size()-Integer.valueOf(count));
       Log.Info("На странице отобразилось "+ count + " товаров", true);
    }

    public void rememberNameProducts (String productsNumber){
        Storage.put("productsName",$$(By.xpath(XPATH_FIND_PRODUCTS_NAME)).get(Integer.valueOf(productsNumber)-1).getText());
        Log.Info("В HashMap Storage запомнили key: productsName value: "+$$(By.xpath(XPATH_FIND_PRODUCTS_NAME)).get(Integer.valueOf(productsNumber)-1).getText());
    }

    public void filledSearchInput (){
        $(By.xpath(XPATH_SEARCH_INPUT)).sendKeys(Storage.getString("productsName"));
        Log.Info("В поисковую строку Яндекс.Маркет введено \"запомненное наименование\": "+Storage.getString("productsName"));
    }

    public void checkFindProduct(){

        $(By.xpath(XPATH_PRODUCTS_NAME.replace("#productName",Storage.getString("productsName")))).waitUntil(Condition.exist,20000);
        //assertTrue("Не открыта страница продукта: "+Storage.getString("productsName"),$(By.xpath(XPATH_PRODUCTS_NAME.replace("#productName",Storage.getString("productsName")))).exists());
        Log.Info("Продукт: "+Storage.getString("productsName")+ " найден на странице", true);
    }
}

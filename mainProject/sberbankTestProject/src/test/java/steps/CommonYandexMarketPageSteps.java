package test.java.steps;

import cucumber.api.java.ru.И;
import cucumber.api.java.ru.Когда;
import cucumber.api.java.ru.То;
import main.java.Log;
import main.java.Storage;
import main.java.page.CommonYandexMarketPage;
import test.java.CommonWebTest;

import static org.junit.Assert.assertTrue;

/**
 * Created by Администратор on 14.08.2016.
 */
public class CommonYandexMarketPageSteps extends CommonWebTest{

    @То("^открыта главная страница Яндекс.Маркет$")
    public void isCommonYandexMarketPageOpened() {
        assertTrue("Главная страница Яндекс.Маркет успешно открыта", (new CommonYandexMarketPage(this)).isThatIt());
    }

    @Когда("^выбран раздел меню > \"(.+)\"$")
    public void selectProductMenuItem(String categoryItem) {
        Log.Info("Выбираем раздел меню > "+ categoryItem);
        (new CommonYandexMarketPage(this)).selectProductMenuItem(categoryItem);
    }

    @То("^открыта страница \"(.+)\"$")
    public void isCategoryPageOpened (String categoryName) {
        (new CommonYandexMarketPage(this)).isCategoryPageOpened(categoryName);
    }

    @Когда("^выбран раздел левого меню \"(.+)\" > \"(.+)\"$")
    public void selectLeftMenuItem(String catalogItem, String productItem) {
        Log.Info("Выбираем раздел левого меню "+catalogItem+" > "+ productItem);
        (new CommonYandexMarketPage(this)).selectLeftMenuItem(catalogItem,productItem);
    }

    @То("^открыта страница продуктов \"(.+)\"$")
    public void isProductsPageOpened (String categoryName) {
        (new CommonYandexMarketPage(this)).isProductPageOpened(categoryName);
    }

    @Когда("^нажата ссылка \"(.+)\"$")
    public void clickMoreFiltersLink(String linkName) {
        Log.Info("Нажимаем на ссылку "+ linkName);
        (new CommonYandexMarketPage(this)).clickMoreFiltersLink(linkName);
    }

    @То("^открыта страница расширенного поиска продуктов \"(.+)\"$")
    public void isAdvancedSearchProductPageOpened (String productName) {
        (new CommonYandexMarketPage(this)).isAdvancedSearchProductPageOpened(productName);
    }

    @Когда("^в фильтре заполнена цена поиска от \"(.+)\" рублей$")
    public void filledFilterPriceFrom(String priceFrom) {
        Log.Info("В фильтре заполняем цену поиска от "+ priceFrom);
        (new CommonYandexMarketPage(this)).filledFilterPriceFrom(priceFrom);
    }

    @И("^в фильтре заполнена цена поиска до \"(.+)\" рублей$")
    public void filledFilterPriceTo(String price) {
        Log.Info("В фильтре заполняем цену поиска до "+ price);
        (new CommonYandexMarketPage(this)).filledFilterPriceTo(price);
    }

    @И("^в фильтре выбран производитель \"(.+)\"$")
    public void selectFilterManufacturer(String manufacturer) throws InterruptedException {
        Log.Info("В фильтре выбираем производиеля "+ manufacturer);
        (new CommonYandexMarketPage(this)).selectFilterManufacturer(manufacturer);
    }

    @И("^в \"(.+)\" нажата кнопка \"(.+)\"$")
    public void clickButton(String location, String button) throws InterruptedException {
        Log.Info("В "+location+" нажимаем кнопку "+ button);
        (new CommonYandexMarketPage(this)).clickButton(location,button);
    }

    @И("^на странице отображено \"(.+)\" товаров$")
    public void countFindingProducts(String count) throws Exception {
        Log.Info("Проверяем, что на странице отобразилось "+ count + " товаров");
        (new CommonYandexMarketPage(this)).countFindingProducts(count);
    }

    @И("^запомнено наименование \"(.+)\"-го товара в списке$")
    public void rememberNameProducts(String productsNumber) throws Exception {
        Log.Info("Запоминаем наименование "+ productsNumber + "-го товара");
        (new CommonYandexMarketPage(this)).rememberNameProducts(productsNumber);
    }

    @Когда("^в поисковую строку Яндекс.Маркет введено \"(.+)\"$")
    public void filledSearchInput(String string){
        Log.Info("В поисковую строку Яндекс.Маркет вводим "+ string);
        (new CommonYandexMarketPage(this)).filledSearchInput();
    }

    @Когда("^отображен продукт с искомым наименованием$")
    public void checkFindProduct(){
        Log.Info("Проверяем, что найден искомый продукт "+ Storage.get("productsName"));
        (new CommonYandexMarketPage(this)).checkFindProduct();
    }


}


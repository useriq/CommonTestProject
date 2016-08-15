$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkProductsLaptop.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 2,
  "name": "Поиск в яндекс-маркете планшетов Acer и Dell",
  "description": "",
  "id": "поиск-в-яндекс-маркете-планшетов-acer-и-dell",
  "keyword": "Функционал"
});
formatter.before({
  "duration": 343718546,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Поиск в яндекс-маркете планшетов Acer и Dell",
  "description": "",
  "id": "поиск-в-яндекс-маркете-планшетов-acer-и-dell;поиск-в-яндекс-маркете-планшетов-acer-и-dell",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 4,
  "name": "открыт браузер \"chrome\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 5,
  "name": "открыт url \"yandex.ru\"",
  "keyword": "И "
});
formatter.step({
  "line": 6,
  "name": "открыта главная страница yandex.ru",
  "keyword": "То "
});
formatter.step({
  "line": 7,
  "name": "на главной странице выбран пункт меню услуг \u003e \"Маркет\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 8,
  "name": "открыта главная страница Яндекс.Маркет",
  "keyword": "То "
});
formatter.step({
  "line": 9,
  "name": "выбран раздел меню \u003e \"Компьютеры\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 10,
  "name": "открыта страница \"Компьютерная техника\"",
  "keyword": "То "
});
formatter.step({
  "line": 11,
  "name": "выбран раздел левого меню \"Компьютеры\" \u003e \"Планшеты\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 12,
  "name": "открыта страница продуктов \"Планшеты\"",
  "keyword": "То "
});
formatter.step({
  "line": 13,
  "name": "нажата ссылка \"Расширенный поиск\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 14,
  "name": "открыта страница расширенного поиска продуктов \"Планшеты\"",
  "keyword": "То "
});
formatter.step({
  "line": 15,
  "name": "в фильтре заполнена цена поиска от \"20000\" рублей",
  "keyword": "Когда "
});
formatter.step({
  "line": 16,
  "name": "в фильтре заполнена цена поиска до \"30000\" рублей",
  "keyword": "И "
});
formatter.step({
  "line": 17,
  "name": "в фильтре выбран производитель \"Acer\"",
  "keyword": "И "
});
formatter.step({
  "line": 18,
  "name": "в фильтре выбран производитель \"DELL\"",
  "keyword": "И "
});
formatter.step({
  "line": 19,
  "name": "в \"фильтре\" нажата кнопка \"Применить\"",
  "keyword": "И "
});
formatter.step({
  "line": 20,
  "name": "на странице отображено \"10\" товаров",
  "keyword": "То "
});
formatter.step({
  "line": 21,
  "name": "запомнено наименование \"1\"-го товара в списке",
  "keyword": "И "
});
formatter.step({
  "line": 22,
  "name": "в поисковую строку Яндекс.Маркет введено \"запомненное наименование\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 23,
  "name": "в \"поиске\" нажата кнопка \"Найти\"",
  "keyword": "И "
});
formatter.step({
  "line": 24,
  "name": "отображен продукт с искомым наименованием",
  "keyword": "То "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "CommonYandexSteps.openBrowser(String)"
});
formatter.write("Сообщения");
formatter.write("\u003cb\u003eОткрываем браузер chrome\u003c/b\u003e");
formatter.result({
  "duration": 134388761421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yandex.ru",
      "offset": 12
    }
  ],
  "location": "CommonYandexSteps.openUrl(String)"
});
formatter.write("\u003cb\u003eОткрываем страницу yandex.ru\u003c/b\u003e");
formatter.result({
  "duration": 89812189817,
  "status": "passed"
});
formatter.match({
  "location": "CommonYandexPageSteps.isCommonYotaPageOpened()"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Стартовая страница yandex.ru] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded0.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.result({
  "duration": 12152252870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Маркет",
      "offset": 47
    }
  ],
  "location": "CommonYandexPageSteps.selectServiceMenuItem(String)"
});
formatter.write("\u003cb\u003eна главной странице выбираем пункт меню услуг \u003e Маркет\u003c/b\u003e");
formatter.result({
  "duration": 15436073858,
  "status": "passed"
});
formatter.match({
  "location": "CommonYandexMarketPageSteps.isCommonYandexMarketPageOpened()"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Стартовая страница Яндекс.Маркет] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded1.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.result({
  "duration": 2635295827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютеры",
      "offset": 22
    }
  ],
  "location": "CommonYandexMarketPageSteps.selectProductMenuItem(String)"
});
formatter.write("\u003cb\u003eВыбираем раздел меню \u003e Компьютеры\u003c/b\u003e");
formatter.result({
  "duration": 18808917893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютерная техника",
      "offset": 18
    }
  ],
  "location": "CommonYandexMarketPageSteps.isCategoryPageOpened(String)"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Категория продуктов Компьютерная техника] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded2.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.result({
  "duration": 476604429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютеры",
      "offset": 27
    },
    {
      "val": "Планшеты",
      "offset": 42
    }
  ],
  "location": "CommonYandexMarketPageSteps.selectLeftMenuItem(String,String)"
});
formatter.write("\u003cb\u003eВыбираем раздел левого меню Компьютеры \u003e Планшеты\u003c/b\u003e");
formatter.result({
  "duration": 8127812055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Планшеты",
      "offset": 28
    }
  ],
  "location": "CommonYandexMarketPageSteps.isProductsPageOpened(String)"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Поиска продуктов Планшеты] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded3.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.result({
  "duration": 548095917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Расширенный поиск",
      "offset": 15
    }
  ],
  "location": "CommonYandexMarketPageSteps.clickMoreFiltersLink(String)"
});
formatter.write("\u003cb\u003eНажимаем на ссылку Расширенный поиск\u003c/b\u003e");
formatter.result({
  "duration": 13277648696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Планшеты",
      "offset": 48
    }
  ],
  "location": "CommonYandexMarketPageSteps.isAdvancedSearchProductPageOpened(String)"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Расширенного поиска продуктов Планшеты] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded4.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.result({
  "duration": 872846968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 36
    }
  ],
  "location": "CommonYandexMarketPageSteps.filledFilterPriceFrom(String)"
});
formatter.write("\u003cb\u003eВ фильтре заполняем цену поиска от 20000\u003c/b\u003e");
formatter.result({
  "duration": 662199525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 36
    }
  ],
  "location": "CommonYandexMarketPageSteps.filledFilterPriceTo(String)"
});
formatter.write("\u003cb\u003eВ фильтре заполняем цену поиска до 30000\u003c/b\u003e");
formatter.result({
  "duration": 597616178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acer",
      "offset": 32
    }
  ],
  "location": "CommonYandexMarketPageSteps.selectFilterManufacturer(String)"
});
formatter.write("\u003cb\u003eВ фильтре выбираем производиеля Acer\u003c/b\u003e");
formatter.result({
  "duration": 877674397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DELL",
      "offset": 32
    }
  ],
  "location": "CommonYandexMarketPageSteps.selectFilterManufacturer(String)"
});
formatter.write("\u003cb\u003eВ фильтре выбираем производиеля DELL\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка Ещё найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eНажатие на кнопку Ещё\u003c/b\u003e");
formatter.result({
  "duration": 4469134485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "фильтре",
      "offset": 3
    },
    {
      "val": "Применить",
      "offset": 27
    }
  ],
  "location": "CommonYandexMarketPageSteps.clickButton(String,String)"
});
formatter.write("\u003cb\u003eВ фильтре нажимаем кнопку Применить\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка Применить найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eНажатие на кнопку Применить\u003c/b\u003e");
formatter.result({
  "duration": 2614469158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 24
    }
  ],
  "location": "CommonYandexMarketPageSteps.countFindingProducts(String)"
});
formatter.write("\u003cb\u003eПроверяем, что на странице отобразилось 10 товаров\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded5.png");
formatter.write("\u003cb\u003eНа странице отобразилось 10 товаров\u003c/b\u003e");
formatter.result({
  "duration": 602552839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "CommonYandexMarketPageSteps.rememberNameProducts(String)"
});
formatter.write("\u003cb\u003eЗапоминаем наименование 1-го товара\u003c/b\u003e");
formatter.write("\u003cb\u003eВ HashMap Storage запомнили key: productsName value: Acer One 10 Z3735F 32Gb\u003c/b\u003e");
formatter.result({
  "duration": 231396728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "запомненное наименование",
      "offset": 42
    }
  ],
  "location": "CommonYandexMarketPageSteps.filledSearchInput(String)"
});
formatter.write("\u003cb\u003eВ поисковую строку Яндекс.Маркет вводим запомненное наименование\u003c/b\u003e");
formatter.write("\u003cb\u003eВ поисковую строку Яндекс.Маркет введено \"запомненное наименование\": Acer One 10 Z3735F 32Gb\u003c/b\u003e");
formatter.result({
  "duration": 396359314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "поиске",
      "offset": 3
    },
    {
      "val": "Найти",
      "offset": 26
    }
  ],
  "location": "CommonYandexMarketPageSteps.clickButton(String,String)"
});
formatter.write("\u003cb\u003eВ поиске нажимаем кнопку Найти\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка Найти найдена\u001b[0m\u003c/b\u003e");
formatter.result({
  "duration": 1009329957,
  "status": "passed"
});
formatter.match({
  "location": "CommonYandexMarketPageSteps.checkFindProduct()"
});
formatter.write("\u003cb\u003eПроверяем, что найден искомый продукт Acer One 10 Z3735F 32Gb\u003c/b\u003e");
formatter.result({
  "duration": 21570283933,
  "error_message": "Element not found {By.xpath: //div[@class\u003d\u0027product-card__header\u0027]//h1[contains(text(),\u0027Acer One 10 Z3735F 32Gb\u0027)]}\nExpected: exist\nScreenshot: file:/C:/Users/Администратор/mainProject/sberbankTestProject/build/reports/tests/1471231796285.0.png\nTimeout: 20 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027product-card__header\u0027]//h1[contains(text(),\u0027Acer One 10 Z3735F 32Gb\u0027)]\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:137)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:85)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:61)\r\n\tat com.sun.proxy.$Proxy17.waitUntil(Unknown Source)\r\n\tat main.java.page.CommonYandexMarketPage.checkFindProduct(CommonYandexMarketPage.java:132)\r\n\tat test.java.steps.CommonYandexMarketPageSteps.checkFindProduct(CommonYandexMarketPageSteps.java:101)\r\n\tat ✽.То отображен продукт с искомым наименованием(checkProductsLaptop.feature:24)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027product-card__header\u0027]//h1[contains(text(),\u0027Acer One 10 Z3735F 32Gb\u0027)]\"}\n  (Session info: chrome\u003d52.0.2743.116)\n  (Driver info: chromedriver\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 38 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027WIN-ESJSNAH4946\u0027, ip: \u0027137.74.158.243\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b), userDataDir\u003dC:\\Users\\836D~1\\AppData\\Local\\Temp\\2\\scoped_dir5860_22757}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d52.0.2743.116, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 21dcd0120f81e1ba3d872e2deda67ef8\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027product-card__header\u0027]//h1[contains(text(),\u0027Acer One 10 Z3735F 32Gb\u0027)]}\r\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:137)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:85)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:61)\r\n\tat com.sun.proxy.$Proxy17.waitUntil(Unknown Source)\r\n\tat main.java.page.CommonYandexMarketPage.checkFindProduct(CommonYandexMarketPage.java:132)\r\n\tat test.java.steps.CommonYandexMarketPageSteps.checkFindProduct(CommonYandexMarketPageSteps.java:101)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.write("\u003cb\u003eДействия после завершения сценария\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded6.png");
formatter.write("\u003cb\u003eСценарий завершен с ошибкой\u003c/b\u003e");
formatter.after({
  "duration": 11488784468,
  "status": "passed"
});
formatter.uri("checkProductsNotebook.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 2,
  "name": "Поиск ноутбуков HP и Lenovo",
  "description": "",
  "id": "поиск-ноутбуков-hp-и-lenovo",
  "keyword": "Функционал"
});
formatter.before({
  "duration": 809041,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Поиск ноутбуков HP и Lenovo",
  "description": "",
  "id": "поиск-ноутбуков-hp-и-lenovo;поиск-ноутбуков-hp-и-lenovo",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 4,
  "name": "открыт браузер \"chrome\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 5,
  "name": "открыт url \"yandex.ru\"",
  "keyword": "И "
});
formatter.step({
  "line": 6,
  "name": "открыта главная страница yandex.ru",
  "keyword": "То "
});
formatter.step({
  "line": 7,
  "name": "на главной странице выбран пункт меню услуг \u003e \"Маркет\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 8,
  "name": "открыта главная страница Яндекс.Маркет",
  "keyword": "То "
});
formatter.step({
  "line": 9,
  "name": "выбран раздел меню \u003e \"Компьютеры\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 10,
  "name": "открыта страница \"Компьютерная техника\"",
  "keyword": "То "
});
formatter.step({
  "line": 11,
  "name": "выбран раздел левого меню \"Компьютеры\" \u003e \"Ноутбуки\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 12,
  "name": "открыта страница продуктов \"Ноутбуки\"",
  "keyword": "То "
});
formatter.step({
  "line": 13,
  "name": "нажата ссылка \"Расширенный поиск\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 14,
  "name": "открыта страница расширенного поиска продуктов \"Ноутбуки\"",
  "keyword": "То "
});
formatter.step({
  "line": 15,
  "name": "в фильтре заполнена цена поиска до \"30000\" рублей",
  "keyword": "Когда "
});
formatter.step({
  "line": 16,
  "name": "в фильтре выбран производитель \"HP\"",
  "keyword": "И "
});
formatter.step({
  "line": 17,
  "name": "в фильтре выбран производитель \"Lenovo\"",
  "keyword": "И "
});
formatter.step({
  "line": 18,
  "name": "в \"фильтре\" нажата кнопка \"Применить\"",
  "keyword": "И "
});
formatter.step({
  "line": 19,
  "name": "на странице отображено \"10\" товаров",
  "keyword": "То "
});
formatter.step({
  "line": 20,
  "name": "запомнено наименование \"1\"-го товара в списке",
  "keyword": "И "
});
formatter.step({
  "line": 21,
  "name": "в поисковую строку Яндекс.Маркет введено \"запомненное наименование\"",
  "keyword": "Когда "
});
formatter.step({
  "line": 22,
  "name": "в \"поиске\" нажата кнопка \"Найти\"",
  "keyword": "И "
});
formatter.step({
  "line": 23,
  "name": "отображен продукт с искомым наименованием",
  "keyword": "То "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "CommonYandexSteps.openBrowser(String)"
});
formatter.write("Сообщения");
formatter.write("\u003cb\u003eОткрываем браузер chrome\u003c/b\u003e");
formatter.result({
  "duration": 28724715572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yandex.ru",
      "offset": 12
    }
  ],
  "location": "CommonYandexSteps.openUrl(String)"
});
formatter.write("\u003cb\u003eОткрываем страницу yandex.ru\u003c/b\u003e");
formatter.result({
  "duration": 7597636850,
  "status": "passed"
});
formatter.match({
  "location": "CommonYandexPageSteps.isCommonYotaPageOpened()"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Стартовая страница yandex.ru] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded7.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.result({
  "duration": 577275604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Маркет",
      "offset": 47
    }
  ],
  "location": "CommonYandexPageSteps.selectServiceMenuItem(String)"
});
formatter.write("\u003cb\u003eна главной странице выбираем пункт меню услуг \u003e Маркет\u003c/b\u003e");
formatter.result({
  "duration": 14391106411,
  "status": "passed"
});
formatter.match({
  "location": "CommonYandexMarketPageSteps.isCommonYandexMarketPageOpened()"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Стартовая страница Яндекс.Маркет] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded8.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.result({
  "duration": 574374397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютеры",
      "offset": 22
    }
  ],
  "location": "CommonYandexMarketPageSteps.selectProductMenuItem(String)"
});
formatter.write("\u003cb\u003eВыбираем раздел меню \u003e Компьютеры\u003c/b\u003e");
formatter.result({
  "duration": 194428343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютерная техника",
      "offset": 18
    }
  ],
  "location": "CommonYandexMarketPageSteps.isCategoryPageOpened(String)"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Категория продуктов Компьютерная техника] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded9.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.result({
  "duration": 10548561339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютеры",
      "offset": 27
    },
    {
      "val": "Ноутбуки",
      "offset": 42
    }
  ],
  "location": "CommonYandexMarketPageSteps.selectLeftMenuItem(String,String)"
});
formatter.write("\u003cb\u003eВыбираем раздел левого меню Компьютеры \u003e Ноутбуки\u003c/b\u003e");
formatter.result({
  "duration": 4851997670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ноутбуки",
      "offset": 28
    }
  ],
  "location": "CommonYandexMarketPageSteps.isProductsPageOpened(String)"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Поиска продуктов Ноутбуки] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded10.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.result({
  "duration": 309803062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Расширенный поиск",
      "offset": 15
    }
  ],
  "location": "CommonYandexMarketPageSteps.clickMoreFiltersLink(String)"
});
formatter.write("\u003cb\u003eНажимаем на ссылку Расширенный поиск\u003c/b\u003e");
formatter.result({
  "duration": 9549540235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ноутбуки",
      "offset": 48
    }
  ],
  "location": "CommonYandexMarketPageSteps.isAdvancedSearchProductPageOpened(String)"
});
formatter.write("\u003cb\u003eПроверяем, что это страница [Расширенного поиска продуктов Ноутбуки] ... \u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded11.png");
formatter.write("\u003cb\u003eЭто она\u003c/b\u003e");
formatter.result({
  "duration": 589669637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 36
    }
  ],
  "location": "CommonYandexMarketPageSteps.filledFilterPriceTo(String)"
});
formatter.write("\u003cb\u003eВ фильтре заполняем цену поиска до 30000\u003c/b\u003e");
formatter.result({
  "duration": 236664436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP",
      "offset": 32
    }
  ],
  "location": "CommonYandexMarketPageSteps.selectFilterManufacturer(String)"
});
formatter.write("\u003cb\u003eВ фильтре выбираем производиеля HP\u003c/b\u003e");
formatter.result({
  "duration": 943979472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lenovo",
      "offset": 32
    }
  ],
  "location": "CommonYandexMarketPageSteps.selectFilterManufacturer(String)"
});
formatter.write("\u003cb\u003eВ фильтре выбираем производиеля Lenovo\u003c/b\u003e");
formatter.result({
  "duration": 510058122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "фильтре",
      "offset": 3
    },
    {
      "val": "Применить",
      "offset": 27
    }
  ],
  "location": "CommonYandexMarketPageSteps.clickButton(String,String)"
});
formatter.write("\u003cb\u003eВ фильтре нажимаем кнопку Применить\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка Применить найдена\u001b[0m\u003c/b\u003e");
formatter.write("\u003cb\u003eНажатие на кнопку Применить\u003c/b\u003e");
formatter.result({
  "duration": 3349771829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 24
    }
  ],
  "location": "CommonYandexMarketPageSteps.countFindingProducts(String)"
});
formatter.write("\u003cb\u003eПроверяем, что на странице отобразилось 10 товаров\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded12.png");
formatter.write("\u003cb\u003eНа странице отобразилось 10 товаров\u003c/b\u003e");
formatter.result({
  "duration": 762812872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "CommonYandexMarketPageSteps.rememberNameProducts(String)"
});
formatter.write("\u003cb\u003eЗапоминаем наименование 1-го товара\u003c/b\u003e");
formatter.write("\u003cb\u003eВ HashMap Storage запомнили key: productsName value: Lenovo IdeaPad 100 15\u003c/b\u003e");
formatter.result({
  "duration": 332136906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "запомненное наименование",
      "offset": 42
    }
  ],
  "location": "CommonYandexMarketPageSteps.filledSearchInput(String)"
});
formatter.write("\u003cb\u003eВ поисковую строку Яндекс.Маркет вводим запомненное наименование\u003c/b\u003e");
formatter.write("\u003cb\u003eВ поисковую строку Яндекс.Маркет введено \"запомненное наименование\": Lenovo IdeaPad 100 15\u003c/b\u003e");
formatter.result({
  "duration": 540251066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "поиске",
      "offset": 3
    },
    {
      "val": "Найти",
      "offset": 26
    }
  ],
  "location": "CommonYandexMarketPageSteps.clickButton(String,String)"
});
formatter.write("\u003cb\u003eВ поиске нажимаем кнопку Найти\u003c/b\u003e");
formatter.write("\u003cb\u003e\u001b[36mКнопка Найти найдена\u001b[0m\u003c/b\u003e");
formatter.result({
  "duration": 644964653,
  "status": "passed"
});
formatter.match({
  "location": "CommonYandexMarketPageSteps.checkFindProduct()"
});
formatter.write("\u003cb\u003eПроверяем, что найден искомый продукт Lenovo IdeaPad 100 15\u003c/b\u003e");
formatter.result({
  "duration": 20749091854,
  "error_message": "Element not found {By.xpath: //div[@class\u003d\u0027product-card__header\u0027]//h1[contains(text(),\u0027Lenovo IdeaPad 100 15\u0027)]}\nExpected: exist\nScreenshot: file:/C:/Users/Администратор/mainProject/sberbankTestProject/build/reports/tests/1471231922657.1.png\nTimeout: 20 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027product-card__header\u0027]//h1[contains(text(),\u0027Lenovo IdeaPad 100 15\u0027)]\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:137)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:85)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:61)\r\n\tat com.sun.proxy.$Proxy17.waitUntil(Unknown Source)\r\n\tat main.java.page.CommonYandexMarketPage.checkFindProduct(CommonYandexMarketPage.java:132)\r\n\tat test.java.steps.CommonYandexMarketPageSteps.checkFindProduct(CommonYandexMarketPageSteps.java:101)\r\n\tat ✽.То отображен продукт с искомым наименованием(checkProductsNotebook.feature:23)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027product-card__header\u0027]//h1[contains(text(),\u0027Lenovo IdeaPad 100 15\u0027)]\"}\n  (Session info: chrome\u003d52.0.2743.116)\n  (Driver info: chromedriver\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 24 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027WIN-ESJSNAH4946\u0027, ip: \u0027137.74.158.243\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b), userDataDir\u003dC:\\Users\\836D~1\\AppData\\Local\\Temp\\2\\scoped_dir4880_8380}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d52.0.2743.116, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ab2a5c60c4c334a429b0fe141e76ed46\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027product-card__header\u0027]//h1[contains(text(),\u0027Lenovo IdeaPad 100 15\u0027)]}\r\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:137)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:85)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:61)\r\n\tat com.sun.proxy.$Proxy17.waitUntil(Unknown Source)\r\n\tat main.java.page.CommonYandexMarketPage.checkFindProduct(CommonYandexMarketPage.java:132)\r\n\tat test.java.steps.CommonYandexMarketPageSteps.checkFindProduct(CommonYandexMarketPageSteps.java:101)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.write("\u003cb\u003eДействия после завершения сценария\u003c/b\u003e");
formatter.write("\u003cb\u003eСкриншот\u003c/b\u003e");
formatter.write("Скриншот");
formatter.embedding("image/png", "embedded13.png");
formatter.write("\u003cb\u003eСценарий завершен с ошибкой\u003c/b\u003e");
formatter.after({
  "duration": 4504886515,
  "status": "passed"
});
});
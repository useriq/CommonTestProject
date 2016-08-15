$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1checkProducts.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 2,
  "name": "Проверка информации по всем продуктам",
  "description": "",
  "id": "проверка-информации-по-всем-продуктам",
  "keyword": "Функционал"
});
formatter.before({
  "duration": 180300848,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Проверка информации по всем продуктам",
  "description": "",
  "id": "проверка-информации-по-всем-продуктам;проверка-информации-по-всем-продуктам",
  "type": "scenario",
  "keyword": "Сценарий"
});
formatter.step({
  "line": 4,
  "name": "запущен тестовый сервис",
  "keyword": "Пусть "
});
formatter.step({
  "line": 5,
  "name": "получена информация по продуктам",
  "keyword": "И "
});
formatter.step({
  "line": 6,
  "name": "открыт браузер",
  "keyword": "Когда "
});
formatter.step({
  "line": 7,
  "name": "введен url веб-приложения",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "открыта стартовая страница",
  "keyword": "То "
});
formatter.step({
  "line": 9,
  "name": "\"текущие условия\" соответствуют \"бесплатному\" продукту",
  "keyword": "И "
});
formatter.step({
  "line": 10,
  "name": "\"новые условия\" соответствуют \"бесплатному\" продукту",
  "keyword": "И "
});
formatter.step({
  "line": 11,
  "name": "\"новые условия\" по всем продуктам верны",
  "keyword": "И "
});
formatter.step({
  "line": 12,
  "name": "перемещен слайдер на \"бесплатный\" продукт",
  "keyword": "Когда "
});
formatter.step({
  "line": 13,
  "name": "\"новые условия\" соответствуют \"бесплатному\" продукту",
  "keyword": "И "
});
formatter.match({
  "location": "CommonYotaSteps.startApp()"
});
formatter.write("Сообщения");
formatter.write("\u003cb\u003e------ Запуск сервиса приложения -------\u003c/b\u003e");

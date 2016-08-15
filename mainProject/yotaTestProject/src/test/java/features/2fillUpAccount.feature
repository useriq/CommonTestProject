# language: ru
Функционал: Пополнение счета
  Сценарий: Пополнение счета на положительную сумму
    Пусть запущен тестовый сервис
    Когда открыт браузер
    И введен url веб-приложения
    То открыта стартовая страница
    Когда введено "положительное целое число" в поле "Пополнить счет"
    И нажата кнопка "Пополнить счет"
    То баланс изменился на сумму пополнения

  Сценарий: Пополнение счета на положительную сумму
    Пусть запущен тестовый сервис
    Когда открыт браузер
    И введен url веб-приложения
    То открыта стартовая страница
    Когда пополнен счет на "сумму достаточную выполнения для сценария"
    То баланс изменился на сумму пополнения
    Когда введено "отрицательное целое число" в поле "Пополнить счет"
    И нажата кнопка "Пополнить счет"
    То баланс изменился на сумму пополнения


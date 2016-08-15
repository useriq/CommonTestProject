package main.java.page;

import main.java.Log;
import test.java.CommonTest;

import org.openqa.selenium.By;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import static com.codeborne.selenide.Selenide.$;


/**
 * /**
 * Общие методы для всех страниц
 * Created by Администратор on 13.08.2016.
 */
public class CommonPage {

    protected CommonTest test;
    public static final long TIMEOUT_DEFAULT = 60000;

    protected static By by;        //Выражение для проверки та ли это страница
    protected static String name;  //Имя страницы

    public CommonPage(CommonTest _test) {
        test = _test;
    }

    public boolean isThatIt() {
        Log.Info("Проверяем, что это страница [" + name + "] ... ");
           //test.pushTimeout(timeout);
        if (by == null) {
            Log.Error("Локатор страницы не определен!");
            //     test.popTimeout();
            return false;
        }
        if (($(by)).exists()) {
            Log.Info("Это она", true);
            //    test.popTimeout();
            return true;
        } else {Log.Error("Это не она!", true);
            //   test.popTimeout();
            return false;
        }

    }

    public boolean isThatIt(By newBy, String newName) {
        Log.Info("Проверяем, что это страница [" + newName + "] ... ");
        //test.pushTimeout(timeout);
        if (newBy == null) {
            Log.Error("Локатор страницы не определен!");
            //     test.popTimeout();
            return false;
        }
        if (($(newBy)).exists()) {
            Log.Info("Это она", true);
            //    test.popTimeout();
            return true;
        } else {Log.Error("Это не она!", true);
            //   test.popTimeout();
            return false;
        }

    }

}

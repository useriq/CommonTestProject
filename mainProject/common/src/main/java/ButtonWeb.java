package main.java;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import static com.codeborne.selenide.Selenide.$;

/**
 * Created by Администратор on 13.08.2016.
 */
public class ButtonWeb extends ElementWeb{

    public ButtonWeb(By locator, String name) {
        super("button");
        this.name = name;
        object = $(locator);
        if (this.object == null) {
            Log.Error("Кнопка " + name + " не найдена");
        } else {
            Log.Info("\u001B[36m" + "Кнопка " + name + " найдена" + "\u001B[0m");
        }
    }

    public String getName() {
        return name;
    }

    public WebElement getButton() {
        return object;
    }

    private void setButton(WebElement button) {
        this.object = button;
    }



    @Override
    public void click() {
        if (getObject() == null) {
            Log.Error("Попытка кликнуть на неинициализированную кнопку " + name);
            throw new NoSuchElementException("Объект не получен");
        }

        Actions actions = null;
        try {
            actions = new Actions(WebDriverManager.driver(WebDriverManager.getCurrentDriverType()));
        } catch (Exception e) {
            Log.Error("Ошибка передачи комманды на веб драйвер");
            e.printStackTrace();
        }
        actions.click(getButton()).build().perform();

        Log.Info("Нажатие на кнопку " + name);
    }




}

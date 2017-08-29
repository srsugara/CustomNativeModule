package com.customnativemodule;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class HelloManager extends ReactContextBaseJavaModule {
    public HelloManager(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @Override
    public String getName(){
        return "HelloManager";
    }

    @ReactMethod
    public void greetUser(String name, Boolean isAdmin, Callback callback){
        System.out.println("Username : "+name+", Administrator : "+(isAdmin ? "Yes" : "No"));
        String greeting = "Welcome "+name+", you "+(isAdmin ? "are" : "are not")+" admin";

        callback.invoke(greeting);
    }
}
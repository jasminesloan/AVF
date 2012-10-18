package com.example.testappdroid;

import android.os.Bundle;

import android.view.Menu;
import org.apache.cordova.*;

public class TestAppDroid extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_test_app_droid, menu);
        return true;
    }
}

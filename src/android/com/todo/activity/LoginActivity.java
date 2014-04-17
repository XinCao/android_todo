package android.com.todo.activity;

import android.os.Bundle;
import org.apache.cordova.DroidGap;

/**
 *
 * @author caoxin
 */
public class LoginActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        super.loadUrl("file:///android_asset/www/views/login.html");
        super.loadUrl("file:///android_asset/www/views/layout.html");
    }
}
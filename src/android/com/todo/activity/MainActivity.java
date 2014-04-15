package android.com.todo.activity;

import android.app.Activity;
import android.com.todo.R;
import android.os.Bundle;

public class MainActivity extends Activity {

    /**
     * Called when the activity is first created.
     *
     * @param savedInstanceState
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.main);
    }
}
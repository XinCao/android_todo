package android.com.todo.activity;

import android.app.Activity;
import android.com.todo.R;
import android.os.Bundle;

/**
 *
 * @author caoxin
 */
public class ScheduleActivity extends Activity {

    /**
     * Called when the activity is first created.
     * @param icicle
     */
    @Override
    public void onCreate(Bundle icicle) {
        super.onCreate(icicle);
        this.setContentView(R.layout.main);
    }
}

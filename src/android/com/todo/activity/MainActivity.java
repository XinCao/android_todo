package android.com.todo.activity;

import android.app.Activity;
import android.com.todo.R;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

public class MainActivity extends Activity {

    private Button submit;

    /**
     * Called when the activity is first created.
     *
     * @param savedInstanceState
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.main);
        submit = (Button) this.findViewById(R.id.btn_id);
        submit.setOnClickListener(new ButtonListener());
    }

    private class ButtonListener implements OnClickListener {

        public void onClick(View view) {
            Intent intent = new Intent();
            intent.putExtra("to", "go here!");
            intent.setClass(MainActivity.this, ScheduleActivity.class);
            MainActivity.this.startActivity(intent);
        }
    }
}
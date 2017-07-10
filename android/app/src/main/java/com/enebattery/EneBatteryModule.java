package com.enebattery;

import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by amanda on 10/07/17.
 */

public class EneBatteryModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext rContext;

    public EneBatteryModule(ReactApplicationContext context) {
        super(context);

        rContext = context;
    }

    @Override
    public String getName() {
        return "EneBattery";
    }

    @ReactMethod
    public void getBatteryPercentage(Callback successCallback) {
        IntentFilter iFilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
        Intent batteryStatus = rContext.registerReceiver(null, iFilter);

        int level = batteryStatus != null ? batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) : -1;
        int scale = batteryStatus != null ? batteryStatus.getIntExtra(BatteryManager.EXTRA_SCALE, -1) : -1;

        float batteryPct = level / (float) scale;

        int batteryLevel = (int) (batteryPct * 100);

        successCallback.invoke(batteryLevel);
    }
}

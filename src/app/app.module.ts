import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {StatStepPageModule} from './Pages/stat-step/stat-step.module';
import {StatDistPageModule} from './Pages/stat-dist/stat-dist.module';
import {SettingsPageModule} from './Pages/settings/settings.module';
import {StatKalPageModule} from './Pages/stat-kal/stat-kal.module';

import {Gyroscope, GyroscopeOrientation, GyroscopeOptions} from '@ionic-native/gyroscope/ngx';
import {DeviceMotion, DeviceMotionAccelerationData} from '@ionic-native/device-motion/ngx';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Device} from '@ionic-native/device/ngx';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, StatStepPageModule, StatDistPageModule,
        SettingsPageModule, StatKalPageModule, HttpClientModule ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        Geolocation,
        Device,
        Gyroscope,
        DeviceMotion,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

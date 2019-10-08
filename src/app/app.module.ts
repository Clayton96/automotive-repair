import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { DriverComponent } from './driver/driver.component';
import { CarComponent } from './car/car.component';
import { TruckComponent } from './truck/truck.component';
import { SuvComponent } from './suv/suv.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';


@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    BookingComponent,
    AdministratorComponent,
    DriverComponent,
    CarComponent,
    TruckComponent,
    SuvComponent,
    MechanicComponent,
    EquipmentComponent,
    WorkshopComponent

    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

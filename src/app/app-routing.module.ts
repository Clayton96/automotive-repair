import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent} from './booking/booking.component';
import { AdministratorComponent} from './administrator/administrator.component';
import { CarComponent} from './car/car.component';
import { DriverComponent} from './driver/driver.component';
import { EquipmentComponent} from './equipment/equipment.component';
import { HomeComponent} from './home/home.component';
import { MechanicComponent} from './mechanic/mechanic.component';
import { SuvComponent} from './suv/suv.component';
import { TruckComponent} from './truck/truck.component';
import { WorkshopComponent} from './workshop/workshop.component';


import { from } from 'rxjs';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'booking', component: BookingComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

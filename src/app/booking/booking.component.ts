import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {


  //getting the objects from the API and storing them in the brew
  brews: Object;

  constructor(private http: HttpService) { }

  ngOnInit() {

       this.http.myMethod();
       this.http.getBeer().subscribe(data => {
         this.brews = data;
         console.log(this.brews);
        
        });

  }

}

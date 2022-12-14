import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit{

    constructor(private passengerService:PassengerDashboardService ){}
    
    passengers: Passenger[];

    ngOnInit(){
      this.passengerService
      .getPassengers()
      .subscribe(data => this.passengers = data)
    }

    handleRemove(event: Passenger){
      this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger)=>{
        this.passengers = this.passengers.filter((passenger: Passenger)=>{
          return passenger.id !== event.id
        })
      })
      
    }

    handleEdit(event: Passenger){
      this.passengerService
      .updatePassenger(event)
      .subscribe((data:Passenger)=>{
        this.passengers = this.passengers.map((passenger: Passenger)=>{
          if(passenger.id === event.id){
            passenger = Object.assign({}, passenger, event)
          }
          return passenger;
        });
      })
            
    }

}
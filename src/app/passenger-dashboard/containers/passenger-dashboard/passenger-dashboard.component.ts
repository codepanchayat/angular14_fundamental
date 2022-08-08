import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit{
    
    passengers: Passenger[]

    ngOnInit(){

      console.log("OnInit")

      this.passengers = [
        {
          id: 1,
          fullname: "Stephan",
          checkedIn: true,
          checkedInDate: 1599612508000,
          children: null
        },
    
        {
          id: 2,
          fullname: "Rose",
          checkedIn: false,
          children: [{name: 'Ted', age: 12}, {name: 'Tod', age: 15}]
        },
    
        {
          id: 3,
          fullname: "Rose 2",
          checkedIn: true,
          checkedInDate: 1531629930000,
          children: null
        },
    
        {
          id: 4,
          fullname: "James",
          checkedIn: false,
          children: [{name: 'Jessica', age: 1}]
        },
    
        {
          id: 5,
          fullname: "Ajay",
          checkedIn: true,
          checkedInDate: 1292136132000,
          children: null
        },
      ] 
    }

    handleRemove(event: Passenger){
      this.passengers = this.passengers.filter((passenger: Passenger)=>{
        return passenger.id !== event.id
      })
    }

    handleEdit(event: Passenger){
      this.passengers = this.passengers.map((passenger: Passenger)=>{
        if(passenger.id === event.id){
          passenger = Object.assign({}, passenger, event)
        }
        return passenger;
      });

      console.log(this.passengers)

      
    }

}
import { Passenger } from "./models/passenger.interface";
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class PassengerDashboardService{
    constructor(private http:HttpClient){
      console.log(http)
    }

    getPassengers(): Passenger[]{
        return [
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
}
import { Passenger } from "./models/passenger.interface";
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

const PASSENGER_API: string = "http://localhost:3000/passengers"

@Injectable()
export class PassengerDashboardService{


    constructor(private http:HttpClient){}

    getPassengers(): Observable<Passenger[]>{
      return this.http
      .get<Passenger[]>(PASSENGER_API);
    }
}
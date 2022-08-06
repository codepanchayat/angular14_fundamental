import { Component, Input } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passnger-detail.component.scss']
})

export class PassengerDetailComponent{
    
    @Input()
    detail: Passenger
}
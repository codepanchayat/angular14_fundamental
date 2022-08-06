import { Component, Input} from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-count',
    templateUrl: './passenger-count.component.html',
    styleUrls: ['./passnger-count.component.scss']
})

export class PassengerCountComponent{

    @Input()
    items: Passenger[];

    checkedInCount(): number {
        if(!this.items){
            return 0;
        };

        return this.items.filter((passenger: Passenger) =>passenger.checkedIn).length
    }
}
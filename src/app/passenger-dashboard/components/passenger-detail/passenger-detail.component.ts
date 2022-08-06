import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passnger-detail.component.scss']
})

export class PassengerDetailComponent{

    editing: boolean = false;
    
    @Input()
    detail: Passenger

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter()

    onNameChange(value: string){
        this.detail.fullname = value;
    }

    toggleEdit(){
        if(this.editing){
            this.edit.emit(this.detail)
        }
        this.editing = !this.editing;
    }

    onRemove(){
        this.remove.emit(this.detail);
    }
}
import { Component, Input,Output, OnChanges, EventEmitter } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passnger-detail.component.scss']
})

export class PassengerDetailComponent implements OnChanges{

    editing: boolean = false;
    
    
    @Input()
    detail: Passenger

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter()

    ngOnChanges(changes){
        if(changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue)
        }
    }

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
import { VIPTicket } from "./classTicket.js";

export class Passenger{
    constructor(Name,IDnumber,AmountOfMoney){
        this.Name = Name;
        this.IDnumber = IDnumber;
        this.AmountOfMoney = AmountOfMoney;
    }
}

export class StudentPassenger extends Passenger{
    constructor(Name,IDnumber,AmountOfMoney,universityName){
        super(Name,IDnumber,AmountOfMoney)
        this.universityName = universityName;
    }
    calculatePrice(ticket){
        if(ticket instanceof VIPTicket) {
            return ticket.Price;
        }
        return ticket.Price *0.9
    }
}


export class RegularPassenger extends Passenger{
    constructor(Name,IDnumber,AmountOfMoney,Workplace,airportEmployee){
        super(Name,IDnumber,AmountOfMoney)
        this.Workplace=Workplace;
        this.airportEmployee = airportEmployee;
    }
    calculatePrice(ticket){
        if (!this.airportEmployee){
            return ticket.Price;
        }
        if(ticket instanceof VIPTicket){
            ticket.Price *0.85;
        }else{
            ticket.Price *0.8;
        }
    }
}
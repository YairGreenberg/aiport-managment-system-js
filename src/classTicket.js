
export class Ticket {
    constructor(Price) {
        this.ticketNumber = Math.floor(Math.random() * 1000000);
        this.Price = Price;
        this.OwnerName = null;
    }
}

export class RegularTicket {
    constructor(Price){
        this.ticketNumber = Math.floor(Math.random() * 1000000);
        this.Price = Price;
        this.OwnerName = null;
    }
};


export class VIPTicket extends RegularTicket{
    static BenefitsList = ["Free alcohol","Free food ","Hot towels"]
    constructor( Price){
        super( Price)
        this.BenefitsList =VIPTicket.BenefitsList;
    }
}
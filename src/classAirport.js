import { VIPTicket } from "./classTicket.js";

export class Airport {
  constructor() {
    this.FlightsInAirport = [];
  }
  buyTicket(passenger, flight, wantVip = false) {
    const ticket = flight.ticket.find(
      (tik) =>
        !tik.OwnerName &&
        (wantVip ? tik instanceof VIPTicket : !(tik instanceof VIPTicket))
    );
    if (!ticket) {
      return false;
    }
    const finalPrice = passenger.calculatePrice(ticket);
    if (passenger.AmountOfMoney < finalPrice) {
      return false;
    }
    passenger.AmountOfMoney -= finalPrice;
    ticket.OwnerName = passenger.Name;
    return true;
  }
}

import { RegularTicket, VIPTicket } from "./classTicket.js";
export class Flight {
  static TicketList = [];
  constructor(
    flightName,
    airline,
    flightNumber,
    maximumNumberOfPassengers,
    regularTicketPrice,
    VIPTicketPrice
  ) {
    this.flightName = flightName;
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.maximumNumberOfPassengers = maximumNumberOfPassengers;
    this.regularTicketPrice = regularTicketPrice;
    this.VIPTicketPrice = VIPTicketPrice;
    this.TicketList = Flight.TicketList;
    const vipcount = Math.floor(maximumNumberOfPassengers * 0.1);
    for (let i = 0; i < maximumNumberOfPassengers; i++) {
      if (i < vipcount) {
        this.TicketList.push(new VIPTicket(VIPTicketPrice));
      } else {
        this.TicketList.push(new RegularTicket(regularTicketPrice));
      }
    }
  }

  createFlight(flight) {
    if (!(flight instanceof Flight)) {
      throw new Error("is not instance Flight");
    } else {
      const vip = flight.maximumNumberOfPassengers * 0.1;
      const regular = flight.maximumNumberOfPassengers * 0.9;
      for (let i = 0; i < RegularTicket; i++) {
        flight.TicketList.push(new RegularTicket(flight.regularTicketPrice));
      }
      for (let i = 0; i < VIPTicket; i++) {
        flight.TicketList.push(new VIPTicket(flight.VIPTicketPrice));
      }
    }
    return flight;
  }
}

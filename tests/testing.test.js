import test from 'node:test';
import assert from 'node:assert/strict'
import { Flight } from '../src/classFlight.js';
import { Airport } from '../src/classAirport.js';
import { StudentPassenger } from '../src/classPassenger.js';
import { RegularPassenger } from '../src/classPassenger.js';
test('Airport System Tests',async(t)=>{
     await t.test('Should fail if passenger has insufficient funds', () => {
        const flight = new Flight("London", "ELAL", "LY123", 10, 1000, 2000);
        const poorStudent = new StudentPassenger("Dani", "1", 100, "Technion"); 
        const system = new Airport();
        
        const result = system.buyTicket(poorStudent, flight, false);
        assert.strictEqual(result, false);
    });
    await t.test('Should succeed and apply correct discount for Student', () => {
        const flight = new Flight("London", "ELAL", "LY123", 10, 1000, 2000);
        const student = new StudentPassenger("Dani", "1", 1000, "Technion");
        const system = new Airport();
        
        const result = system.buyTicket(student, flight, false);
        
        assert.strictEqual(result, true);
        assert.strictEqual(student.money, 100);
        const boughtTicket = flight.tickets.find(t => t.ownerName === "Dani");
        assert.ok(boughtTicket);
    });
    test('Should apply 15% discount for VIP if Regular Passenger knows employee', () => {
        const flight = new Flight("Paris", "AirFrance", "AF44", 10, 1000, 2000);
        const luckyPassenger = new RegularPassenger("Yossi", "2", 3000, "Google", true);
        const system = new Airport();
        
        const result = system.buyTicket(luckyPassenger, flight, true); 
        
        assert.strictEqual(result, true);
        assert.equal(luckyPassenger.money, 1300);
    });
});



import {Room, rooms} from "./room";

export class Booking {
    constructor(public id: number, public roomId:number, public date:string, public bookedBy: string) {
    }
}

export let bookings: Booking[] = [];

export function initBooking() {
    bookings = [];
}
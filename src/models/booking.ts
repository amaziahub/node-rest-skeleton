export class Booking {
    constructor(public id: number, public roomId:number, public date:string, public bookedBy: string) {
    }
}

export let bookings: Booking[] = [];
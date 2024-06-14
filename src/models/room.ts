export class Room {
    constructor(public id: number, public name: string) {}
}

export let rooms: Room[] = [
  new Room(1, 'Room A'),
  new Room(2, 'Room B'),
  new Room(3, 'Room C'),
  new Room(4, 'Room D')
];
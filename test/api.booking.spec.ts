import request from "supertest";

import app from "../src/app";

beforeEach(async () => {
	await request(app).get("/api/bookings/reset");
})

describe("Post /book", () => {

	it("Book a room", async () => {
		const response  = await request(app).post("/api/bookings/book").send({
			roomId: 2,
			date: '2024-06-11',
			bookedBy: 'Julia'
		});
		expect(response.status).toBe(204);
	});

	it("Should return 404 given non-existing room", async () => {
		const response  = await request(app).post("/api/bookings/book").send({
			roomId: 65465,
			date: '2024-06-11',
			bookedBy: 'Julia'
		});
		expect(response.status).toBe(404);
		expect(response.text).toBe("Room not found");
	});

	it("Should return 400 given book already booked room", async () => {
		const response  = await request(app).post("/api/bookings/book").send({
			roomId: 3,
			date: '2024-06-11',
			bookedBy: 'Julia'
		});
		expect(response.status).toBe(204);

		const second_response  = await request(app).post("/api/bookings/book").send({
			roomId: 3,
			date: '2024-06-11',
			bookedBy: 'Amazia'
		});
		expect(second_response.status).toBe(400);
		expect(second_response.text).toBe("Room is already booked for this date");
	});

});

describe("Get /available", () => {

	it("should return available rooms for specific date", async () => {
		await request(app).post("/api/bookings/book").send({
			roomId: 2,
			date: '2024-06-11',
			bookedBy: 'Julia'
		});

		const response  = await request(app).get("/api/bookings/available?date=2024-06-11");
		expect(response.status).toBe(200);
		expect(response.body.length).toBe(3);
	});

});

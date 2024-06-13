import request from "supertest";

import app from "../src/app";

describe("Get /available", () => {
	it("should return available rooms", async () => {
		const response  = await request(app).get("/api/bookings/available");
		expect(response.status).toBe(200);
		expect(response.body.length).toBe(4);
		expect(response.body[0].name).toBe("Room A");
	});

	it("book a new room", async () => {
		const response  = await request(app).post("/api/bookings/book").send({
			roomId: 2,
			date: '2024-06-11',
			bookedBy: 'Julia'
		});
		expect(response.status).toBe(204);
	});

	it("return 404 on non-existing room", async () => {
		const response  = await request(app).post("/api/bookings/book").send({
			roomId: 65465,
			date: '2024-06-11',
			bookedBy: 'Julia'
		});
		expect(response.status).toBe(404);
		expect(response.text).toBe("Room not found");
	});

	it("fail on book already booked room", async () => {
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

	it("get all rooms", async () => {
		const response  = await request(app).get("/api/rooms");
		expect(response.status).toBe(200);
		expect(response.body.length).toBe(4);
	});

});
import request from "supertest";
import app from "../src/app";

describe("Get /all rooms", () => {

	it("get all rooms", async () => {
		const response  = await request(app).get("/api/rooms");
		expect(response.status).toBe(200);
		expect(response.body.length).toBe(4);
	});
});
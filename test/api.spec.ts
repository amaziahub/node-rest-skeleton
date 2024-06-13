import request from "supertest";

import app from "../src/app";

describe("Get /available check what rooms are available", () => {
	it("should return all rooms", () => {
		return request(app).get("/api").expect(200);
	});
});
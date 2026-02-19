const request = require("supertest");
const app = require("../src/app");

describe("API Integration Test", () => {
  test("GET /api/health returns OK", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("OK");
  });

  test("GET /api/message returns message", async () => {
    const res = await request(app).get("/api/message");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello from backend 🚀");
  });
});

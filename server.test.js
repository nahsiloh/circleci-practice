const request = require("supertest");
const app = require("./app");

describe("Hello World", () => {
  it("/GET should return hello world", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World!");
  });
});

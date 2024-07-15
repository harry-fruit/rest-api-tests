import request from "supertest";
import app from "./app";

describe("GET /items/:id", () => {
  it("should return item by id", async () => {
    const response = await request(app).get("/items/1");
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: 1,
      uniqueCode: "item-1",
      name: "Item 1",
      description: "Item 1 description",
    });
  });
});


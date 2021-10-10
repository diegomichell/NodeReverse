import request from "supertest";
import app from "../../src/app";

describe("Strings routes", () => {

  it("Should create task", async () => {
    const inputString = 'Canada';
    const expectedOutput = {
      data: 'adanaC'
    };

    await request(app)
      .post("/data")
      .send({
        data: inputString
      })
      .expect(expectedOutput);
  });

});

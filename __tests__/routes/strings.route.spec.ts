import request from "supertest";
import app from "../../src/app";

describe("Strings routes", () => {

  it("Should reverse string with success", async () => {
    const inputString = 'Canada';
    const expectedOutput = {
      data: 'adanaC'
    };

    await request(app)
      .post("/data")
      .send({
        data: inputString
      })
      .expect(200)
      .expect(expectedOutput);
  });

  it("Should return bad request if missing data param", async () => {
    const expectedOutput = {
      error: '"data" field is required',
    };

    await request(app)
      .post("/data")
      .set('Content-Type',  'application/json')
      .send()
      .expect(400)
      .expect(expectedOutput);
  });

});

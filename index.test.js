const app = require("./index");
const mongoose = require("mongoose");
const supertest = require("supertest");
const {MongoClient} = require('mongodb');
const uri = process.env.MONGODB_URL

describe('/students', () => {
    let connection;
    let student;
    const mockUser = {
        name: 'John Doe',
        roll: 'Student',
        registration: "enrolled",
        subjects: [ "math", "english" ]
    };

    beforeAll(async () => {
        connection = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db(globalThis.__MONGO_DB_NAME__);
        student = db.collection('students');
        await student.insertOne(mockUser);
    });

    afterAll(async () => {
        student.deleteMany({})
        await connection.close();
    });


// This passes because 1 === 1
    it('Testing to see if Jest works', () => {
        expect(1).toBe(1)
    })

    fit("GET /students", async () => {
        const response = await supertest(app).get('/students');
        expect(JSON.parse(response["text"])).toEqual(mockUser);
    });

    // test("POST /createStudent", async () => {
    //     console.log = jest.fn();
    //     expect(console.log).toHaveBeenCalledWith('GET students received');
    // });
});

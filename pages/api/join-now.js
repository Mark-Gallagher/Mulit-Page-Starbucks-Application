// /api/sign-in.js
//this code will fetch the user's email and password from the database and then authenticate the user.
import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
    
        //object destructuring
        //const { Firstname, Lastname, Username, Password } = data;
        
        const client = await MongoClient.connect(
          "mongodb+srv://mark-gallagher:OCh344hYXfWWHPBQ@cluster1.u07zyij.mongodb.net/joinNow?retryWrites=true&w=majority"
        );
        const db = client.db();

        const joinNowCollection = db.connection("joinNow");
        const result = await joinNowCollection.insertOne(data);

        console.log(result);
        client.close();

        res.status(201).json({message: "User Account Created!"});
    }
}

export default handler;
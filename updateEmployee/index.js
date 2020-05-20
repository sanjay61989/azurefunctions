const createMongoClient = require('../shared/mongo');
var ObjectId = require('mongodb').ObjectID;
module.exports = async function (context, req) {
    const { db, connection } = await createMongoClient();
    const employeesCollection = db.collection(process.env.collectionName);
    try {
        if (!(req.body.id && req.body.name && req.body.age)) {
            throw "error";
        }
        await employeesCollection.updateOne(
            {
                _id: new ObjectId(req.body.id)
            },
            {
                $set: { "name": req.body.name, "age": req.body.age }
            });
        connection.close();
        context.res = {
            status: 200,
            body: {
                success: true,
                message: "Successfully updated"
            }
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Error creating a new employee' + error
        }
    }
};
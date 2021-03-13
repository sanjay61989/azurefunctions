const createMongoClient = require("../shared/mongo")
var ObjectId = require("mongodb").ObjectID
module.exports = async function (context, req) {
    const { db, connection } = await createMongoClient();
    const employeesCollection = db.collection(process.env.collectionName);
    try {
        if (!(req.body.id)) {
            throw "error";
        }
        await employeesCollection.remove({ _id: new ObjectId(req.body.id) });
        connection.close();
        context.res = {
            status: 200,
            body: {
                success: true,
                message: "Successfully deleted"
            }
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Error Deleting a employee' + error
        }
    }
};
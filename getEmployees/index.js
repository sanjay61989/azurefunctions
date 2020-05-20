const createMongoClient = require('../shared/mongo');

module.exports = async function (context, req) {
    const { db, connection } = await createMongoClient();
    const employeesCollection = db.collection(process.env.collectionName);
    try {
        var c = []
        let employees = await employeesCollection.find().toArray();
        connection.close();
        context.res = {
            status: 201,
            body: employees
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Error creating a new Dish' + error
        }
    }
};
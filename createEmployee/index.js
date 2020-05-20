const createMongoClient = require('../shared/mongo');

module.exports = async function (context, req) {
    const { db, connection } = await createMongoClient();
    const employeesCollection = db.collection('employees'
    );
    try {
        if (!(req.body.name && req.body.age)){
            throw error;
        }
        await employeesCollection.insertOne({ "name": req.body.name, "age": req.body.age });
        connection.close();
        context.res = {
            status: 200,
            body: {
                success: true,
                message: "Successfully created"
            }
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Error creating a new employee' + error
        }
    }
};
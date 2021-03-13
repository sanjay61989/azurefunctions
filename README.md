# azurefunctions

This project is about how to create basic azure function and run locally
1.To run first run command "npm install" in current directory
2.Sign up for free mongo db database
3.Add these below environment variables or create a new file name as .env
  a.user
  b.password
  c.collectionName
  d.dbName
  e.url
4.Run commmand npm start


## Sample data for createEmployee: [POST] http://localhost:7071/api/createEmployee
``` json
{
	"name":"d",
	"age":"22"
}
```

## Sample data for updateEmployee: [PUT] http://localhost:7071/api/updateEmployee
``` json
{
	"id":"604cdd5d5aba3c0c14cf9b62", //get the _id from (getEmployees: [GET] http://localhost:7071/api/getEmployees)
	"name":"deepak",
	"age":"56"
}
```

## Sample data for deleteEmployee: [DELETE] http://localhost:7071/api/deleteEmployee
``` json
{
	"id":"5ec53072e7ab993cf8c65454" //get the _id from (getEmployees: [GET] http://localhost:7071/api/getEmployees)
}
```
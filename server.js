const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOption = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOption));

// request of content type application/json
app.use(bodyParser.json());

// request of content tyep application/x-www-form-urlcoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route application working chck 
app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to pos api'
    })
})

const db = require('./app/model');

// router
const categoriesRoute = require('./app/router/category.route');
const customerRoute = require('./app/router/customer.route');
const employeeRoute = require('./app/router/employee.route');


app.use('/api/v1/category', categoriesRoute);
app.use('/api/v1/customers', customerRoute);
app.use('/api/v1/employee', employeeRoute);


// set port listing for request
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
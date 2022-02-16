const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOption = {
    origin: 'http://localhost:4300/',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

app.use(cors(corsOption));
// app.use(cors())

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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



const db = require('./app/model');

// router
const categoriesRoute = require('./app/router/category.route');
const customerRoute = require('./app/router/customer.route');
const employeeRoute = require('./app/router/employee.route');
const jobRoute = require('./app/router/job.route');
const locationRoute = require('./app/router/location.route');
const mangerRoute = require('./app/router/manager.route');
const orderRoute = require('./app/router/order.route');
const productsRoute = require('./app/router/product.route');
const userRoute = require('./app/router/user.route');
const roleRoute = require('./app/router/role.route');
const supplierRoute = require('./app/router/supplier.route');



app.use('/api/v1/category', categoriesRoute);
app.use('/api/v1/customers', customerRoute);
app.use('/api/v1/employee', employeeRoute);
app.use('/api/v1/jobs', jobRoute);
app.use('/api/v1/location', locationRoute);
app.use('/api/v1/manager', mangerRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/products', productsRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/role', roleRoute);
app.use('/api/v1/supplier', supplierRoute);



// set port listing for request
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        min: dbConfig.min,
        max: dbConfig.max,
        acquire: dbConfig.acquire,
        idle: dbConfig.idle
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categories = require('./categories.model')(sequelize, Sequelize);
db.customers = require('./customer.model')(sequelize, Sequelize);
db.employees = require('./employees.model')(sequelize, Sequelize);
db.job = require('./job.model')(sequelize, Sequelize);
db.location = require('./location.model')(sequelize, Sequelize);
db.manager = require('./manager.model')(sequelize, Sequelize);
db.order = require('./order.model')(sequelize, Sequelize);
db.order_detials = require('./order_details.model')(sequelize, Sequelize);
db.product = require('./product.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);
db.supplier = require('./supplier.model')(sequelize, Sequelize);
db.type = require('./type.model')(sequelize, Sequelize);
db.users = require('./users.model')(sequelize, Sequelize);


db.role.hasOne(db.users);
db.users.belongsTo(db.role);


db.sequelize.sync({ force: false }).then(() => {
    console.log('Drop And RE-SYNC DB')
})



module.exports = db;
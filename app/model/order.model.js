const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define('orders', {
        order_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncreament: true
        },
        reference: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        total: {
            type: Sequelize.DECIMAL(10, 2)
        },
        create_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        update_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false
    })
    return Orders;
}
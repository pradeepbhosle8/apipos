const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Order_details = sequelize.define('order_details', {
        order_id: {
            type: Sequelize.INTEGER
        },
        product_id: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.INTEGER
        },
        subtotal: {
            type: Sequelize.INTEGER
        },
        create_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updat_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }

    }, {
        timestamps: false
    })
    return Order_details;
}
const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define('products', {
            name: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.INTEGER
            },
            category_id: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
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
        },

        {
            timestamps: false
        })
    return Products;
}
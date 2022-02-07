const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Supplier = sequelize.define('suppliers', {
        company_name: {
            type: Sequelize.STRING
        },
        location_id: {
            type: Sequelize.INTEGER
        },
        phone_number: {
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
    }, {
        timestamps: false
    });

    return Supplier;
}
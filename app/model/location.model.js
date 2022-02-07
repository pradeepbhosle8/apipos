const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Locations = sequelize.define('locations', {
        location_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncreament: true
        },
        province: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        street: {
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

    return Locations;
}
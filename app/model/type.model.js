const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Types = sequelize.define('types', {
            type: {
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
        });

    return Types;
}
module.exports = (sequelize, Sequelize) => {
    const Customers = sequelize.define('customers', {
        customer_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING,
        },
        last_name:{
            type: Sequelize.STRING
        },
        phone_number:{
            type: Sequelize.STRING
        },
        create_at:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        update_at:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },
        {
            timestamps: false
        }
    )
    return Customers;
}
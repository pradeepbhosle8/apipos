module.exports = (sequelize, Sequelize) => {
    const Employees = sequelize.define('employees', {
        employee_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING,
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
        job_id: {
            type: Sequelize.INTEGER,

        },
        hired_date: {
            type: Sequelize.DATE
        },
        location_id: {
            type: Sequelize.INTEGER
        },
        create_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        udate_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }

    }, {
        timestamps: false
    })

    return Employees;
}
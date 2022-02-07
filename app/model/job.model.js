module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define('jobs', {
        job_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        job_title: {
            type: Sequelize.STRING
        },
        salary: {
            type: Sequelize.DECIMAL(10, 2)
        },
        login_time: {
            type: Sequelize.DATE
        },
        logout_time: {
            type: Sequelize.DATE
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
    return Job;
}
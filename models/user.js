module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        //these are columns in the table
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true //only one email allowed
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return User
}
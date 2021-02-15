module.exports = (sequelize, DataTypes) => {
    const Bar = sequelize.define('bar', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner_id: {
            type: DataTypes.INTEGER,
        }
    })
    return Bar;
};
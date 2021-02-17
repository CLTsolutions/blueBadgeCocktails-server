module.exports = (sequelize, DataTypes) => {
    const Cocktail = sequelize.define('cocktail', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alcoholic: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        glassType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: false
        },
        instructions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        iced: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        shaken: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        stirred: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
    })
    return Cocktail;
};
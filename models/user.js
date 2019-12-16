module.exports = function (sequelize, DataTypes) {

    User = sequelize.define("user", {  //User model

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        firstname: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        lastname: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        dateOfBirth: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        isAdmin: {
            type: DataTypes.BOOLEAN
        }
    })
    return User;
};
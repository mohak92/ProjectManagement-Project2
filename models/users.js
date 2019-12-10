module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        task_id: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                  len: [1,8]
              }
          },
          project_id: {
              type: DataTypes.TEXT,
              allowNull: false,
              validate: {
                  len: [1,10]
              }
          },
          email: {
              type: DataTypes.STRING,
              defaultValue: "Personal"
          },
          password: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        first_name: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        last_name: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        dateOfBirth: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        isAdmin: {
            type: DataTypes.BOOLEAN
        }
      });
      return User;
  };
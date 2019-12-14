module.exports = function (sequelize, DataTypes) {
    this.Project = sequelize.define("Project", {        //Project model
        projectId: {
            type: DataTypes.INTEGER

        },

        // userId: {
        //     type: DataTypes.STRING           <<<Hard coded column without associations>>>

        // },
        projectName: {
            type: DataTypes.STRING

        },
        dueDate: {
            type: DataTypes.DATE

        },
        projectStage: {
            type: DataTypes.STRING
        },
    }),
    this.Task = sequelize.define("Task", {      //Tasks model
        // userId: {
        //     type: DataTypes.INTEGER
        // },
        // projectId: {                           <<<Hard coded columns without associations>>>
        //     type: DataTypes.INTEGER
        // },
        taskName: {
            type: DataTypes.STRING
        },
        taskDueDate: {
            type: DataTypes.DATE
        }
    }),
    this.User = sequelize.define("User", {
        // task_id: {
        //       type: DataTypes.STRING,
        //       allowNull: false,
        //       validate: {
        //           len: [1,8]             <<<Hard coded columns without associations>>>
        //       }
        //   },
        //   project_id: {
        //       type: DataTypes.TEXT,
        //       allowNull: false,
        //       validate: {
        //           len: [1,10]
        //       }
        //   },
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
    this.Project.hasMany(this.Task);
    this.Project.belongsToMany(this.User, {through: 'UserProject'});
    this.Task.belongsTo(this.Project);
    this.User.hasMany(this.Task);
    this.User.belongsToMany(this.Project, {through: 'UserProject'});
    return Project;
};
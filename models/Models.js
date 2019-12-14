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
        this.User = sequelize.define("User", {  //User model

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
        });
    this.Project.hasMany(this.Task);
    this.Project.belongsToMany(this.User, { through: 'UserProject' });
    this.Task.belongsTo(this.Project);
    this.User.hasMany(this.Task);
    this.User.belongsToMany(this.Project, { through: 'UserProject' });
    return Project;
    return
};
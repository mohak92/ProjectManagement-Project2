module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {

        projectId: {
            type: DataTypes.INTEGER

        },

        userId: {
            type: DataTypes.STRING

        },
        projectName: {
            type: DataTypes.STRING

        },
        dueDate: {
            type: DataTypes.DATE

        },
        projectStage: {
            type: DataTypes.STRING
        }
    });
    return Project;
};
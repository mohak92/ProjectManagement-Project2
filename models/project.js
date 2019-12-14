module.exports = function (sequelize, DataTypes) {

    var Project = sequelize.define("Project", {        //Project model
        projectId: {
            type: DataTypes.INTEGER

        },
        projectName: {
            type: DataTypes.STRING

        },
        dueDate: {
            type: DataTypes.DATE

        },
        projectStage: {
            type: DataTypes.STRING
        },
    })
    return Project;
};
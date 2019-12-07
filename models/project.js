module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {

        project_id: {
            type: DataTypes.INTEGER

        },

        user_id: {
            type: DataTypes.STRING

        },
        project_name: {
            type: DataTypes.STRING

        },
        due_date: {
            type: DataTypes.DATE

        },
        projecy_stage: {
            type: DataTypes.STRING
        }
    });
    return Project;
};
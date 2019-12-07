module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        userId: {
            type: DataTypes.INTEGER
        },
        projectId: {
            type: DataTypes.INTEGER
        },
        taskName: {
            type: DataTypes.STRING
        },
        taskDueDate: {
            type: DataTypes.DATE
        }
    });
    return Task;
};

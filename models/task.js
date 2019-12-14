module.exports = function (sequelize, DataTypes) {

   var Task = sequelize.define("Task", {      //Tasks model
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
    })
    return Task;
}
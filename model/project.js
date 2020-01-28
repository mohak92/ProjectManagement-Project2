var orm = require("../config/orm.js");

var project = {
  selectAll: function(cb) {
    orm.selectAll("projects", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("projects", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("projects", objColVals, condition, function(res) {
      cb(res);
    });
  },
  onetomany: function(table, table2, col, foreignKeyOne, foreignKeyTwo, condition, cb){
      orm.onetomany("projects", "users", "name", "projects.uid", "users.uid", condition, function(res) {
        cb(res);
      });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = project;
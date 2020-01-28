var orm = require("../config/orm.js");

var user = {
  all: function(cb) {
    orm.all("users", function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (adminController.js).
module.exports = user;
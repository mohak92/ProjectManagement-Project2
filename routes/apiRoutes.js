var path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/present", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/future", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/previous", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/tasks.html"));
  });

  app.get("/addNew", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/projects.html"));
  });

};
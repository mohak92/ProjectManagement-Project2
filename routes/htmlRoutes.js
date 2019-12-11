var path = require("path");

module.exports = function (app) {

  app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/homepage", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/tasks", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/tasks.html"));
  });

  app.get("/projects", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/projects.html"));
  });

};
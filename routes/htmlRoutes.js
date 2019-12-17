var path = require("path");

module.exports = function (app) {

  app.get("/signin", function (req, res) {
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

  app.get("/newuser", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/newUser.html"));
  });

  app.get("/logout", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
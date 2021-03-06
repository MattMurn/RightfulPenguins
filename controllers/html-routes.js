// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.render("index");
    // res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/homepage", function (req, res) {
    res.render("homepage");
    // res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // app.get("/addnew", function (req, res) {
  //   res.render("question");
  //   // res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  // Page for entering data for a new person
  //      Only this single route is needed for all of the input categories
  //      To display the correct template the question object must be used with handlebars
  //


};
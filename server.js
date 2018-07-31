var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Sets Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// give the server access to the imported routes
var routes = require("./controllers/routes.js");

app.use("/", routes);

app.listen(port);
console.log("localhost: 3000");
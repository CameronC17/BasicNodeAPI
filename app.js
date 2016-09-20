var express = require("express");
var app = express();
var routes = require("./config/routes");

var myPort = process.env.PORT || 3000;

app.use("/", routes);

//run the server
app.listen(myPort, function() {
  console.log(`Your app is ready and listening on port ${myPort}`);
});

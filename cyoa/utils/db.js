const mongoose = require("mongoose");

mongoose.connect(
    // "<db-url>",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  
  const db = mongoose.connection;
  
  db.on("error", console.error.bind(console, "connection error:"));
  
  db.once("open", function() {
    console.log("Connected to the DB!");
  });
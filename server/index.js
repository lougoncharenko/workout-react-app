const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.options("*", cors())

// We want to use our Node and Express server as an API, so that it can give our React app data, 
// change that data, or do some other operation only a server can do.
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  app.post('/data', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Thing created successfully!'
    });
    res.send("POST Request Called");
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
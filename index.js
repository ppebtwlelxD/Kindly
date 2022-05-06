const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors"); //not realy needed
const Userdata = require("./userdata");
const Username = require("./username");

const mongoURI =
  "mongodb+srv://Kindly:Kindly@cluster0.3yfzb.mongodb.net/kindlyDatabase?retryWrites=true&w=majority";

const PORT = 3000;

mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Database initialized...")
);

//express we want to pass the json body
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

//this are the frontend things
app.use(express.static("./frontend"));

// what do we do when someone posts data to /userdata
app.post("/userdata", (req, res) => {
  console.log("received user data");
  try {
    // making a mongodb schema  (userdata file)
    var userdata = new Userdata(req.body);
    // send the schema to the database
    userdata
      .save()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        // if error with sending to the server
        console.log(error);
      });
    //if app.post error
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

// what do we do when someone posts data to /username
app.post("/username", (req, res) => {
  console.log("received user name");
  console.log(req.body);
  try {
    const user = Username.findOne(
      { name: req.body.name },
      function (err, existing_user) {
        if (existing_user == null) {
          console.log("this user dose not exist");
          // making a mongodb schema  (userdata file)
          var userdata = new Username(req.body);
          // send the schema to the database
          userdata
            .save()
            .then((data) => {
              res.status(200).json(data);
            })
            .catch((error) => {
              // if error with sending to the server
              console.log(error);
            });
        }
      }
    );
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

app.listen(PORT);

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
require("dotenv").config();

app.use(express.json());
app.use(cors());

//1 - Connection code
//Provide the MongoDB URI of your cluster to mongoose.connect()
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//2 - Define a schema
//Schema defines the structure of the document, with all the field names and type.
//mongoose.schema() takes in a javascript object.
const notepadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },

  //Name of the property is the fields for the document
  //Value for the property represents the type for the particular field.
  //To make any field required, make required as true.
  //Since we wanted to specify that it is required i.e. to send another information along with the type of the field, we represent the values that are to be sent in an object.
});

//3 - Define the model
//Let’s create our model by passing in the schema and a name for our model.
//notepadSchema — the schema we have created just now
//Notepad — Name for the model, so a collection will be created with a name "Notepad"
const Notepad = mongoose.model("Notepad", notepadSchema);

//Now as our model is ready, we can create APIs to get, add, delete, and update the documents within our collection.

app.get("/read", (req, res) => {
  Notepad.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.post("/insert", (req, res) => {
  const noteTitle = req.body.title;
  const noteAuthor = req.body.author;
  const noteText = req.body.text;

  const note = new Notepad({
    title: noteTitle,
    author: noteAuthor,
    text: noteText,
  });

  note.save().then(
    () => console.log("One entry added"),
    (err) => console.log(err)
  );
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const newContent = req.body.newContent;
  const newTitle = req.body.newTitle;
  const newAuthor = req.body.newAuthor;

  Notepad.findById(id, (err, updated) => {
    updated.text = newContent;
    updated.title = newTitle;
    updated.author = newAuthor;
    updated.save().then(
      () => console.log("One entry updated"),
      (err) => console.log(err)
    );
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Notepad.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});

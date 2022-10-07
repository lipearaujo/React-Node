const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ProjectModel = require("./models/Projects");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://filipe:wOgG1CgWqlwJBA7b@portfolio.q6gxdlc.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

/* app.post("/insert", async (req, res) => {
  const project = new ProjectModel(
    {
      projectName: "Movie API with NextJS",
      projectURL: "https://github.com/lipearaujo/ReactJS/tree/main/movienxt",
    },
    {
      projectName: "Netflix Clone with ReactJS",
      projectURL: "https://github.com/lipearaujo/ReactJS/tree/main/movie-api",
    },
    {
      projectName: "Real time chat app with ReactJS and Socket.io",
      projectURL: "https://github.com/lipearaujo/ReactJS/tree/main/chat-app",
    },
    {
      projectName: "Instagram homepage clone with HTML and CSS",
      projectURL:
        "https://github.com/lipearaujo/DIO-desafio-github-primeiro-repositorio/tree/main/Fundamentos%20Web%20com%20HTML%20e%20CSS/Clone%20Pagina%20Inicial%20Instagram",
    },
    {
      projectName: "Notepad with HTML, CSS and PHP",
      projectURL:
        "https://github.com/lipearaujo/projetos-php/tree/main/Bloco%20de%20notas",
    }
  );

  try {
    await project.save();
    res.send("Inserted data");
  } catch (err) {
    console.log(err);
  }
}); */

app.get("/read", async (req, res) => {
  ProjectModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

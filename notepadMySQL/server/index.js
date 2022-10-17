const mysql = require("mysql"); //Node.js can use this module to manipulate the MySQL database
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

//Create connection
const createConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "filipe123",
  database: "notepads",
});

//Create Database
const createDatabase = (conn) => {
  conn.query("CREATE DATABASE IF NOT EXISTS notepads", (error, results) => {
    if (error) throw error;
    console.log("Database created");
  });
};

//Create Table
const createTable = (conn) => {
  const sql =
    "CREATE TABLE IF NOT EXISTS notes (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50), author VARCHAR(50), content VARCHAR(255))";
  conn.query(sql, (error, results, fields) => {
    if (error) throw error;
    console.log("Table created");
  });
};

//Insert
const insertQuery = (conn) => {
  const sql = "INSERT INTO notes (title, author, content) VALUES ?";
  const values = [["Sobre a Maia", "Lipezera", "A Maia é muito gordinha"]];

  conn.query(sql, [values], (error, results, fields) => {
    if (error) throw error;
    console.log("Entrys added");
    console.log("Number of records inserted: " + results.affectedRows);
    conn.end();
  });
};

//Render some SQL query results
const execSQLQuery = (slqQry, res) => {
  const createConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "filipe123",
    database: "notepads",
  });

  createConnection.query(slqQry, (error, results, fields) => {
    if (error) {
      res.json(error);
    } else {
      res.json(results);
    }

    createConnection.end();
  });
};

createConnection.connect((err, res) => {
  if (err) {
    throw err;
  }

  console.log("Connected to Database");

  //Creating Database
  //To create a table in MySQL, use the "CREATE TABLE" statement.
  //Make sure you define the name of the database when you create the connection
  createDatabase(createConnection);

  //Create Table
  createTable(createConnection);

  //Insert
  //To fill a table in MySQL, use the "INSERT INTO" statement.
  //To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be replaced by the value array
  insertQuery(createConnection);
});

app.get("/read", (req, res) => {
  execSQLQuery("SELECT * FROM notes", res);
});

app.post("/insert", (req, res) => {
  const title = req.body.title.substring(0, 50);
  const author = req.body.author.substring(0, 50);
  const content = req.body.content.substring(0, 150);

  execSQLQuery(
    `INSERT INTO notes (title, author, content) VALUES ('${title}', '${author}', '${content}')`,
    res
  );
});

app.put('/update/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const newContent = req.body.newContent;
  const newTitle = req.body.newTitle;
  const newAuthor = req.body.newAuthor;

  execSQLQuery(`UPDATE notes SET title='${newTitle}', author='${newAuthor}', content='${newContent}' WHERE id=${id}`, res);
})

app.delete("/delete/:id", (req, res) => {
  execSQLQuery(`DELETE FROM notes WHERE ID=${req.params.id}`, res);
});

app.listen(port, () => {
  console.log("Connected on port 5000");
});

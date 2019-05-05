var mysql = require("mysql");
var inquirer = require("inquirer");
require('console.table');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Alright14",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();

});


function processAnswers(answers){
  console.log("And your answers are:", answers);
}
inquirer.prompt ([

  {type: "input", 
  name: "response",
  message: "What is the item number of the product you would like to purchase?(Press 'q' to quit) \n",
  validate: function(answer) {
    if (
      (parseInt(answer) <= 10 && parseInt(answer) > 0) ||
      answer.toLowerCase() === "q"
    ) {
      return true;
    }
    return "ITEM ID NOT FOUND!!";
  }
},
{
  name: "quantity",
  type: "input",
  message: "Please enter an order quantity (Press 'q' to quit)",
  validate: function(answer) {
    if (
      (parseInt(answer) <= res.quantity && parseInt(answer) > 0) ||
      answer.toLowerCase() === "q"
    ) {
      return true;
    }
    return "NOT ENOUGH IN STOCK!!!";
  }
}
])
.then(function(res) {
if (res.purchase.toLowerCase() === "q") {
  console.log("Goodbye!");
  process.exit(0);
}
userOrder();
});




// inquirer.prompt(questions, processAnswers);

var response = process.argv[2];
var manager = process.argv.slice(3).join(" ");

if(response === "3"){
  console.log("The computer is a great choice!");
}

else if(manager === "View Product Sales by Department"){
  console.table(res);
}

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}



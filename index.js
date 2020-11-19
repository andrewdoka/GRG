const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { start } = require("repl");

inquirer.prompt([ 
    
    {
type:"list",
message:"Do you want to start the ReadMe app ?",
name:"start",
choices: [
    "Yes",
    "No" ]
},

])
.then(function(data){
    console.log(data);
    

if (data.start === "Yes") {
    startReadme();
}
console.log("Ok !");

    });



var startReadme = function () {
inquirer.prompt([
    {
type: "input",
message: "Enter Github user",
name: "git"
    },
    {
        type: "checkbox",
        message: "Question 2 placeholder",
        name: "Q2",
        choices: [
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 4"
        ]
            },
            {
                type: "list",
                message: "Choose what you would like in your ReadMe File",
                name: "Q3",
                choices: [
                    "Description",
                    "Table of Contents",
                    "Installation",
                    "Usage"
                ]
                    },
                    {
                        type: "input",
                        message: "Question 4 placeholder",
                        name: "Q4"
                            },

])
.then(function(data){
    console.log(data);
    
    var filename = data.git.toLowerCase().split(" ").join("") + ".md";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err){

if (err) {

    return console.log(err);
}
console.log("Success!");

    });

    });

};



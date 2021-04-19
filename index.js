const fs = require("fs");
const fetch = require('node-fetch');

const url = "http://jsonplaceholder.typicode.com/posts";

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    
    fs.writeFile("./result/posts.json", JSON.stringify(json,null,4), (err) => {
        if(err) throw err;  //if there is an error while creating file
        console.log("File created successfully");   
    })   
  } catch (error) {
    console.log(error);
  }
};

getData(url);









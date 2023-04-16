// import express from "express";
// import * as fs from 'fs';
// import * as path from 'path';

const express = require("express");
const fs = require("fs");
const path = require("path");
const utcToIndiantime = require('utc-to-indiantime');

const app = express();


//path 
const dirpath = path.join(__dirname, "timeswamps");






let time1 = new Date();

let time = utcToIndiantime(time1); 


let date = (time.getDate());
let month = (time.getMonth()) + 1;



const fname = (`Date-${date}-Month-${month}`);

// console.log(fname);


let datestring = time.toUTCString().slice(0, -4);


const timeswamp = `last created timeswamp: ${datestring}`

//middleware
app.use(express.static("timeswamp"))






app.get("/", (req, res) => {





    res.send("Welcome sucessfully connected add /static  e.g http://localhost:9000/static to create timestamp file")
})

app.get("/static", (req, res) => {
    
let time1 = new Date();

let time = utcToIndiantime(time1); 


let date = (time.getDate());
let month = (time.getMonth()) + 1;



const fname = (`Date-${date}-Month-${month}`);

// console.log(fname);


let datestring = time.toUTCString().slice(0, -4);


const timeswamp = `last created timeswamp: ${datestring}`

    fs.writeFileSync(`${dirpath}/${fname}.txt`, timeswamp, (err) => {

        if (err) {
            console.log(err)
    
        }
        else {
    
            console.log("writesucessfull")
    
        }
    })

    res.sendFile(path.join(__dirname,`timeswamps/${fname}.txt`))


})

app.listen(9000, () => {
    console.log("listening port 9000")
})

//task


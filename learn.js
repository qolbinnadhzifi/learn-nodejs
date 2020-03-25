// build simple program CLI (Command Line Interface) using node.js
const moment = require('moment');
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 8080;
const mongoose = require('moongose');
const express = require('express');
const app = express();
const electron = require('electron');
const connect = moongose.connect('mongodb');
const db = require('mongodb');
const chart = require('chart');
const server = http.createServer((req,res,rej,err) =>{
    res.end('HELLO WORLD');
});

// nothing todo
let banner = "_________________________";
let a = " : ";
let newLine = "\n";

//color
let color1 = "\033[30;1m";
let color2 = "\033[31;1m";
let color3 = "\033[32;1m";
let color4 = "\033[33;1m";
let color5 = "\033[34;1m";
let color6 = "\033[35;1m";
let color7 = "\033[36;1m";
let color8 = "\033[37;1m";
let color9 = "\033[38;1m";
let color10 = "\033[39;1m";
let color11 = "\033[40;1m";
let color12 = "\033[41;1m";
let color13 = "\033[42;1m";
let color14 = "\033[43;1m";
let color15 = "\033[44;1m";
let color16 = "\033[45;1m";
let color17 = "\033[46;1m";
let color18 = "\033[47;1m";

//date | toLocaleDateString();
const date = new Date();
const years = date.getFullYear();
const arrMonth = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const month = date.getMonth();
const arrDay = ["Senin","Selasa","Rabu","Kamis","Jum\'at","Sabtu","Ahad"];
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const miliseconds = date.getMilliseconds();
const tanggal = date.getDate();

console.clear();
console.log(banner);
console.log("Simple Program Application");
console.log(banner);
console.log('\n\n');
console.log(tanggal+" "+month[arrMonth]+" "+years);

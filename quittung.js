#!/usr/bin/env node
'use strict';

require('dotenv').config();

const lib = new require("./lib/gsi_kebap30.js");
const instance = new lib();
let zip = '69256';

let argbase=0;
if(typeof process.env.ZIP != "undefined") {
  zip = process.env.ZIP;
  argbase=-1;
}
if(process.argv.length>2+argbase) {
    zip = process.argv[2+argbase];
}
if(process.argv.length>2) {
  let subquery = process.argv[2];
  instance.quittung(subquery).then(function(quittung) {
    console.log(quittung);
    // process.exit();
  });
} else
if(typeof process.env.DEVICE_IP != "undefined") {
  let instance = new GSI({zip:zip});
  instance.quittung(process.env.DEVICE_IP,null).then(function(quittung) {
    console.log(meter);
    // process.exit();
  });
} else {
  console.log("stromquittung_keba_p30 <WALLBOX_IP>");
}

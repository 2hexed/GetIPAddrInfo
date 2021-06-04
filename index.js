const fetch=require("node-fetch");
var IP=""; // Enter your desired IP address here
fetch(`http://ip-api.com/json/${IP}`)
    .then(res=>res.json())
    .then(json=>console.log(json))
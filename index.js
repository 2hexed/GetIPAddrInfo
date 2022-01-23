const fetch=require("node-fetch");
var IP="76.67.74.227"; // Enter your desired IP address here
fetch(`http://ip-api.com/json/${IP}`)
    .then(res=>res.json())
    .then(json=>console.log(json))
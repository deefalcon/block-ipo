var express = require("express");
var web3 = require("web3");
var app = express();
var contract = require("./build/contracts/BlockIPO.sol.js");
app.use(require("body-parser").json())

app.get("/", function (req, res) {  
  res.status(200).json({
    name: "Michael",
    company: "Thinkwire",
    shares: "1,000,000",
  })
})

app.post("/company", function (req, res) {
  console.log(req.body);
  res.status(200).json(req.body);
})

app.get("/company", function (req,res) {
  console.log(web3);
  contract.setProvider('0x2eb09c471f12635595383544abb12918b5fa254d');
  var newContract = contract.new();
  console.log(newContract);
  res.status(200);
}) 

app.listen(3000, function () {
  console.log("server up at http://localhost:3000");
  //console.log(server);
})

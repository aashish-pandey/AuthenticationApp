var ip = require('ip');

module.exports = function(req, res){

    // console.log(req.ip)
    res.send("Your IP address is " + req.ip)
}
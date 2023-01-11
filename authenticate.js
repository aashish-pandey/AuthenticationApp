var ip = require('request-ip');

module.exports = function(req, res){

    console.log(ip.getClientIp(req))
    res.send("Your IP address is " + ip.getClientIp(req))
}
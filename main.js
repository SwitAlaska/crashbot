var request = require('request');
var uniqid = require('uniqid');

async function test(){
    var i = 0;
    while(i < 4){

        var defautData = uniqid();
        var mail = "Attackeedt" + i + "@hotmail.com";
        var Birthday = "09071982";

        await sendData(defautData,mail,Birthday);
        i++;
    }
}


setInterval(test, 40000);

async function sendData(defautData,mail,Birthday){
    request.post({
      headers: {'content-type' : 'application/x-www-form-urlencoded'},
      url:     'http://daqop.ddns.net:80',
      form:    { sumbit: "heydude",username:defautData,birthday:Birthday,Password: defautData,email:mail}
    }, function(error, response, body){
        if(!error) {
            console.log("compte créer identifiant = " + defautData);
        }
        else {
            console.log(error);
        }
            
    });
}
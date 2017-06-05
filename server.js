var express=require('express')
var app=express()
var os=require('os')

app.set('port',(process.env.PORT || 5000))

app.get('/',function(req,res){
    var platform=req.headers['user-agent'].split('(')[1].split(')')[0]

     
     var info = {
         'ipaddress': req.ip,
         'language': req.acceptsLanguages(),
         'software':platform 
     };
     res.send(info);
})
app.listen(app.get('port'),function(){
    console.log('server connected on ' + app.get('port'))
})


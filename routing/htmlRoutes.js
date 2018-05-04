//var path = require("path");

module.exports = function(app){
    app.get('/',function(req,res){
        res.send('HOME SCREEN')
        //res.render()
    })

    app.get("/survey", function(req, res){
        res.send('SURVEY SCREEN')
    })
}


var data = require ('../app/data/friends');

 module.exports = function(app){
    app.get("/api/data", function(req, res){
        res.json(data)
    })

    app.post('/api/new',function(req,res){
        
    })


}


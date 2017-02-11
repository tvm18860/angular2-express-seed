const init = function(app, config) {

    app.get( '/api/data' , function(req, res) {
        let data = [];
        for(let i = 0; i < 10; i++) {
            data.push(Math.floor(Math.random() * 100) + 1);
        }
        res.send(data);
    });

}

module.exports = { init : init }
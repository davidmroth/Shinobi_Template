// Mizu Template Handler
// By : Moe Alam
var express = require('express')
module.exports = {
    addHandlers : function(s,app,io){
        app.use('/libs', express.static(process.cwd() + '/web/templates/homecam/libs'));
    }
}

module.exports=function(app,db) {
    var userModel = require("./models/user.model.js")(db);

    var userService = require("./services/user.service.server.js")(app, userModel);
}
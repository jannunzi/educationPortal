module.exports=function(app,db) {
    var userModel = require("./models/user/user.model.js")(db);
    var courseModel = require("./models/course/course.model.js")(db);

    var userService = require("./services/user.service.server.js")(app, userModel);
    var courseService = require("./services/course.service.server.js")(app, courseModel);
}
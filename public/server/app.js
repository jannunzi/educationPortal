module.exports=function(app,db) {
    var userModel = require("./models/user/user.model")(db);
    var userService = require("./services/user.service.server")(app, userModel);

    var courseModel = require("./models/course/course.model.server")(db);
    var courseService = require("./services/course.service.server")(app, courseModel);
};
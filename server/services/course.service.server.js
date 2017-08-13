
module.exports = function (app, courseModel) {

    app.get("/api/allCourses", getAllCourses);
    app.post("/api/newCourse", newCourse);

    function newCourse(req, res) {
        console.log("in course service");
        var newCourse = req.body;
        courseModel
            .createCourse(newCourse)
            .then((function (response) {
                res.json(response);
            },
                function (err) {
                    res.status(400).send(err);
                })
            );
    }

    function getAllCourses(){
        console.log("in course server service *****");
        courseModel
            .getAllCourses()
            .then((function (response) {
                console.log("%%%%", response);
                    res.json(response);
                },
                    function (err) {
                        res.status(400).send(err);
                    })
            );
    }
}
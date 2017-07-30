module.exports = function(app, sectionModel) {
    app.post('/api/course/:courseId/section', createSection);
    app.get('/api/course/:courseId/section', findAllSectionForCourse);
    app.get('/api/section/:sectionId', findSectionById);
    app.put('/api/section/:sectionId', section, updateSection);
    app.delete('/api/section/:sectionId', deleteSection);

    function createSection(req, res) {
        var newSection = req.body;
        sectionModel
            .createSection(newSection)
            .then(
                function(section) {
                    res.json(section);
                },

                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function findAllSectionForCourse(req, res) {
        var courseId = req.params.courseId;
        sectionModel
            .findSectionByCourse(courseId)
            .then(
                function(section) {
                    res.json(result);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function findSectionById(req, res) {
        var sectionId = req.params.sectionId;
        sectionModel
            .findSectionById(sectionId)
            .then(
                function(section) {
                    res.json(section);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function updateSection(req, res) {
        var sectionId = req.params.sectionId;
        var newSection = req.body;
        sectionModel
            .updateSection(sectionId, newSection)
            .then(
                function(section) {
                    res.json(section);

                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function deleteSection() {
        var sectionId = req.params.sectionId;
        sectionModel
            .deleteSection(sectionId)
            .then(
                function(section) {
                    res.json(section)
                },
                function(err) {
                    res.status(400).send(err);
                }
            )
    }
}
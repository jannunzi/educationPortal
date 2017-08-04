/**
 * Created by Animesh on 7/22/17.
 */

const mongoose = require('mongoose');
const sectionSchema = require('./section.schema.server');
const sectionModel = mongoose.model('SectionModel', sectionSchema);
module.exports = sectionModel;

sectionModel.createSection = createSection;
sectionModel.findSectionByCourse = findSectionByCourse;
sectionModel.findSectionById = findSectionById;
sectionModel.updateSection = updateSection;
sectionModel.deleteSection = deleteSection;

function createSection(section) {
    return sectionModel.create(section);
}

function findSectionByCourse(courseId) {
    return sectionModel.find({course: courseId});
}

function findSectionById(sectionId) {
    return sectionModel.findById(sectionId);
}

function updateSection(sectionId, section) {
    return sectionModel.update(
        {_id: sectionId},
        {$set: section}
    );
}

function deleteSection(sectionId) {
    return sectionModel.remove({_id: sectionId});
}

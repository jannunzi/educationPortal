/**
 * Created by Animesh on 7/22/17.
 */

const mongoose = require('mongoose');
var sectionSchema = mongoose.Schema({
    course: {type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseModel'},
    title: String,
    startDate: Date,
    endDate: Date,
    code: String
}, {collection: 'section'});

module.exports = sectionSchema;
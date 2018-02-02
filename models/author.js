var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

AuthorSchema
  .virtual('name')
  .get(function(){
    return this.family_name + ' ' + this.first_name
})

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  let path = '/catalog/author/'
  return path + this._id;
});

AuthorSchema
.virtual('lifespan')
.get(function () {
  let dob = moment(this.date_of_birth).format('MMMM Do, YYYY')
  let dod = moment(this.date_of_death).format('MMMM Do, YYYY')
  let lifespan = dob + " - " + dod
  return lifespan;
});


module.exports = mongoose.model('Author', AuthorSchema);

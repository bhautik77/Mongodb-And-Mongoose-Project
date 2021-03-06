require("dotenv").config();
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

let Person;

Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "jhon",
    age: 25,
    favoriteFoods: ["panipuri", "pizza", "khichadi"],
  });
  person.save(function (err, data) {
    if (err) return console.error(err);
    return done(null, data);
  });
};

let arrayOfPeople = [
  {
    name: "khan",
    age: 25,
    favoriteFoods: ["panipuri", "pizza", "khichadi"],
  },
  {
    name: "dev",
    age: 29,
    favoriteFoods: ["bhel", "pizza", "burger"],
  },
  {
    name: "tina",
    age: 23,
    favoriteFoods: ["dabeli", "poha", "vadapav"],
  },
  {
    name: "scarlett",
    age: 26,
    favoriteFoods: ["noodles", "ramen", "shusi"],
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if (err) return console.error(err);
    return done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, data) {
    if (err) return console.error(err);
    return done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, data) {
    if (err) return console.error(err);
    return done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, data) {
    if (err) return console.error(err);
    return done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function (err, personEdit) {
    if (err) return console.error(err);
    personEdit.favoriteFoods.push(foodToAdd);
    personEdit.save(function (err, data) {
      if (err) return console.error(err);
      return done(null, data);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName },
    { $set: { age: ageToSet } },
    { new: true },
    function (err, data) {
      if (err) return console.error(err);
      return done(null, data);
    }
  );
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function (err, data) {
    if (err) return console.error(err);
    return done(null, data);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, function (err, data) {
    if (err) return console.error(err);
    return done(null, data);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  let query = Person.find({ favoriteFoods: foodToSearch });
  query
    .sort({ name: "asc" })
    .limit(2)
    .select("-age")
    .exec(function (err, data) {
      if (err) return console.error(err);
      return done(null, data);
    });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

require("dotenv").config();
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://4bDZt9pYG4hHX75njmeYYe9NC:eroV4vrh69SVLzjoLGezuPFQgpqAqgvkg6KuL37pucu83TVgsaT7bb4@cluster0.54jhh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const { Schema } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

let Person;

Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  // const person = new Person({
  //   name: "jhon",
  //   age: 25,
  //   favoriteFoods: ["panipuri", "pizza", "khichadi"],
  // });
  Person.create([
    {
      name: "jhon",
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
    }],
    function (err, data) {
      if (err) return console.error(err);
      return done(null, data);
    }
  );
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
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

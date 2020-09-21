// # Map, Filter, and Reduce

// Use the code below to complete the following problems
console.log('it works')

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
       {
           name: "Pam",
           gender: "female",
           age: 29,
       },
           {
           name: "Amelie",
           gender: "female",
           age: 10,
       },
           {
           name: "Justin",
           gender: "male",
           age: 32,
       },
   ];


// Use map, filter, and reduce to:

// 1. Create an array of the first letters of each fruit
    const firstLetter = fruits.map(fruit => fruit.charAt(0));
    console.log(firstLetter)


// 2. Create array of user objects based on the customers array of objects (each
//    user object should just have name and age properties)


// 3. Create an array of civil servant customers (teachers and police officers)
//    containing the same properties as the objects on the customers objects


// 4. Determine the average age of all the customers


// 5. Create a function `makeSuperPet()` that takes in the pets array as input and
//    returns a single pet object with the following shape...
    // {
    //     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
    //     age: THE_TOTAL_OF_ALL_PET_AGES,
    //     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
    // }


// 1. Create a function that takes in an array of pets and returns an array of the
//    length of first names for pugs only. Your output for the given input should
//    be [3, 6] for 'Bud' and 'Bowser'


// 2. Create a function `getFemaleFamilyMembers()` that when given the family
//    variable as an argument, returns an array of female family member names


// 3. Create a function `makeLongPetString()` that when given the variable of pets,
//    returns a string of all property values with dashes separating each property
//    value


// 4. Create a function that when given an array of first names, returns an array
//    of the same names with a last name of Smith
    // input = ['Sally', 'Fred', 'Steve']
    // output = ['Sally Smith', 'Fred Smith', 'Steve']

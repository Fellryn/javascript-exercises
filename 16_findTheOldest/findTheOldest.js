const getAge = function(birth, death) {
    if (!death) {
        return new Date().getFullYear() - birth;
    } 
    else {
        return death - birth;
    }
}

const findTheOldest = function(people) {
   return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;

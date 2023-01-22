const findTheOldest = function(people) {

    let person = {}
    let birth = 0
    let death = 0
    let age = 0
    let max = 0
    let oldest = {}

    for(let i=0;i<people.length;i++){
        person = people[i]
        birth = person.yearOfBirth
        if(person.yearOfDeath == null){
            death = 2022
        }
        else{
            death = person.yearOfDeath
        }
        age = death - birth

        if(age > max){
            max = age
            oldest = person
        }

    }




    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;

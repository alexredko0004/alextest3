//1) Create three objects via function
function ship (name,length, yearBuilt,numberOfEngines) {
    this.name = name;
    this.length = length;
    this.numberOfEngines = numberOfEngines;
    this["year Built"] = yearBuilt
}
function year (year) {
    this.year = year
}

let year1 = new year(1765);
let year2 = new year(1797);
let ship1 = new ship('HMS Victory',69.3, year1, 0)
let ship2 = new ship('USS Constitution',62, year2, 0)
console.log (ship1)
console.log (ship2['year Built'].year)


//2) Create three objects via new Object()
let person = new Object();
person.name='Olena';
person.age=24;
person.gender='female';
person.country='Ukraine';

let monkey = new Object ();
monkey.name='Salem';
monkey.food='banana';
monkey.size='small';
delete monkey.size
console.log(monkey)

let naming = function () {
    return 'Milky Way'
};
let galaxy = new Object();
galaxy.name = naming(); 
galaxy.size = 'large';
console.log (galaxy)

//3) Create new object via Object.create and __proto__

let person2 = Object.create(person)
person2.gender='male'
console.log(person2)

let person3 = {
    __proto__:person,
    name:"Oleg"
}
console.log(person3)
console.log(person3.gender,person3['age'])

//4) Create 'Engineer' object and inherit 'QA engineer' object from it
console.log('----TASK 4----')
let engineer = {
    domain: 'building',
    specialty: 'architecture',
    mainSkills: ['Math','Algorithms','Physics'],
}
engineer.gender = 'male';

let qaEngineer = Object.create(engineer)
qaEngineer.itDomain ='FinTech';
qaEngineer['specialty']='QA';
qaEngineer.domain = "IT";
for(let key in qaEngineer) console.log(key,qaEngineer[key])

//5) Make 'Engineer' object inherited from 'Person' object and show values in all 3 objects
console.log('----TASK 5----')
engineer.__proto__=person;
qaEngineer.name = 'Oleksii';
for(let key in qaEngineer) console.log(key,qaEngineer[key])
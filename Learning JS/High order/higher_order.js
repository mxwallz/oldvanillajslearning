const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];  


  //more functional programming, way better than doing simple loops

  /*

forEach: doesnt return a new function but more elegant way of looping through 
filter 
map 
sort 
reduce

  */


/*
for( let i = 0; i < companies.length; i++){
  console.log(companies[i]);
    
}

*/ 


//forEach --optional additional params? 
companies.forEach((company) => {
  console.log(company);
})


//filter things out of array 
//traditional way 
let canDrink = [];

for (let i = 0; i < companies.length; i++){
  if (ages[i] >= 21){
    canDrink.push(ages[i])
  } 
}

console.log(`new array: ${canDrink}`);

//returns array -> takes in function (Callback fx)
const canDrink2 = ages.filter(function(age) {
  if (age >= 21){
    return true;
  }
})

console.log(`with filter: ${canDrink2}`);

const canDrink3 = ages.filter(age => age>= 21);
console.log(`with filter: ${canDrink3}`);


let retailCompanies3 = []

for (let i = 0; i < companies.length; i++)
{
  if (companies[i].category === 'Retail'){
    retailCompanies3.push(companies[i]);
  }
}

//filter retail companies 
const retailCompanies = companies.filter(function(company) {
  if(company.category === 'Retail'){
    return true; 
  }
});


//es6

const retailCompanies2 = companies.filter(company => company.category === 'Retail');
 
console.log(retailCompanies);

//get 80s companies
const eightiescompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
console.log(eightiescompanies);


// companies that lasted 10 years
const lastedTenYears = companies.filter(company => (company.end- company.start >= 10));
console.log(lastedTenYears);




//Map -> can create new arrays of anything really -> this one returning back -> unlike foreach
// create array of company names
const companyNames = companies.map(function(company) {
  return company.name;
})

const testMap = companies.map(company =>
  `${company.name} [${company.start}- ${company.end}]`);

console.log(companyNames);

console.log(testMap);




const sortedCompanies1 = companies.sort(function(a,b){
  if (a.start > b.start){
    return 1;
  }else {
    return -1; 
  }
})


// w es6 syntax + ternary operator 
const sortedCompanies = companies.sort((a,b) = > (a.start
  > b.start ? 1: -1));


// sorting numbers -> 
// if you just do sort, will do so by first number 
const sortedAges = companies.sort((a,b) => a-b); 




// reduce -> can be used for many things 
// let's first add all of the ages together 

// do w/ simple for loop 

let ageSum = 0; 

for (let i = 0; i < ages.length; i++){
  ageSum += ages[i];
}
console.log(ageSum);



const ageSum1 = ages.reduce(function(total,age){
  return total + age;
}, 0);

console.log(ageSum1);


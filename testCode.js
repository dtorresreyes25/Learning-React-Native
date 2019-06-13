const person = [
  { name: "Dayron R.", phone: "53850858" },
  { name: "Aitana", phone: "8976567" },
  { name: "Dyan A.", phone: "8976567" },
  { name: "Aida R.", phone: "8976567" }
];
const section = person.reduce((obj, person) => {
  const firstLetter = person.name[0].toUpperCase();
  //console.log(obj);
  return {
    ...obj,
    [firstLetter]: [...(obj[firstLetter] || []), person]
  };
}, {});
//console.log(section["A"]);
console.log(section);
const once = "once";
const numeros = {};
numeros["uno"] = 1;
numeros["dos"] = 2;
numeros.tres = 3;

const numb = ["alfa", "beta", "gamma", "gozadera"];

/*const objc= {A:['alfa'], 
             B:['beta'],
             G:['gozadera','gamma']}*/

testArray = numb.reduce((obj, num) => {
  let name = num[0].toUpperCase();
  /*!obj[name] ? (obj[name] = []) : null;
  obj[name].push(num);
  return obj;*/
  return {
    ...obj,
    [name]: [...(obj[name] || []), num]
  };
}, {});

const numbers = {
  ...numeros,
  [once]: 11
};

const numeros2 = { ...numeros, cuatro: 4 };

console.log(testArray);

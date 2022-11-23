let data = require('./data.js');


//1

function countAllPeople(data) {
  return (houseLength = data.got.houses
        .map((ele) => ele.people.length)
        .reduce((acc, ele) => acc + ele)); // adding the value from people.length
}



//2
function peopleByHouses(data) {
  let object = data.got.houses.reduce((arr, ele) => {
      arr[ele.name] = ele.people.length;
      return arr;
  }, {});
  // converting object to array for sorting
  let arrayOfObject = Object.entries(object).sort();
  //from array as we have done in previous step so we are again converting into object
  console.log(Object.fromEntries(arrayOfObject));
  // console.log(Object.fromEntries(arrayOfObject.reverse()));    //reverse object
}



//3
function everyone() {
  let result = [];
  data.got.houses.map((ele) => {
      ele.people.map((ele2) => {
      result.push(ele2.name);
      })
  })
console.log(result);
}




//4
function nameWithS(data) {
  let result = [];
      data.got.houses.map((ele) => {
          ele.people.map((ele2,i) => {
              let val = ele2.name;
                return  result.push(ele2.name);
          })
      })
    return  result.filter(element => {
          return element.split('').find(items => {
              if (items == 's' || items == 'S') {
                  return true;
            }
          });
      });
}




//5
function nameWithA(data) {
  let result = [];
      data.got.houses.map((ele) => {
          ele.people.map((ele2,i) => {
              let val = ele2.name;
                return  result.push(ele2.name);
          })
      })
    return  result.filter(element => {
          return element.split('').find(items => {
              if (items == 'a' || items == 'A') {
                  return true;
              }
          });
      });
}




// 6
function surnameWithS(data) {
  let result = [];
          data.got.houses.map((ele) => {
              ele.people.map((ele2,i) => {
                  let val = ele2.name;
                    return  result.push(ele2.name);
              })
          })
          // console.log(result)
        return  result.filter(element => {
            return element.split(" ")[1][0] == "S";
          });
}




// 7

function surnameWithA(data) {
  let result = [];
      data.got.houses.map((ele) => {
        ele.people.map((ele2,i) => {
                let val = ele2.name;
                return  result.push(ele2.name);
         })
     })
      return  result.filter(element => {
        return element.split(" ")[1][0] == "A";
    });
}




// 8
function peopleNameOfAllHouses(data) {
  let obj = {}
  data.got.houses.forEach((ele) => {
      if (!obj[ele.name]) {
          obj[ele.name] = [];
      }  
      for (let element of ele.people) {
          obj[ele.name].push(element.name)
      }
  })
return Object.fromEntries(Object.entries(obj).sort());
}




// Testing your result after writing your function
console.log(countAllPeople(data));
// Output should be 33

console.log(peopleByHouses(data));
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone(data));
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(data), 'name with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA(data));
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(data), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA(data), 'surname with a');
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses(data));
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}

var people = [];
var money = [];
var peopleString = "";


function addName(){
  var nameList = document.getElementById("nameList").value;
  console.log(nameList);
  people = nameList.split("\n");
  var emptyTracker = 0;
  for(var i = 0; i < people.length; i++){
    if(people[i] === ""){
      emptyTracker = i;
      break;
    }
  }
  if(emptyTracker != 0){
    var numEmpty = people.length - emptyTracker;
    console.log("This is numEmpty " + numEmpty);
    while(numEmpty > 0){
      people.pop();
      numEmpty-=1;
    }
  }
  console.log(people);
  appendNames();
  document.getElementById("nameList").value = "";
  for(var i = 0; i < people.length; i++){
    money.push(0);
  }
}

function appendNames(){
  for(var i = 0 ; i < people.length; i++){
    var newRow = document.createElement("tr");
    var moneyDiv = document.createElement("td");
    var moneyText = document.createTextNode(" $0");
    moneyDiv.appendChild(moneyText);
    moneyDiv.id = "money" + i;
    var nameDiv = document.createElement("td");
    var textNode = document.createTextNode("#" + i + " " + people[i]);
    peopleString += " #" + i + " " + people[i];
    nameDiv.id="name"+i;
    nameDiv.appendChild(textNode);
    newRow.appendChild(nameDiv);
    newRow.appendChild(moneyDiv);
    document.getElementById("nameTable").appendChild(newRow);
    //document.getElementById("nameMoney").appendChild(nameDiv);
    //document.getElementById("nameMoney").appendChild(moneyDiv);
  }
}

function addItems(){
  var tracker = "--";
  var names = " ";
  var numTracker = 1;
  while(tracker !== ""){
    tracker = prompt("What is the price of item " + numTracker + "? If no more items, enter blank.");
    if(tracker === ""){
      break;
    }

    names = prompt("Who is paying? Use the number right next to # on the list of people and format like the following '0 3 4' \n" + peopleString);
    var listOfNames = names.split(" ");
    var pricePerPerson = Math.round(100*(tracker/listOfNames.length))/100;
    for(var i = 0; i < listOfNames.length; i++){
      if(listOfNames[i] != ""){
        money[listOfNames[i]] += pricePerPerson;
      }
    }
    numTracker += 1;
  }
  for(var i = 0; i < money.length; i++){
    var moneyID = document.getElementById("money"+i);
    moneyID.innerHTML = "$" + money[i];
  }
}


//Hexadecimal Numbers
//use 0x to indicate Hexadecimal as combared to binary which is 0b
//10 --> A 11 --> B 12 --> C 13 --> D 14 --> E 15 ---> F
//every 4 bits in binary to 1 bit in hexadecimal
//left most bit is significant bit, right most is least significant
//8 bits craete a byte, 4 bits create a nibble
//2 ^ 10 = 1 kilo ~1000
//2 ^ 20 = 1 mega ~1million
//2 ^ 30 = 1 giga ~1 billion
//how many values can a 32 value bit represent? Around 1 billion because 2^30 is around 2 ^ 32.
//over flow -- digital systems operate on a fixed number on bits
//overflow: when result is too big to fit in the avilable number of bits
//obvious example: 11+6
//Programming Club: Tuesday, September 3 G008 AA 7-7:30

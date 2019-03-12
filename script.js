let loop = true;

while (loop){
    let choice = prompt("Odaberi redni broj algoritma kojeg zelis izvrsiti: \n\n 1 \u2BC8 Obrni sve \n\n 2 \u2BC8 Max slova \n\n 3 \u2BC8 Capitalize \n\n 4 \u2BC8 Obrni slova \n\n KRAJ \u2BC8 Kraj programa");
    if (choice != undefined){
        if(choice == "1" || choice == "2" || choice == "3" || choice == "4"){
            let text = prompt("Unesite tekst za algoritam:");
            if (text.length == 0)
            {
                alert("Algorithm input cannot be empty");
            }
            else{
            switch(choice){
                case "1":
                    alert(reverse(text));
                    break;
                case "2":
                    maxLetters(text);
                    break;
                case "3":
                    capitalize(text);
                    break;
                case "4":
                    reverseSentence(text);
            }
            }
        }    
        else if (choice.toLowerCase() == "kraj"){
            if(window.confirm("Are you sure you want to end the program?")){
                loop = false;
            } 
        }
        else
        alert("Invalid choice input");
    }
    else{
        if(window.confirm("Are you sure you want to end the program?")){
            loop = false;
        }
    }
}

function reverse(text){
    let word = text.split("").reverse().join("");
    return word;
}

function maxLetters(text){
    let letters = {};
    let maxLetter = "";
    for(let i = 0; i < text.length; i++)
    {
        let letter = text[i];
        if(!letters[letter]){
        letters[letter] = 1;
        }
        else{
        letters[letter]++;
        }
        if(maxLetter == "" || letters[letter] > letters[maxLetter]){
            maxLetter = letter;
        }
}
    alert(maxLetter);
}

function capitalize(text){
    let strings = text.toLowerCase().split(" ");
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].substring(1);     
    }
    alert(strings.join(" "));
}

function reverseSentence(text){
    let strings = text.split(' ');
    for (let i = 0; i < strings.length; i++){
        strings[i] = reverse(strings[i]);
    }
    alert(strings.join(" "))
}

array = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male"
    },
    {
        name: "C-3PO",
        height: 167,
        mass: 75,
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a"
    },
    {
        name: "R2-D2",
        height: 96,
        mass: 32,
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a"
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male"
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female"
    }];

secondTask(array);

function secondTask(array){
    array.sort(function(a, b){
        return a.height - b.height;
    })
    let totalMass = 0;
    for(let character of array){
        console.log(character);
        totalMass += character.mass;
    }
    console.log("Average mass is", totalMass/2);
}

var array;
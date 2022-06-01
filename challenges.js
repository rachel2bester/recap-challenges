
const coaches = ["rob", "charlie", "jake", "andy"];

const capitalizeArray = (arr) => {
    return newArr = arr.map((string) => {
        return string.charAt(0).toUpperCase() + string.slice(1, string.length)
    })
}

//console.log(capitalizeArray(coaches))


const letters = ["a", "b", "g", "r", "u", "p", "w", "a"]

const removeVowels = (arr) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return arr.filter((letter) => !vowels.includes(letter))
}

//console.log(removeVowels(letters))

const numbers = [233, 946, 8, 6538, 67, 2, 275, 12];

const mean = (arr) => {
    return arr.reduce((total, current) => total += current)/arr.length;
}

//console.log(mean(numbers));



//Practice Problem Solving

const words = ["spray", "limit", "disco", "exuberant", "destruction", "present"]

const onlyEs = (arr) => {
    return arr.filter((word) => word.includes("e"))
}

//console.log(onlyEs(words))

const twoWords = ["please camel", "join casing", "these disco", "with shoes"]

const toCamelCase = (arr) => {
    return arr.map((string) => {
        let words = string.split(" ");
        const firstWord = words[0]
        words.shift();
        words = capitalizeArray(words);
        words.unshift(firstWord);
        return words.join("")
    })
}

//console.log(toCamelCase(twoWords))


const scrabbleWord = [{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}];

const calculateScrabbleScore = (word) => {

    word.forEach((obj) => {
        console.log(obj.value)
    })
    return word.reduce((total, obj) => total += obj.value)
}

console.log(calculateScrabbleScore(scrabbleWord))
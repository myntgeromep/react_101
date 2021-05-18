function convertToVowels(word) {
    findVowels = word.match(/[aeiou]/gi)
    joinVowels = findVowels.join("")
    return joinVowels
};

const word = "thisissomeword"
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels)
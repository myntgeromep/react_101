const isTrue = true
const isFalse = false

function isPalindrome(word) {
    matchWhiteSpace = /\s+/g
    firstWordRemoveSpace = word.replace(matchWhiteSpace, '')
    firstWordToLowerCase = firstWordRemoveSpace.toLowerCase()
    console.log("First Word: " + firstWordToLowerCase)

    secondWordSplit = firstWordToLowerCase.split('')
    secondWordReverse = secondWordSplit.reverse()
    secondWordJoin = secondWordReverse.join('')
    console.log("Second Word: " +secondWordJoin)

    if (secondWordJoin === firstWordToLowerCase) {
        console.log(isTrue)
        return
    } else {
        console.log(isFalse)
        return
    }
}

isPalindrome("racecar")
isPalindrome("deified")
isPalindrome("uwu")
isPalindrome("cat")
isPalindrome("person")
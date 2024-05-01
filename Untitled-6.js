
// A function with to parameters:
// Match the letter in the position of the word starting with position 0
function letterFinder(word, match){
    for (i = 0; i < word.length; i ++) {
        if(word[i] == match) {  // looks up all letters within the word and checks with match 
            console.log("Found the", match, "at", i)
        }
        else{
            console.log("---No match found at", i)
        }
    }

}

letterFinder("test", "t")
function WordFinder(sentence , word){

    if (typeof sentence !=="string" || typeof word !=="string" || sentence.includes(word)) {
    
     
    return "done"
    
    } 
    
    throw Error("typeof of the sentence or the word is wrong, otherwise be catious if your word and sentence are matched")
    
    }
    console.log(WordFinder("hello world","dog"))
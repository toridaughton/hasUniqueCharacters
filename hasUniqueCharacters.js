

// Write your code below this line.
const uniqueCharacters = (str) =>{
    for(let i = 0; i <= str.length; i++){
        for(let k = i+1; k <= str.length; k++){
            if(str[k] === str[i]){
                
                return false;
            }
        }
    }
    return true;
}

const checkUnique = uniqueCharacters("MonMay");
console.log(checkUnique)



// uniqueCharacters = (text, index) => {
//     if()
// }
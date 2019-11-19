const loadInWords = (list) => {
    let temp = []
    for (const key in list){
        temp = temp.concat(list[key])
      }
    return temp
}

const loadInWordsAsKeyValueList = (list) => {
    let temp = {}
    for (const key in list){
        for (const word in list[key]){
          //console.log(list[key][word].split('').sort())
          //console.log(list[key][word])
          const letters = list[key][word].split('').sort()
          //console.log(letters in temp)
          // Check if same key exists, if it exists then concat previous array
          if(letters in temp)
            temp[letters] = temp[letters].concat(list[key][word])
          else
            temp[letters] = [list[key][word]]
        }
      }
    return temp
}

const wordToLetterObject = (word) =>{
  const letterObj ={}
  for(const key in word){
    if(word[key] in letterObj)
    letterObj[word[key]] += 1
    else
    letterObj[word[key]] = 1
  }
  return letterObj
}

const getVowel = () =>{
  const n = Math.floor(Math.random() * 99)

  if(n < 25)  return "a" //0-24,      25/99 chance
  else if(n < 41) return "e" //25-40, 16/99 chance
  else if(n < 63) return "i" //41-62, 22/99 chance
  else if(n < 75) return "o" //63-74, 12/99 chance
  else if(n < 86) return "u" //75-85, 11/99 chance
  else if(n < 90) return "y" //86-89,  4/99 chance
  else if(n < 98) return "ä" //90-97,  8/99 chance
  else return "ö" //98                 1/99 chance
}

const getConsonant = () =>{
  const n = Math.floor(Math.random() * 117)

  if(n < 1)  return "b" //0,             1/117 chance
  else if(n < 2) return "c" //1,         1/117 chance
  else if(n < 5) return "d" //2-4,       3/117 chance
  else if(n < 6) return "f" //5,         1/117 chance
  else if(n < 7) return "g" //6,         1/117 chance
  else if(n < 11) return "h" //7-10,     4/117 chance
  else if(n < 16) return "j" //11-15,    5/117 chance
  else if(n < 26) return "k" //16-25,   10/117 chance
  else if(n < 38) return "l" //26-37,   12/117 chance
  else if(n < 45) return "m" //38-44,    7/117 chance
  else if(n < 63) return "n" //45-62,    18/117 chance
  else if(n < 67) return "p" //63-66,    4/117 chance
  else if(n < 68) return "q" //67,       1/117 chance
  else if(n < 74) return "r" //68-73,    6/117 chance
  else if(n < 90) return "s" //74-89,   16/117 chance
  else if(n < 108) return "t" //90-107, 18/117 chance
  else if(n < 113) return "v" //108-112, 5/117 chance
  else if(n < 114) return "w" //113,     1/117 chance
  else if(n < 115) return "x" //114,     1/117 chance
  else if(n < 116) return "z" //115,     1/117 chance
  else return "å" //116,                 1/117 chance
}

export default {loadInWords, loadInWordsAsKeyValueList, wordToLetterObject, getVowel, getConsonant}
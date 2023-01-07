function isVowel(char){
  char = char.toLowerCase();
  return 'aeiou'.includes(char);
}

function vowelCount(str){
    let map = new Map();
   for(let i = 0; i < str.length;i++){
      if(isVowel(str[i]) && map.has(str[i])){
         map.set(str[i],map.get(str[i])+1)
      }else if(isVowel(str[i])){
          map.set(str[i],1)
      }
   }
   return map;
}


console.log(vowelCount("aosdjaafoip"))
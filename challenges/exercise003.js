function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  arr_squares = nums;
  for (let key in arr_squares){
    arr_squares[key] = Math.pow(arr_squares[key], 2);
  }
  return(arr_squares)
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  function toCamelCase(str) {
    return str.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
        return match.charAt(match.length-1).toUpperCase();
    });
  }

  for (let key in words){
    if (key == 0) {
      new_word = words[key];
    } else{
      new_word = new_word + toCamelCase(words[key]);
    }
  }
  return(new_word)
}


function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
  var count = 0;
  for (let key in people){
    subj = people[key].subjects.length
    count = count + subj
  }
  return(count);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  var exist_ing = false
  for (let key in menu){
    ingr = menu[key].ingredients
    exist_ing = ingr.includes(ingredient)

    if (exist_ing == true) {
      return(exist_ing)
    }
  }
  return(false);

}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  var array_intersection = arr1.filter(function(x) {
    // checking second array contains the element "x"
    if(arr2.indexOf(x) != -1)
      return true;
    else
      return false;
  });
  filtered_array_intersection = [...new Set(array_intersection)].sort();
  return(filtered_array_intersection)
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

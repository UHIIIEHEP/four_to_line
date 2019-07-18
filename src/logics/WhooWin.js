export default function(value){
  let cb = 'none';
  /* Проверка на ничью */
  let all = 0;
  value.forEach(val => {
    function filterVal(element, index, array) {
      return element === 0;
    }
    all += val.some(filterVal);
  })
  cb = all === 0 ? 'friends': 'none'

  /* Проверка победителя по вертикали */

  all = 0;

  value.forEach(val => {
    for (let i = 0; i < (val.length-4); i++) {
      let tempArr = [];
      for (let j = 0; j < 4; j++){
        tempArr.push(val[j+i]);
      }
      function isPositiveU1(number) {
        return number == 'u1';
      }      
      if(tempArr.every(isPositiveU1)){
        cb = "u1"
      }
      function isPositiveU2(number) {
        return number == 'u2';
      }      
      if(tempArr.every(isPositiveU2)){
        cb = "u2"
      }
    }
  })

  return cb;
};
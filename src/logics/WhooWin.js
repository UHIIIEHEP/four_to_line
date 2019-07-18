export default function(value){
  
  let cb = 'none';

  if (sheck(value) === 'none') {
    let newValue = rotateArr(value);
    if(sheck(newValue) === 'none'){
      /* Проверка на ничью */
      let all = 0;
      value.forEach((val) => {
        function filterVal(element) {
          return element === 0;
        }
        all += val.some(filterVal);
      })
      cb = all === 0 ? 'friends': 'none';
    } else {
      cb = sheck(newValue);
    }
  } else {
    cb = sheck(value);
  };
  return cb;
};

function sheck(arr) {
  let cb = 'none'
  arr.forEach(val => {
    for (let i = 0; i < (val.length-4); i++) {
      let tempArr = [];
      for (let j = 0; j < 4; j++){
        tempArr.push(val[j+i]);
      }
      function isPositiveU1(number) {
        return number === 'u1';
      }
      if(tempArr.every(isPositiveU1)){
        cb = "user1"
      }
      function isPositiveU2(number) {
        return number === 'u2';
      }
      if(tempArr.every(isPositiveU2)){
        cb = "user2"
      }
    }
  })
  return cb;
}

function rotateArr (oldArr) {
  let widthArr = oldArr.length;
  let newArr = [];

  for (let i = 0; i < widthArr; i++) {
    let heightArr = oldArr[i].length;
    let line = [];
    for (let j = 0; j < heightArr; j++) {
      line.push(oldArr[j][i]);
    }
    newArr.push(line);
  }
  return newArr;
}
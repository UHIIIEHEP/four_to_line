export default function(value){
  let all = 0;
  value.forEach(val => {
    function filterVal(element, index, array) {
      return element === 0;
    }
    all += val.some(filterVal);
  })
  if(all === 0 ){
    return "friends"
  } else {
    return "none"
  }
};
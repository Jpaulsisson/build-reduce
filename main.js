///// build your own array.reduce() /////

const array = [1,2,3,4,5]
const func = (acc, cV) => {
    return acc + cV;
  }


const init = 0;


////// first-ish attempt //////////
function myReduce(array, func, init) {
  let acc = init;
  for (let i = 0; i < array.length; i++) {         // I spent a crap load of time figuring out reduce about 6 months ago.
    acc = func(acc, array[i]);                     // it's the best method 
  }
  return acc;
}

console.log(myReduce(array, func, init))
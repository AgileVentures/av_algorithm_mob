function everyOther(array) {
    const startTime = new Date().getTime();
  let new_array = []

  array.forEach((element, index) => {
    if (index % 2 == 0) {
      return new_array.push(element) 
    } 
  });
  console.log(`Running time 1 = ${new Date().getTime() - startTime} ms`);
  return new_array
}

function everySecond(array) {
  const startTime = new Date().getTime();
  let new_array = []
  let index = 0;
  while(index < array.length){
      new_array.push(array[index])
      index += 2
  }
  console.log(`Running time 2 = ${new Date().getTime() - startTime} ms`);
  return new_array
}

function newArray(length){
    let arr = new Array
    for(i=0; i < length; i++){
        arr.push(i)
    }
    return arr
}
everyOther(newArray(10000000) )
everySecond(newArray(10000000))


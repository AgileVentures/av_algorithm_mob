function selectionSort(arr){
	let len = arr.length 
	for(let i = 0; i < len; i++){
		let lowest = i
		for(let j = i+1; j < len; j++){
			if (arr[lowest] > arr[j]){
				lowest = j;
			}
		
		}
		if (lowest != i){
			let temp = arr[lowest];
			arr[lowest]= arr[i];
			arr[i] = temp;
		}
	}
	return arr
}

console.log(selectionSort([2,5,4,1,3]))
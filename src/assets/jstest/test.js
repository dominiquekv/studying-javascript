function returnEvenValues(array) {

    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array [i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} is not even.`);
        }
    }
    console.log('The even numbers are: ' + evenNums);
}

let array = [1, 2, 3, 4, 5, 8];

returnEvenValues(array);
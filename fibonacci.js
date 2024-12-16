const fibs = (number) => {
    let array = [0, 1];
    for (let i = 2; i < number; i++) {
        let sum = array[i - 1] + array[i - 2];
        array.push(sum);
    }
    return array.slice(0, number);

};

console.log(fibs(8))

const fibsRec = (number, array = [0, 1]) => {
    console.log("This was printed recursively");

    if (array.length >= number) {
        return array.slice(0, number);
    } else {
        array.push(array[array.length - 1] + array[array.length - 2])
        return fibsRec(number, array);
    }
}

console.log(fibsRec(8));
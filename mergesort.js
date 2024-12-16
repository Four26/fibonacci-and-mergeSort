const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));

};

const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        const leftEl = left[leftIndex];
        const rightEl = right[rightIndex];

        if (leftEl < rightEl) {
            result.push(leftEl);
            leftIndex++
        } else {
            result.push(rightEl);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
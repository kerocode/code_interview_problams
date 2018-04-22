function quickSort(arr, low, high) {
    if (low >= high) {
        return;
    }
    let pivot = Math.floor((low + high) / 2);
    let idx = partition(arr, low, high, pivot);
    quickSort(arr, low, idx - 1);
    quickSort(arr, idx, high);
};

function partition(arr, low, high, idx) {
    let pivot = arr[idx];
    while (low <= high) {
        while (arr[low] < pivot) {
            low++;
        }
        while (arr[high] > pivot) {
            high--;
        }
        if (low <= high) {
            swap(arr, low, high);
            low++;
            high--;
        }
    }
    return low;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort(arr) {
    quickSort(arr, 0, arr.length - 1);
    return arr;
}


console.log(sort([2, 4, 1, 23, 8, 3]));

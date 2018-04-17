function printBinary(n) {
    let binarynum = "";

    function printBinaryHelper(n) {
        if (n > 1) {
            let num = Math.floor(n / 2);
            printBinaryHelper(num);
        }
        binarynum += n % 2;
    }
    printBinaryHelper(10);
    return binarynum;
}


console.log(printBinary(5));

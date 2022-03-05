 let arry = [ 10, 11, 12, 13, 14, 15];

function calculateAverage(array) {
    var sum = 0;
    var count = 0;

    array.forEach(function(item) {
        sum += item;
        count++;
    });

    return Math.floor( sum / count)
}

console.log(calculateAverage(arry));
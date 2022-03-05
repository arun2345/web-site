


function getMaxArea(arr, n) {
    var area = 0;
    for (var i = 0; i < n; i++) {
        var left_index;
        var right_index;

        for (var j = i; j >= 0; j--) {
            if (arr[j] < arr[i]) {
                left_index = j;
                break;
            }

        }
        left_index = j;

        for (var j = i; j < n; j++) {
            if (arr[j] < arr[i]) {
                right_index = j;
                break;
            }

        }
        right_index = j;
          
        area = Math.max(area, arr[i] 
            * (right_index - left_index - 1));
    }
    return area;
}

var array = [6, 2, 5, 4, 5, 1, 6];
console.log(getMaxArea(array, 5));
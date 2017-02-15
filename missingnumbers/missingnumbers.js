//Function that finds missing number in Array
function findMissing(arr1, arr2){
    var sumarr1 = 0;
    var sumarr2 = 0;
     // Compare the length of the arrays 
    if (arr1.length == arr2.length){
        return 0;
    }
    //Loop through arr1 and sum up the numbers in the array
    for(var number of arr1){
        //Sum of numbers assigned to sumarr1
        sumarr1 += number;
    }
    //Loop through arr2 and sum up the numbers in the array
    for(var number of arr2) {
        //Sum of numbers assigned to sumarr2
        sumarr2 += number;
    }   
    //If sum of the first array is greater than the second array
    //Return the sum of the first array minus sum of the second array
    if (sumarr1 > sumarr2){
        return sumarr1 - sumarr2;
    }
    //Otherwise return sum of second array minus first array
    else{
        return sumarr2 - sumarr1;
    } 
}

module.exports = findMissing;
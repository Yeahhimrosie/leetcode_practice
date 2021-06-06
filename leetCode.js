//leetCode.js
//5/15/2021

//Given a valid (IPv4) IP address, return a defanged version of that IP address.
//A defanged IP address replaces every period "." with "[.]".

//GIVEN BY LEETCODE
//@param {string} address
//@return {string}
//var defangIPaddr = function(address) {
    
//};

//SUCCESSFUL SUBMISSION:
//.spit() - this divides the stringn based on the passed in character (will default to an array that splits at each character and add in commas). 
//.join() - this will put it back together as a string "" with whatever you want to replace certain characters with. 

var defangIPaddr = function(address) {
	return address.split('.').join('[.]')};
	var result = defangIPaddr("1.1.1.1");
console.log(result)


//5/22/2021
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it in the maximum amount of balanced strings.
// Return the maximum amount of split balanced strings.

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

var balancedStringSplit = function(s) {
    this.answer = 0;
    count = 0;
    for(var i = 0; i <s.length; i++){
        if (s[i] == "L"){
            count ++;
        } else {
            count --;
        }
        if (count === 0){
            this.answer ++;
        }
    }
    return this.answer;       
};

//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
//EX:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var shuffle = function(nums, n) {
    this.result = [];
    for(var i = 0; i < n; i++){
        this.result.push(nums[i]);
        this.result.push(nums[i+n]);
    }
    return this.result;
};

//5/29/2021
//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

var runningSum = function(nums) {
    var sum = 0;
    newArr = [];
    for(var i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        newArr.push(sum);
    }
    return newArr;
};
console.log(runningSum([1,2,3,4]));


//Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the -ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
//@param {number[]} candies
//@param {number} extraCandies
//@return {boolean[]} <--- On leetCode you must pay attention to what it is asking for as far as data type!!

var kidsWithCandies = function(candies, extraCandies){
    let  newArr = [];
    let thomas = 0;
    for(var i = 0; i < candies.length; i++){   //Others used Math.max(...candies) library to find the largest value within the declared array
        if(candies[i] > thomas){
            thomas = candies[i];
        }
    }
    
    for(var i = 0; i < candies.length; i++){
        console.log(candies[i] + extraCandies);
        if(candies[i] + extraCandies >= thomas){
            newArr.push(true);   //we had put "" string values here which threw the leetCode result checker!
        } else {
            newArr.push(false);  //we had put "" string values here which threw the leetCode result checker!
        }
    }
    return newArr;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));


//leetCode 6/5/2021 #55



// 6/6/2021 #6
//@param {string} s
//@param {number} numRows
//@return {string}

var convert = function (s, numRows) {
    var row_pos = 0;
    var row_adj = 1;
    var newArr = [];
    for (var i = 0; i<s.length; i++) {
        rowdata = (newArr[row_pos] == undefined ? "" : newArr[row_pos]); // adding in a ? : is known as "terniary"  this give the ability to add in an if true or else false block conditional.
        rowdata += s[i];
        newArr[row_pos] = rowdata;
        row_pos += row_adj;
        if (row_pos == 0) {row_adj=1;}
        if (row_pos == numRows-1) {row_adj=-1;}
    }
    return newArr.join("")
}

console.log(convert("PAYPALISHIRING",3))
// .join() allows the information to be set into one single string 
//.replace(/,/g, '') says to take of what ever is in '//, and g means globally, then replace with "whatever is in here")
//HERE IS AN EVEN MORE CONDENSED VERSION BELOW :)
// var convert = function (s, numRows) {
//     var row_pos = 0;
//     var row_adj = 1;
//     var newArr = [];
//     for (var i = 0; i<s.length; i++) {
//         newArr[row_pos] = (newArr[row_pos] == undefined ? s[i] : newArr[row_pos] + s[i]);
//         row_pos += row_adj;
//         if (row_pos == 0) {row_adj=1;}
//         if (row_pos == numRows-1) {row_adj=-1;}
//     }
//     return newArr.join("")
// }

// console.log(convert("PAYPALISHIRING",3))
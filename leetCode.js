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
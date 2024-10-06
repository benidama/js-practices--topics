let new1 = "iyezeyi";
let new2 = "yudatt";

function palindrome(str){
    const avr = str.split("").reverse().join("");
    if(avr == str){
        return true;
    }else{
        return false;
    }  
}

console.log(palindrome(new1));
console.log(palindrome(new2));

// function isPalindrome(str) {
// 	let rev = str.split("").reverse().join("");

// 	if (rev == str) {
// 		return true
// 	}
// 	return false

// }

// let str1 = "racecar";
// let str2 = "nitin";
// let str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));

function palindromee(at){
    let are = "";
    for(let i = at.length-1; i >= 0; i--){
        are += at[i];
    }
    if(are == at){
        return true;
    }else{
        return false;
    }
}
let wn = "nitin";
console.log(palindronee(wn));

function isPalindrome(str) {
	let rev = "";
	for (let i = str.length - 1; i >= 0; i--) {
		rev += str[i];
	}
	if (rev == str) {
		return true
	} else {
		return false;
	}
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));


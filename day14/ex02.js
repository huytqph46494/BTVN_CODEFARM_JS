function isPalindrome(str){
    let cleaned =str.replace(/\s+/g, "")
    cleaned= cleaned.toLowerCase()
    let revesed = cleaned.split("").reverse().join("")
    return cleaned===revesed
}
console.log(isPalindrome("race car"))
console.log(isPalindrome("race"))
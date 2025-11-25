function countWords(str){
    let cleaned = str.trim();
    if (cleaned === "") return 0
    cleaned = cleaned.replace(/\s+/g, " ")
    return cleaned.split(" ").length;
}

console.log(countWords("   Hôm  nay   trời đẹp quá   "))
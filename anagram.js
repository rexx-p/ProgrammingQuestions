let words = ["eat", "tea", "tan", "ate", "nat", "bat"]


const groupAnagrams = (words) => {
    let map = {};
    for (let index = 0; index < words.length; index++) {
        let word = words[index];
        let sortedWord = word.split('').sort().join('');
        let existingList = map[sortedWord];
        if (existingList) {
            existingList.push(word);
            map[sortedWord] = existingList;
        } else {
            map[sortedWord] = [word];
        }
    }
    return Object.values(map);

}

console.log(groupAnagrams(words));
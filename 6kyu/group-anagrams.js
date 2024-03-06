function groupAnagrams(words){
    function isAnagram(a, b){
        // Check if both string has same length or not
        if (a.length != b.length) {
            return false;
        }
        // Creating a HashMap containing Character as Key and Integer as Value.
        // We will be storing character as key and count of character as Value.
        let map = new Map();
        // Loop over all character of first string and put in HashMap.
        for (let i = 0; i < a.length; i++) {
            // Check if HashMap already contain the current  character or not
            if (map.has(a[i])) {
                // If contains then increase count by 1
                console.log(map)
                map.set(a[i],
                        map.get(a[i]) + 1);
                        console.log(map)
            }
            else {
                // else set that character in map and set count to 1 as
                // character is encountered first time
                map.set(a[i], 1);
            }
        }
        console.log(map)
        // Now similarly iterating for second string
        for (let i = 0; i < b.length; i++) {
            // Check if HashMap already contain the current character or not
            if (map.has(b[i])) {
                // If contains reduce count of that character by 1 to indicate
                // that current character has been already counted as
                // idea here is to check if in last count of
                // all characters in last is zero which
                // means all characters in String a are
                // present in String b.
                map.set(b[i],map.get(b[i]) - 1);
            }
        }
        // Extract all keys of HashMap/map
        let keys = map.keys();
        // Loop over all keys and check if all keys are 0
        // as it means that all the characters are present
        // in equal count in both strings.
        for (let key of keys) {
            if (map.get(key) != 0) {
                return false;
            }
        }
        // Returning True as all keys are zero
        return true;
    }
    isAnagram('atiltvenera', 'alternative')
    console.log(isAnagram('listen', 'silent'))
 
}
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"])
function weightedStrings(s, queries) {
    const weights = new Set();

    for (let i = 0; i < s.length; i++) {

        let charWeight = s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
        let currentWeight = charWeight;
        

        weights.add(currentWeight);
        

        for (let j = i + 1; j < s.length && s[j] === s[i]; j++) {
            currentWeight += charWeight;
            weights.add(currentWeight);
            i = j;
        }
    }
    
    return queries.map(query => weights.has(query) ? "Yes" : "No");
}

const s = "abbcccd";
const queries = [1, 3, 9, 8];
console.log(weightedStrings(s, queries));
function highestPalindrome(s, k) {
    function makePalindrome(sArray, left, right, k, modifiedIndices) {
        if (left >= right) {
        }

        if (sArray[left] !== sArray[right]) {
            const maxChar = Math.max(sArray[left], sArray[right]);
            sArray[left] = sArray[right] = maxChar;
            modifiedIndices[left] = modifiedIndices[right] = true;
            return makePalindrome(sArray, left + 1, right - 1, k - 1, modifiedIndices);
        }
        return makePalindrome(sArray, left + 1, right - 1, k, modifiedIndices);
    }

    function maximizePalindrome(sArray, left, right, k, modifiedIndices) {
        if (left >= right) return sArray;

        if (sArray[left] < '9') {
            if (modifiedIndices[left] || modifiedIndices[right]) {
                sArray[left] = sArray[right] = '9';
                maximizePalindrome(sArray, left + 1, right - 1, k - 1, modifiedIndices);
            } else if (k >= 2) {
                sArray[left] = sArray[right] = '9';
                maximizePalindrome(sArray, left + 1, right - 1, k - 2, modifiedIndices);
            }
        } else {
            maximizePalindrome(sArray, left + 1, right - 1, k, modifiedIndices);
        }
    }

    const sArray = s.split('');
    const modifiedIndices = new Array(s.length).fill(false);

    const palindromeForm = makePalindrome(sArray, 0, sArray.length - 1, k, modifiedIndices);

    maximizePalindrome(sArray, 0, sArray.length - 1, k, modifiedIndices);

    return sArray.join('');
}

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("932239", 2));

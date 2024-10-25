function isBalancedBrackets(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };


    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }

        else if (char === ')' || char === ']' || char === '}') {
            if (stack.pop() !== bracketMap[char]) {
                return "NO";
            }
        }
    }


    return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalancedBrackets("{ [ ( ) ] }"));
console.log(isBalancedBrackets("{ [ ( ] ) }"));
console.log(isBalancedBrackets("{ ( ( [ ] ) [ ] ) [ ] }"));

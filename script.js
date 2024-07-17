function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const charSet = new Set();
    for (let i = 0; i < s2.length; i++) {
        charSet.add(s2.charAt(i).toLowerCase());
    }

    for (let i = 0; i < s1.length; i++) {
        if (charSet.has(s1.charAt(i).toLowerCase())) {
            return i + 1;
        }
    }

    
    return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

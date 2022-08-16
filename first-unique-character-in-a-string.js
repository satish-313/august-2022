const firstUniqChar = (s) => {
  const keys = {};

  for (let key of s) {
    if (key in keys) keys[key] +=1;
    else keys[key] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (keys[s[i]] === 1) return i;
  }

  return -1;
};

console.log(firstUniqChar("loveleetcode"));

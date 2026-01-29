function removeConsecutive(str) {
  const rs = [];
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] === str[i + 1])) {
      rs.push(str[i]);
    }
  }
  return rs.join("");
}
console.log(removeConsecutive("abaanaaaaaa"));

function count(string) {
  const counts = {};
  for (const char of string) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

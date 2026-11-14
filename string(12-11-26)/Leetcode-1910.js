var removeOccurrences = function (s, part) {
  while (s.includes(part)) {
    let index = s.indexOf(part);

    s = s.substring(0, index) + s.substring(index + part.length);
  }

  return s;
};
const s = "daabcbaabcbc";
const part = "abc";

console.log(removeOccurrences(s, part));

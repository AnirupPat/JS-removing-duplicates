const removeDuplicatesFromString = (text) => {
  let strA = text.split(" ");
  return [...new Set(strA)].join(" ");
};

console.log("My name is Anirup Anirup Anirup");
console.log(removeDuplicatesFromString("My name is Anirup Anirup Anirup"));

let str = prompt("Please enter a string");
str = str.replace(/\s/g, "").toUpperCase();
console.log(str);

const map = new Map();

for (let i = 0; i < str.length; i++) {
  const key = str[i];

  if (map.has(key)) map.set(key, map.get(key) + 1);
  else map.set(key, 1);
}

for (let entry of map) {
  console.log(`${entry[0]}-${entry[1]}`);
}

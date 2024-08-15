console.log("hello from js");
const name = capitalize(
  process.argv[2] || process.env.USER || process.env.USERNAME
);
console.log(name);
function capitalize(str) {
  return str
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

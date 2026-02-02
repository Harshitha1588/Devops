
const fs = require('fs');
fs.writeFileSync("sample.txt", "This is a Node.js file");
console.log("File created successfully");


const data = fs.readFileSync("sample.txt", "utf-8");
console.log(data);


fs.readFile("sample.txt", "utf-8", (err, data) => {
if (err) {
console.log("Error reading file");
} else {
console.log(data);
}
});
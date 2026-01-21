const fs = require("fs");

fs.readFile("input.txt", "utf8", function (err, data) {
    if (err) {
        console.log("Error reading file");
        return;
    }

    let words = data.split(" ");
    let wordCount = words.length;

    fs.writeFile("output.txt", "Number of words: " + wordCount, function (err) {
        if (err) {
            console.log("Error writing file");
            return;
        }

        console.log("Word count written to output.txt");
    });
});

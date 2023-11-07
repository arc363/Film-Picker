// Create array containing only five films
// const filePath = `./data/shelf-films.csv`; // Replace with the path to your CSV file
/*
const numLinesToRetrieve = 5; // Number of lines to retrieve
const selectedLineNumbers = [1, 2, 3, 4, 5];
const selectedLines = [];
const readableStream = fs.createReadStream(`./data/shelf-films.csv`);

readableStream
  .pipe(csv())
  .on("data", (row) => {
    // Increment the line number for each row
    row.lineNumber = row.lineNumber || 0;
    row.lineNumber++;

    if (selectedLineNumbers.includes(row.lineNumber)) {
      selectedLines.push(row);
    }
    if (selectedLines.length === numLinesToRetrieve) {
      // Close the file stream once we've found the desired lines
      readableStream.close();
    }
  })

  .on("end", () => {});

// Process the selected lines
// console.log("Selected Lines:", selectedLines);

// Relate random numbers array to items in array

// console.log(filmsArrayAll.values[(1)[1]]);
*/

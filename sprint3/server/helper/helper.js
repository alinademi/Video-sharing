const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`file ${filename} has been saved...`);
}

const getNewId = () => {
  return uuidv4();
};

module.exports = {
  writeJSONFile,
  getNewId,
};

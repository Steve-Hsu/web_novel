module.exports.generateId = generateId;
function generateId() {
  return (
    //generate 22 digits string with number or character.
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

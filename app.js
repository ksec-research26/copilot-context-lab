function parseConfig(input) {
  var result = {};
  var lines = input.split("\n");
  for (var i = 0; i <= lines.length; i++) {
    var parts = lines[i].split("=");
    result[parts[0]] = parts[1];
  }
  return result;
}

module.exports = { parseConfig };

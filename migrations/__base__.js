const path = require("path")
const fs = require("fs")

module.exports = function(migration) {
  const pwd = path.join(__dirname)
  const files = fs.readdirSync(pwd)

  for (let file of files) {
    if (file !== path.basename(__filename)) {
      const model = require(`${pwd}/${file}`)
      model(migration)
    }
  }
}

module.exports = function(migration) {
  const model = migration.createContentType("setting", {
    name: "Setting",
    description: "A global site-wide setting.",
  })

  model
    .createField("key")
    .name("Key")
    .type("Symbol")
    .required(true)

  model
    .createField("value")
    .name("Value")
    .type("Text")
    .required(true)

  model.changeFieldControl("value", "multipleLine")
}

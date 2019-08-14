module.exports = function(migration) {
  const model = migration.createContentType("menu_item", {
    name: "Menu Item",
    description: "An item within one or more menu sections.",
  })

  model
    .createField("title")
    .name("Title")
    .type("Symbol")
    .required(true)

  model
    .createField("label")
    .name("Label")
    .type("Symbol")
  model.changeFieldControl("label", "singleLine", null, {
    helpText: "The label is rendered as the name of the item. Defaults to the title.",
  })

  model
    .createField("body")
    .name("Body")
    .type("Text")
  model.changeFieldControl("body", "markdown", null, {
    helpText: "The body is what is listed below the label.",
  })

  model
    .createField("price")
    .name("Price")
    .type("Symbol")

  model
    .createField("vegetarian")
    .name("Vegetarian")
    .type("Boolean")

  model
    .createField("gluten_free")
    .name("Gluten Free")
    .type("Boolean")
}

const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// - `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

// - `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

//hasMany => one-to-many, FK in target
//belongsTo => one-to-one FK in source
//belongsToMany => many-to-many

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id" });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

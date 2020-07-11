
const Category = require('../db').Category;


function createCategory({ title, user }) {
  return Category.create({ title })
    .then((category) => category.setUser(user.id))
    .then(category => category.toJSON())
}

function getCategoryList() {
  return Category.findAll()
    .then(categories => categories.map(category => {
      return {
        id: category.id,
        parent_id: category.parent_id,
        title: category.title,
      }
    }));
}


module.exports = {
  createCategory,
  getCategoryList,

}

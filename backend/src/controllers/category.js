const categoryActions = require('../actions/category');

function createCategory(request, response) {
  const { title } = request.body;
  const user = request.user;
  return categoryActions.createCategory({ title, user })
    .then((category) => {
      response.status(200).json(category).send();
    })
    .catch(error => {
      response.status(400).json(error).send();
    })

}

function categoryList(reques, response) {
  return categoryActions.getCategoryList()
    .then(catigories => response.status(200).json(catigories).send())
    .catch(error => response.status(400).json(error).send());

}

module.exports = {
  createCategory,
  categoryList,

}

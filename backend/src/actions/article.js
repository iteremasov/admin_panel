const Article = require('../db').Article;

function createArticle({ title, description, image, user, category_id }) {
  return Article.create({ title, description, image })
    .then(article => article.setUser(user.id))
    .then(article => article.setCategory(category_id))
    .then(article => article.toJSON());
}

function getArticleList() {
  return Article.findAll()
    .then(articles => articles.map(article => {
      return {
        id: article.id,
        category_id: article.CategoryId,
        user_id: article.UserId,
        title: article.title,
        description: article.description,
        image: `/articles/${article.id}/image`,
      }
    }))
}

function getArticleById(id) {
  return Article.findByPk(id)
}

module.exports = {
  createArticle,
  getArticleList,
  getArticleById,
}

const articleActions = require('../actions/article');

function createArticle(request, response) {
  const { title, description, image, category_id } = request.body;
  if (!title || !description || !category_id) {
    return response.status(400).json({ error: 'Invalid data' }).send()
  }
  const user = request.user;
  return articleActions.createArticle({ title, description, user, image, category_id })
    .then(article => response.status(200).json(article).send())
    .catch(err => response.status(400).json(err).send())
}

function articleList(request, response) {
  articleActions.getArticleList()
    .then(articles => response.status(200).json(articles).send())
    .catch(err => response.status(400).json(err).send());
}

function imageById(request, response) {
  const id = request.params.id;
  articleActions.imageById(id)
    .then(article => {
      const img = new Buffer.from(article.image, 'base64');
      return response.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
      })
        .end(img)
    })
    .catch(err => response.status(200).json(err).send())
}

module.exports = {
  createArticle,
  articleList,
  imageById,
}

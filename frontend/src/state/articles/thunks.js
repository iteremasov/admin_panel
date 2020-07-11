import { fetchArticleList } from '../../api/articles';
import { loadArticles, loadArticlesError, loadArticlesSuccess } from './actions';

export const loadArticlesList = () => {
  return (dispatch) => {
    dispatch(loadArticles());
    return fetchArticleList()
      .then(articles => articles.json())
      .then((articles) => {
        return dispatch(loadArticlesSuccess(articles))
      })
      .catch((error) => {
        console.log(error)
        return dispatch(loadArticlesError(error))
      })
  }
}

import { API_BASE } from 'common/constants';
import request, { get } from 'utils/request';

const articleApi = {
  fetchArticle(id) {
    return get(`${API_BASE}/article/${id}`)
      .then((data) => data.data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
  submitComment(nickname, personalWebsite, commentContent, articleID) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        nickname,
        personalWebsite,
        commentContent,
        articleID,
      }),
    };
    return request(`${API_BASE}/comments`, options)
      .then((data) => data.data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
  fetchComments(articleID) {
    return get(`${API_BASE}/comments/${articleID}`)
      .then((data) => data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
};

export default articleApi;

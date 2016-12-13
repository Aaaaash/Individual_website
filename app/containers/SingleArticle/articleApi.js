import { API_BASE } from 'common/constants';
import request from 'utils/request';

const articleApi = {
  fetchArticle(id) {
    return request(`${API_BASE}/article/${id}`)
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
};

export default articleApi;

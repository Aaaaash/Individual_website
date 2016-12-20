import { API_BASE } from 'common/constants';
import request from 'utils/request';

const articleApi = {
  pushArticle(title, tags, content, name, published) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        title,
        tags,
        content,
        author: name,
        published,
      }),
    };
    return request(`${API_BASE}/article`, options)
      .then((data) => data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
  fetchPrivate() {
    return request(`${API_BASE}/article/private`)
      .then((data) => data.data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
};

export default articleApi;

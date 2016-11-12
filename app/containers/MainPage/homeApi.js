import { API_BASE } from 'common/constants';
import request from 'utils/request';
import axios from 'axios';

const homeApi = {
  fetchMovieList() {
    return request(`${API_BASE}/movie/top250`)
      .then((data) => data)
      .catch((err) => err);
  }
};

export default homeApi;

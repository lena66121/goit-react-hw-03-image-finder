import axios from 'axios';

export const fetchAPI = ({ API_KEY, query, currentPage }) => {
  return axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&per_page=12&page=${currentPage}&lang=en&lang=ru&image_type=photo&orientation=horizontal&q=${query}`,
  );
};

export const fetchAPIdata = ({ API_KEY, query, currentPage }) => {
  return fetchAPI({ API_KEY, query, currentPage }).then(data => data.data.hits);
};

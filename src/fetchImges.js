import axios from 'axios';

const KEY = '34066974-b9ed0af14756539ad49c5eed8';
const ENDPOINT = 'https://pixabay.com/api/';

export default class SearchApiImages {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.totalHits = null;
    this.perPage = 12;
  }

  async getImages() {
    const URL = `${ENDPOINT}?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`;

    const response = await axios(URL);
    const hits = await response.data.hits;

    this.totalHits = response.data.totalHits;
    this.nextPage();

    return hits;
  }

  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
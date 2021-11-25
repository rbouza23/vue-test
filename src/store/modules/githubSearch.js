const apiUrl = 'https://api.github.com/search/repositories';

export default {
  namespaced: true,
  state: {
    githubResults: [],
    githubResultsMeta: {
      totalCount: 0,
      currentPage: 1,
      search: '',
    },
    isLoading: false,
  },
  getters: {
    githubResults: (state) => state.githubResults,
    githubResultsMeta: (state) => state.githubResultsMeta,
    isLoading: (state) => state.isLoading,
  },
  actions: {
    getRepositories({ commit }, payload) {
      if (payload.search.trim() !== '') {
        commit('SET_IS_LOADING', true);
        fetch(`${apiUrl}?q=${encodeURIComponent(payload.search)}+is:featured&per_page=20&page=${payload.page}`)
          .then((response) => response.json())
          .then((data) => {
            commit('SET_GITHUB_RESULTS', data.items);
            commit('SET_GITHUB_RESULTS_META', {
              totalCount: data.total_count.toLocaleString('en'),
              currentPage: payload.page,
              search: payload.search,
            });
            commit('SET_IS_LOADING', false);
          })
          .catch((error) => {
            console.error(`There was an error in the Github api: ${error}`);
          });
      } else {
        commit('SET_GITHUB_RESULTS', {});
      }
    },
  },
  mutations: {
    SET_GITHUB_RESULTS: (state, githubResults) => {
      state.githubResults = githubResults;
    },
    SET_GITHUB_RESULTS_META: (state, githubResultsMeta) => {
      state.githubResultsMeta = githubResultsMeta;
    },
    SET_IS_LOADING: (state, isLoading) => {
      state.isLoading = isLoading;
    },
  },
};

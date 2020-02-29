const store = new Vuex.Store({
  state: {
    message: "hello vuex",
    count: 0
  },
  actions: {
    increment: ({ commit }, payload) => {
      commit("increment", payload);
    }
  },
  getters: {
    message(state) {
      return state.message.toUpperCase();
    },
    count(state) {
      return state.count;
    }
  },
  mutations: {
    increment(state, payload) {
      return (state.count += payload);
    }
  }
});

new Vue({
  el: "#app",
  data() {
    return {
      welcome: "Hello World"
    };
  },
  computed: {
    message() {
      return store.getters.message;
    },
    count() {
      return store.getters.count;
    }
  },
  methods: {
    updateCount(payload) {
      store.dispatch("increment", payload);
    }
  }
});

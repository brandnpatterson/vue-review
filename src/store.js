import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        text: 'Go on a walk',
        completed: true
      },
      {
        id: 2,
        text: 'Take out the trash',
        completed: false
      }
    ],
    newTodoText: '',
    newTodoId: 3
  },
  actions: {
    handleCreate({ commit }) {
      commit('handleCreate');
    },
    handleDelete({ commit }, id) {
      commit('handleDelete', id);
    },
    handleToggleCompleted({ commit }, todo) {
      commit('handleToggleCompleted', todo);
    }
  },
  mutations: {
    handleCreate() {
      let { newTodoId, todos } = this.state;

      if (this.state.newTodoText.length > 0) {
        todos.push({
          id: newTodoId++,
          text: this.state.newTodoText,
          completed: false
        });
        this.state.newTodoText = '';
      }
    },
    handleDelete(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    handleToggleCompleted(state, todo) {
      todo.completed = !todo.completed;
    }
  }
});

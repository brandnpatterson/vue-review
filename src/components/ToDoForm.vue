<template>
  <form @submit.prevent="handleCreate" action="">
    <div class="form-group">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="E.g. feed the cat"
          aria-label="add-todo"
          aria-describedby="add-todo"
          v-model="$store.state.newTodoText"
        />
        <div class="input-group-append">
          <button class="btn btn-secondary" id="add-todo">
            Add a To Do
          </button>
        </div>
      </div>
      <div class="input-group">
        <ul>
          <ToDoItem
            v-for="(todo, index) in $store.state.todos"
            :todo="todo"
            :key="todo.id"
          />
        </ul>
      </div>
    </div>
  </form>
</template>
<script>
import { mapActions } from 'vuex';
import ToDoItem from './ToDoItem.vue';

export default {
  components: {
    ToDoItem
  },
  methods: {
    ...mapActions(['handleCreate'])
  }
};
</script>

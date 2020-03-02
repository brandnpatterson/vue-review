<template>
  <form @submit.prevent="handleOnSubmit" action="">
    <div class="form-group">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="E.g. feed the cat"
          aria-label="add-todo"
          aria-describedby="add-todo"
          v-model="newTodoText"
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
            v-for="(todo, index) in todos"
            :todo="todo"
            :key="todo.id"
          />
        </ul>
      </div>
    </div>
  </form>
</template>
<script>
import ToDoItem from './ToDoItem.vue';

export default {
  components: {
    ToDoItem
  },
  data() {
    return {
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
      newId: 3
    };
  },
  methods: {
    handleOnSubmit() {
      if (this.newTodoText.length > 0) {
        this.todos.push({
          id: this.newId++,
          text: this.newTodoText,
          completed: false
        });

        this.newTodoText = '';
      }
    }
  }
};
</script>

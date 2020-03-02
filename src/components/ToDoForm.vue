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
          <li v-for="(todo, index) in todos">{{ todo.text }}</li>
        </ul>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          text: 'Feed the dog',
          completed: true
        },
        {
          id: 2,
          text: 'Make my bed',
          completed: false
        }
      ],
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

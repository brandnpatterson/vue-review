<template>
  <li>
    <input
      v-on:click="handleToggleCompleted(todo)"
      :checked="todo.completed"
      type="checkbox"
    />
    {{ todo.text }}
    <button
      class="btn btn-danger"
      v-on:click="handleDelete(todo.id)"
      type="button"
    >
      X
    </button>
  </li>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: ['todo'],
  methods: {
    ...mapActions(['handleToggleCompleted', 'handleDelete'])
  }
};
</script>

<template>
  <li>
    <input
      v-on:click="$emit('toggle')"
      :checked="todo.completed"
      type="checkbox"
    />
    {{ todo.text }}
    <button class="btn btn-danger" v-on:click="$emit('delete')" type="button">
      X
    </button>
  </li>
</template>
<script>
export default {
  props: ['todo']
};
</script>

<template>
  <li>
    <input type="checkbox" />
    {{ todo.text }}
    <button type="button">X</button>
  </li>
</template>
<script>
export default {
  props: ['todo']
};
</script>

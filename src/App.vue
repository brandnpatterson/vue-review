<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <ToDoForm />
      </div>
    </div>
  </div>
</template>
<script>
import ToDoForm from './components/ToDoForm.vue';

export default {
  components: {
    ToDoForm
  }
};
</script>

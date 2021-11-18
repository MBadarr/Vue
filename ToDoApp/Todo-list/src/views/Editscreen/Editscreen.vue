<template>
  <main class="main-wrapper">
    <button @click="this.todo">Todo List</button>
    <br />
    <br />
    <div class="new-task-wrapper">
      <input type="text" placeholder=" new todo title" class="new-task-input" v-model="newTaskInput" />
      <input type="text" placeholder="Type a new todo desc" class="new-task-input" v-model="newTaskInput1" />
    </div>
    <br />
    <button class="new-task-button" :disabled="newTaskInput == '' || newTaskInput1 == ''" @click="this.editTodo">Edit</button>
  </main>
</template>
<script>
import axios from 'axios';
import { reactive, toRefs } from '@vue/reactivity';
export default {
  mounted() {
    // redirect to login component when the user is not logged In
    if (localStorage.getItem('token') == '') {
      this.$router.push('/login');
    }
  },
  setup() {
    //   get specific todo from the list
    let urlParams = new URLSearchParams(window.location.search);

    const state = reactive({
      newTaskInput: '',
      newTaskInput1: '',
    });
    axios
      .get(`http://54.144.155.145/api/item/${urlParams.get('id')}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((res) => {
        state.newTaskInput = res.data.item.title;
        state.newTaskInput1 = res.data.item.description;
      });

    return {
      ...toRefs(state),
    };
  },
  methods: {
    //   edit todo
    editTodo() {
      let urlParams2 = new URLSearchParams(window.location.search);
      axios
        .put(
          `http://54.144.155.145/api/item/${urlParams2.get('id')}`,
          { title: this.newTaskInput, description: this.newTaskInput1 },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then(this.todo());
    },
    todo() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
html {
  background-color: #fbfbfb;
}

.task-list-checkbox-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-list-checkbox {
  position: absolute;
  left: -3px;
  bottom: 2px;
  opacity: 0;
}

.task-list {
  padding: 0;
}

.task-list-cta-icon {
  opacity: 0;
  transition: 0.2s opacity ease-in;
}

.task-list-cta-icon .icon-object {
  fill: #2d2d2d;
}

.task-list-cta-icon:hover .icon-object {
  fill: #0728bf;
}

.task-list-item {
  border: 1px solid #f6f6f6;
  box-shadow: 2px 2px 8px 0 #cfcfcf;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 16px;
}

.task-list-item:hover {
  border: 1px solid #0631f8;
}

.task-list-item:hover .task-list-cta-icon,
.task-list-item:focus .task-list-cta-icon {
  opacity: 1;
}

.task-list-cta {
  display: flex;
  column-gap: 16px;
}

.task-list-edit-input,
.task-list-text {
  margin-left: 12px;
  font-weight: bold;
  flex: 1;
  border: 0;
  font-size: 16px;
}

.task-list-text.is-complete {
  color: #6b6b6b;
  text-decoration: line-through;
}

.new-task-wrapper {
  display: flex;
}

.new-task-input {
  padding: 16px;
  font-weight: 600;
  color: #2d2d2d;
  flex: 1;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid #f6f6f6;
  box-shadow: 2px 2px 8px 0 #c0c0c0;
  letter-spacing: 1px;
  font-size: 1rem;
}

.new-task-input:hover {
  border: 1px solid #0631f8;
}

.new-task-input::placeholder {
  color: #959595;
}

.new-task-button {
  background-color: #0631f8;
  color: #fff;
  padding: 10px 14px;
  height: 45px;
  border: 0;
  border-radius: 8px;
  margin-top: 10px;
  transition: 0.2s ease-in;
  font-size: 1rem;
}

.new-task-button:hover {
  background-color: #082ac9;
}

.main-wrapper {
  max-width: 600px;
  margin: 0 auto;
}
</style>

<template>
  <div class="main-wrapper">
    <MainHero />
    <button @click="todolist">Todo List</button>
    <br />
    <br />
    <div class="new-task-wrapper">
      <input type="text" placeholder=" new todo title" class="new-task-input" v-model="newTaskInput" />
      <input type="text" placeholder="Type a new todo desc" class="new-task-input" v-model="newTaskInput1" />
    </div>
    <button class="new-task-button" @click="addTask">+ Add</button>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
import { v4 as uuid } from 'uuid';
import Axios from 'axios';
import MainHero from '../MainHero.vue';

export default {
  name: 'App',
  components: {
    MainHero,
  },
  mounted() {
    // redirect to login component when the user is not logged In
    if (localStorage.getItem('token') == '') {
      this.$router.push('/login');
    }
  },
  // get specific todo items for pre filled fields
  setup() {
    let token = localStorage.getItem('token');

    const state = reactive({
      currentView: 'All',
      newTaskInput: '',
      newTaskInput1: '',
      taskList: [],
    });
    Axios.get('http://54.144.155.145/api/items', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).then((res) => {
      state.taskList = res.data.items.data;
    });

    const taskLists = reactive({
      all: computed(() => state.taskList),
    });

    const taskListOverview = reactive([{ name: 'All', length: computed(() => taskLists.all.length) }]);

    const tasksInView = computed(() => {
      return state.taskList;
    });
    // create todo
    const addTask = () => {
      Axios.post(
        'http://54.144.155.145/api/item',

        {
          id: uuid(),
          title: state.newTaskInput,
          description: state.newTaskInput1,
        },
        { headers: { Authorization: 'Bearer ' + token } }
      ).then((res) => {
        state.taskList.push(res.data.item);
      });
      state.newTaskInput = '';
      state.newTaskInput1 = '';
    };

    const toggleEdit = (taskId) => {
      const taskIndex = state.taskList.findIndex((task) => task.id === taskId);
      Axios.put(
        `http://54.144.155.145/api/item/${taskId}`,
        {},
        {
          headers: { Authorization: 'Bearer ' + token },
        }
      );

      state.taskList[taskIndex].edit = !state.taskList[taskIndex].edit;
    };

    const deleteTask = (taskId) => {
      Axios.delete(`http://54.144.155.145/api/item/${taskId}`, {
        headers: { Authorization: 'Bearer ' + token },
      });
      const taskIndex = state.taskList.findIndex((task) => task.id === taskId);
      state.taskList.splice(taskIndex, 1);
    };

    const setView = (viewLabel) => {
      state.currentView = viewLabel;
    };

    return {
      ...toRefs(state),
      addTask,
      deleteTask,
      setView,
      tasksInView,
      toggleEdit,

      taskListOverview,
    };
  },
  methods: {
    todolist() {
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

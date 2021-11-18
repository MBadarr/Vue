<script>
import { computed, reactive, toRefs } from "vue";
import Axios from "axios";

import Navbar from "@/component/navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      taskList: [],
    };
  },
  beforeMount() {
    this.todolist();
    console.log(this.taskList);
  },

  mounted() {
    this.token = localStorage.getItem("token");
    this.todolist();
  },

  setup() {
    const state = reactive({
      token: localStorage.getItem("token"),
      loading: false,
    });

    return {
      ...toRefs(state),
    };
  },

  methods: {
    deleteTask(taskId) {
      Axios.delete(`http://54.144.155.145/api/item/${taskId}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      const taskIndex = this.taskList.findIndex((task) => task.id === taskId);
      this.taskList.splice(taskIndex, 1);
    },
    // redirect to create todo component.
    addtodo() {
      this.$router.push("/createtodo");
    },
    // get todo list
    todolist() {
      if (localStorage.getItem("token") != "") {
        Axios.get("http://54.144.155.145/api/items", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((res) => {
            console.log("-----", res);
            this.taskList = res.data.items.data;
            this.loading = true;
          })
          .catch(() => {
            if (localStorage.getItem("token") != "") {
              Axios.post(
                `http://54.144.155.145/api/refresh-token/${localStorage.getItem(
                  "token"
                )}`
              ).then((res) =>
                localStorage.setItem("token", res.data.access_token)
              );
            }
          });
      }
    },
  },
};
</script>

<template>
  <Navbar />
  <div v-if="token == null || token == ''" id="home">
    <h2>Welcome to the Todo list App</h2>
  </div>

  <main v-if="token != null && token != ''" class="main-wrapper">
    <ul class="task-list">
      <button @click="addtodo">Add Todo</button>
      <p v-if="taskList.length <= 0 && !loading">loading...</p>
      <p v-if="loading && taskList.length <= 0">No todos</p>
      <li
        v-for="taskItem in taskList"
        :key="taskItem.id"
        class="task-list-item"
      >
        <div class="task-list-checkbox-wrapper"></div>
        <p @click="this.deleteTask(taskItem.id)" class="task-list-cta-icon">
          <i class="fa fa-trash-o" style="font-size: 24px; color: red"></i>
        </p>
        <p
          @click="
            () => {
              this.$router.push(`/edittodo?id=${taskItem.id}`);
            }
          "
          class="task-list-text"
          :class="taskItem.complete ? 'is-complete' : ''"
        >
          {{ taskItem.title }}:{{ taskItem.description }}
        </p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
html {
  background-color: #fbfbfb;
}
#nav1 {
  display: none;
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
  padding: 18px 24px;
  font-weight: 900;
  border: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: 0.2s background ease-in;
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

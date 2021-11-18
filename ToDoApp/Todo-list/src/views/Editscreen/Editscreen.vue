<template>
  <main class="main-wrapper">
    <button @click="this.todo">Todo List</button>
    <div class="new-task-wrapper">
      <input
        type="text"
        placeholder=" new todo title"
        class="new-task-input"
        v-model="newTaskInput"
      />
      <input
        type="text"
        placeholder="Type a new todo desc"
        class="new-task-input"
        v-model="newTaskInput1"
      />
    </div>
    <button
      class="new-task-button"
      :disabled="newTaskInput == '' || newTaskInput1 == ''"
      @click="this.editTodo"
    >
      Edit
    </button>
  </main>
</template>
<script>
import axios from "axios";
import { reactive, toRefs } from "@vue/reactivity";
export default {
  mounted() {
    // redirect to login component when the user is not logged In
    if (localStorage.getItem("token") == "") {
      this.$router.push("/login");
    }
  },
  setup() {
    //   get specific todo from the list
    let urlParams = new URLSearchParams(window.location.search);

    const state = reactive({
      newTaskInput: "",
      newTaskInput1: "",
    });
    axios
      .get(`http://54.144.155.145/api/item/${urlParams.get("id")}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
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
          `http://54.144.155.145/api/item/${urlParams2.get("id")}`,
          { title: this.newTaskInput, description: this.newTaskInput1 },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(this.todo());
    },
    todo() {
      this.$router.push("/");
    },
  },
};
</script>
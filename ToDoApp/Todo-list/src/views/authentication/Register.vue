<template>
  <div>
    <Navbar />
    <br />
    <form @submit="(e) => e.preventDefault()">
      <div class="form">
        <input type="email" required placeholder="Email" class="new-task-input" v-model="email" />
        <input type="password" required placeholder="Password" class="new-task-input" v-model="password" />
        <input type="password" required placeholder="Confirm Password" class="new-task-input" v-model="confirmPassword" />
        <button :disabled="isActive" @click="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import Axios from 'axios';
import Navbar from '@/component/navbar.vue';
import { computed } from '@vue/runtime-core';
export default {
  components: {
    Navbar,
  },
  setup() {
    const state = reactive({
      email: '',
      password: '',
      confirmPassword: '',
    });
    const isActive = computed(() => {
      if (state.password === state.confirmPassword && state.password !== '' && state.email !== '') {
        return false;
      } else {
        return true;
      }
    });

    return {
      ...toRefs(state),
      isActive,
    };
  },
  methods: {
    // create new user
    submit() {
      Axios.post('http://54.144.155.145/api/register', {
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword,
      })
        .then(() => this.$router.push('/login'))
        .catch((err) => (msg = err));
    },
  },
};
</script>

<style scoped>
.form {
  width: 25%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}
.new-task-input {
  margin-bottom: 20px;
}
</style>

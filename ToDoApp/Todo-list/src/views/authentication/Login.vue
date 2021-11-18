<template>
  <div>
    <Navbar />
    <br />
    <form @submit="(e) => e.preventDefault()" action="/">
      <div class="form">
        <input type="email" required placeholder="Email" class="new-task-input" v-model="email" />
        <input type="password" required placeholder="Password" class="new-task-input" v-model="password" />
        <button :disabled="isActive" @click="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from '@/component/navbar.vue';
import { reactive, toRefs } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  components: { Navbar },
  setup() {
    const state = reactive({
      email: '',
      password: '',
    });
    const isActive = computed(() => {
      if (state.password !== '' && state.email !== '') {
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
    // user get login
    submit() {
      this.axios
        .post('http://54.144.155.145/api/login', {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem('token', res.data.user.token);
          this.$router.push('/');
        })
        .catch(err);
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

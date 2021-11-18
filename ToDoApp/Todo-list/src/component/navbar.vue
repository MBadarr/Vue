<template>
  <div>
    <div v-if="isActive != null && isActive != ''" id="nav" :key="isActive">
      <router-link to="/" @click="logout">Logout</router-link>
    </div>
    <div id="nav1" v-if="isActive == null || isActive == ''" :key="isActive">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
      <router-view />
    </div>
    <router-view />
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity';

export default {
  setup() {
    const state = reactive({
      isActive: localStorage.getItem('token'),
    });

    console.log(state.isActive);
    return { ...toRefs(state) };
  },

  methods: {
    logout() {
      this.isActive = '';
      localStorage.setItem('token', '');
      this.$router.push('/login');
    },
  },
};
</script>

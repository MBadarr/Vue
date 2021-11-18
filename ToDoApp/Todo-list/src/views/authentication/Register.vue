<template>
  <div>
    <Navbar />
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
  components: { Navbar },
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
        .then((res) => this.$router.push('/login'))
        .catch((err) => (msg = err));
    },
  },
};
</script>
<style scoped>
.new-message-box-success {
  background: #eeeeee;
  padding: 3px;
  margin: 10px 0;
}

.tip-icon-success {
  background: #8bc34a;
}

.tip-box-success {
  color: #33691e;
  background: #dcedc8;
}

.tip-icon-success::before {
  font-size: 25px;
  content: '\f00c';
  top: 8px;
  left: 11px;
  font-family: FontAwesome;
  position: absolute;
  color: white;
}

.tip-icon-success i::before {
  background: #8bc34a;
}
</style>

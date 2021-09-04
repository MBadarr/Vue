<template>
  <div>
    <Navbar />
    <div class="line"></div>
    <div class="sliding-menu">
      <img src="../assets/Screenshot_1.jpg" alt="loading" width="100%"/>
    </div>
    <div class="shop">
      <p>Shop by Category</p>
    </div>
    <div class="cards">
      <div v-for="(collection,index) in collections" :key="index" class="card">
        <div v-if="index < 4">
          <img v-bind:src="'http://localhost:8000' + collection.image">
        <p>{{collection.title}}</p>
        </div>
      </div>
    </div>

    <div class="cards">
      <div  v-for="(collection,index) in collections" :key="index" class="card">
        <div v-if="index > 3 && index < 7">
          <img v-bind:src="'http://localhost:8000' + collection.image">
        <p>{{collection.title}}</p>
        </div>
      </div>
    </div>

    <div class="shop">
      <p>Discover More</p>
    </div>
    <div class="cards">
      <div  v-for="(collection,index) in collections" :key="index" class="card">
        <div v-if="index > 6 && index < 11">
          <img v-bind:src="'http://localhost:8000' + collection.image">
        <p>{{collection.title}}</p>
      </div>
    </div>
    </div>
    <div class="text2">
      <p>#Mominonline</p>
    </div>
    <div class="cards1" style="display: flex;flex-wrap: wrap" >
      <div v-for="(collection,index) in collections" :key="index">
        <div v-if="index > 10 && index < 17">
          <img v-bind:src="'http://localhost:8000' + collection.image">
        </div>
      </div>
    </div>
    <div class="shiping">
      <ul>
        <li>
          Free Shipping<br />
          <p>Free Shipping on orders above $50</p>
        </li>
        <li>
          Support 24/7<br />
          <p>Contact us 24 hours a day, 7 days a week</p>
        </li>
        <li>
          Track Your Order<br />
          <p>Track your order for quick updates</p>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      collections: []
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:8000/picture/')
      .then(response => {
        this.collections = response.data
        console.log(response.data)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

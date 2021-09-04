<template>
  <div>
    <Navbar />
    <div class="hero-img">
      <img src="../assets/Rectangle 6.jpg" alt="loading" />
    </div>
    <div class="text3">
      <p id="women">Women</p>
      <p id="warm">
        Experience the warmth and affection of of the season's festivities with
        Sapphire's unstitched Eid Edition. This collection features dazzling
        prints and intricate embroideries, canvassed on premium fabrics in a
        diverse palette of vibrant colors.
      </p>
    </div>
    <div class="icon-bar">
      <div id="slider">
        <i class="fa fa-sliders"> Filter</i>
        <select id="dropdown">
          <option value="0">Featured</option>
          <option value="1">Audi</option>
        </select>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-item1">
        <img src="../assets/Rectangle 209.jpg" />
      </div>
      <div class="grid-item2">
        <img src="../assets/Maroon.jpg" />
      </div>
      <div class="grid-item3">
        <img src="../assets/Rectangle 213.jpg" />
      </div>
      <div class="grid-item4">
        <img src="../assets/Pink.jpg" />
      </div>
      <div class="grid-item5">
        <img src="../assets/Sky.jpg" />
      </div>
    </div>
    <div class="grid-container1">
      <div class="grid-item6">
        <img src="../assets/Stool.jpg" />
      </div>
      <div class="grid-item7">
        <img src="../assets/purple.jpg" />
      </div>
      <div class="grid-item8">
        <img src="../assets/Box.jpg" />
      </div>
      <div class="grid-item9">
        <img src="../assets/Pink.jpg" />
      </div>
      <div class="grid-item10">
        <img src="../assets/Maroon.jpg" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import axios from 'axios'
export default {
  components: {
    Navbar,
    Footer
  },
  name: 'New',
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

<style></style>

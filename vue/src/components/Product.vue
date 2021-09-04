<template>
  <div>
    <Navbar />
    <div class="product-bar">
      <ul>
        <li>Home</li>
        <li>Collection</li>
        <li>Product Page</li>
      </ul>
    </div>
    <div class="grid-container">
      <div class="grid-item1">
        <img src="../assets/purple.jpg" />
      </div>
      <div class="grid-item2">
        <img src="../assets/Box.jpg" />
      </div>
      <div class="grid-item3">
        <!-- <img src="./images/Rectangle 213.jpg" /> -->
        <div class="price">
          <h3>Product Name</h3>
          <p>1,274.00 Pkr</p>
          <div class="stock">
            <p>SKU: L0310703-YEL</p>
            <p>Availability: In Stock</p>
          </div>
          <br />
          <div class="quantity">
            <div class="increment"></div>
            <button type="button">-</button>
            <input type="text" id="quantity" value="1" />
            <button type="button">+</button>
          </div>
          <div class="cart">
            <button>Add to Cart</button>
          </div>
          <br />
          <hr />
          <div class="return">
            <p><u>Delivery and Return</u></p>
            <p id="fresh">
              Freshen up your look with these women Slippers by Clive
            </p>
          </div>
          <br />
          <hr />
          <div class="color">
            <p><u>Color</u></p>
            <p>Aqua</p>
          </div>
          <div class="whatsapp">Share: <i class="fa fa-whatsapp"></i></div>
        </div>
      </div>
      <div class="grid-item4">
        <img src="../assets/Maroon.jpg" />
      </div>
      <div class="grid-item5">
        <img src="../assets/Pink.jpg" />
      </div>
    </div>
    <div class="shop">
      <p>Related Products</p>
    </div>
    <div class="cards3">
      <!-- <div class="card2"> -->
        <div  v-for="(collection,index) in collections" :key="index" class="card2" >
        <div v-if="index > 16 && index < 21">
          <img v-bind:src="'http://localhost:8000' + collection.image">
          <p id="cat">{{collection.product_name}}</p>
          <p id="piece">{{collection.product_piece}}</p>
          <p id="cat">{{collection.price}}</p>
        </div>
      <!-- </div> -->
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
  name: 'Product',
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

<style></style>

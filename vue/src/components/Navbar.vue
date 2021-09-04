<template>
  <div>
    <div class="header">
      <p class="text">
        Free Shipping in Pakistan
        <span id="contact">Talk to us 000 0000 000</span>
      </p>
    </div>
    <div class="logo">
      <router-link to="/"><img src="../assets/image.png" alt="loading" /></router-link>
    </div>
    <div class="icons">
      <i class="fa fa-search"></i>
      <i class="fa fa-heart"></i>
      <i class="fa fa-user"></i>
      <i class="fa fa-shopping-cart"></i>
      <i>(0)</i>
    </div>
    <div class="nav-bar">
      <ul>
        <li><router-link to="New">New In</router-link></li>
        <li><router-link to="Product">Clothing</router-link></li>
        <li><a href="#">Shoes</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Activewear</a></li>
        <li><a href="#">Inspiration</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  /* position: absolute; */
  display: block;
  line-height: 25px;
  background-color: darkgray;
  text-transform: uppercase;
  font-size: 0.7em;
  text-align: center;
}
#contact {
  /* position: absolute; */
  text-align: right;
  float: right;
  margin-right: 20px;
}
.text {
  margin-left: 110px;
}

.logo {
  position: absolute;
  width: 122px;
  height: 46px;
  left: 600px;
  top: 50px;
}

@media screen and (max-width: 768px) {
  .logo {
    position: absolute;
    /* width: 20px; */
    left: 150px;
    /* right: 600px; */
  }
}

.icons {
  float: right;
  margin-right: 25px;
  margin-top: 35px;
}

.nav-bar {
  text-align: center;
  font-size: 0.8em;
}

.nav-bar ul {
  list-style: none;
  text-align: center;
  margin-top: 90px;
}

.nav-bar ul li {
  display: inline-block;
  padding: 10px;
}

.nav-bar ul li a {
  text-decoration: none;
  color: black;
  width: 50px;
}

.images {
  position: absolute;
  width: 30px;
  top: 152px;
  left: 220px;
}

@media screen and (max-width: 768px) {
  .images {
    position: absolute;
    top: 152px;
    /* width: 20px; */
    left: 50px;
    /* right: 600px; */
  }
}

@media screen and (max-width: 768px) {
  .hero-img {
    position: relative;
    top: 15px;
    width: 20px;
    bottom: 50px;
    /* left: 50px; */
    right: 400px;
  }
}

.text1 {
  position: absolute;
  /* bottom: 40px; */
  left: 750px;
  top: 280px;
}
</style>

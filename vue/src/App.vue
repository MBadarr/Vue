<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap");

body {
  overflow-x: hidden;
}

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

.line {
  position: absolute;
  width: 1320px;
  height: 0px;
  left: 17px;
  top: 113px;
  border: 1px solid #a6a6a6;
}

@media screen and (max-width: 768px) {
  .line {
    position: absolute;
    width: 90%;
    top: 113px;
    border: 1px solid #a6a6a6;
  }
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
.sliding-menu {
  position: relative;
  /* overflow-y: hidden; */
}

@media screen and (max-width: 768px) {
  .images {
    position: absolute;
    top: 152px;
    left: 50px;
  }
}
.hero-img {
  position: relative;
}

@media screen and (max-width: 768px) {
  .hero-img {
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

#stitch {
  position: absolute;
  font-family: "Poppins", sans-serif;
  /* margin-left: 25px; */
  text-transform: uppercase;
  font-size: 15px;
  left: 220px;
}
#lawn {
  font-family: Playfair Display;
  position: absolute;
  text-transform: uppercase;
  font-size: 80px;
  line-height: 100px;
  color: #555555;
  left: 90px;
}
#summer {
  font-family: Playfair Display;
  position: absolute;
  font-size: 60px;
  line-height: 220px;
  color: #555555;
}
#store {
  font-family: "Poppins", sans-serif;
  line-height: 320px;
  margin-left: 170px;
}

.shop {
  position: relative;
  margin-top: 15px;
  text-align: center;
  font: bolder;
  font-size: 22px;
}

.shop::before {
  position: absolute;
  content: "";
  top: 18px;
  height: 2px;
  width: 50px;
  background: #000;
  left: 37%;
}

.shop::after {
  position: absolute;
  content: "";
  top: 18px;
  height: 2px;
  width: 50px;
  background: #000;
  left: 60%;
}

@media screen and (max-width: 768px) {
  .shop::before {
    position: relative;
    content: "";
    top: 18px;
    height: 2px;
    left: 37%;
  }
}

@media screen and (max-width: 768px) {
  .shop::after {
    position: relative;
    content: "";
    top: 18px;
    height: 2px;
    left: 37%;
  }
}

.cards {
  margin-top: 30px;
  /* margin-left: 15px; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.card img {
  width: 95%;
  box-shadow: 0px 30px lightgrey;
}
.card p {
  text-align: center;
  text-transform: uppercase;
  margin-top: 1px;
}

@media screen and (max-width: 768px) {
  .cards {
    position: relative;
    display: inline-block;
    margin-top: 25px;
    /* padding: 65px; */
    margin-left: 110px;
    /* font-size: 30px; */
  }
}

@media screen and (max-width: 768px) {
  .cards img {
    position: relative;
    display: inline-block;
    margin-top: 25px;
    font-size: 30px;
  }
}

@media screen and (max-width: 768px) {
  .cards p {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    margin-top: 1px;
  }
}

.text2 {
  position: absolute;
  display: inline-block;
  margin-top: 300px;
  margin-left: 150px;
  font-size: 30px;
}

@media screen and (max-width: 768px) {
  .text2 {
    position: relative;
    display: inline-block;
    margin-top: 25px;
    margin-left: 180px;
    font-size: 30px;
  }
}

.cards1 {
  margin-top: 65px;
  margin-left: 460px;
}

@media screen and (max-width: 768px) {
  .cards1 {
    margin-top: 65px;
    margin-left: 150px;
  }
}

.shiping {
  margin-top: 45px;
  background: #000000;
  color: white;
  padding: 25px;
}

.shiping ul {
  margin-top: 10px;
  margin-left: 40px;
}

.shiping ul li {
  /* text-decoration: none; */
  display: inline-block;
  text-indent: 180px;
}

.shiping ul li p {
  font-size: 10px;
  font-weight: 20px;
  color: #b0b0b0;
}

.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
/* ul {
  list-style: none;
} */
.footer {
  padding: 10px 5px;
  color: #6f6f6f;
}
.footer-col {
  margin-top: 25px;
  line-height: 105px;
  margin-left: 105px;
}
.footer-col p {
  line-height: 25px;
}

.footer-col ul {
  list-style: none;
}
.footer-col ul li {
  line-height: 25px;
  color: #6f6f6f;
}
.footer-col ul li a {
  list-style: none;
  color: black;
  text-decoration: none;
  color: #6f6f6f;
  height: 50px;
}

.text-box {
  line-height: 45px;
}

.trademark {
  margin-top: 55px;
  text-align: center;
  background-color: #555454;
  line-height: 35px;
}

#email {
  height: 35px;
}

input[type="email"] {
  width: 60%;
  padding: 12px;
  margin: 8px 0;
  display: inline-block;
  border: px solid #ccc;
  outline: none;
}
#btn {
  background-color: #222222;
  color: white;
  height: 35px;
  width: 80px;
  box-shadow: none;
  outline: none;
  border-style: none;
}

.text3 {
  text-align: center;
  margin-top: 40px;
  line-height: 40px;
}

#women {
  font-size: 25px;
  font-weight: 600;
  /* line-height: 40px; */
}

#warm {
  font-size: 15px;
  margin: 20px;
  line-height: 18px;
  text-align: center;
  margin-left: 150px;
  margin-right: 150px;
}

.icon-bar {
  margin-top: 5px;
  display: inline-block;
}

#slider {
  /* margin-top: 60px; */
  margin-left: 180px;
  padding: 15px;
}

#dropdown {
  margin-left: 800px;
  width: 180px;
  height: 35px;
  border-radius: 35px;
  outline: none;
  padding: 5px;
}

.wrapper {
  display: grid;
  grid-template-columns: 280px 280px 280px;
  grid-gap: 2px;
  background-color: #fff;
  color: #444;
  margin-left: 120px;
}

.grid-container {
  display: grid;
  grid-gap: 50px;
  padding: 25px;
  margin-left: 85px;
}

@media screen and (max-width: 768px) {
  .grid-container {
    margin-left: auto;
    margin-top: 50px;
    grid-row-gap: 20em;
  }
}

.grid-item3 {
  grid-column-start: 3;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 6;
}

@media screen and (max-width: 768px) {
  .grid-item3 {
    margin-left: auto;
    /* grid-template-rows: 200px 200px; */
    margin-top: 50px;
    grid-row-gap: 20em;
    /* grid-template-columns: 50px 0px 100px; */
  }
}

.grid-container {
  display: grid;
  grid-template-columns: 250px 250px;
  grid-gap: 50px;
  padding: 25px;
  margin-left: 85px;
}
.grid-item3 {
  grid-column-start: 3;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
}

.grid-container1 {
  display: grid;
  grid-template-columns: 250px 250px;
  grid-gap: 50px;
  margin-bottom: 50px;
  padding: 25px;
  margin-left: 85px;
}

.grid-item6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}

.grid-item8 {
  grid-column-start: 4;
}

.product-bar {
  background-color: #f6f6f8;
  margin-top: 10px;
}
.product-bar ul {
  list-style: none;
  padding: 2px;
  margin-left: 180px;
}
.product-bar ul li {
  display: inline-block;
  padding: 10px;
}
.product-section {
  display: grid;
  grid-template-columns: 250px 250px;
  /* grid-template-rows: repeat(8, 5vw); */
  grid-gap: 50px;
  padding: 25px;
  margin-left: 85px;
}

.img {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}

.price {
  line-height: 35px;
}
.stock {
  margin-top: 15px;
  color: #555555;
  font-size: 12px;
  line-height: 20px;
}

.return {
  font-size: 12px;
  line-height: 35px;
}
#fresh {
  color: #555555;
}
.color {
  font-size: 12px;
  line-height: 45px;
}
.whatsapp {
  line-height: 45px;
  font-size: 12px;
  color: #555555;
}
hr {
  width: 300px;
}

.quantity {
  display: flex;
  height: 40px;
  border: 1px solid black;
  width: 135px;
  padding: 2px;
}

.quantity button {
  width: 25px;
  padding: 2px;
  height: 35px;
  color: #000;
  border-radius: 0;
  background: #fff;
  border: none;
}

.quantity input {
  border: none;
  outline: none;
  text-align: center;
  width: 100px;
  font-size: 20px;
  color: #000;
  font-weight: 300;
}

.cards3 {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.card2 img {
  width: 95%;
}
.card2 p {
  text-align: center;
  text-transform: uppercase;
  margin-top: 1px;
}

#piece {
  font-size: 12px;
  color: #555555;
}

#cat {
  font-size: 12px;
  font-weight: bold;
}

.cart button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  margin-top: 2%;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 22%;
  font-size: 18px;
}

.cart button:hover {
  opacity: 0.7;
}

</style>

<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h6>Company</h6>
            <p>
              TM Waqar ventures private limited <br />
              Plot 9-A, Sanica street near Jinnah <br />
              interchange Gujranwala-Pakistan
            </p>
          </div>
          <div class="footer-col">
            <h6>Get in Touch</h6>
            <ul>
              <li>
                <a href="/">Exchanges</a>
              </li>
              <li>
                <a href="/">Returns</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h6>Information</h6>
            <ul>
              <li>
                <a href="/">Track Your Order</a>
              </li>
              <li>
                <a href="/">Wholesale</a>
              </li>
              <li>
                <a href="/">Fabric Glossary</a>
              </li>
              <li>
                <a href="/">Covid-19 Safety</a>
              </li>
              <li>
                <a href="/">Precautions</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Store Locator</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h6>Information</h6>
            <div class="text-box">
              <p>
                Subscribe to our Newsletter for <br />
                Exclusive Updates
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
              <button type="submit" id="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="trademark">
      <p>All rights reserved to @Ndure</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<style>
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
</style>

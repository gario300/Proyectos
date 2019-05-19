<template>
  <div>
    <figure id="foot">
      <img src="foot-min.png">
      
    </figure>
      
        <div id="prueba" class="columns">
          <div class="column is-6 is-offset-3 is-hidden-touch">
          <h6 id="titleplaystore" class="title is-2">Make new <span id="friends">friends</span> while having <span id="fun">fun</span></h6>
          </div>
      </div>
      <div id="prueba2" class="columns">
          <div class="column is-2 is-offset-5 is-hidden-touch">
            <a href="#" id="appstore" class="button is-black">
           <i class="fab fa-apple fa-3x"></i><p>Download on the <br> <span id="logostore">AppStore</span></p>
          </a>
          </div>
      </div>
      <div id="prueba3" class="columns is-mobile is-gaples">
          <div class="column is-hidden-desktop">
          <h6 id="titleplaystorem" class="title is-1">Make new <span id="friends">friends</span> while having <span id="fun">fun</span></h6>
          </div>
      </div>
      <div id="prueba4" class="columns is-mobile is-gaples">
          <div class="column is-2 is-offset-4 is-hidden-desktop">
            <a href="#" id="appstore" class="button is-black">
           <i class="fab fa-apple fa-3x"></i><p>Download on the <br> <span id="logostore">AppStore</span></p>
          </a>
          </div>
      </div>
      <footer>
        <div class="container">
          <div class="columns is-gapless">
            <div class="column">
              <h6>About Us</h6>
                <ul>
                  <li><a>Our History</a></li>
                  <li><a>Our sostainibility programm</a></li>
                  <li><a>Engineering</a></li>
                  <li><a>Our blog</a></li>
                  <li><a>Media Centre</a></li>
                </ul>
            </div>
            <div class="column">
              <h6>Information</h6>
              <ul>
                <li><a href="#">Carge</a></li>
                <li><a href="#">Engineering</a></li>
                <li><a href="#">Travel trade</a></li>
                <li><a href="#">Afiliates</a></li>
                <li><a href="#">Global Events</a></li>
              </ul>
            </div>
            <div class="column">
              <h6>Events And Contact</h6>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Conditions of carriage</a></li>
                <li><a href="#">LostProperty</a></li>
              </ul>
            </div>
            <div class="column">
              <h6>Follow us</h6>
            </div>
          </div>
        </div>
        <div id="end">
          <ul>
            <li><h5>Copyright @2018 Tripmatcher Limited all rigth reserved</h5></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Termns and conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Accesibily</a></li>
            <li><a href="#">Conditions</a></li>
          </ul>

        </div>
      </footer>
  </div>

</template>

<script>

export default {
  name: 'footer1',
  components: {
    
  },
  props: {
   
    
  },
  methods:{
    
}
}


</script>


<style >
#foot{
  margin-top: 10em !important;
  width: 100% !important;
  
  margin-bottom: 0em !important;
}
#foot img{
  width: 100%;
  position: relative;
  z-index: 2;
  margin-bottom: 0em !important;
}
#appstore{
  height: auto !important;
}
#titleplaystore{
  color:white;
  position:relative;
  z-index: 1;

}

#friends{
  color: aqua !important;
}
#fun{
  color:yellow !important;
}

#prueba{
  top:-300px;
  position: relative !important;
  z-index: 2;
  
  margin-bottom: 0em !important;
}
#prueba2{
  position: relative !important;
  top: -250px;
  z-index: 2;
  
  margin-bottom: 0em !important;
}

footer{

  background-color: #e6e5e5;
  z-index: 3;
}
#end{
  background-color: gray;
  height: auto;
}

#end h5{
  font-size: 12px;
  color:white;
}

#end li{
  position: relative;
  display: inline-block;
  margin-left: 1em;
  font-size: 12px;
}
#end a{
  color: white;
}

</style>

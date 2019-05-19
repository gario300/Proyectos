<template>
  <div>
    <nav class="navbar is-white">
       <div class="nav-center">
    <a class="nav-item">
      <img src="logo-min.png">
    </a>
  </div>
   <div class="nav-right navbar-menu">
    <a class="button is-white is-medium">
      Profile
    </a>
    <a class="button is-white is-medium">
      Newfeed
    </a>
    <a class="button is-white is-medium">
      Matcher
    </a>
    <a class="button is-white is-medium">
      Destinations
    </a>
    </div>
    <div class="nav-left navbar-menu">
      <div id="login">
        <a @click="mostrar">Login/register</a>
         </div>
          </div> 
          

          <a class="navbar-burger burger" data-target="navMenubd-example" @click="mostrartoggle">
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div id="menutoggle" class="is-hidden-desktop" v-if="clicktoggle.valor==2">
            <ul>
              <li>Profile</li>
              <li>Newfeed</li>
              <li>Matchers</li>
              <li>Destinations</li>
              <li><a>Login-sigUp</a></li>
            </ul>
          </div>
    </nav> 
    <formulario v-if="click.valor == 2" class="is-hidden-touch"></formulario>
  </div>
</template>

<script>
import formulario from './formulario';

export default {
  name: 'navbar',
  components: {
    formulario
  },
  props: {
    },
  data() {
    return {
      boton: {nombre:'boton', estado:false},
      click:{valor:1},
      clicktoggle:{valor:1}
    }
    
  },
  methods:{
    mostrar (){
      if (this.click.valor == 1){
        this.click.valor++
      } else{
        this.click.valor--
      }
    },
    mostrartoggle(){
      if (this.clicktoggle.valor == 1){
        this.clicktoggle.valor++
      } else{
        this.clicktoggle.valor--
      } 

    }
}
}


</script>


<style >
.nav-item img{
  position: absolute;
  left: 45%;
}
.nav-right a{
  font-weight: 700;
}
#login{
  position: absolute;
  background-color: #aa4b09;
  padding: 12px;
  border-radius: 25px;
  left: 89%;
}
#login a{
  text-decoration: none;
  color:white;
}
#menutoggle{
position: relative;
z-index: 3;
}
#menutoggle li{
  margin:2em ;
  padding-left: 7em;
  font-weight: 700;
  border-bottom: 2px solid black;
}
</style>

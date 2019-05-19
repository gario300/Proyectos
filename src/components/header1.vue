<template>
  <div>
    <div id="header">
 <img class="is-hidden-touch" id="fechas" src="pag-min.png">
 
 
    <div class="container">
      <div class="columns">
        <div class="column is-1 is-offset-2 is-hidden-touch ">
   <div class="" id="calendariobusqueda">
    <h1 class="title is-1-desktop">Find a <span id="1">travel buddy</span> and meet local</h1>
    <h2 class="title is-1-desktop">singles <span id="1">worldwide!</span> </h2>
    <div id="form">
    <ul> 
      <form action="#" method="POST"> 
      <li><input type="text" placeholder="City or Attraction" class="input" id="lugar"></li>
      <li><span>from </span><input type="date" class="input "></li>
      <li><span>until </span><input type="date" class="input"></li>
      <li><input type="submit"  value="search" id="search"></li>
      </form>
    </ul>
    </div>
    </div>
    </div>
    </div>
  </div>

 <img class="is-hidden-desktop" id="fechas2" src="pag-min.png">
   <div class="is-hidden-desktop" id="calendariobusqueda2">
    <h1 class="title is-1-desktop">Find a <span id="1">travel buddy</span> and meet local</h1>
    <h2 class="title is-1-desktop">singles <span id="1">worldwide!</span> </h2>
    <div id="form">
    <ul> 
      <form action="#" method="POST"> 
      <li><input type="text" placeholder="City or Attraction" class="input" id="lugar"></li>
      <li><span>from </span><input type="date" class="input "></li>
      <li><span>until </span><input type="date" class="input"></li>
      <li><input type="submit"  value="search" id="search"></li>
      </form>
    </ul>
    </div>
    </div>


    </div>
  </div>
</template>

<script>

export default {
  name: 'header1',
  components: {
    
  },
  props: {
    },
  data() {
    return {
      
    }
    
  },
  methods:{
   
}
}

</script>


<style>

#fechas, #header{
  width: 100%;

}
#fechas2{
  z-index: 2;
}
#calendariobusqueda{
  background-color: black;
  opacity: .50;
  position: absolute;
  top: -400px
  
}
#calendariobusqueda2{
  background-color: black;
  opacity: .50;
  position: relative;
  z-index: 2;
}
.input{
  background: transparent !important;
  border: none !important;
  color: white !important;
}
#lugar::placeholder{
  color: white!important;
}

#calendariobusqueda h2, 
#calendariobusqueda h1{
  text-align: center;
  color: white;
}

#calendariobusqueda2 h2, 
#calendariobusqueda2 h1{
  text-align: center;
  color: white;
}

#calendariobusqueda h1 span{
  color:turquoise;
}
#calendariobusqueda h2 span{
  color:yellow;
}

#calendariobusqueda2 h1 span{
  color:turquoise;
}
#calendariobusqueda2 h2 span{
  color:yellow;
}

#calendariobusqueda li{
  display:inline-block;
  margin: 1em;
  border-bottom: 2px solid white;
}

#calendariobusqueda2 li{
  display:inline-block;
  margin: 1em;
  border-bottom: 2px solid white;
} 

#search{
  background-color: #aa4b09;
  font-size: 25px;
  border: #aa4b09;
  border-radius: 10px;
  color:white;
  position:relative;
  top: 10px;
}




</style>

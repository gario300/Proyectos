<template>
  <div id="app" class="container">
      <div id="icons" class="columns">
        <div class="column is-3">
            <figure class="image container is-96x96">
                <img class="iconos-body" src="meet-min.png">        
            </figure>
                <H6 class="has-text-centered">Meet People</H6>
                <p class="has-text-centered"><span>Meet people from</span></p>
                <p class="has-text-centered"><span>all over the world</span></p>
        </div>
        
        <div class="column is-3">        
            <figure class="image container is-96x96">
               <img class="iconos-body" src="verify-min.png">
            </figure>
                <H6 class="has-text-centered">Verified Profiles</H6>
                <p class="has-text-centered"><span>verified profiles that</span><p> 
                <p class="has-text-centered"><span>you can trush</span></p> 
              
        </div>    
            
        <div class="column is-3">                
            <figure class="image container is-96x96">
                <img class="iconos-body" src="members-min.png">
            </figure>
            <H6 class="has-text-centered">Members</H6>
            <p class="has-text-centered"><span>Meet people from</span></p>
            <p class="has-text-centered"><span>all over the world</span></p>
            
        </div>    
            
        <div class="column is-3">                
            <figure class="image container is-96x96">
                <img class="iconos-body" src="app-min.png">
            </figure>
                <H6 class="has-text-centered">Mobile aplication</H6>
                <p class="has-text-centered"><span>verified profiles that</span><p> 
                <p class="has-text-centered"><span>you can trush</span></p>
        </div>    
    </div>
    
<article id="popular" class="columns">
<section id="pop" class="column is-4 is-multiline">
    <h6>popular uncoming trips</h6>
    <div class="box" v-for="item of popular">
      <div class="columns is-mobile">
        <div class="column">
          <figure id="dibujo" class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
          </figure>
        </div>
        <div class="column">
          <p>Name: </p>
          <p>{{item.nombre}}</p>
          <p id="de">From:</p>
          <p>{{item.de}}</p>
        </div>
        <div class="column">
          <p>Age:</p>
          <p>{{item.edad}}</p>
          <p id="hacia">To:</p>
          <p>{{item.hacia}}</p>
        </div>
        </div>
       </div>
      
</section>
<section class="column is-4 is-multiline">
  <h6>top 10 destinations</h6>
  <div v-for="destino of destinos" class="box">
    <div class="columns">
      <div class="column">
      <figure id="dibujo" class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
     </figure>
    </div>
    <div class="column is-10">
      <p>Rank:{{destino.rango}}</p>
      <p>{{destino.lugar}},{{destino.estado}}</p>
    </div>
    </div>
  </div>
</section>
<section class="column is-4 is-multiline">
  <h6>tripmatcher blog</h6>
  <div v-for="blog of blogs" class="box" >
    <div class="columns">
      <div class="column is-12">
        <figure><img src="top10-min.png"></figure>
      </div>
      </div>
      <div class="columns">
        <div class="column">
          <h6>{{blog.Titulo}}</h6>
        </div>
      </div>   
      <div class="columns">
        <div class="column">
          <p>{{blog.content}}</p>
        </div>
      </div>     
  </div>
</section>
</article>

<div id="papp"class="columns">
  <div class="column is-8">
    <h3>Find people <span>near you</span> to enjoy</h3>
    <h4><span>activities</span> whit</h4>
    <P>
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    </P>
  </div>
  <div class="column is-3 is-offset-1">
    <figure>
      <img src="mano-min.png">
    </figure>
  </div>
</div>

    
  </div>


</template>

<script>
import{mapState} from 'vuex';

export default {
  name: 'elbody',
  components: {
  },
  props: {
    },

  methods:{
   
},
computed:{
  ...mapState(['popular']),
  ...mapState(['destinos']),
  ...mapState(['blogs'])
}
}

</script>


<style >
h6{
    font-weight: 700 !important;
}

#popular{
  margin-top: 9em !important;
  background-color:  #f6f5f5;
}

#icons{
  margin-top: 4em !important;
}

#hacia, 
#de{
  margin-top: auto;
  font-weight: 700 !important;
}
article{
 background-color:  #f6f5f5;
}

#pop{
  overflow-y: scroll;
  height: 500px;
}

section{
  overflow-y: scroll;
  height: 500px;
}

section::-webkit-scrollbar {
    width: 12px;
}

#pop::-webkit-scrollbar {
    width: 12px;
}
#pop::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #aa4b09; 
    border-radius: 10px;
}
#pop::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #aa4b09;
}

h3,
h4{
font-size: 25px !important;
font-weight: 700 !important;
}

h3 span{
  color: #aa4b09;
}

h4 span{
  color:brown;
}

#papp{
  margin-top: 10em;
}


</style>



<template>
  <div class="columns">
      <div class="column is-2 is-offset-10 is-multiline">
        <div id="formulario_registro">
          <div class="field">
  
<form action="#" method="POST"> 
  <label class="label">E-mail</label>
  <input class="input" type="text" placeholder="Text input">
  
  <label class="label">Username</label>
  <input class="input" type="text" placeholder="Text input">
  
  <label class="label">Password</label>
  <input class="input" type="password" placeholder="Text input">
  <input type="submit" value="enviar" id="enviar"/>
</form>

  </div>
  </div>


  </div>
  </div>
</template>

<script>
export default {
  name: 'formulario',
  props: {
    
  }
}
</script>


<style >
#formulario_registro{
  position: absolute;
  background-color: white;
  border: 10px solid white;
  border-radius: 4px;
  z-index: 3;
}

</style>
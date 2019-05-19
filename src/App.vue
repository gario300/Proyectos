<template>
  <div>
<navbar></navbar>
<header1></header1>
<elbody></elbody> 
<footer1></footer1>
  </div>
</template>

<script>
import navbar from './components/nav.vue';
import header1 from './components/header1.vue';
import elbody from './components/body.vue';
import footer1 from './components/footer1.vue';
import footer2 from './components/footer2.vue';

export default {
  name: 'app',
  components: {
    navbar,
    header1, 
    elbody,
    footer1,
    footer2
  },
methods:{
  
}
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
</style>

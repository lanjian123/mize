<template>
  <div class="betf">

 <!--    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
   <!--  <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul> -->
   <!--  <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <ul class='navs-navs-btns'>
       <p>{{msg.name}}--------betf</p> 
    </ul>
  
  </div>
</template>

<script>
export default {
  name: 'betf',
  data () {
    return {
      msg: [
      { name: '上新',urlName:'/news' },
      { name: '女装',urlName:'/mans'  },
      { name: '鞋包',urlName:'/bolls'  },
      { name: '居家',urlName:'/houss'  },
      { name: '美妆',urlName:'/betf'  },
      { name: '童装',urlName:'/childer'  },
      { name: '母婴',urlName:'/momos'  }
    ] 

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
   color:#000;
   text-decoration: none;
}
.hello{
  line-height: 5rem;
  margin-top:7rem;
}
.navs-navs-btns{
   width:100%;
   font-size:2.5rem;
   text-align: center;
   font-color:#000;
   display: flex;
  justify-content: space-around;
}
.navs-navs-btns>li:nth-child(1)>a{
  color:#ff3c00;
  line-height: 1.5rem;
  border-bottom: solid .05rem #ff3c00;
}
</style>

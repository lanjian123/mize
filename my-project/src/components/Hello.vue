<template>
  <div class="hello">

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
       <li v-for="site in msg">   
        <router-link :to="site.url" >{{site.name}}</router-link> 
      </li>            
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: [
      { name: '上新',url:'/news' },
      { name: '女装',url:'/mans'  },
      { name: '鞋包',url:'/bolls'  },
      { name: '居家',url:'/houss'  },
      { name: '美妆',url:'/betf'  },
      { name: '童装',url:'/childer'  },
      { name: '母婴',url:'/momos'  }
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

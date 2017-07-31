<template>

  <div id="app">
  <div v-html="msg" class='navs'></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '<a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMA+fUIIg/ZnFMxA2NBOyYL64V5dGtnNu/g1MC6lpB/E8ejguTPjUcbq6ldREgsAgAAAUlJREFUOMudk+t2gjAQhEkQEBW5iNzFu7b93v/9aj2YQhL7o/OLnTO7Z3eYOP+Bt9psVt5fikXm84SfLd5p1gcUDjO75kvCuVuG4bI7g5xb50gIvGGzI0jbrAZGzXNoTM0WruP6CltD5OO749p9ELomNhpziDVRBOGUKSBy9D6h+ecKck2UkugblKTmcfcpMzPPu4Fm8Rxu+t+XBFMmQBppCGA1rlc8unSEgioe+VYhQsfACWpFFzWcbIlrQPSzZyBSAY01d+4RoGzbEuDoOlYUCQpJYQ/vBxN8WkKXCaAO8iiOi7y7AGKja1KgGiezwrhvBzKbhq6XsBszSxCRPjwSsPwt94kqtdZkr6pODTaWCNTx4FvtXdSwHr430NvtzeDlQwvKOCOd7XCs5OC8wQXpvl5T+k7Uv6LolSqTlijKwQRPbWTi/qP5BiSBJaXQ3p6vAAAAAElFTkSuQmCC" alt="" /></a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABYCAMAAACzvN7aAAAAk1BMVEUAAAD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgAOV1DdAAAAMHRSTlMA7zPdIvsRBP1F88orCBkB97efVubXvZGEaWNbTOvhxLCXUjwMzqqmi3t1cB5ACg87rkrPAAADlUlEQVR42u3b2ZKqMBAG4GbfUVHEfd915vT7P93RM42jWYbRqnMD/d1Fwar+K5IACTDGGGOMMcYYY4wxxhhjjP3G53hhhVDNHsx7TghMsOrhFVQ6t/EG2LOh/7tcVojSgck42059lNS1m/45FvtsMEngQezIuUB8LrLssIZHcznAwEK1PtTUFm+mwxbcLeVc1hHe+DY8aksHjn3U6EJNjajAJdxZUi4j6pMLeIIESmmIGp0W1FQypRLH+o5llp98VAR4RI3FBmprQDXOPG0uHfpgCxUB9lHB7y0CqLGLQ4WudLnYftlJqwLsYSkamm5t/7WCXTlO6nIpqN3zqgJ0kBybEt7NB5JYncvGKFOBqgCRdKBRtuVArM5lSM3QBXIIUTJ9PHMCjTK6J6QKsJVTswCy1k6UkaTQKPeZzFkVYPkPd+zvwBVOj2cm0CxdGmatliLABU1GTt+Ho8Tvb+jMZj5d+Og7dO0SY6BZjtMJQCAe2OgAAT7X3dFwZMoxpKtxd2ImQKoD1DOgISr60dsB7qAh/lOATgx1lKyDIDCvYvvKvfKQeO7Nxb6KzZvgyn07wBPUUdzD15hvBpiPoI4+Z/ia9uY3ATZnVD7jixbAAT6K8DWOqQsw2TQywHkU5RaZGl9C1LJWylH40i2ittnIAN+cxkyyTmQ9v7wMPQ7w12WPUJY18xr4XoA5SkK72QHap32/f1CXfdjtlmcbviUoMIx83dBR+It3cOheVS6b3sn5hQeljUF4GkOKHx/pZ0/f8jxQFtNwOlCXPUBa1sEBahyozPPPL5VOHGDF7UhXXfaKmjsOUGNKZQbqsk1qWhygmlvxYj2lpp9wgEoxklRdtudQ2+YAlSZUpeNpyp5Re80BKpWj7ExX9pzaXQ7wxwWCc13ZGbWPHKDSnqrc68o+UjvjAJXKf+hAV3a37KIcoIoXiutPkYjDtNGCJ4kuwHajAlwjMXUxJI4wUSQX8UAQp9w132RT3gkTVyh7BqWtMIpob1E0V9McaszrUZURlKR731OZVEu502spnhlIgdbYCMkKStI63SRXLtMfSGtexBXSdd+ldOVSB2wP4U7eW3SJaJ3+H/kpji+euU2FX9p6UFveAq/CaJDCN8Xeota4Y/xL1RMvgVbwfKZTbIRfiuq9YtpzUxeetZ3ZPgBJatvpY6ZZnveLiQcPZp3TU1rGbL6cNGnLCGOMMcYYY4wxxhhjjDHGXvEXbdK7B2jHjJsAAAAASUVORK5CYII=" alt="" /><a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAZlBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPy2fAPAAAAIXRSTlMAEe/Ph2Wr9+cGQJWZDArFpY5LRV0Zs34sJtqicWpXM7zEijLrAAABD0lEQVQ4y+2S25LCIAyGw6Et0NKTVl1ddXn/l9ww1JkUUmfv1++K/BD+EAIfKHOnZJCqdfCWxzW8UIckHTRh1fo6UFoLSEOlJp0bcCm1EyBcG/dP8eRNEkaIjLjXCUgsdYyA44g73ySeMJ6hxBqsCih4p+IvNB4oC9aZnpnnnzNpih4F6HzJJMd591i6zbQFuwU5ghMxudA8tp1N1oqg92ssv/C08+qqJlRsH4Vk+9ij9wSUMTozVFjDncRn/q/X6Wn9y3fcnZ40j0Y7D4ubTJpHHr+d8M7CLkdDevYFb7Dz7dqERnX3EIa12i2FjV7nfQhbZG7Uq2QuQ4aDjGcyv1RbZgDG/AF/wf6YJ/xPfgESOCG7AsnfSQAAAABJRU5ErkJggg==" alt="" /></a>'
    }
  }
}
</script>

<style>
*{
	margin:0; padding:0;
}
body{
	font-size:16px;
	font-family: PingFang-SC-Regular,HeitiJ-Light,"Helvetica Neue",Helvetica,STHeiTi,sans-serif;
	outline: 0;
    outline-color: initial;
    outline-style: initial;
    outline-width: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navs{
	width:100%;
	background:#f9f9f9;
    height:7rem;
    position: fixed;
    top:0;
    left:0;
    z-index: 999;
    border-bottom: 1px solid #e4e4e4;
    display:flex;
    justify-content: space-between;
}
.navs>a{
	  width:100%; 
	/*height:100%;*/
}
.navs>img{
	width:100%;
}
.navs>a>img{
    height:80%;
}
</style>

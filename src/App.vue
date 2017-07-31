<template>
  <div id="app">
      <div class="app-head">
        <zh-header></zh-header>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from './components/layout.vue'
import zhHeader from './components/zhHeader.vue'

export default {
  components: {
    Layout,
    zhHeader
  },
  data() {
    return {
       
    }
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  color: #222;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 13px;
  line-height: 1.7;
  overflow-wrap: break-word;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size: 13px;
    line-height: 1.7;
    word-wrap: break-word;
    color: #222;
    background-color: #fff;
}
.app-head{
  background: rgba(0, 0, 0, 0) linear-gradient(to bottom, #086ed5, #055db5) repeat scroll 0 0;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #044e97;
  position: fixed;
  z-index: 999999;
}
</style>

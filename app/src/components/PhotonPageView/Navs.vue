<template>
<div class="pane pane-sm sidebar">
  <nav v-for="menu0 in menus" class="nav-group">
    <h5 class=nav-group-title>{{menu0.title}}</h5>
    <router-link v-for="menu1 in menu0.menus" class="nav-group-item" active-class="active" :to="menu1.link">
      <span class="icon" :class="menu1.icon"></span>
      {{menu1.name}}
    </router-link>
  </nav>

  <nav class="nav-group">
    <h5 class="nav-group-title">Photon</h5>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/bars">
      <span class="icon icon-home"></span>
      Bars
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/buttons">
      <span class="icon icon-drive"></span>
      <a>Buttons</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/button-groups">
      <span class="icon icon-drive"></span>
      <a>ButtonsGroups</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/forms">
      <span class="icon icon-drive"></span>
      <a>Forms</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/icons">
      <span class="icon icon-drive"></span>
      <a>Icons</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/list">
      <span class="icon icon-drive"></span>
      <a>Lists</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/navs">
      <span class="icon icon-drive"></span>
      <a>Navs</a>
    </router-link>
    <router-link class="nav-group-item" active-class="active" to="/photon-page/tables">
      <span class="icon icon-drive"></span>
      <a>Tables</a>
    </router-link>
  </nav>

  <nav class="nav-group">
    <h5 class="nav-group-title">Tags</h5>
    <span class="nav-group-item" href="#">
      <span class="icon icon-record" style="color:#fc605b"></span>
      Red
    </span>
    <span class="nav-group-item" href="#">
      <span class="icon icon-record" style="color:#fdbc40"></span>
      Orange
    </span>
    <span class="nav-group-item" href="#">
      <span class="icon icon-record" style="color:#34c84a"></span>
      Green
    </span>
    <span class="nav-group-item" href="#">
      <span class="icon icon-record" style="color:#57acf5"></span>
      Blue
    </span>
  </nav>
  <hr/>
  <nav class="nav-group">
    <h5 class="nav-group-title">Tags</h5>
    <span class="nav-group-item"
      @click="$electron.remote.require('./electron.js').openConfigWindow('/#/config')">
      <span class="icon icon-record" style="color:#57acf5"></span>
      Config
    </span>
  </nav>
</div>
</template>
<style scoped>
a {
  text-decoration: none;
  color:#000;
}
</style>
<script>
export default {
  name: 'navs',
  data () {
    return {
      menus: [{
        title: 'Favorites',
        menus: [{
          name: 'Qrcode',
          icon: 'icon-home',
          link: '/photon-page/qr-code'
        }, {
          name: 'Plantuml',
          icon: 'icon-home',
          link: '/photon-page/plantuml'
        }, {
          name: '404',
          icon: 'icon-drive',
          link: '/photon-page/404'
        }]
      }]
    }
  }
}
</script>

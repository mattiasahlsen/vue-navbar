<template>
  <div id="app">
    <vue-navbar
      :logo="logo"
      :links="links"
      containerClass="navbar"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import VueNavbar from '@/vue-navbar.vue'

const links = [
  {
    name: 'About',
    dropdown: [
      {
        name: 'Our story',
        click: () => console.log('our story clicked')
      },
      {
        name: 'Contact',
        click: () => console.log('contact clicked')
      },
    ]
  },
  {
    name: 'Become a member',
    click: () => console.log('become a member clicked')
  },
  {
    name: 'Forum',
    click: () => console.log('forum clicked')
  }
]

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueNavbar
  },
  data() {
    return {
      logo: {
        text: 'Vue Navbar',
        img: require('../src/assets/logo.png'),
        click: () => console.log('logo clicked')
      },
      links,
    }
  }
})
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.navbar {
  background-color: #262626;
}
</style>

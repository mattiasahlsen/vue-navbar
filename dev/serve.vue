<template>
  <div id="app">
    <div class="content">
      <div>
        <vue-navbar
          class="navbar"
          :logo="logo"
          :links="links"
          :darkBackground="true"

          logoTextClass="logo-text"
          logoImgClass="logo-img"
          linkClass="navbar-link"
          dropdownBackgroundColor="rgba(0, 0, 0, 0.4)"

          onHover="slide"
        />
      </div>

      <div class="footer">
        <p>Photo by <a href="https://unsplash.com/@sotti?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Shifaaz shamoon</a> on <a href="https://unsplash.com/s/photos/model?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import VueNavbar from '@/vue-navbar.vue'
//import VueNavbar from '.vue-navbar-component'

const links = [
  {
    name: 'Store',
    click: () => console.log('store clicked')
  },
  {
    name: 'Gallery',
    click: () => console.log('gallery clicked')
  },
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
]

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueNavbar
  },
  data() {
    return {
      logo: {
        img: require('../src/assets/logo.png'),
        click: () => console.log('logo clicked')
      },
      links,
    }
  }
})
</script>

<style lang="scss">
@import '../src/styles/main.scss';

body, html {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  margin: 1em;
}

.content {
  flex: 1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../src/assets/hero.jpg');
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  text-align: center;
  margin-top: 1rem;
  color: $light;
  font-weight: 600;
  font-size: 4rem;
}
.footer {
  display: flex;

  padding: 1em;
  font-size: 1.5em;
  
  color: $light;
  a {
    color: $link;
    text-decoration: none;
  }
}
</style>

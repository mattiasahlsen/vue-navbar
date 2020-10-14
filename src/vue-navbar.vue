<template>
  <nav
    class="vue-navbar-container"
    @click="focusNavbar"
  >
    <div class="vue-navbar">
      <div class="vue-navbar-logo-container">
        <div
          class="vue-navbar-logo"
          :class="[
            { clickable: logo.click },
            darkBackground ? 'light-text' : 'dark-text',
          ]"
          @click="logoClick"
        >
          <img
            v-if="logo.img"
            class="vue-navbar-logo-img"
            :class="logoImgClass"
            :src="logo.img"
          >
          <h2
            v-if="logo.text"
            :class="logoTextClass"
          >
            {{logo.text}}
          </h2>
        </div>
      </div>

      <LinksContainer
        class="normal-view-links"
        :links="links"
        :collapsed="false"
        :darkBackground="darkBackground"
        :onHover="onHover"

        :linkClass="linkClass"
        :dropdownBackgroundColor="dropdownBackgroundColor"
      />
      <LinksContainer
        class="collapse-view-links"
        :links="links"
        :collapsed="true"
        :darkBackground="darkBackground"
        :onHover="onHover"

        :linkClass="linkClass"
        :dropdownBackgroundColor="dropdownBackgroundColor"
      />

    </div>
  </nav>
</template>

<script>
import LinksContainer from './links-container.vue'

export default {
  name: 'VueNavbar', // vue component name
  components: {
    LinksContainer,
  },
  props: {
    logo: {
      type: Object,
      default: {},
    },
    links: {
      type: Array,
      default: []
    },
    darkBackground: {
      type: Boolean,
      default: true,
    },
    onHover: {
      type: String,
      default: 'slide'
      // options: 'slide', 'fade', 'slide-underline', 'fade-underline'
    },

    // classes
    logoTextClass: [String, Array, Object],
    logoImgClass: [String, Array, Object],
    linkClass: [String, Array, Object],
    
    dropdownBackgroundColor: String,
  },
  methods: {
    logoClick() {
      if (this.logo.click) this.logo.click()
    },
    focusNavbar() {
      // to remove hover effect manually on mobile when clicking on navbar
      this.$el.focus()
    }
  },
}
</script>

<style scoped lang="scss">
@import './styles/main.scss';

/* Whole navbar */
.vue-navbar-container {
  padding: 0.75em;
}
.vue-navbar {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

/* Logo */
.vue-navbar-logo-container {
  display: flex;
  align-items: flex-start;
}
.vue-navbar-logo {
  display: flex;
  align-items: center;
}
.vue-navbar-logo-img {
  height: 40px;
  margin-right: 10px;
}

/* Links */
@media (max-width: 767px) {
  .normal-view-links {
    display: none !important;
  }
}
@media (min-width: 768px) {
  .collapse-view-links {
    display: none !important;
  }
}
</style>

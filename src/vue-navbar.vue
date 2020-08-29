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
            darkBg ? 'light-text' : 'dark-text',
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
        :darkBackground="darkBg"

        :linkClass="linkClass"
      />
      <LinksContainer
        class="collapse-view-links"
        :links="links"
        :collapsed="true"
        :darkBackground="darkBg"

        :linkClass="linkClass"
        :dropdownLinkClass="dropdownLinkClass"
      />

    </div>
  </nav>
</template>

<script>
import LinksContainer from './links-container'

export default {
  name: 'VueNavbar', // vue component name
  components: {
    LinksContainer,
  },
  props: [
    'logo',
    'links',
    'darkBackground',

    // classes
    'logoTextClass',
    'logoImgClass',

    'linkClass',
    'dropdownLinkClass',
  ],
  data() {
    return {
    }
  },
  computed: {
    darkBg() {
      if (this.darkBackground === undefined) return true
      else return this.darkBackground
    }
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
  mounted() {
  }
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
    visibility: hidden;
    position: absolute;
  }
}
@media (min-width: 768px) {
  .collapse-view-links {
    visibility: hidden;
    position: absolute;
  }
}
</style>

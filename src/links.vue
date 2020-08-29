<template>
  <div
    class="vue-navbar-links"
    :class="[
      collapsed ? 'vue-navbar-links-collapse-view' : 'vue-navbar-links-normal-view',
    ]"
  >
    <div
      v-for="(link, index) in links"
      :key="index"
      class="vue-navbar-link-container"
    >
      <Link
        :link="link"
        :darkBackground="darkBackground"
        :linkClass="linkClass"
        :onHover="onHover"
      />
      <div
        v-if="link.dropdown"
        class="vue-navbar-dropdown-container"
      >
        <div
          class="vue-navbar-dropdown box-shadow"
          :class="[darkBackground ? 'dark-background' : 'light-background']"
          :style="{ 'background-color': dropdownBackground }"
        >
          <Link
            v-for="(item, index) in link.dropdown"
            :key="index"
            :link="item"
            :linkClass="linkClass"
            :onHover="onHover"
            :darkBackground="darkBackground"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Link from './link.vue'

const light = '#fefefe'
const dark = '#262626'

export default {
  components: {
    Link,
  },
  props: [
    'links',
    'collapsed',
    'darkBackground',
    'onHover',

    'linkClass',
    'dropdownBackgroundColor'
  ],
  computed: {
    dropdownBackground() {
      if (this.dropdownBackgroundColor) return this.dropdownBackgroundColor
      else if (this.darkBackground) return dark
      else return light
    }
  }
}
</script>

<style scoped lang="scss">
@import './styles/main.scss';
@import './styles/dropdown.scss';

/* Navbar buttons */
.vue-navbar-links {
  display: flex;
  //transition: height 0.5s ease;
}
.vue-navbar-links-collapse-view {
  flex-direction: column;
  align-items: flex-end;
}

.vue-navbar-link-container {
  position: relative;
}
</style>

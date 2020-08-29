<template>
  <div class="vue-navbar-link">
    <button
      class="vue-navbar-button"
      :class="[
        linkClass,
        {
          'clickable': link.click,
          'with-background': link.click && (onHover === 'slide' || onHover === 'fade'),
        },
        darkBackground ? 'light-text' : 'dark-text',
      ]"
      @click="buttonClick(link)"
    >
      {{link.name}}
    </button>
    <div
      v-if="link.click"
      class="vue-navbar-button-background"
      :class="[
        darkBackground ? 'light-background' : 'dark-background',
        {
          'vue-navbar-button-underline': onHover === 'slide-underline' || onHover === 'fade-underline',
          'slide-background' : onHover === 'slide' || onHover === 'slide-underline',
          'fade-background' : onHover === 'fade' || onHover === 'fade-underline',
        }
      ]"
    >
    </div>
  </div>
</template>
<script>
export default {
  props: ['link', 'dark-background', 'linkClass', 'onHover'],
  methods: {
    buttonClick(button) {
      if (button.click) button.click()
    },
  }
}
</script>
<style scoped lang="scss">
@import './styles/main.scss';

.vue-navbar-link {
  position: relative;
  padding: 0.25em 0.5em;
  margin-left: 0.5em;
  margin-top: 0.25em;
}
.vue-navbar-link:hover .with-background {
  &.light-text {
    color: $dark;
  }
  &.dark-text {
    color: $light;
  }
}

.vue-navbar-button {
  border: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  background-color: transparent;
  position: relative;
  transition: color 0.5s ease;
  text-align: right;
  z-index: 1;
  white-space: nowrap;
}

/* Background and underline */
.vue-navbar-button-background {
  position: absolute;
  border-radius: 3px;

  transition: width 0.5s ease, opacity 0.5s ease;
  left: 0;
}
.vue-navbar-button-background:not(.vue-navbar-button-underline) {
  top: 0;
  height: 100%;
}
.vue-navbar-button-underline {
  margin-top: 2px;
  height: 1px,
}

.slide-background {
  width: 0%;
  opacity: 1;
}
.vue-navbar-link:hover .slide-background {
  width: 100%;
}
.fade-background {
  width: 100%;
  opacity: 0;
}
.vue-navbar-link:hover .fade-background {
  opacity: 1;
}


/* Media queries */
@media (min-width: 768px) {
  .vue-navbar-button {
    font-size: 1rem;
  }
}
</style>

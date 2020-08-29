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
      class="vue-navbar-button-container"
    >
      <button
        class="vue-navbar-button"
        :class="[
          linkClass,
          {
            'vue-navbar-link': !link.dropdown,
            'vue-navbar-link-with-background': !link.dropdown && (onHover === 'slide' || onHover === 'fade'),
            clickable: link.click
          },
          darkBackground ? 'light-text' : 'dark-text',
        ]"
        @click="buttonClick(link)"
      >
        {{link.name}}
      </button>
      <div
        v-if="!link.dropdown"
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

      <div v-if="link.dropdown" class="vue-navbar-dropdown-container">
        <div class="vue-navbar-dropdown box-shadow">
          <a
            v-for="(item, index) in link.dropdown"
            :key="index"
            href="#"
            @click.prevent="dropdownItemClick(item)"
            class="vue-navbar-link"
            :class="[ dropdownLinkClass ]"
          >
            {{item.name}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'links',
    'collapsed',
    'darkBackground',
    'onHover',

    'linkClass',
    'dropdownLinkClass',
  ],
}
</script>

<style scoped lang="scss">
@import './styles/main.scss';
@import './styles/dropdown.scss';

/* Navbar buttons */
.vue-navbar-links {
  display: flex;
  transition: height 0.5s ease;
}
.vue-navbar-links-collapse-view {
  flex-direction: column;
  align-items: flex-end;
}

.vue-navbar-button-container {
  padding: 0.25em 0.5em;
  margin-left: 0.5em;
  margin-top: 0.25em;
  position: relative;
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

}

/* Link */
.vue-navbar-button-container:hover .vue-navbar-link-with-background {
  &.light-text {
    color: $dark;
  }
  &.dark-text {
    color: $light;
  }
}
.vue-navbar-link {
  font-size: 1.2rem;
  cursor: pointer;
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
.vue-navbar-button-container:hover .slide-background {
  width: 100%;
}
.fade-background {
  width: 100%;
  opacity: 0;
}
.vue-navbar-button-container:hover .fade-background {
  opacity: 1;
}


/* Media queries */
@media (min-width: 768px) {
  .vue-navbar-button {
    font-size: 1rem;
  }
  .vue-navbar-link {
    font-size: 1rem;
  }
}
</style>

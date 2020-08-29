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
        :class="[ darkBackground ? 'light-background' : 'dark-background' ]"
      >
      </div>
      <div v-else class="vue-navbar-dropdown-container">
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

    'linkClass',
    'dropdownLinkClass',
  ],
}
</script>

<style scoped lang="scss">
@import './styles/main.scss';
@import './styles/dropdown.scss';

/* Navbar links */
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
.vue-navbar-button-background {
  position: absolute;
  border-radius: 3px;

  transition: width 0.5s ease;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
}
.vue-navbar-button-container:hover .vue-navbar-button-background {
  width: 100%;
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
.vue-navbar-button-container:hover .vue-navbar-link {
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

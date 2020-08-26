<template>
  <div
    class="vue-navbar-links"
    :class="[
      collapsed ? 'vue-navbar-links-collapse-view' : 'vue-navbar-links-normal-view',
      linksClass,
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
        <div class="vue-navbar-dropdown">
          <a
            v-for="(item, index) in link.dropdown"
            :key="index"
            href="#"
            @click.prevent="dropdownItemClick(item)"
            class="vue-navbar-link"
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

    'linksClass',
    'linkClass',
  ],
}
</script>

<style scoped>
/* Colors */
.light-background {
  background-color: rgb(250, 250, 250);
}
.dark-background {
  background-color: #262626;
}
.light-text {
  color: rgb(250, 250, 250);
}
.dark-text {
  color: #262626;
}

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
  cursor: pointer;
}
.vue-navbar-button-container:hover .vue-navbar-link.light-text {
  color: #262626;
}
.vue-navbar-button-container:hover .vue-navbar-link.dark-text {
  color: rgb(250, 250, 250);
}

.vue-navbar-link {
  font-size: 1.2rem;
}

/* Dropdown */
.vue-navbar-dropdown-container {
  position: absolute;
  right: 0;
  
  overflow: hidden;
  transition: all 0.5s ease;
  transition-property: opacity, padding;
  height: 0px;
  padding: 0;
  opacity: 0;
  z-index: 2;
}
.vue-navbar-button-container:hover .vue-navbar-dropdown-container, .vue-navbar-dropdown-container:hover {
  height: auto;
  padding: 1em;
  opacity: 1;
}

.vue-navbar-dropdown {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  margin-top: 0.1em;
  padding: 1em;
  border-radius: 5px;
  position: relative;

  -webkit-box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.4);
  box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.4);
}

.vue-navbar-dropdown a {
  text-decoration: none;
  color: #4d4d4d;
  transition: color 0.2s ease;
  white-space: nowrap;
  margin-top: 0.1em;
}
.vue-navbar-dropdown a:hover {
  text-decoration: none;
  color: #3399ff;
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

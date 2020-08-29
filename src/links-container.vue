<template>
  <div class="vue-navbar-links-container">
    <div
      v-if="collapsed"
      class="toggle-collapse"
      @click="expanded = !expanded"
    >
      <div
        v-for="n in 3"
        :key="n"
        class="line"
        :class="[darkBackground ? 'light-background' : 'dark-background']"
      />
    </div>

    <Links
      :links="links"
      :collapsed="collapsed"
      :onHover="onHover"
      :darkBackground="darkBackground"

      :style="{
        height,
      }"
      :class="{
        'overflow-hidden': collapsed && !expanded,
      }"
      :dropdownLinkClass="dropdownLinkClass"
      :linkClass="linkClass"
    />

    <Links
      ref="ghostLinks"
      :links="links"
      :collapsed="true"
      :onHover="onHover"
      :darkBackground="darkBackground"

      class="ghost"
      :dropdownLinkClass="dropdownLinkClass"
      :linkClass="linkClass"
    />

  </div>
</template>

<script>
import Links from './links'
export default {
  components: {
    Links,
  },
  props: [
    'links',
    'collapsed',
    'darkBackground',
    'onHover',

    'linkClass',
    'dropdownLinkClass'
  ],
  data() {
    return {
      expanded: false,
    }
  },
  computed: {
    height() {
      if (!this.collapsed) return 'auto'
      else if (this.expanded) {
        return this.collapseViewHeight() + 'px'
      } else {
        return '0px'
      }
    }
  },
  methods: {
    buttonClick(button) {
      if (button.click) button.click()
    },
    dropdownItemClick(item) {
      if (item.click) item.click()
    },
    collapseViewHeight() {
      return this.$refs.ghostLinks.$el.offsetHeight
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
@import './styles/main.scss';

/* Links */
.vue-navbar-links-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.ghost {
  position: absolute;
  visibility: hidden;
}
.overflow-hidden {
  overflow: hidden;
}

/* Collapse icon */
.toggle-collapse {
  height: 25px;
  width: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  cursor: pointer;
  margin: 0.5em;
}

.line {
  height: 3px;
  border-radius: 1px;
}
</style>

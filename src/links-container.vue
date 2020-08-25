<template>
  <div class="vue-navbar-links-container">
    <div
      v-if="collapsed"
      class="toggle-collapse"
      @click="expanded = !expanded"
    >
      <div class="line"/>
      <div class="line"/>
      <div class="line"/>
    </div>

    <Links
      :links="links"
      :collapsed="collapsed"
      :style="{
        height,
      }"
      :class="{
        'overflow-hidden': collapsed && !expanded,
      }"

      :linksClass="linksClass"
      :linkClass="linkClass"
    />

    <Links
      ref="ghostLinks"
      :links="links"
      :collapsed="true"
      class="ghost"

      :linksClass="linksClass"
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

    'linksClass',
    'linkClass',
  ],
  data() {
    return {
      expanded: false,

      collapseViewHeight: 0,
    }
  },
  computed: {
    height() {
      if (!this.collapsed) return 'auto'
      else if (this.expanded) {
        return this.collapseViewHeight + 'px'
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
    }
  },
  mounted() {
    this.collapseViewHeight = this.$refs.ghostLinks.$el.offsetHeight
    console.log(this.collapseViewHeight)
  }
}
</script>

<style scoped>
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
  background-color: rgba(255, 255, 255, 0.8);
}
</style>

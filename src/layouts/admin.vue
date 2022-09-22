<template>
  <div :class="containerClass" @click="onWrapperClick">
    <div class="layout-sidebar" @click="onSidebarClick">
      <div class="logo-text">Trực tiếp 24h</div>
      <div class="layout-menu">
        <AppMenu :items="currentMenu" :compact="staticMenuInactive" @menuitem-click="onMenuItemClick" />
      </div>
    </div>

    <div class="layout-main-container">
      <AppTopBar @menu-toggle="onMenuToggle" />
      <div class="layout-main">
        <slot />
      </div>
      <!-- <AppFooter /> -->
    </div>

    <transition name="layout-mask">
      <div v-if="mobileMenuActive" class="layout-mask p-component-overlay" />
    </transition>
    <Dialog
      v-model:visible="load.ing"
      :style="{ width: '300px' }"
      :show-header="false"
      :close-on-escape="false"
      :modal="true"
    >
      <h5 class="text-center">{{ load.msg }}</h5>
      <ProgressBar mode="indeterminate" style="height: 0.5em" />
    </Dialog>
    <Toast position="top-center" style="z-index: 10000" :auto-z-index="false" />
    <Toast position="bottom-right" group="br" style="z-index: 10000" :auto-z-index="false" />
  </div>
</template>

<script lang="ts">
import AppTopBar from '@/components/layouts/default/AppTopbar.vue'
import AppMenu from '@/components/layouts/default/AppMenu.vue'
import { mapState } from 'pinia'
import { appStore } from '@/store'
import { defineComponent } from 'vue'
import { menuInactiveStorage } from '@/helpers/storage'
import { MenuItem } from '@/types'
export default defineComponent({
  components: { AppTopBar, AppMenu },
  emits: [],
  data() {
    return {
      menuActive: false,
      menuClick: false,
      layoutMode: 'static',
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      menu: [
        { label: 'Dashboard', icon: 'pi pi-home', to: '/admins' },
        { label: 'Danh mục', icon: 'pi pi-list', to: '/admins/categories' },
        { label: 'Bài viết', icon: 'pi pi-pencil', to: '/admins/contents' },
        { label: 'Giải đấu', icon: 'pi pi-globe', to: '/admins/leagues' },
        { label: 'Danh sách đội', icon: 'pi pi-users', to: '/admins/teams' },
        { label: 'Danh sách trận', icon: 'pi pi-bolt', to: '/admins/matches' },
      ] as Array<MenuItem>,
    }
  },
  computed: {
    ...mapState(appStore, ['load']),
    containerClass() {
      return [
        'layout-wrapper',
        {
          'layout-overlay': this.layoutMode === 'overlay',
          'layout-static': this.layoutMode === 'static',
          'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
          'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
          'layout-mobile-sidebar-active': this.mobileMenuActive,
          // 'p-input-filled': this.$primevue.config.inputStyle === 'filled',
          // 'p-ripple-disabled': this.$primevue.config.ripple === false,
          'layout-theme-light': this.$appState.theme.startsWith('saga'),
        },
      ]
    },
    logo() {
      return this.$appState.darkTheme ? '/images/logo-white.svg' : '/images/logo.svg'
    },
    currentMenu() {
      // return this.$route?.meta?.role == 'admin' ? this.adminMenu : this.menu
      return this.menu
    },
  },
  watch: {
    $route() {
      this.menuActive = false
      this.$toast.removeAllGroups()
    },
  },
  created() {
    this.staticMenuInactive = menuInactiveStorage.get()
  },
  beforeUpdate() {
    if (this.mobileMenuActive) {
      this.addClass(document.body, 'body-overflow-hidden')
    } else {
      this.removeClass(document.body, 'body-overflow-hidden')
    }
  },
  methods: {
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false
        this.mobileMenuActive = false
      }

      this.menuClick = false
    },
    onMenuToggle() {
      this.menuClick = true

      if (this.isDesktop()) {
        if (this.layoutMode === 'overlay') {
          if (this.mobileMenuActive === true) {
            this.overlayMenuActive = true
          }

          this.overlayMenuActive = !this.overlayMenuActive
          this.mobileMenuActive = false
        } else if (this.layoutMode === 'static') {
          this.staticMenuInactive = !this.staticMenuInactive
          menuInactiveStorage.set(this.staticMenuInactive)
        }
      } else {
        this.mobileMenuActive = !this.mobileMenuActive
      }

      event.preventDefault()
    },
    onSidebarClick() {
      this.menuClick = true
    },
    onMenuItemClick(event) {
      if (event.item && !event.item.items) {
        this.overlayMenuActive = false
        this.mobileMenuActive = false
      }
    },
    onLayoutChange(layoutMode) {
      this.layoutMode = layoutMode
    },
    addClass(element, className) {
      if (element.classList) {
        element.classList.add(className)
      } else {
        element.className += ` ${className}`
      }
    },
    removeClass(element, className) {
      if (element.classList) {
        element.classList.remove(className)
      } else {
        element.className = element.className.replace(
          new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'),
          ' '
        )
      }
    },
    isDesktop() {
      return window.innerWidth >= 992
    },
    isSidebarVisible() {
      if (this.isDesktop()) {
        if (this.layoutMode === 'static') {
          return !this.staticMenuInactive
        } else if (this.layoutMode === 'overlay') {
          return this.overlayMenuActive
        }
      }

      return true
    },
  },
})
</script>

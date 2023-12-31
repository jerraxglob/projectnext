
<!--
  - @copyright Copyright (c) 2022 Julius Härtl <jus@bitgrid.net>
  -
  - @author Julius Härtl <jus@bitgrid.net>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -->

<template>
  <nav class="app-menu show">
    <ul
      class="app-menu-main"
      :class="{ 'app-menu-main__hidden-label': hiddenLabels === 1, 'app-menu-main__show-hovered': hiddenLabels === 2 }"
      v-if="apps !== null"
      >
      <li v-for="app in mainAppList()"
        :key="app.id"
        :data-app-id="app.id"
        class="app-menu-entry"
        :class="{ 'app-menu-entry__active': app.active, 'app-menu-entry__hidden-label': hiddenLabels === 1, 'app-menu-main__show-hovered': hiddenLabels === 2 }"
        :style="makeStyle(app)"
        >
        <a :href="app.href"
          :class="{ 'has-unread': app.unread > 0 }"
          :aria-label="appLabel(app)"
          :target="targetBlankApps.indexOf(app.id) !== -1 ? '_blank' : undefined"
          :aria-current="app.active ? 'page' : false">
          <img :src="app.icon" alt="">
          <div class="app-menu-entry--label">
            {{ app.name }}
            <span v-if="app.unread > 0" class="hidden-visually unread-counter">{{ app.unread }}</span>
          </div>
        </a>
      </li>
    </ul>
    <NcActions class="app-menu-more" :aria-label="t('core', 'More apps')" v-if="apps !== null">
      <NcActionLink v-for="app in popoverAppList()"
        :key="app.id"
        :aria-label="appLabel(app)"
        :aria-current="app.active ? 'page' : false"
        :href="app.href"
        :style="makeStyle(app)"
        class="app-menu-popover-entry">
        <template #icon>
          <div class="app-icon" :class="{ 'has-unread': app.unread > 0 }">
            <img :src="app.icon" alt="">
          </div>
        </template>
        {{ app.name }}
        <span v-if="app.unread > 0" class="hidden-visually unread-counter">{{ app.unread }}</span>
      </NcActionLink>
    </NcActions>
  </nav>
</template>

<script>
import { loadState } from '@nextcloud/initial-state'
import { NcActions, NcActionLink } from '@nextcloud/vue'

export default {
  name: 'AppMenu',
  components: {
    NcActions, NcActionLink,
  },
  data() {
    return {
      apps: null,
      appLimit: 0,
      observer: null,
      targetBlankApps: [],
      hiddenLabels: true
    }
  },
  mounted() {
    const ncApps = loadState('core', 'apps', {})
    this.apps = {}
    let orders = {}

    window.menuAppsOrder.forEach((app, order) => {
      orders[app] = order + 1
    })

    Array.from(window.topMenuApps).forEach((id) => {
      if (ncApps.hasOwnProperty(id)) {
        this.apps[id] = ncApps[id]
        this.apps[id].order = orders[id] || null
      }
    })

    this.targetBlankApps = window.targetBlankApps
    this.hiddenLabels = window.topMenuAppsMouseOverHiddenLabel
    this.observer = new ResizeObserver(this.resize)
    this.observer.observe(this.$el)
    this.resize()
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
  methods: {
    appLabel(app) {
      return app.name
        + (app.active ? ' (' + t('core', 'Currently open') + ')' : '')
        + (app.unread > 0 ? ' (' + n('core', '{count} notification', '{count} notifications', app.unread, { count: app.unread }) + ')' : '')
    },
    appList() {
      let items = Object.values(this.apps)

      items.sort((a, b) => {
        return a.order < b.order ? -1 : 1;
      })

      return items
    },
    mainAppList() {
      return this.appList().slice(0, this.appLimit)
    },
    popoverAppList() {
      return this.appList().slice(this.appLimit)
    },
    setNavigationCounter(id, counter) {
      this.$set(this.apps[id], 'unread', counter)
    },
    resize() {
      const availableWidth = this.$el.offsetWidth
      let appCount = Math.floor(availableWidth / 50) - 1
      const popoverAppCount = this.appList.length - appCount
      if (popoverAppCount === 1) {
        appCount--
      }
      if (appCount < 1) {
        appCount = 0
      }
      this.appLimit = appCount
    },
    makeStyle(app) {
      if (app.order !== null) {
        return `order: ${app.order}`
      }
    }
  },
}
</script>

<style lang="scss" scoped>
$header-icon-size: 20px;

.app-menu {
  width: 100%;
  display: flex;
  flex-shrink: 1;
  flex-wrap: wrap;
}
.app-menu-main {
  display: flex;
  flex-wrap: nowrap;

  .app-menu-entry {
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    opacity: .7;

    &.app-menu-entry__active {
      opacity: 1;

      &::before {
        content: " ";
        position: absolute;
        pointer-events: none;
        border-bottom-color: var(--color-main-background);
        transform: translateX(-50%);
        width: 12px;
        height: 5px;
        border-radius: 3px;
        background-color: var(--color-primary-text);
        left: 50%;
        bottom: 6px;
        display: block;
        transition: all 0.1s ease-in-out;
        opacity: 1;
      }

      .app-menu-entry--label {
        font-weight: bold;
      }
    }

    a {
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      margin: 2px;
      color: var(--color-primary-text);
      position: relative;
    }

    img {
      transition: margin 0.1s ease-in-out;
      width: $header-icon-size;
      height: $header-icon-size;
      padding: calc((100% - $header-icon-size) / 2);
      filter: var(--primary-invert-if-bright);
    }

    .app-menu-entry--label {
      opacity: 0;
      position: absolute;
      font-size: 12px;
      color: var(--color-primary-text);
      text-align: center;
      bottom: -5px;
      left: 50%;
      display: block;
      min-width: 100%;
      transform: translateX(-50%);
      transition: all 0.1s ease-in-out;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &:not(.app-menu-entry__hidden-label):not(.app-menu-entry__show-hovered):hover,
    &:not(.app-menu-entry__hidden-label):not(.app-menu-entry__show-hovered):focus-within {
      opacity: 1;
      .app-menu-entry--label {
        opacity: 1;
        font-weight: bold;
        font-size: 14px;
        bottom: 0;
        width: auto;
        overflow: visible;
      }
    }
  }

  // Show labels
  &:hover,
  &:focus-within,
  .app-menu-entry:hover,
  .app-menu-entry:focus {
    opacity: 1;
  }

  &:not(.app-menu-main__hidden-label):not(.app-menu-main__show-hovered):hover,
  &:not(.app-menu-main__hidden-label):not(.app-menu-main__show-hovered):focus-within,
  .app-menu-entry:not(.app-menu-entry__hidden-label):hover,
  .app-menu-entry:not(.app-menu-entry__hidden-label):focus {
    img {
      margin-top: -6px;
    }

    .app-menu-entry--label {
      opacity: 1;
      bottom: 0;
    }

    &::before, .app-menu-entry::before {
      opacity: 0;
    }
  }

  &.app-menu-main__show-hovered .app-menu-entry:hover,
  &.app-menu-main__show-hovered .app-menu-entry:focus {
    img {
      margin-top: -6px;
    }

    .app-menu-entry--label {
      opacity: 1;
      bottom: 0;
    }

    &::before, .app-menu-entry::before {
      opacity: 0;
    }
  }
}

::v-deep .app-menu-more .button-vue--vue-tertiary {
  color: var(--color-primary-text);
  opacity: .7;
  margin: 3px;

  &:hover {
    opacity: 1;
    background-color: transparent !important;
  }

  &:focus-visible {
    opacity: 1;
    background-color: transparent !important;
    border-radius: var(--border-radius);
    outline: none;
    box-shadow: 0 0 0 2px var(--color-primary-text);
  }
}

.app-menu-popover-entry {
  .app-icon {
    position: relative;
    height: 44px;

    &.has-unread::after {
      background-color: var(--color-main-text);
    }

    img {
      filter: var(--background-invert-if-bright);
      width: $header-icon-size;
      height: $header-icon-size;
      padding: calc((50px - $header-icon-size) / 2);
    }
  }
}

.has-unread::after {
  content: "";
  width: 8px;
  height: 8px;
  background-color: var(--color-primary-text);
  border-radius: 50%;
  position: absolute;
  display: block;
  top: 10px;
  right: 10px;
}

.unread-counter {
  display: none;
}
</style>

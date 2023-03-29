<template>
  <nav class="sidebar col-md-3 col-lg-2" v-if="!isLoading">
    <ul class="sidebar-lists">
      <li class="sidebar-lists-item" :class="{ 'active': sidebarTarget == '全部商品' }" @click="chageSidebar('全部商品')">
        全部商品</li>
      <li class="sidebar-lists-item" :class="{ 'active': sidebarTarget == list }" v-for="list of sidebarList" :key="list"
        @click="chageSidebar(list)">
        {{ list }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    sidebarTarget: {
      type: String
    },
    sidebarList: {
      type: Array
    },
    isLoading: {
      type: Boolean
    }
  },
  methods: {
    chageSidebar (target) {
      this.$emit('changeSidebar', target)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/helpers/main.scss";

.sidebar {
  margin-top: 20px;
  height: 100%;
  position: sticky;
  top: 70px;

  .sidebar-lists {
    list-style: none;
    padding: 0;
    margin: 0;
    color: $main-font-color;

    .sidebar-lists-item {
      letter-spacing: 5px;
      font-size: 20px;
      margin-top: 1px;
      margin-bottom: 5px;
      padding: 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: -2px 3px 5px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      position: relative;
      border-radius: 2px 0 0 5px;

      &.active {
        border-left: 5px solid $second-bgc;
      }

      &:hover {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          border-bottom: 5px solid $second-bgc;
          animation: 0.3s sidebarListHover forwards ease-in-out;
        }
      }
    }

    @keyframes sidebarListHover {
      0% {
        width: 0%;
      }

      100% {
        width: 100%;
      }
    }
  }
}

@media(max-width: 764px) {
  .sidebar {
    position: static;
  }
}
</style>

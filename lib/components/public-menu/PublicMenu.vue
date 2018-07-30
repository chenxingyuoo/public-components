<style lang="scss" scoped >
  .menu-btn {
    float: left;
    margin-left: 50px;
    width: 100px;
    text-align: center;
    position: relative;

    &.on {
      background: #5093e1;
      .btn-text {
        color: #ffffff;
      }
    }

    .btn-text {
      display: block;
      color: rgba(255, 255, 255, .7);
      line-height: 60px;
      cursor: pointer;
      transition: color .2s;
      &:hover {
        color: #ffffff;
      }
    }
    .menu-container {
      position: absolute;
      width: 300px;
      background: #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      z-index: 9999;
      color: #333333;
      padding: 10px;

      .menu-list-btn {
        float: left;
        width: 130px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        margin: 5px;
        border-radius: 4px;
        cursor: pointer;
        border: 1px solid #dcdddd;
        cursor: pointer;
        &:hover {
          background: #efefef;
        }
      }
    }
  }
</style>
<template>
  <div class="menu-btn" :class="{on:open}" @mousedown="clickBtn" @mouseup="clickBtn">
    <span class="btn-text">
      <Icon type="grid" size="20" style="margin-top: 5px"></Icon>
    </span>
    <input id="top-menu-btn" type="text" @focus="focus" @blur="blur"
           style="position: fixed;width: 0px;height: 0px;border: none;z-index: -10">
    <div class="menu-container" v-show="open">
      <span class="menu-list-btn" v-for="item in linkSet" @click="jump(item.url)">{{item.name}}</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'PublicMenu',
  props: {
    linkSet: {
      type: Array
    }
  },
  data () {
    return {
      open: false,
      setTime: null,
    }
  },
  methods: {
    clickBtn () {
      document.getElementById('top-menu-btn').focus();
    },
    focus () {
      this.open = true;
      clearTimeout(this.setTime);
    },
    blur (e) {
      this.setTime = setTimeout(() => {
        this.open = false;
      }, 200)
    },
    jump (url) {
      window.open(url, "_blank");
      setTimeout(() => {
        this.open = false;
        document.getElementById('top-menu-btn').blur();
      }, 300);
    },
  }
}
</script>

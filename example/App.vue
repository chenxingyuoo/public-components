 <template>
  <div id="app">
    <public-menu :linkSet="linkSet"></public-menu>
    <div class="hello">
      <slider-custom
        v-model="initData"
        :range="range"
        :formatter="formatter">
      </slider-custom>
    </div>
  </div>
</template>

<script>
import publicMenu from '../lib/components/public-menu'
import sliderCustom from '../lib/components/slider-custom'
import { ts2Date } from '../lib/components/utils'

export default {
  name: 'App',
  components: {
    publicMenu,
    sliderCustom
  },
  created () {
  },
  data () {
    return {
      linkSet: [
        {
          "id": "hmx",
          "index": 1,
          "url": "https://hmx-jingwei.huya.com",
          "name": "作业平台"
        },
        {
          "id": "dmx",
          "index": 2,
          "url": "https://dmx-jingwei.huya.com",
          "test_url": "http://dmx-jingwei.yygamedev.com",
          "name": "数据源管理系统"
        },
        {
          "id": "onealert",
          "index": 3,
          "url": "http://onealert-admin.huya.com/",
          "test_url": "http://onealert-admin.yygamedev.com",
          "name": "统一告警平台"
        },
        {
          "id": "deploy",
          "index": 4,
          "url": "http://deploytest.jingwei.huya.com/",
          "name": "统一发布平台"
        },
        {
          "id": "cmdb",
          "index": 5,
          "url": "http://cmdb-jingwei.huya.com/",
          "name": "CMDB管理系统"
        },
        {
          "id": "cdn",
          "index": 6,
          "url": "http://cdn.sysop.huya.com",
          "name": "CDN管理系统"
        },
        {
          "id": "ido",
          "index": 7,
          "url": "http://ido.jingwei.huya.com",
          "name": "IDO"
        },
        {
          "id": "skynet",
          "index": 8,
          "url": "https://skynet-jingwei.huya.com/",
          "name": "Skynet统一监控"
        },
        {
          "id": "autoidc",
          "index": 9,
          "url": "http://autoidc-jingwei.huya.com/",
          "name": "混合云主机交付平台"
        }
      ],
      initData: [
        +new Date() - 60 * 1000 * 5,
        +new Date(),
      ],
      range: [
        +new Date() - 60 * 1000 * 60,
        +new Date(),
      ]
    }
  },
  methods: {
    formatter (ts) {
      return ts2Date(ts, 'YYYY-MM-DD HH:MM')
    }
  }
}
</script>

<style lang="scss" scoped>
.hello {
  width: 700px;
  margin: 0 auto;
  font-size: 14px;
}
</style>


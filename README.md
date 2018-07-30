# PublicComponents

公共组件仓库

## npm 安裝 / yarn

```bash
npm i hbf-public-components --save-dev
```

```bash
yarn add hbf-public-components -D
```

## 按需引入

经过思考，还是决定先只支持按需引入。

首先安装`babel-plugin-import`

```bash
yarn add babel-plugin-import -D
```

配置`.babelrc`

```javascript
"plugins": [
  ["import", {
    "libraryName": "hbf",
    "libraryDirectory": "lib/components"
  }]
]
```

## 引入公共组件示例

```javascript
import { publicMenu } from 'hbf'

export default {
  components: {
    publicMenu
  }
}
```

## 公共组件编写

参考 [组件编写约定](https://github.com/huya-base-fed/public-components/blob/master/lib/README.md)

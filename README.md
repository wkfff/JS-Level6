# 單人版、線上對戰遊戲

[DEMO](https://cos214159.github.io/JS-Level6/#/)

## 安裝方式
```
npm install
npm run serve
```

## 該專案使用技術
- JavaScript 框架
  - Vue CLI 3.0
  - 多頁式網頁，會使用 vue-router 去做切換
  - 因為有多個模組需要使用到同樣的資料，所以使用 vuex 去做管理
  - vuex plugin
- ajax
  - 非同步的請求使用 [axios](https://github.com/axios/axios) 套件
- [socket.io.client](https://www.npmjs.com/package/socket.io-client) 用來跟後端 socket 建立連線
- [decimal.js](https://www.npmjs.com/package/decimal.js)

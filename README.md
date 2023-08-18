# week6 主線任務 活動訂票網

### 相關連結
[Figma連結](https://www.figma.com/file/1qhYNCLtQHg6qmBnzV5A6y/2023-%E5%88%87%E7%89%88%E5%A4%8F%E5%AD%A3%E7%8F%AD-W6---%E6%B4%BB%E5%8B%95%E8%A8%82%E7%A5%A8%E7%B6%B2?type=design&node-id=0-1&mode=design&t=7uuH5pYO8lISnqM0-0)
[圖片連結](https://github.com/hexschool/2022-web-layout-training/tree/main/2023week6)
[download github folder](https://download-directory.github.io/)

### 套件
[bootstrap](https://bootstrap5.hexschool.com/)
[jQuery datepicker](https://jqueryui.com/datepicker/)
+ icon
   + [icofont](https://icofont.com/)
   + [google icon](https://fonts.google.com/icons)
+ Google font
   + [Yeseva One](https://fonts.google.com/specimen/Yeseva+One?query=Yeseva+One&noto.query=Yeseva+One)
   + [Noto Serif TC](https://fonts.google.com/noto/specimen/Noto+Serif+TC)
   + [Noto Sans TC](https://fonts.google.com/noto/specimen/Noto+Sans+TC)

### 安裝
+ `npm i vite`
+ `npm i vite-plugin-ejs`
+ `npm i glob`
+ `npm i vite-plugin-live-reload` 檔案儲存，網頁自動重新整理(vite.config.js)

### 指令
+ `npm i` [初次 clone 專案](https://github.com/hexschool/web-layout-training-vite)需執行，產生 node_modules
+ `npm run dev` 監聽(開啟瀏覽器)，不須使用 Watch Sass 功能

### 遠端部屬
1. 建立 github repo

2. 修改 vite.config.js 檔中的 defineConfig 裡的
   base: '/GitHub Repository 名稱/'

3. git 指令
```cmd
git init 初次設定
git add .
git commit -m "msg"
git remote {copy github URL} 初次設定
git push origin master
```

4. `npm run deploy` 編譯 dist 檔(`npm run build`)並部屬到 github gh-pages 分支
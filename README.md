# KONGER Portfolio

空二 KONGER 个人网站原型。当前版本已将旧的虚构插画师内容替换为 KONGER 的公开资料与本地精选作品，并围绕桌面端与移动端重新排版。

## Local Development

```bash
npm install
npm run dev
```

当前本地预览地址：

`http://127.0.0.1:5173`

生产构建：

```bash
npm run build
```

## Content Sources

主素材目录：

`source-assets/konger-works/Art`

页面使用的前端图片副本，已转为 WebP 优化版：

`src/assets/konger`

公开资料参考：

- ZCOOL: https://www.zcool.com.cn/u/13169595
- GGAC: https://www.ggac.com/user/83988/works
- Weibo: https://weibo.com/2612004213/profile?rightmod=1&wvr=6&mod=personinfo
- ArtStation: https://www.artstation.com/konger

## Current Structure

- 首屏：使用真实作品作为沉浸式主视觉，标题为 `KONGER 空二`。
- 精选作品：支持前后切换与作品弹窗。
- 作品墙：支持按 `Narrative`、`Character`、`Illustration`、`Motion` 筛选。
- About：使用整理后的插画师介绍文案。
- Sources：保留公开主页入口，方便回溯。

## Rights Note

当前图片来自公开作品页与本地整理素材，用于设计预览和网站准备。正式上线展示、商用发布或对外传播前，需要确认权利人授权范围。

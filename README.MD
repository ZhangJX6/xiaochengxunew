## 考务管理 - 微信小程序

### 1. 启动

```bash
npm run dev
```

下载微信开发者工具 https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html 

选择小程序项目 ， 目录指定dist目录开始调试 ， 在详情设置里关闭es6转es5

小程序框架文档 https://tencent.github.io/wepy/

### 2. 部署

#### 1. 代码上传

```css
点击开发者工具中的 上传 按钮; 填写版本号及项目备注;
项目需要登录名和密码; 所以项目备注需填写: 用户名分别为: 040006, 040012,201510800101, 密码均为admin
若项目中的账号密码发生了变化 需要及时进行修改
```
#### 2. 提交审核与发布 

```css
1. 登录微信公众平台 https://mp.weixin.qq.com/wxopen/wacodepage?action=getcodepage
2. 点击 管理 目录下的 版本管理;
3. 点击 开发版本 的 提交审核 按钮; 进入提交审核页面 填写 审核信息;
4. 审核通过后需手动进行发版;
```

### 3. 维护

> 1. 线上环境与测试环境

```css
baseUrl: 'https://kwgl.newaigo.com/a/ws/kwgl',
baseUrlSys: 'https://kwgl.newaigo.com/a/ws/sys',
// baseUrl: 'http://47.93.31.175:8191/spoc-kwgl/a/ws/kwgl',
// baseUrlSys: 'http://47.93.31.175:8191/spoc-kwgl/a/ws/sys',
线上环境所有的接口需改为 kwgl.newaigo.com
测设环境的所有接口需改为 47.93.31.175:8191
```
> 2. 接口请求

```css
http 对象的封装 在 utils/http.js

登录接口返回的 set-cookie 需要保存; wepy.$instance.globalData.header.Cookie; 其余接口的调用需要该cookie的验证;
```

> 3. 统一提示

```css
全局的提示框 封装在了 utils/tips.js
```


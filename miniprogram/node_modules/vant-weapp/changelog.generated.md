## 更新日志

## [v0.5.7](https://github.com/youzan/vant-weapp/tree/v0.5.7) (2019-03-09)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.6...v0.5.7)

**Breaking changes**

- 建议给field 也加入 size=”large“ 毕竟cell支持，field 又是调用的cell [\#1350](https://github.com/youzan/vant-weapp/issues/1350)
- Tab组件不能设置背景颜色 [\#1313](https://github.com/youzan/vant-weapp/issues/1313)

**Bug Fixes**

- steps 第一次可以打开第二次进入后空白 提示 Error: Expect END descriptor with depth 0 but get another  [\#1336](https://github.com/youzan/vant-weapp/issues/1336)
- Area 省市区选择 显示bug [\#1318](https://github.com/youzan/vant-weapp/issues/1318)
- tab 组件bug [\#1310](https://github.com/youzan/vant-weapp/issues/1310)

**Issue**

- https://youzan.github.io/vant-weapp/\#/picker文档中 多联互动 代码错误 [\#1389](https://github.com/youzan/vant-weapp/issues/1389)
- van-tabs 如何固定在顶部？ [\#1388](https://github.com/youzan/vant-weapp/issues/1388)
- popup弹出层方法失效只有click-overlay有效果 [\#1386](https://github.com/youzan/vant-weapp/issues/1386)
- navbar图标不居中 [\#1385](https://github.com/youzan/vant-weapp/issues/1385)
- van-button 使用custom-class自定义样式无效，不能覆盖，即使使用!important 也没有效果 [\#1384](https://github.com/youzan/vant-weapp/issues/1384)
- 小程序报错:无法加载字体 [\#1383](https://github.com/youzan/vant-weapp/issues/1383)
- router-patch之后，cell的url无法跳转 [\#1382](https://github.com/youzan/vant-weapp/issues/1382)
- h5版的vant有sku，小程序的却没有，以后会出嘛？ [\#1381](https://github.com/youzan/vant-weapp/issues/1381)
- field组件输入的内容异常清空 [\#1378](https://github.com/youzan/vant-weapp/issues/1378)
- 添加搜索组件高级用法的示例 [\#1375](https://github.com/youzan/vant-weapp/issues/1375)
- example 微信开发者工具中，无法运行 [\#1373](https://github.com/youzan/vant-weapp/issues/1373)
- van-popup 在基础库 2.6.1 下报渲染层错误 [\#1371](https://github.com/youzan/vant-weapp/issues/1371)
- Tab 自定义标签 [\#1368](https://github.com/youzan/vant-weapp/issues/1368)
- Field组件 [\#1365](https://github.com/youzan/vant-weapp/issues/1365)
- 引入miniprogram-api-typings导致找不到wx的定义？ [\#1364](https://github.com/youzan/vant-weapp/issues/1364)
- 可不可以出一个不引入wxs文件的版本 [\#1361](https://github.com/youzan/vant-weapp/issues/1361)
- 好多组件都会有一个组件名-index的class 并且没有空格 [\#1360](https://github.com/youzan/vant-weapp/issues/1360)
- tabbar-item 可否提供一个插槽 [\#1357](https://github.com/youzan/vant-weapp/issues/1357)
- Failed to load font https://img.yzcdn.cn/vant/vant-icon-956c55.woff2 [\#1354](https://github.com/youzan/vant-weapp/issues/1354)
- 部分iPhone机型出现白屏 [\#1353](https://github.com/youzan/vant-weapp/issues/1353)
- Collapse 通过setData改变data数据 但是视图不更新 也不报错 完全按照官网手风琴代码书写引入 点击无任何反应 [\#1352](https://github.com/youzan/vant-weapp/issues/1352)
- tab标题的点击事件bind：click和bind：change不能同时用 [\#1339](https://github.com/youzan/vant-weapp/issues/1339)
- van-collapse嵌套van-collapse右侧图标显示不正确,内部的图标,在未展开时箭头应该朝下,现在一律朝上 [\#1307](https://github.com/youzan/vant-weapp/issues/1307)

**Improvements**

- build: compile typescript with gulp-typescript instead of babel [\#1392](https://github.com/youzan/vant-weapp/pull/1392) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Tab: add new external class nav-class、tab-class、tab-active-class [\#1391](https://github.com/youzan/vant-weapp/pull/1391) ([rex-zsd](https://github.com/rex-zsd))
- \[docs\] Picker: advanced example incorrect [\#1390](https://github.com/youzan/vant-weapp/pull/1390) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Area: incorrect initial index when set columns-num 2 [\#1376](https://github.com/youzan/vant-weapp/pull/1376) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Tab: offset-set not work、build class wrong [\#1370](https://github.com/youzan/vant-weapp/pull/1370) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Field: add new prop size [\#1369](https://github.com/youzan/vant-weapp/pull/1369) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Steps: fix render error in wechat 7.0.3 [\#1367](https://github.com/youzan/vant-weapp/pull/1367) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Icon: optimzie round corner of some icons [\#1363](https://github.com/youzan/vant-weapp/pull/1363) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Tabbar: optimize performance [\#1362](https://github.com/youzan/vant-weapp/pull/1362) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.6](https://github.com/youzan/vant-weapp/tree/v0.5.6) (2019-02-28)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.5...v0.5.6)

**Breaking changes**

- notify支持换行 [\#1324](https://github.com/youzan/vant-weapp/issues/1324)
- tabs加一个slot [\#1316](https://github.com/youzan/vant-weapp/issues/1316)

**Issue**

- van-picker 的setColumnValues 第二次set无效 [\#1349](https://github.com/youzan/vant-weapp/issues/1349)

**Improvements**

- \[bugfix\] Area: 修复初始化概率性失败 [\#1351](https://github.com/youzan/vant-weapp/pull/1351) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Stepper: add focus event [\#1347](https://github.com/youzan/vant-weapp/pull/1347) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Button: add loading-size prop [\#1346](https://github.com/youzan/vant-weapp/pull/1346) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.5](https://github.com/youzan/vant-weapp/tree/v0.5.5) (2019-02-26)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.4...v0.5.5)

**Breaking changes**

- 加载中的按钮需要可以加说明文字 [\#1259](https://github.com/youzan/vant-weapp/issues/1259)

**Bug Fixes**

- van-action-sheet带取消按钮时会有上下滚动条 [\#1312](https://github.com/youzan/vant-weapp/issues/1312)

**Issue**

- 请教：如何加入组件单元测试？ [\#1343](https://github.com/youzan/vant-weapp/issues/1343)
- tab组件支持循环渲染嘛 [\#1342](https://github.com/youzan/vant-weapp/issues/1342)
- Tabs swipe-threshold 失效 [\#1338](https://github.com/youzan/vant-weapp/issues/1338)
- 微信小程序时间选择器回掉函数没有value值\<van-datetime-picker type="date" value="{{ currentDate }}" min-date="{{ minDate }}" bind:change="onChange"/\> [\#1337](https://github.com/youzan/vant-weapp/issues/1337)
- rate和icon无法显示图标 [\#1335](https://github.com/youzan/vant-weapp/issues/1335)
- 在小程序中使用\<van-area area-list="{{ areaList }}" /\>组件,没数据展示 [\#1334](https://github.com/youzan/vant-weapp/issues/1334)
- iponeXS MAX 语言问题 [\#1331](https://github.com/youzan/vant-weapp/issues/1331)
- Dialog点击穿透如何解决？ [\#1330](https://github.com/youzan/vant-weapp/issues/1330)
- row的垂直居中有计划增加吗 [\#1329](https://github.com/youzan/vant-weapp/issues/1329)
- tabs的底线如何去掉？ [\#1328](https://github.com/youzan/vant-weapp/issues/1328)
- van-tabs,显示异常 [\#1326](https://github.com/youzan/vant-weapp/issues/1326)
- navbar的leftarrow不出现 [\#1323](https://github.com/youzan/vant-weapp/issues/1323)
- tab怎么做到懒加载 [\#1319](https://github.com/youzan/vant-weapp/issues/1319)
- datetime-picker 返回为undefined [\#1299](https://github.com/youzan/vant-weapp/issues/1299)
- 小程序中NavBar 导航栏软盘弹出来时会将导航栏顶出去 [\#1247](https://github.com/youzan/vant-weapp/issues/1247)

**Improvements**

- \[improvement\]: change miniprogram-api-typings for typescript definition [\#1344](https://github.com/youzan/vant-weapp/pull/1344) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Transition: refactor with css transition [\#1341](https://github.com/youzan/vant-weapp/pull/1341) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Button: add info type [\#1340](https://github.com/youzan/vant-weapp/pull/1340) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Tab: refactor component & add new slot [\#1332](https://github.com/youzan/vant-weapp/pull/1332) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Notify: support word break [\#1325](https://github.com/youzan/vant-weapp/pull/1325) ([rex-zsd](https://github.com/rex-zsd))

## [v0.5.4](https://github.com/youzan/vant-weapp/tree/v0.5.4) (2019-02-18)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.3...v0.5.4)

**Breaking changes**

- Collapse 折叠面板可以调整字体大小吗？ [\#1269](https://github.com/youzan/vant-weapp/issues/1269)
- van-goods-action-icon 如何自定义颜色？ [\#1260](https://github.com/youzan/vant-weapp/issues/1260)

**Bug Fixes**

- van-collapse用在van-popup里面默认第一次显示面板内容是关闭状态无法更改 [\#1254](https://github.com/youzan/vant-weapp/issues/1254)
- card 的 centered无效！ [\#1243](https://github.com/youzan/vant-weapp/issues/1243)
- Dialog的层级没有SubmitBar高 [\#1201](https://github.com/youzan/vant-weapp/issues/1201)

**Issue**

- 功能使用疑问之传值是否支持data-xxx [\#1320](https://github.com/youzan/vant-weapp/issues/1320)
- 可以设置tree-select中选中的颜色，不是现在的红色 [\#1315](https://github.com/youzan/vant-weapp/issues/1315)
- toast组件无法使用 在mpvue2.0中 [\#1314](https://github.com/youzan/vant-weapp/issues/1314)
- dist错误 [\#1309](https://github.com/youzan/vant-weapp/issues/1309)
- v0.5.3版本的Notify在mpvue功做不正常了 [\#1306](https://github.com/youzan/vant-weapp/issues/1306)
- 使用van-button的时候获取不到form\_id [\#1305](https://github.com/youzan/vant-weapp/issues/1305)
- 使用van-button调用分享的时候如data-name=1,回调函数获取不到这个值 [\#1304](https://github.com/youzan/vant-weapp/issues/1304)
- List组件有计划实现吗 [\#1303](https://github.com/youzan/vant-weapp/issues/1303)
- checkbox超过一定数量卡死 [\#1302](https://github.com/youzan/vant-weapp/issues/1302)
- NoticeBar在link 模式出现错误 [\#1293](https://github.com/youzan/vant-weapp/issues/1293)
- 能否支持多货币 [\#1292](https://github.com/youzan/vant-weapp/issues/1292)
- layout布局和checkbox group一起使用导致全选 [\#1290](https://github.com/youzan/vant-weapp/issues/1290)
- van-field不支持双向绑定？ [\#1289](https://github.com/youzan/vant-weapp/issues/1289)
- Notify控件的参数与vant不一致 [\#1287](https://github.com/youzan/vant-weapp/issues/1287)
- 缺少replay图标 [\#1283](https://github.com/youzan/vant-weapp/issues/1283)
- field 清除图标不居中 [\#1261](https://github.com/youzan/vant-weapp/issues/1261)
- tree-select 里面的 wx:key 是不是写错了啊 [\#1244](https://github.com/youzan/vant-weapp/issues/1244)
- van-area配合van-popup组件，van-area组件滑动时关闭popup后再次打开，van-area只显示第一列且不可滑动 [\#1207](https://github.com/youzan/vant-weapp/issues/1207)
- Steps当字数过多~ [\#1206](https://github.com/youzan/vant-weapp/issues/1206)
- 顶部小房子需求 [\#1203](https://github.com/youzan/vant-weapp/issues/1203)

**Improvements**

- \[new feature\] Dialog: 支持openType相关参数 [\#1321](https://github.com/youzan/vant-weapp/pull/1321) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Area: setValues in one micro task [\#1317](https://github.com/youzan/vant-weapp/pull/1317) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] ActionSheet: cancel button height [\#1311](https://github.com/youzan/vant-weapp/pull/1311) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Button: add business-id prop [\#1308](https://github.com/youzan/vant-weapp/pull/1308) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] Button: missing loading-text prop [\#1301](https://github.com/youzan/vant-weapp/pull/1301) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Button: add loading-text prop [\#1300](https://github.com/youzan/vant-weapp/pull/1300) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] SwitchCell: add active-value & inactive-value prop [\#1298](https://github.com/youzan/vant-weapp/pull/1298) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Switch: add active-value & inactive-value prop [\#1297](https://github.com/youzan/vant-weapp/pull/1297) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Area: add confirm-button-text prop [\#1296](https://github.com/youzan/vant-weapp/pull/1296) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Tab: should not have line animation when inited [\#1295](https://github.com/youzan/vant-weapp/pull/1295) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.3](https://github.com/youzan/vant-weapp/tree/v0.5.3) (2019-02-06)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.2...v0.5.3)

**Bug Fixes**

- search组件 readonly未生效 [\#1231](https://github.com/youzan/vant-weapp/issues/1231)
- Tabs明显的bug [\#1221](https://github.com/youzan/vant-weapp/issues/1221)
- picker  getIndexes问题【BUG】 [\#1212](https://github.com/youzan/vant-weapp/issues/1212)

**Issue**

- 自定义样式 [\#1282](https://github.com/youzan/vant-weapp/issues/1282)
- van-collapse-item组件点击失效 [\#1281](https://github.com/youzan/vant-weapp/issues/1281)
- 单选框选中item时无法触发函数，控制台显示组件没有触发事件对应的方法 [\#1279](https://github.com/youzan/vant-weapp/issues/1279)
- wepy2.x引入有赞vant组件报错 [\#1275](https://github.com/youzan/vant-weapp/issues/1275)
- submitBar 中 API safe-area-inset-bottom 设置无效 [\#1266](https://github.com/youzan/vant-weapp/issues/1266)
- tab切换，内容区域抖动 [\#1265](https://github.com/youzan/vant-weapp/issues/1265)
- van-goods-action 在IphoneX上面底部会出现34px的空白  [\#1264](https://github.com/youzan/vant-weapp/issues/1264)
- tabs组件的bind:scroll不触发 [\#1263](https://github.com/youzan/vant-weapp/issues/1263)
- 默认分支为什么不是 master [\#1262](https://github.com/youzan/vant-weapp/issues/1262)
- 你们要改成  996 了, 会不会有很多人离职啊, 还会接着维护吗? [\#1257](https://github.com/youzan/vant-weapp/issues/1257)
- 小程序中Tabbar功能 [\#1256](https://github.com/youzan/vant-weapp/issues/1256)
- tab组件，custom-class无法覆盖 van-tab--active  [\#1255](https://github.com/youzan/vant-weapp/issues/1255)
- van-submit-bar & van-field 层级问题  [\#1253](https://github.com/youzan/vant-weapp/issues/1253)
- wepy下使用toast和Dialog都提示了一个警告，没出现demo的演示效果 [\#1252](https://github.com/youzan/vant-weapp/issues/1252)
- usingComponents后复杂对象失去双向绑定 [\#1251](https://github.com/youzan/vant-weapp/issues/1251)
- tabs的粘性定位没用 [\#1250](https://github.com/youzan/vant-weapp/issues/1250)
- toast调用没反应 [\#1249](https://github.com/youzan/vant-weapp/issues/1249)
- 能不能给个详细一点的引入教程?微信文档就两句话，然后UI文档也是两句话。我直接目录运行命令行根本就不行。 [\#1248](https://github.com/youzan/vant-weapp/issues/1248)
- van-tabs  手势滑动切换 与 滚动下拉冲突 [\#1246](https://github.com/youzan/vant-weapp/issues/1246)
- 最新的mpvue1.1.0框架下，自定义组件事件触发无效 [\#1245](https://github.com/youzan/vant-weapp/issues/1245)
- DatetimePicker建议增加no-use参数 [\#1242](https://github.com/youzan/vant-weapp/issues/1242)
- 请问 van-tabs 如何固定在顶部不随页面滚动消失? [\#1241](https://github.com/youzan/vant-weapp/issues/1241)
- 请问能具体说一下怎么在开发者工具预览么 [\#1240](https://github.com/youzan/vant-weapp/issues/1240)
- van-tab [\#1239](https://github.com/youzan/vant-weapp/issues/1239)
- Dialog 组件中可以设置按钮的颜色 [\#1236](https://github.com/youzan/vant-weapp/issues/1236)
- van-dialog van-popup在里面填充内容后，还可以滑动页面。 [\#1226](https://github.com/youzan/vant-weapp/issues/1226)
- area 组件地区选项不显示 [\#1215](https://github.com/youzan/vant-weapp/issues/1215)
- 无法修改van-stepper plus和minus（加号和减号）自定义样式的颜色和大小 [\#1194](https://github.com/youzan/vant-weapp/issues/1194)

**Improvements**

- \[build\] 0.5.3 [\#1288](https://github.com/youzan/vant-weapp/pull/1288) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] add weapp-nav icon [\#1286](https://github.com/youzan/vant-weapp/pull/1286) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Area: 修复特殊情况下初始化选项错误 [\#1285](https://github.com/youzan/vant-weapp/pull/1285) ([rex-zsd](https://github.com/rex-zsd))
- \[build\] Icon: 升级 @vant/icons [\#1284](https://github.com/youzan/vant-weapp/pull/1284) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\]: 使用hover-class定义点击态样式 [\#1280](https://github.com/youzan/vant-weapp/pull/1280) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] NoticeBar: 性能优化 [\#1278](https://github.com/youzan/vant-weapp/pull/1278) ([rex-zsd](https://github.com/rex-zsd))
- improvement: 更新weapp类型定义 [\#1277](https://github.com/youzan/vant-weapp/pull/1277) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Dialog: 提高 zIndex 默认值为 2000 [\#1276](https://github.com/youzan/vant-weapp/pull/1276) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] TreeSelect: 优化性能 [\#1274](https://github.com/youzan/vant-weapp/pull/1274) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Button:  增加新属性 ariaLabel、增加外部样式类 hover-class、增加launchapp事件 [\#1273](https://github.com/youzan/vant-weapp/pull/1273) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] GoodsActionIcon: 新增外部样式类icon-class、text-class [\#1272](https://github.com/youzan/vant-weapp/pull/1272) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Collapse: 新增外部样式类 title-class [\#1271](https://github.com/youzan/vant-weapp/pull/1271) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Card: 修复centered属性无效，去除title、desc长度限制 [\#1270](https://github.com/youzan/vant-weapp/pull/1270) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Field: 修复清除图标未居中 [\#1267](https://github.com/youzan/vant-weapp/pull/1267) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\]Search: 完善Search文档 [\#1228](https://github.com/youzan/vant-weapp/pull/1228) ([imjohnny](https://github.com/imjohnny))

## [v0.5.2](https://github.com/youzan/vant-weapp/tree/v0.5.2) (2019-01-20)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.1...v0.5.2)

**Bug Fixes**

- 小程序省市区 首次初始化 [\#1195](https://github.com/youzan/vant-weapp/issues/1195)

**Issue**

- 在微信开发工具中，提示这么一个错误：Failed to load font https://img.yzcdn.cn/vant/vant-icon-3d2f5b.woff2 [\#1235](https://github.com/youzan/vant-weapp/issues/1235)
- cell的label内容过长时换行问题 [\#1233](https://github.com/youzan/vant-weapp/issues/1233)
- filed 放在actionSheet 页面滚动时 placeholder 和value会滚动出去 [\#1232](https://github.com/youzan/vant-weapp/issues/1232)
- input-class不生效 [\#1230](https://github.com/youzan/vant-weapp/issues/1230)
- 弹出带标题的 Actionsheet 中的标题这个部分无法 fixed [\#1229](https://github.com/youzan/vant-weapp/issues/1229)
- van-dialog组件引用后在IOS中阻止了整个页面的渲染，组件也渲染不出 [\#1227](https://github.com/youzan/vant-weapp/issues/1227)
- nav-bar 组件希望可以增加属性传入机制 [\#1225](https://github.com/youzan/vant-weapp/issues/1225)
- 小程序端的图标出现bug [\#1224](https://github.com/youzan/vant-weapp/issues/1224)
- ActionSheet应当加入“选中”状态 [\#1223](https://github.com/youzan/vant-weapp/issues/1223)
- van-field输入值的时候，对应的value属性取值无效 [\#1222](https://github.com/youzan/vant-weapp/issues/1222)
- dialog放在自定义组件中无法获取dialog节点 [\#1218](https://github.com/youzan/vant-weapp/issues/1218)
- 使用collapse组件时的bug [\#1214](https://github.com/youzan/vant-weapp/issues/1214)
- GoodsAction 商品导航 [\#1211](https://github.com/youzan/vant-weapp/issues/1211)
- 使用van-collapse报 Cannot read property 'concat' of null; 非手风琴模式 [\#1209](https://github.com/youzan/vant-weapp/issues/1209)
- ActionSheet上拉菜单在小程序基础库2.4.4及以上报错 [\#1208](https://github.com/youzan/vant-weapp/issues/1208)

**Improvements**

- \[bugfix\] Search: 修复readonly属性无效 [\#1238](https://github.com/youzan/vant-weapp/pull/1238) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Card: 更新价格部分样式 [\#1237](https://github.com/youzan/vant-weapp/pull/1237) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] TreeSelect: 去除点击态样式 [\#1234](https://github.com/youzan/vant-weapp/pull/1234) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Area: 修复getIndexes结果不符合预期 [\#1220](https://github.com/youzan/vant-weapp/pull/1220) ([rex-zsd](https://github.com/rex-zsd))
- docs\(Collapse\): 完善 Collapse 文档 [\#1219](https://github.com/youzan/vant-weapp/pull/1219) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Tabs：回滚使用IntersectionObserver实现的sticky效果 [\#1217](https://github.com/youzan/vant-weapp/pull/1217) ([cookfront](https://github.com/cookfront))
- \[improvement\] TabbarItem: add custom-class [\#1213](https://github.com/youzan/vant-weapp/pull/1213) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Toast: allow newline charactor [\#1210](https://github.com/youzan/vant-weapp/pull/1210) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.1](https://github.com/youzan/vant-weapp/tree/v0.5.1) (2019-01-10)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.0...v0.5.1)

**Bug Fixes**

- van-goods-action-icon 右上角图标样式问题 [\#1174](https://github.com/youzan/vant-weapp/issues/1174)

**Issue**

- tab 粘性布局无效 [\#1199](https://github.com/youzan/vant-weapp/issues/1199)
- 小白请教～ 怎么实现类似原生的那种tabBar  可以让tabBar一直现实在底部 [\#1198](https://github.com/youzan/vant-weapp/issues/1198)
- 0.5.0版本重构了datepicker 需求change事件也返回value [\#1193](https://github.com/youzan/vant-weapp/issues/1193)
- dialog等反馈组件，层级不够 [\#1192](https://github.com/youzan/vant-weapp/issues/1192)
- SwipeCell 滑动单元格 [\#1191](https://github.com/youzan/vant-weapp/issues/1191)
- 似乎无法通过form表单获取formid、 [\#1190](https://github.com/youzan/vant-weapp/issues/1190)
- van-field 开发者工具中无法输入  [\#1189](https://github.com/youzan/vant-weapp/issues/1189)
- 新版本下question图标在oppo r9手机下显示为蓝点 [\#1181](https://github.com/youzan/vant-weapp/issues/1181)
- 去除真机上横向滚动tab的滚动条 [\#1173](https://github.com/youzan/vant-weapp/issues/1173)

**Improvements**

- \[new feature\] Tab: add line-height prop [\#1205](https://github.com/youzan/vant-weapp/pull/1205) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Icon: add cart-circle icon [\#1204](https://github.com/youzan/vant-weapp/pull/1204) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Color: update base green to wechat green [\#1202](https://github.com/youzan/vant-weapp/pull/1202) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Field：手写键盘输入时未触发change事件 [\#1200](https://github.com/youzan/vant-weapp/pull/1200) ([Zenser](https://github.com/Zenser))
- \[improvement\] Tabs：sticky实现优化，不依赖外层的scrollTop [\#1197](https://github.com/youzan/vant-weapp/pull/1197) ([cookfront](https://github.com/cookfront))
- \[bugfix\] Area: 修复初始选中项错误 [\#1196](https://github.com/youzan/vant-weapp/pull/1196) ([rex-zsd](https://github.com/rex-zsd))
- \[bug fix\]slider: 修复 value 值改变时，触发 drag 事件的问题 [\#1186](https://github.com/youzan/vant-weapp/pull/1186) ([realywithoutname](https://github.com/realywithoutname))

## [v0.5.0](https://github.com/youzan/vant-weapp/tree/v0.5.0) (2019-01-05)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.0-beta2...v0.5.0)

**Issue**

- field的prop添加value支持 [\#1184](https://github.com/youzan/vant-weapp/issues/1184)
- cell单元格icon如何设置 [\#1183](https://github.com/youzan/vant-weapp/issues/1183)
- collapse折叠面板初始化报错，点击报错，点击无变化 [\#1178](https://github.com/youzan/vant-weapp/issues/1178)
- tree-select 右侧选项能否支持 slot [\#1176](https://github.com/youzan/vant-weapp/issues/1176)

**Improvements**

- \[improvement\] Icon: rounded lines [\#1188](https://github.com/youzan/vant-weapp/pull/1188) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] DatetimePicker: 使用picker重构 [\#1187](https://github.com/youzan/vant-weapp/pull/1187) ([rex-zsd](https://github.com/rex-zsd))
- update dependencies [\#1180](https://github.com/youzan/vant-weapp/pull/1180) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Card: desc ellipsis [\#1179](https://github.com/youzan/vant-weapp/pull/1179) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Picker: 修复设置defaultIndex时的选项样式问题 [\#1177](https://github.com/youzan/vant-weapp/pull/1177) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Area: 使用picker重构组件 [\#1175](https://github.com/youzan/vant-weapp/pull/1175) ([rex-zsd](https://github.com/rex-zsd))

## [v0.5.0-beta2](https://github.com/youzan/vant-weapp/tree/v0.5.0-beta2) (2018-12-28)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.0-beta...v0.5.0-beta2)

## [v0.5.0-beta](https://github.com/youzan/vant-weapp/tree/v0.5.0-beta) (2018-12-25)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.10...v0.5.0-beta)

## [v0.4.10](https://github.com/youzan/vant-weapp/tree/v0.4.10) (2018-12-19)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.9...v0.4.10)

## [v0.4.9](https://github.com/youzan/vant-weapp/tree/v0.4.9) (2018-12-07)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.8...v0.4.9)

## [v0.4.8](https://github.com/youzan/vant-weapp/tree/v0.4.8) (2018-12-03)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.7...v0.4.8)

## [v0.4.7](https://github.com/youzan/vant-weapp/tree/v0.4.7) (2018-11-26)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.6...v0.4.7)

## [v0.4.6](https://github.com/youzan/vant-weapp/tree/v0.4.6) (2018-11-10)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.5...v0.4.6)

## [v0.4.5](https://github.com/youzan/vant-weapp/tree/v0.4.5) (2018-10-31)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.4...v0.4.5)

## [v0.4.4](https://github.com/youzan/vant-weapp/tree/v0.4.4) (2018-10-31)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.3...v0.4.4)

## [v0.4.3](https://github.com/youzan/vant-weapp/tree/v0.4.3) (2018-10-24)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.2...v0.4.3)

## [v0.4.2](https://github.com/youzan/vant-weapp/tree/v0.4.2) (2018-10-19)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.1...v0.4.2)

## [v0.4.1](https://github.com/youzan/vant-weapp/tree/v0.4.1) (2018-10-17)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.4.0...v0.4.1)

## [v0.4.0](https://github.com/youzan/vant-weapp/tree/v0.4.0) (2018-10-15)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.3.9...v0.4.0)

## [v0.3.9](https://github.com/youzan/vant-weapp/tree/v0.3.9) (2018-10-15)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.3.8...v0.3.9)

## [v0.3.8](https://github.com/youzan/vant-weapp/tree/v0.3.8) (2018-10-09)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.3.7...v0.3.8)

## [v0.3.7](https://github.com/youzan/vant-weapp/tree/v0.3.7) (2018-10-08)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.3.6...v0.3.7)

## [v0.3.6](https://github.com/youzan/vant-weapp/tree/v0.3.6) (2018-09-30)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.3.5...v0.3.6)

## [v0.3.5](https://github.com/youzan/vant-weapp/tree/v0.3.5) (2018-09-29)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.3.4...v0.3.5)

## [v0.3.4](https://github.com/youzan/vant-weapp/tree/v0.3.4) (2018-09-27)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.3.3...v0.3.4)

## [v0.3.3](https://github.com/youzan/vant-weapp/tree/v0.3.3) (2018-09-20)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.3.2...v0.3.3)

## [v0.3.2](https://github.com/youzan/vant-weapp/tree/v0.3.2) (2018-09-13)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.3.1...v0.3.2)

## [v0.3.1](https://github.com/youzan/vant-weapp/tree/v0.3.1) (2018-09-08)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.3.0...v0.3.1)



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*
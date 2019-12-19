(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228d13"],{db98:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=this,a=e.$createElement,o=e._self._c||a;return o("div",[o("div",{staticClass:"card-content"},[o("a-row",{attrs:{gutter:12}},[e.options.developer_mode?o("a-col",{style:{marginBottom:"12px"},attrs:{xl:6,lg:6,md:12,sm:24,xs:24}},[o("a-card",{attrs:{bordered:!1,bodyStyle:{padding:"16px"}}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("a-icon",{attrs:{type:"experiment"}}),e._v(" 开发者选项\n          ")],1),o("p",[e._v("点击进入开发者选项页面")]),o("a-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(t){return e.handleToDeveloperOptions()}}},[e._v("进入")])],1)],1):e._e(),o("a-col",{style:{marginBottom:"12px"},attrs:{xl:6,lg:6,md:12,sm:24,xs:24}},[o("a-card",{attrs:{bordered:!1,bodyStyle:{padding:"16px"}}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("a-icon",{attrs:{type:"hdd"}}),e._v(" 博客备份\n          ")],1),o("p",[e._v("支持备份全站数据")]),o("a-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(){return t.backupDrawerVisible=!0}}},[e._v("备份")])],1)],1),o("a-col",{style:{marginBottom:"12px"},attrs:{xl:6,lg:6,md:12,sm:24,xs:24}},[o("a-card",{attrs:{bordered:!1,bodyStyle:{padding:"16px"}}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("a-icon",{attrs:{type:"file-markdown"}}),e._v(" Markdown 文章导入\n          ")],1),o("p",[e._v("支持 Hexo/Jekyll 文章导入并解析元数据")]),o("a-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.handleImportMarkdown}},[e._v("导入")])],1)],1)],1),o("a-modal",{attrs:{title:"Markdown 文章导入",footer:null,destroyOnClose:"",afterClose:e.onUploadClose},model:{value:e.markdownUpload,callback:function(t){e.markdownUpload=t},expression:"markdownUpload"}},[o("FilePondUpload",{ref:"upload",attrs:{name:"file",accept:"text/markdown",label:"拖拽或点击选择 Markdown 文件到此处",uploadHandler:e.uploadHandler}})],1),o("BackupDrawer",{model:{value:e.backupDrawerVisible,callback:function(t){e.backupDrawerVisible=t},expression:"backupDrawerVisible"}})],1)])},n=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),l=a("2f62"),r=a("9efd"),s="/api/admin/backups",c={importMarkdown:function(t,e,a){return Object(r["a"])({url:"".concat(s,"/import/markdown"),timeout:864e4,data:t,onUploadProgress:e,cancelToken:a,method:"post"})},backupHalo:function(){return Object(r["a"])({url:"".concat(s,"/halo"),method:"post",timeout:864e4})},listHaloBackups:function(){return Object(r["a"])({url:"".concat(s,"/halo"),method:"get"})},deleteHaloBackup:function(t){return Object(r["a"])({url:"".concat(s,"/halo"),params:{filename:t},method:"delete"})}},d=c,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{attrs:{title:"博客备份",width:t.isMobile()?"100%":"460",closable:"",visible:t.visible,destroyOnClose:""},on:{close:t.onClose}},[a("a-row",{attrs:{type:"flex",align:"middle"}},[a("a-col",{attrs:{span:24}},[a("a-card",{attrs:{bordered:!1,bodyStyle:{padding:"0"}}},[a("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.backupTips},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-list-item-meta",{attrs:{description:e.description}},[a("h4",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),e.alert?a("a-alert",{attrs:{slot:"extra",message:e.alert.message,type:e.alert.type,banner:""},slot:"extra"}):t._e()],1)}}])}),a("a-divider",[t._v("历史备份")]),a("a-list",{attrs:{itemLayout:"vertical",size:"small",dataSource:t.backups},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-button",{staticStyle:{color:"red"},attrs:{slot:"extra",type:"link",icon:"delete",loading:t.deleting},on:{click:function(a){return t.handleBackupDeleteClick(e.filename)}},slot:"extra"},[t._v("删除")]),a("a-list-item-meta",[a("a",{attrs:{slot:"title",href:e.downloadUrl},slot:"title"},[a("a-icon",{staticStyle:{color:"#52c41a"},attrs:{type:"schedule"}}),t._v("\n                "+t._s(e.filename)+"\n              ")],1),a("p",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(t._f("timeAgo")(e.updateTime))+"/"+t._s(t._f("fileSizeFormat")(e.fileSize)))])])],1)}}])},[t.loading?a("div",{staticClass:"loading-container",staticStyle:{position:"absolute",bottom:"40px",width:"100%","text-align":"center"}},[a("a-spin")],1):t._e()])],1)],1)],1),a("a-divider",{staticClass:"divider-transparent"}),a("div",{staticClass:"bottom-control"},[a("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"primary",icon:"download",loading:t.backuping},on:{click:t.handleBackupClick}},[t._v("备份")]),a("a-button",{attrs:{type:"dash",icon:"reload",loading:t.loading},on:{click:t.handleBAckupRefreshClick}},[t._v("刷新")])],1)],1)},u=[],m=a("ac0d"),f={name:"BackupDrawer",mixins:[m["a"],m["b"]],data:function(){return{backuping:!1,loading:!1,deleting:!1,backups:[],backupTips:[{title:"博客备份",description:"将会压缩 Halo 的工作目录到临时文件中，并提供下载链接。如果附件太多的话，可能会十分耗时，请耐心等待！",alert:{type:"warning",message:"注意：备份后生成的压缩文件存储在临时文件中，重启服务器会造成备份文件的丢失，所以请尽快下载！"}},{title:"备份查询",description:"查询近期的备份，按照备份时间递减排序。"},{title:"备份删除",description:"删除已经备份的内容。"},{title:"版本要求",alert:{type:"warning",message:"注意：要求 Halo server 版本大于 v1.1.3！你可以在 【系统 | 关于】 里面找到系统的版本信息。"}}]}},model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,required:!1,default:!0}},watch:{visible:function(t,e){t&&this.getBackups()}},methods:{getBackups:function(){var t=this;this.loading=!0,d.listHaloBackups().then((function(e){t.backups=e.data.data})).finally((function(){return t.loading=!1}))},handleBackupClick:function(){var t=this;this.backuping=!0,d.backupHalo().then((function(e){t.$notification.success({message:"备份成功！"}),t.getBackups()})).finally((function(){t.backuping=!1}))},handleBackupDeleteClick:function(t){var e=this;this.deleting=!0,d.deleteHaloBackup(t).then((function(t){e.$notification.success({message:"删除成功！"}),e.getBackups()})).finally((function(){return e.deleting=!1}))},handleBAckupRefreshClick:function(){this.getBackups()},onClose:function(){this.$emit("close",!1)}}},b=f,k=a("2877"),h=Object(k["a"])(b,p,u,!1,null,null,null),g=h.exports;function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var w={components:{BackupDrawer:g},data:function(){return{backupDrawerVisible:!1,markdownUpload:!1,uploadHandler:d.importMarkdown}},computed:v({},Object(l["c"])(["options"])),methods:{handleImportMarkdown:function(){this.markdownUpload=!0},handleChange:function(t){var e=t.file.status;"uploading"!==e&&console.log(t.file,t.fileList),"done"===e?this.$message.success("".concat(t.file.name," 导入成功！")):"error"===e&&this.$message.error("".concat(t.file.name," 导入失败！"))},handleToDeveloperOptions:function(){this.$router.push({name:"DeveloperOptions"})},onUploadClose:function(){this.$refs.upload.handleClearFileList()}}},_=w,O=Object(k["a"])(_,o,n,!1,null,null,null);e["default"]=O.exports}}]);
"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[815],{5815:function(t,s,e){e.r(s),e.d(s,{default:function(){return M}});var n=e(5671),r=e(3144),u=e(136),i=e(516),o=e(1413),a=e(2791),p=e(8128),c="MyPosts_postsBlock__lB-pf",l="MyPosts_posts__GSiZ2",d="Post_item__Yu4oG",f=e(184),h=function(t){return(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("img",{src:"https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/2277146/r9dp4EYbWA57MnwRDJRvjg.jpg"}),t.message,(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"LIKES"})," ",t.likesCount]})]})},x=e(6139),j=e(704),v=e(2156),m=e(816),g=(0,v.D)(10),P=a.memo((function(t){var s=t.posts,e=(t.newPostText,t.addPost),n=s.map((function(t){return(0,f.jsx)(h,{message:t.message,likesCount:t.likesCount})}));return console.log("render"),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("h3",{children:"My posts"}),(0,f.jsx)(Z,{onSubmit:function(t){e(t.newPostText)}}),(0,f.jsx)("div",{className:l,children:n})]})})),Z=(0,j.Z)({form:"profileAddNewPostForm"})((function(t){return(0,f.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,f.jsx)("div",{children:(0,f.jsx)(x.Z,{validate:[v.C,g],name:"newPostText",component:m.Kx,placeholder:"Post message"})}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{className:t.btn,children:"Add post"})})]})})),S=P,_=e(8687),k=(0,_.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,p.Wl)(s))}}}))(S),C="ProfileInfo_descriptionBlock__XBXuJ",b=e(1628),w=e(9439),y=function(t){var s=(0,a.useState)(!1),e=(0,w.Z)(s,2),n=e[0],r=e[1],u=(0,a.useState)(t.status),i=(0,w.Z)(u,2),o=i[0],p=i[1];(0,a.useEffect)((function(){p(t.status)}),[t.status]);return(0,f.jsxs)("div",{children:[!n&&(0,f.jsx)("div",{children:(0,f.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"No status"})}),n&&(0,f.jsx)("div",{children:(0,f.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},onBlur:function(){r(!1),t.updateStatus(o)},autoFocus:!0,value:o})})]})},A=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return s?(0,f.jsx)("div",{children:(0,f.jsxs)("div",{className:C,children:[(0,f.jsx)("img",{src:s.photos.large,alt:""}),(0,f.jsx)(y,{status:e,updateStatus:n})]})}):(0,f.jsx)(b.Z,{})},N=function(t){return(0,f.jsxs)("div",{children:[(0,f.jsx)(A,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,f.jsx)(k,{})]})},T=e(7689),D=e(7781),I=e(5927);var B=function(t){(0,u.Z)(e,t);var s=(0,i.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.authorizedUserId)||this.props.router.navigate("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,f.jsx)("div",{children:(0,f.jsx)(N,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),e}(a.Component),M=(0,D.qC)((0,_.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,isAuth:t.auth.isAuth,authorizedUserId:t.auth.userId}}),{getUserProfile:p.et,getStatus:p.lR,updateStatus:p.Nf}),(function(t){return function(s){var e=(0,T.TH)(),n=(0,T.s0)(),r=(0,T.UO)();return(0,f.jsx)(t,(0,o.Z)((0,o.Z)({},s),{},{router:{location:e,navigate:n,params:r}}))}}),I.D)(B)},5927:function(t,s,e){e.d(s,{D:function(){return f}});var n=e(1413),r=e(5671),u=e(3144),i=e(136),o=e(516),a=e(2791),p=e(7689),c=e(8687),l=e(184),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var s=function(s){(0,i.Z)(a,s);var e=(0,o.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,u.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(t,(0,n.Z)({},this.props)):(0,l.jsx)(p.Fg,{to:"/login"})}}]),a}(a.Component);return(0,c.$j)(d)(s)}}}]);
//# sourceMappingURL=815.1a62d790.chunk.js.map
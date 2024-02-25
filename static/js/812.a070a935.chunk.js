"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[812],{5812:function(e,s,a){a.r(s),a.d(s,{default:function(){return L}});var n=a(2791),t={title:"Dialogs_title__g-IiL",main:"Dialogs_main__s4Ak5"},r="Messages_container__XYGtp",i="NewMessage_container__CTujU",l="NewMessage_textarea__8cZEW",c="NewMessage_buttons__ADHBS",o=a(6042),u=a(4376),d=a(9439),g=a(4878),m=a(7660),_=a(184),x=function(){var e=function(){var e=(0,n.useState)(""),s=(0,d.Z)(e,2),a=s[0],t=s[1],r=(0,m.TL)(),i=(0,n.useCallback)((function(e){t(e.currentTarget.value)}),[]),l=(0,n.useCallback)((function(){r((0,g.dH)(a)),t("")}),[r,a]),c=(0,n.useCallback)((function(){t("")}),[]);return{title:a,onTitleInputChange:i,onSendBtnClick:l,onCancelBtnClick:c}}(),s=e.title,a=e.onTitleInputChange,t=e.onSendBtnClick,r=e.onCancelBtnClick;return(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)(o.g,{value:s,callback:a,placeholder:"Write new message",style:l}),(0,_.jsxs)("div",{className:c,children:[(0,_.jsx)(u.z,{title:"Send",callback:t,type:"main",isDisabled:!s.trim()}),(0,_.jsx)(u.z,{title:"Cancel",callback:r,type:"secondary",isDisabled:!s.trim()})]})]})},j={container:"Message_container__rAoom",userInfo:"Message_userInfo__MignT",userAvatar:"Message_userAvatar__pRD-b",messageContent:"Message_messageContent__G0RII",message:"Message_message__Pg7MM",delBtn:"Message_delBtn__pzfgc"},f=a(7482),v=a(8287),C=(0,n.memo)((function(e){var s=e.message,a=function(e){var s=(0,n.useState)("readonly"),a=(0,d.Z)(s,2),t=a[0],r=a[1],i=(0,n.useState)(e.message),l=(0,d.Z)(i,2),c=l[0],o=l[1],u=(0,m.TL)(),_=(0,m.CG)(v.d),x=(0,n.useCallback)((function(){u((0,g.QV)(e.messageId,c)),r("readonly")}),[u,e.messageId,c]),j=(0,n.useCallback)((function(){u((0,g.X9)(e.messageId))}),[u,e.messageId]);return{user:_,messageTitle:c,messageViewMode:t,setMessageTitle:o,setMessageViewMode:r,updateMessageTitle:x,deleteMessage:j}}(s),t=a.user,r=a.messageTitle,i=a.messageViewMode,l=a.setMessageTitle,c=a.setMessageViewMode,x=a.updateMessageTitle,C=a.deleteMessage;return t?(0,_.jsxs)("div",{className:j.container,children:[(0,_.jsxs)("div",{className:j.userInfo,children:[(0,_.jsx)("img",{className:j.userAvatar,src:t.photos.large||t.photos.small||f.c,alt:"user_avatar"}),(0,_.jsx)("span",{className:j.time,children:s.time})]}),(0,_.jsxs)("div",{className:j.messageContent,children:["readonly"===i&&(0,_.jsx)("p",{onDoubleClick:function(){return c("updating")},className:j.message,children:s.message}),"updating"===i&&(0,_.jsx)(o.g,{value:r,callback:function(e){return l(e.currentTarget.value)},onBlurCallback:x,autoFocus:!0,style:j.message}),(0,_.jsx)(u.z,{title:"x",callback:C,type:"secondary",style:j.delBtn})]})]}):(0,_.jsx)(_.Fragment,{})})),M={container:"FriendMessage_container__aihFi",userInfo:"FriendMessage_userInfo__wUkk2",userAvatar:"FriendMessage_userAvatar__Nq1nk",messageContent:"FriendMessage_messageContent__8J2Le",message:"FriendMessage_message__DcAyX",delBtn:"FriendMessage_delBtn__vpXHQ"},h=a(1001),p=(0,n.memo)((function(e){var s=e.message,a=function(e){var s=(0,m.TL)();return{deleteFriendMessage:(0,n.useCallback)((function(){s((0,h.h4)(e.messageId))}),[s,e.messageId])}}(s),t=a.deleteFriendMessage;return(0,_.jsxs)("div",{className:M.container,children:[(0,_.jsxs)("div",{className:M.userInfo,children:[(0,_.jsx)("img",{className:M.userAvatar,src:f.c,alt:"user_avatar"}),(0,_.jsx)("span",{className:M.time,children:s.time})]}),(0,_.jsxs)("div",{className:M.messageContent,children:[(0,_.jsx)("p",{className:M.message,children:s.message}),(0,_.jsx)(u.z,{title:"x",callback:t,type:"secondary",style:M.delBtn})]})]})})),k=function(e){return e.userMessagesData},N=function(e){return e.friendsMessagesData},b=function(){var e=(0,m.CG)(k),s=(0,m.CG)(N);return(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)(x,{}),e.map((function(e){return(0,_.jsx)(C,{message:e},e.messageId)})),s.map((function(e){return(0,_.jsx)(p,{message:e},e.messageId)}))]})},I="Contacts_container__OQyKa",y="Contacts_list__IbqR4",T="Contact_container__4t606",w="Contact_userAvatar__j2YR2",A=a(1087),B=(0,n.memo)((function(e){var s=e.friend;return(0,_.jsx)("li",{className:T,children:(0,_.jsxs)(A.OL,{to:"/dialogs/".concat(s.id),children:[(0,_.jsx)("img",{alt:"userAvatar",src:s.photos.small||f.c,className:w}),(0,_.jsx)("span",{children:s.name})]})})})),F=a(8328),D=function(){var e=(0,m.CG)(F.Z);return(0,_.jsx)("div",{className:I,children:(0,_.jsx)("ul",{className:y,children:e.map((function(e){return(0,_.jsx)(B,{friend:e},e.id)}))})})},G=a(7689),S=a(8960),L=function(){return(0,m.CG)(S.Q8)?(0,_.jsxs)("div",{className:t.container,children:[(0,_.jsx)("h2",{className:t.title,children:"DIALOGS"}),(0,_.jsxs)("div",{className:t.main,children:[(0,_.jsx)(D,{}),(0,_.jsx)(b,{})]})]}):(0,_.jsx)(G.Fg,{to:"/login"})}}}]);
//# sourceMappingURL=812.a070a935.chunk.js.map
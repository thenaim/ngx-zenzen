function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Tx//":function(n,t,e){"use strict";e.r(t),e.d(t,"LayoutModule",(function(){return D}));var i=e("2kYt"),o=e("sEIs"),a=e("sN6X"),c=e("mdRN"),r=e("7vs5"),s=e("EM62"),l=e("HOZh"),u=e("A7yd"),b=e("lQ7A"),m=e("Jb3d"),d=e("zmEM"),g=e("Pq5H"),p=e("PBFl"),f=e("nKqi"),h=e("mFH5"),v=e("Y2X+"),C=["sidenav"],M=function(){return["/app","dashboard"]};function O(n,t){1&n&&(s.Rb(0,"nav",16),s.Rb(1,"a",17),s.Nb(2,"img",18),s.Qb(),s.Qb()),2&n&&(s.Bb(1),s.ic("routerLink",s.jc(1,M)))}var _=function(){return["fas","bars"]};function P(n,t){if(1&n){var e=s.Sb();s.Rb(0,"button",19),s.Zb("click",(function(){return s.pc(e),s.dc(),s.nc(8).toggle()})),s.Nb(1,"fa-icon",20),s.Qb()}2&n&&(s.Bb(1),s.ic("icon",s.jc(1,_)))}var x=function(n){return{active:n}};function y(n,t){if(1&n&&(s.Rb(0,"mat-list-item",24),s.Rb(1,"div",25),s.xc(2),s.Qb(),s.Qb()),2&n){var e=t.$implicit;s.ic("ngClass",s.kc(2,x,"Stats"===e.title)),s.Bb(2),s.yc(e.title)}}function k(n,t){if(1&n&&(s.Rb(0,"section",21),s.Rb(1,"mat-list",22),s.wc(2,y,3,4,"mat-list-item",23),s.Qb(),s.Qb()),2&n){var e=s.dc();s.Bb(2),s.ic("ngForOf",e.menus)}}var w=function(n){return["fas",n]};function Q(n,t){if(1&n&&(s.Rb(0,"button",31),s.Nb(1,"fa-icon",32),s.Qb()),2&n){var e=t.$implicit;s.ic("matTooltip",e.title)("routerLink",e.link),s.Bb(1),s.ic("icon",s.kc(3,w,e.icon))}}function R(n,t){if(1&n&&(s.Rb(0,"button",33),s.Nb(1,"fa-icon",32),s.Qb()),2&n){var e=t.$implicit;s.dc(2);var i=s.nc(14);s.ic("matMenuTriggerFor",i),s.Bb(1),s.ic("icon",s.kc(2,w,e.icon))}}function B(n,t){if(1&n&&(s.Rb(0,"section",26),s.Rb(1,"div",27),s.wc(2,Q,2,5,"button",28),s.Qb(),s.Rb(3,"div",29),s.wc(4,R,2,4,"button",30),s.Qb(),s.Qb()),2&n){var e=s.dc();s.Bb(2),s.ic("ngForOf",e.menus),s.Bb(2),s.ic("ngForOf",e.user)}}var L,F,T,j=function(n,t){return{"is-mobile":n,"is-desktop":t}},z=function(){return["/app","settings"]},I=function(){return["fas","cog"]},N=function(){return["/auth","login"]},A=function(){return["fas","sign-out-alt"]},J=[{path:"",component:(L=function(){function n(t,e,i){var o=this;_classCallCheck(this,n),this.store=i,this.menus=[{title:"Dashboard",link:"/app/dashboard",icon:"box"},{title:"Stats",link:"/app/stats",icon:"chart-bar"},{title:"Contacts",link:"/app/contacts",icon:"address-card"}],this.user=[{title:"User",icon:"user"}],this.media={sm:e.matchMedia("(min-width: ".concat("576px",")"))},this._mobileQueryListener=function(){return t.detectChanges()},this.media.sm.addListener((function(n){n.matches?o.sidenav.open():o.sidenav.close()}))}return _createClass(n,[{key:"changeTheme",value:function(){this.store.dispatch(Object(c.b)({theme:"dark-theme"===this.theme?"default-theme":"dark-theme"}))}},{key:"ngOnInit",value:function(){var n=this;this.theme$=this.store.pipe(Object(a.o)(r.a)),this.subscription=this.theme$.subscribe((function(t){n.theme=t}))}},{key:"ngOnDestroy",value:function(){this.media.sm.removeListener(this._mobileQueryListener),this.subscription.unsubscribe()}}]),n}(),L.\u0275fac=function(n){return new(n||L)(s.Mb(s.h),s.Mb(l.c),s.Mb(a.c))},L.\u0275cmp=s.Gb({type:L,selectors:[["app-layout"]],viewQuery:function(n,t){var e;1&n&&s.Bc(C,!0),2&n&&s.mc(e=s.ac())&&(t.sidenav=e.first)},decls:28,vars:20,consts:[[1,"layout-container",3,"ngClass"],["color","primary",1,"toolbar"],["class","toolbar-logo",4,"ngIf"],["mat-icon-button","",3,"click",4,"ngIf"],[1,"sidenav-container"],["color","primary","opened","","autoFocus","false",1,"sidenav",3,"mode","fixedInViewport"],["sidenav",""],["class","horizontal-sidenav",4,"ngIf"],["class","vertical-sidenav",4,"ngIf"],["overlapTrigger","false",1,"userMenu"],["menuUser","matMenu"],[1,"pl-3","pr-3","pt-2","pb-2",3,"routerLink"],[1,"font-weight-normal","m-0","text-truncate","name"],[1,"email",3,"click"],["mat-menu-item","",3,"routerLink"],[1,"mr-3",3,"icon"],[1,"toolbar-logo"],[1,"toolbar-logo-link",3,"routerLink"],["src","./assets/icons/icon-96x96.png"],["mat-icon-button","",3,"click"],["size","lg",3,"icon"],[1,"horizontal-sidenav"],[1,"menu"],["class","menu-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"menu-item",3,"ngClass"],["mat-line",""],[1,"vertical-sidenav"],[1,"nav-main"],["mat-mini-fab","","color","primary","class","main-button","matTooltipPosition","right","routerLinkActive","active",3,"matTooltip","routerLink",4,"ngFor","ngForOf"],[1,"nav-user"],["mat-mini-fab","","color","primary","class","user-button",3,"matMenuTriggerFor",4,"ngFor","ngForOf"],["mat-mini-fab","","color","primary","matTooltipPosition","right","routerLinkActive","active",1,"main-button",3,"matTooltip","routerLink"],[3,"icon"],["mat-mini-fab","","color","primary",1,"user-button",3,"matMenuTriggerFor"]],template:function(n,t){1&n&&(s.Rb(0,"div",0),s.Rb(1,"mat-toolbar",1),s.wc(2,O,3,2,"nav",2),s.wc(3,P,2,2,"button",3),s.Rb(4,"h1"),s.xc(5,"Zenzen"),s.Qb(),s.Qb(),s.Rb(6,"mat-sidenav-container",4),s.Rb(7,"mat-sidenav",5,6),s.wc(9,k,3,1,"section",7),s.wc(10,B,5,2,"section",8),s.Qb(),s.Rb(11,"mat-sidenav-content"),s.Nb(12,"router-outlet"),s.Qb(),s.Qb(),s.Qb(),s.Rb(13,"mat-menu",9,10),s.Rb(15,"div",11),s.Rb(16,"h4",12),s.xc(17," John Smith "),s.Qb(),s.Rb(18,"span",13),s.Zb("click",(function(n){return n.stopPropagation()})),s.xc(19," example@example.com "),s.Qb(),s.Qb(),s.Nb(20,"mat-divider"),s.Rb(21,"button",14),s.Nb(22,"fa-icon",15),s.xc(23," Settings "),s.Qb(),s.Nb(24,"mat-divider"),s.Rb(25,"button",14),s.Nb(26,"fa-icon",15),s.xc(27," Login "),s.Qb(),s.Qb()),2&n&&(s.ic("ngClass",s.lc(12,j,!t.media.sm.matches,t.media.sm.matches)),s.Bb(2),s.ic("ngIf",t.media.sm.matches),s.Bb(1),s.ic("ngIf",!t.media.sm.matches),s.Bb(4),s.ic("mode",t.media.sm.matches?"side":"over")("fixedInViewport",!t.media.sm.matches),s.Bb(2),s.ic("ngIf",!t.media.sm.matches),s.Bb(1),s.ic("ngIf",t.media.sm.matches),s.Bb(5),s.ic("routerLink",s.jc(15,z)),s.Bb(6),s.ic("routerLink",s.jc(16,z)),s.Bb(1),s.ic("icon",s.jc(17,I)),s.Bb(3),s.ic("routerLink",s.jc(18,N)),s.Bb(1),s.ic("icon",s.jc(19,A)))},directives:[i.i,u.a,i.k,b.b,b.a,b.c,o.f,m.d,o.b,d.a,m.a,g.a,o.d,p.a,f.a,i.j,f.b,h.d,o.c,v.a,m.c],styles:['.layout-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.layout-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{height:64px}.layout-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]{width:64px;height:64px;display:flex;align-items:center;margin-left:-6px}.layout-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]   .toolbar-logo-link[_ngcontent-%COMP%]{text-decoration:none}.layout-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]   .toolbar-logo-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:41px;display:block;margin-top:1px}.layout-container[_ngcontent-%COMP%]   .is-mobile[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.layout-container[_ngcontent-%COMP%]   .is-mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex:1}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{border-right:none}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .vertical-sidenav[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;padding-top:20px;height:100%;width:64px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .vertical-sidenav[_ngcontent-%COMP%]   .nav-main[_ngcontent-%COMP%]{display:grid}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .vertical-sidenav[_ngcontent-%COMP%]   .nav-main[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]{font-size:18px;width:46px;height:46px;margin-bottom:20px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .vertical-sidenav[_ngcontent-%COMP%]   .nav-user[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:20px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .vertical-sidenav[_ngcontent-%COMP%]   .nav-user[_ngcontent-%COMP%]   .user-button[_ngcontent-%COMP%]{font-size:18px;width:46px;height:46px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .horizontal-sidenav[_ngcontent-%COMP%]{width:300px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .horizontal-sidenav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{margin-right:10px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .horizontal-sidenav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{border-radius:0 50px 50px 0}.layout-container.is-desktop[_ngcontent-%COMP%]:before{content:"";position:absolute;background:transparent;top:64px;left:64px;z-index:2;border-radius:18px 0 0 0;width:20px;height:20px;-webkit-animation:leftAnimate .25s ease forwards;animation:leftAnimate .25s ease forwards}@-webkit-keyframes leftAnimate{0%{left:-20px}to{width:64px}}@keyframes leftAnimate{0%{left:-20px}to{width:64px}}']}),L),children:[{path:"",pathMatch:"full",redirectTo:"/app/dashboard"},{path:"dashboard",loadChildren:function(){return e.e(7).then(e.bind(null,"TDBs")).then((function(n){return n.DashboardModule}))}}]}],S=((F=function n(){_classCallCheck(this,n)}).\u0275mod=s.Kb({type:F}),F.\u0275inj=s.Jb({factory:function(n){return new(n||F)},imports:[[o.e.forChild(J)],o.e]}),F),$=e("PCNd"),D=((T=function n(){_classCallCheck(this,n)}).\u0275mod=s.Kb({type:T}),T.\u0275inj=s.Jb({factory:function(n){return new(n||T)},imports:[[i.c,S,$.a]]}),T)}}]);
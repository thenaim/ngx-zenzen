(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Tx//":function(n,t,e){"use strict";e.r(t),e.d(t,"LayoutModule",(function(){return $}));var o=e("2kYt"),i=e("sEIs"),a=e("sN6X");const c="576px";var r=e("mdRN"),s=e("7vs5"),l=e("EM62"),b=e("HOZh"),m=e("A7yd"),u=e("lQ7A"),d=e("Jb3d"),g=e("zmEM"),p=e("Pq5H"),h=e("PBFl"),f=e("nKqi"),M=e("mFH5"),v=e("Y2X+");const O=["sidenav"],C=function(){return["/app","dashboard"]};function P(n,t){1&n&&(l.Rb(0,"nav",16),l.Rb(1,"a",17),l.Nb(2,"img",18),l.Qb(),l.Qb()),2&n&&(l.Bb(1),l.ic("routerLink",l.jc(1,C)))}const _=function(){return["fas","bars"]};function x(n,t){if(1&n){const n=l.Sb();l.Rb(0,"button",19),l.Zb("click",(function(){return l.pc(n),l.dc(),l.nc(8).toggle()})),l.Nb(1,"fa-icon",20),l.Qb()}2&n&&(l.Bb(1),l.ic("icon",l.jc(1,_)))}const y=function(n){return{active:n}};function k(n,t){if(1&n&&(l.Rb(0,"mat-list-item",24),l.Rb(1,"div",25),l.xc(2),l.Qb(),l.Qb()),2&n){const n=t.$implicit;l.ic("ngClass",l.kc(2,y,"Stats"===n.title)),l.Bb(2),l.yc(n.title)}}function w(n,t){if(1&n&&(l.Rb(0,"section",21),l.Rb(1,"mat-list",22),l.wc(2,k,3,4,"mat-list-item",23),l.Qb(),l.Qb()),2&n){const n=l.dc();l.Bb(2),l.ic("ngForOf",n.menus)}}const Q=function(n){return["fas",n]};function R(n,t){if(1&n&&(l.Rb(0,"button",31),l.Nb(1,"fa-icon",32),l.Qb()),2&n){const n=t.$implicit;l.ic("matTooltip",n.title)("routerLink",n.link),l.Bb(1),l.ic("icon",l.kc(3,Q,n.icon))}}function B(n,t){if(1&n&&(l.Rb(0,"button",33),l.Nb(1,"fa-icon",32),l.Qb()),2&n){const n=t.$implicit;l.dc(2);const e=l.nc(14);l.ic("matMenuTriggerFor",e),l.Bb(1),l.ic("icon",l.kc(2,Q,n.icon))}}function L(n,t){if(1&n&&(l.Rb(0,"section",26),l.Rb(1,"div",27),l.wc(2,R,2,5,"button",28),l.Qb(),l.Rb(3,"div",29),l.wc(4,B,2,4,"button",30),l.Qb(),l.Qb()),2&n){const n=l.dc();l.Bb(2),l.ic("ngForOf",n.menus),l.Bb(2),l.ic("ngForOf",n.user)}}const F=function(n,t){return{"is-mobile":n,"is-desktop":t}},T=function(){return["/app","settings"]},j=function(){return["fas","cog"]},z=function(){return["/auth","login"]},I=function(){return["fas","sign-out-alt"]},N=[{path:"",component:(()=>{class n{constructor(n,t,e){this.store=e,this.menus=[{title:"Dashboard",link:"/app/dashboard",icon:"box"},{title:"Stats",link:"/app/stats",icon:"chart-bar"},{title:"Contacts",link:"/app/contacts",icon:"address-card"}],this.user=[{title:"User",icon:"user"}],this.media={sm:t.matchMedia(`(min-width: ${c})`)},this._mobileQueryListener=()=>n.detectChanges(),this.media.sm.addListener(n=>{n.matches?this.sidenav.open():this.sidenav.close()})}changeTheme(){this.store.dispatch(Object(r.b)({theme:"dark-theme"===this.theme?"default-theme":"dark-theme"}))}ngOnInit(){this.theme$=this.store.pipe(Object(a.o)(s.a)),this.subscription=this.theme$.subscribe(n=>{this.theme=n})}ngOnDestroy(){this.media.sm.removeListener(this._mobileQueryListener),this.subscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(l.Mb(l.h),l.Mb(b.c),l.Mb(a.c))},n.\u0275cmp=l.Gb({type:n,selectors:[["app-layout"]],viewQuery:function(n,t){var e;1&n&&l.Bc(O,!0),2&n&&l.mc(e=l.ac())&&(t.sidenav=e.first)},decls:28,vars:20,consts:[[1,"layout-container",3,"ngClass"],["color","primary",1,"toolbar"],["class","toolbar-logo",4,"ngIf"],["mat-icon-button","",3,"click",4,"ngIf"],[1,"sidenav-container"],["color","primary","opened","","autoFocus","false",1,"sidenav",3,"mode","fixedInViewport"],["sidenav",""],["class","horizontal-sidenav",4,"ngIf"],["class","vertical-sidenav",4,"ngIf"],["overlapTrigger","false",1,"userMenu"],["menuUser","matMenu"],[1,"pl-3","pr-3","pt-2","pb-2",3,"routerLink"],[1,"font-weight-normal","m-0","text-truncate","name"],[1,"email",3,"click"],["mat-menu-item","",3,"routerLink"],[1,"mr-3",3,"icon"],[1,"toolbar-logo"],[1,"toolbar-logo-link",3,"routerLink"],["src","./assets/icons/icon-96x96.png"],["mat-icon-button","",3,"click"],["size","lg",3,"icon"],[1,"horizontal-sidenav"],[1,"menu"],["class","menu-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"menu-item",3,"ngClass"],["mat-line",""],[1,"vertical-sidenav"],[1,"nav-main"],["mat-mini-fab","","color","primary","class","main-button","matTooltipPosition","right","routerLinkActive","active",3,"matTooltip","routerLink",4,"ngFor","ngForOf"],[1,"nav-user"],["mat-mini-fab","","color","primary","class","user-button",3,"matMenuTriggerFor",4,"ngFor","ngForOf"],["mat-mini-fab","","color","primary","matTooltipPosition","right","routerLinkActive","active",1,"main-button",3,"matTooltip","routerLink"],[3,"icon"],["mat-mini-fab","","color","primary",1,"user-button",3,"matMenuTriggerFor"]],template:function(n,t){1&n&&(l.Rb(0,"div",0),l.Rb(1,"mat-toolbar",1),l.wc(2,P,3,2,"nav",2),l.wc(3,x,2,2,"button",3),l.Rb(4,"h1"),l.xc(5,"Zenzen"),l.Qb(),l.Qb(),l.Rb(6,"mat-sidenav-container",4),l.Rb(7,"mat-sidenav",5,6),l.wc(9,w,3,1,"section",7),l.wc(10,L,5,2,"section",8),l.Qb(),l.Rb(11,"mat-sidenav-content"),l.Nb(12,"router-outlet"),l.Qb(),l.Qb(),l.Qb(),l.Rb(13,"mat-menu",9,10),l.Rb(15,"div",11),l.Rb(16,"h4",12),l.xc(17," John Smith "),l.Qb(),l.Rb(18,"span",13),l.Zb("click",(function(n){return n.stopPropagation()})),l.xc(19," example@example.com "),l.Qb(),l.Qb(),l.Nb(20,"mat-divider"),l.Rb(21,"button",14),l.Nb(22,"fa-icon",15),l.xc(23," Settings "),l.Qb(),l.Nb(24,"mat-divider"),l.Rb(25,"button",14),l.Nb(26,"fa-icon",15),l.xc(27," Login "),l.Qb(),l.Qb()),2&n&&(l.ic("ngClass",l.lc(12,F,!t.media.sm.matches,t.media.sm.matches)),l.Bb(2),l.ic("ngIf",t.media.sm.matches),l.Bb(1),l.ic("ngIf",!t.media.sm.matches),l.Bb(4),l.ic("mode",t.media.sm.matches?"side":"over")("fixedInViewport",!t.media.sm.matches),l.Bb(2),l.ic("ngIf",!t.media.sm.matches),l.Bb(1),l.ic("ngIf",t.media.sm.matches),l.Bb(5),l.ic("routerLink",l.jc(15,T)),l.Bb(6),l.ic("routerLink",l.jc(16,T)),l.Bb(1),l.ic("icon",l.jc(17,j)),l.Bb(3),l.ic("routerLink",l.jc(18,z)),l.Bb(1),l.ic("icon",l.jc(19,I)))},directives:[o.i,m.a,o.k,u.b,u.a,u.c,i.f,d.d,i.b,g.a,d.a,p.a,i.d,h.a,f.a,o.j,f.b,M.d,i.c,v.a,d.c],styles:['.layout-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.layout-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{height:64px}.layout-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]{width:64px;height:64px;display:flex;align-items:center;margin-left:-6px}.layout-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]   .toolbar-logo-link[_ngcontent-%COMP%]{text-decoration:none}.layout-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]   .toolbar-logo-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:41px;display:block;margin-top:1px}.layout-container[_ngcontent-%COMP%]   .is-mobile[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.layout-container[_ngcontent-%COMP%]   .is-mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex:1}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{border-right:none}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .vertical-sidenav[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;padding-top:20px;height:100%;width:64px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .vertical-sidenav[_ngcontent-%COMP%]   .nav-main[_ngcontent-%COMP%]{display:grid}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .vertical-sidenav[_ngcontent-%COMP%]   .nav-main[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]{font-size:18px;width:46px;height:46px;margin-bottom:20px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .vertical-sidenav[_ngcontent-%COMP%]   .nav-user[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:20px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .vertical-sidenav[_ngcontent-%COMP%]   .nav-user[_ngcontent-%COMP%]   .user-button[_ngcontent-%COMP%]{font-size:18px;width:46px;height:46px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .horizontal-sidenav[_ngcontent-%COMP%]{width:300px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .horizontal-sidenav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{margin-right:10px}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .horizontal-sidenav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{border-radius:0 50px 50px 0}.layout-container.is-desktop[_ngcontent-%COMP%]:before{content:"";position:absolute;background:transparent;top:64px;left:64px;z-index:2;border-radius:18px 0 0 0;width:20px;height:20px;-webkit-animation:leftAnimate .25s ease forwards;animation:leftAnimate .25s ease forwards}@-webkit-keyframes leftAnimate{0%{left:-20px}to{width:64px}}@keyframes leftAnimate{0%{left:-20px}to{width:64px}}']}),n})(),children:[{path:"",pathMatch:"full",redirectTo:"/app/dashboard"},{path:"dashboard",loadChildren:()=>e.e(7).then(e.bind(null,"TDBs")).then(n=>n.DashboardModule)}]}];let A=(()=>{class n{}return n.\u0275mod=l.Kb({type:n}),n.\u0275inj=l.Jb({factory:function(t){return new(t||n)},imports:[[i.e.forChild(N)],i.e]}),n})();var J=e("PCNd");let $=(()=>{class n{}return n.\u0275mod=l.Kb({type:n}),n.\u0275inj=l.Jb({factory:function(t){return new(t||n)},imports:[[o.c,A,J.a]]}),n})()}}]);
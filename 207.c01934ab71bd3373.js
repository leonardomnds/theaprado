"use strict";(self.webpackChunktheaprado=self.webpackChunktheaprado||[]).push([[207],{8207:(y,_,s)=>{s.r(_),s.d(_,{ProjetosModule:()=>b});var m=s(177),d=s(3536),n=s(4438);let P=(()=>{class t{static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=n.VBU({type:t,selectors:[["app-projetos"]],decls:1,vars:0,template:function(i,g){1&i&&n.nrm(0,"router-outlet")},dependencies:[d.n3],encapsulation:2})}return t})();var e=function(t){return t[t.Comercial=1]="Comercial",t[t.Residencial=2]="Residencial",t[t.InstitucionalPublico=3]="InstitucionalPublico",t[t.Publico=4]="Publico",t}(e||{});function l(t,c){1&t&&(n.j41(0,"span",9),n.EFF(1,"Arquitet\xf4nico"),n.k0s())}function C(t,c){1&t&&(n.j41(0,"span",9),n.EFF(1,"Interiores"),n.k0s())}function M(t,c){1&t&&(n.j41(0,"span",9),n.EFF(1,"Paisagismo"),n.k0s())}function O(t,c){1&t&&(n.j41(0,"span",9),n.EFF(1,"Obra P\xfablica"),n.k0s())}function p(t,c){1&t&&(n.qex(0),n.EFF(1,"Comercial"),n.bVm())}function u(t,c){1&t&&(n.qex(0),n.EFF(1,"Residencial"),n.bVm())}function j(t,c){1&t&&(n.qex(0),n.EFF(1,"P\xfablico"),n.bVm())}function w(t,c){1&t&&(n.qex(0),n.EFF(1,"Institucional e P\xfablico"),n.bVm())}function f(t,c){if(1&t&&(n.j41(0,"figure"),n.nrm(1,"img",11),n.k0s()),2&t){const r=n.XpG(),i=r.$implicit,g=r.index;n.ZvI("imagem imagem_",g,""),n.R7$(),n.Mz_("alt","Imagem ",g,""),n.Y8G("src",i,n.B4B)}}function h(t,c){if(1&t&&(n.qex(0),n.DNE(1,f,2,6,"figure",10),n.bVm()),2&t){const r=c.index;n.R7$(),n.Y8G("ngIf",!!r)}}let o=(()=>{class t{constructor(){this.TipoProjeto=e,this.route=(0,n.WQX)(d.nX)}ngOnInit(){const r=this.route.snapshot;this.projeto={path:r.routeConfig?.path,nome:r.title,...r.data}}static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=n.VBU({type:t,selectors:[["app-projeto-detalhes"]],decls:19,vars:17,consts:[[1,"image-wrapper"],[1,"w-100",3,"src","alt"],[1,"d-flex","flex-column","gap-3","my-4"],[1,"titulo","m-0"],[1,"fw-semibold"],["class","item-projeto",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],[1,"item-projeto"],[3,"class",4,"ngIf"],[3,"src","alt"]],template:function(i,g){1&i&&(n.j41(0,"div",0),n.nrm(1,"img",1),n.k0s(),n.j41(2,"div",2)(3,"h1",3),n.EFF(4),n.k0s(),n.j41(5,"span",4),n.DNE(6,l,2,0,"span",5)(7,C,2,0,"span",5)(8,M,2,0,"span",5)(9,O,2,0,"span",5),n.k0s(),n.j41(10,"span",4)(11,"container-element",6),n.DNE(12,p,2,0,"ng-container",7)(13,u,2,0,"ng-container",7)(14,j,2,0,"ng-container",7)(15,w,2,0,"ng-container",7),n.k0s(),n.EFF(16),n.k0s()(),n.j41(17,"div"),n.DNE(18,h,2,1,"ng-container",8),n.k0s()),2&i&&(n.R7$(),n.Y8G("src",g.projeto.images[0],n.B4B)("alt",g.projeto.nome),n.R7$(3),n.SpI(" ",g.projeto.nome," "),n.R7$(2),n.Y8G("ngIf",g.projeto.isProjetoArquitetonico),n.R7$(),n.Y8G("ngIf",g.projeto.isProjetoInteriores),n.R7$(),n.Y8G("ngIf",g.projeto.isProjetoPaisagismo),n.R7$(),n.Y8G("ngIf",g.projeto.isObraPublica),n.R7$(2),n.Y8G("ngSwitch",g.projeto.tipoProjeto),n.R7$(),n.Y8G("ngSwitchCase",g.TipoProjeto.Comercial),n.R7$(),n.Y8G("ngSwitchCase",g.TipoProjeto.Residencial),n.R7$(),n.Y8G("ngSwitchCase",g.TipoProjeto.Publico),n.R7$(),n.Y8G("ngSwitchCase",g.TipoProjeto.InstitucionalPublico),n.R7$(),n.SpI(" - ",g.projeto.anoProjeto," "),n.R7$(),n.ZvI("grid ",g.projeto.path,""),n.R7$(),n.Y8G("ngForOf",g.projeto.images))},dependencies:[m.Sq,m.bT,m.ux,m.e1],styles:['.image-wrapper[_ngcontent-%COMP%]{max-height:500px;overflow:hidden;display:flex;align-items:center;justify-content:center}.item-projeto[_ngcontent-%COMP%]:not(:last-child):after{content:" . "}.grid[_ngcontent-%COMP%]{display:grid;width:100%;overflow:hidden;grid-template-columns:repeat(8,1fr);grid-gap:16px}.grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:0}.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.grid.dolce-vitta[_ngcontent-%COMP%], .grid.brisa-da-mata[_ngcontent-%COMP%], .grid.ape-do-musico[_ngcontent-%COMP%], .grid.vila-neoclassica[_ngcontent-%COMP%], .grid.la-fontana[_ngcontent-%COMP%]{grid-template-rows:repeat(21,4vw)}.grid.dolce-vitta[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.brisa-da-mata[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.ape-do-musico[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.vila-neoclassica[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.la-fontana[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:9}.grid.dolce-vitta[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.brisa-da-mata[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.ape-do-musico[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.vila-neoclassica[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.la-fontana[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:1;grid-row-end:5}.grid.dolce-vitta[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.brisa-da-mata[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.ape-do-musico[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.vila-neoclassica[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.la-fontana[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:5;grid-row-end:9}.grid.dolce-vitta[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.brisa-da-mata[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.ape-do-musico[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.vila-neoclassica[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.la-fontana[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:9;grid-row-end:13}.grid.dolce-vitta[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.brisa-da-mata[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.ape-do-musico[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.vila-neoclassica[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.la-fontana[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:13;grid-row-end:17}.grid.dolce-vitta[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.brisa-da-mata[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.ape-do-musico[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.vila-neoclassica[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.la-fontana[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:9;grid-row-end:17}.grid.dolce-vitta[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.brisa-da-mata[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.ape-do-musico[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.vila-neoclassica[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.la-fontana[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:9;grid-row-start:17;grid-row-end:22}.grid.casa-das-papoulas[_ngcontent-%COMP%]{grid-template-rows:repeat(17,4vw)}.grid.casa-das-papoulas[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:9}.grid.casa-das-papoulas[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:1;grid-row-end:9}.grid.casa-das-papoulas[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:9;grid-row-end:13}.grid.casa-das-papoulas[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:13;grid-row-end:17}.grid.casa-das-papoulas[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:9;grid-row-end:17}.grid.rodoviaria[_ngcontent-%COMP%], .grid.academia-da-saude[_ngcontent-%COMP%], .grid.monumento-fundadores[_ngcontent-%COMP%]{grid-template-rows:repeat(8,4vw)}.grid.rodoviaria[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.academia-da-saude[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.monumento-fundadores[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:9}.grid.rodoviaria[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.academia-da-saude[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.monumento-fundadores[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:1;grid-row-end:5}.grid.rodoviaria[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.academia-da-saude[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.monumento-fundadores[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:5;grid-row-end:9}.grid.chale-do-campo[_ngcontent-%COMP%], .grid.ape-downtown[_ngcontent-%COMP%], .grid.fixar[_ngcontent-%COMP%], .grid.casa-dos-porticos[_ngcontent-%COMP%], .grid.contemporanea[_ngcontent-%COMP%], .grid.casa-das-palmeiras[_ngcontent-%COMP%]{grid-template-rows:repeat(17,4vw)}.grid.chale-do-campo[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.ape-downtown[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.fixar[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.casa-dos-porticos[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.contemporanea[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.casa-das-palmeiras[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:9}.grid.chale-do-campo[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.ape-downtown[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.fixar[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.casa-dos-porticos[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.contemporanea[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.casa-das-palmeiras[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:1;grid-row-end:5}.grid.chale-do-campo[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.ape-downtown[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.fixar[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.casa-dos-porticos[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.contemporanea[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.casa-das-palmeiras[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:5;grid-row-end:9}.grid.chale-do-campo[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.ape-downtown[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.fixar[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.casa-dos-porticos[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.contemporanea[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.casa-das-palmeiras[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:9;grid-row-end:13}.grid.chale-do-campo[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.ape-downtown[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.fixar[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.casa-dos-porticos[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.contemporanea[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.casa-das-palmeiras[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:13;grid-row-end:17}.grid.chale-do-campo[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.ape-downtown[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.fixar[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.casa-dos-porticos[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.contemporanea[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.casa-das-palmeiras[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:9;grid-row-end:17}.grid.lola-kafe[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]{grid-template-rows:repeat(27,4vw)}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:9}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:1;grid-row-end:9}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:9;grid-row-end:13}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:13;grid-row-end:17}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:9;grid-row-end:17}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:4;grid-row-start:17;grid-row-end:22}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%]{grid-column-start:4;grid-column-end:6;grid-row-start:17;grid-row-end:22}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%]{grid-column-start:6;grid-column-end:9;grid-row-start:17;grid-row-end:22}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_9[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_9[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_9[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:9;grid-row-start:22;grid-row-end:28}@media (min-width: 768px){.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%]{padding-right:36px}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%]{padding-left:36px}.grid.lola-kafe[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.casa-alecrim[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.restaurante-pantanal-cascavel[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%]{margin:0 -36px}}.grid.casa-rio[_ngcontent-%COMP%]{grid-template-rows:repeat(30,4vw)}.grid.casa-rio[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:9}.grid.casa-rio[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:1;grid-row-end:9}.grid.casa-rio[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:9;grid-row-end:13}.grid.casa-rio[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:13;grid-row-end:17}.grid.casa-rio[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:9;grid-row-end:17}.grid.casa-rio[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:9;grid-row-start:17;grid-row-end:22}.grid.casa-rio[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:22;grid-row-end:26}.grid.casa-rio[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:26;grid-row-end:31}.grid.casa-rio[_ngcontent-%COMP%]   .imagem_9[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:22;grid-row-end:31}.grid.a-primeira[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]{grid-template-rows:repeat(21,4vw)}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_1[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:9}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_2[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:1;grid-row-end:5}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_3[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:5;grid-row-end:9}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_4[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:9;grid-row-end:13}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_5[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:13;grid-row-end:17}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_6[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:9;grid-row-end:17}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:4;grid-row-start:17;grid-row-end:22}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%]{grid-column-start:4;grid-column-end:6;grid-row-start:17;grid-row-end:22}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_9[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_9[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_9[_ngcontent-%COMP%]{grid-column-start:6;grid-column-end:9;grid-row-start:17;grid-row-end:22}@media (min-width: 768px){.grid.a-primeira[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_7[_ngcontent-%COMP%]{padding-right:36px}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_9[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_9[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_9[_ngcontent-%COMP%]{padding-left:36px}.grid.a-primeira[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%], .grid.edificio-aurelio[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%], .grid.restaurante-pantanal[_ngcontent-%COMP%]   .imagem_8[_ngcontent-%COMP%]{margin:0 -36px}}@media (max-width: 767.98px){.grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}}']})}return t})();const v=t=>["/projetos",t];function R(t,c){if(1&t&&(n.qex(0),n.j41(1,"div",2)(2,"a",3)(3,"div",4),n.nrm(4,"img",5),n.j41(5,"div",6)(6,"span",7),n.EFF(7),n.k0s()()()()(),n.bVm()),2&t){const r=c.$implicit;n.R7$(2),n.Y8G("routerLink",n.eq3(4,v,r.path)),n.R7$(2),n.FS9("src",r.images[0],n.B4B),n.FS9("alt",r.nome),n.R7$(3),n.JRh(r.nome)}}const a=t=>Array.from({length:t+1},()=>"https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg"),x=[{path:"",component:P,children:[{path:"",component:(()=>{class t{constructor(){this.projetos=[],this.route=(0,n.WQX)(d.nX)}ngOnInit(){this.projetos=(this.route.parent?.snapshot?.routeConfig?.children??[]).filter(i=>i.path).map(i=>({path:i.path,nome:`${i.title}`,...i.data}))}static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=n.VBU({type:t,selectors:[["app-projeto-main"]],decls:2,vars:1,consts:[[1,"row","g-4"],[4,"ngFor","ngForOf"],[1,"col-12","col-md-6","col-lg-4"],[3,"routerLink"],[1,"image-container","h-100"],[3,"src","alt"],[1,"info"],[1,"fw-semibold"]],template:function(i,g){1&i&&(n.j41(0,"div",0),n.DNE(1,R,8,6,"ng-container",1),n.k0s()),2&i&&(n.R7$(),n.Y8G("ngForOf",g.projetos))},dependencies:[m.Sq,d.Wk],styles:[".image-container[_ngcontent-%COMP%]{--tempo-transicao: .1s;min-height:300px;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}@media (min-width: 768px){.image-container[_ngcontent-%COMP%]{transition:transform var(--tempo-transicao)}.image-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{opacity:0}.image-container[_ngcontent-%COMP%]:hover{transform:scale(1.04)}.image-container[_ngcontent-%COMP%]:hover   .info[_ngcontent-%COMP%]{opacity:1}}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;width:100%;height:auto}.image-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;height:50px;padding:8px;background:linear-gradient(to bottom,transparent,var(--primary) 85%);display:flex;flex-direction:column;justify-content:flex-end;transition:opacity var(--tempo-transicao)}.image-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:14px}"]})}return t})()},{path:"dolce-vitta",component:o,title:"Dolce Vitta",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2016,images:a(7)}},{path:"casa-das-papoulas",component:o,title:"Casa das Papoulas",data:{isProjetoArquitetonico:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2011,images:a(5)}},{path:"a-primeira",component:o,title:"A Primeira",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2002,images:a(9)}},{path:"lola-kafe",component:o,title:"Lola Kaf\xe9",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,tipoProjeto:e.Comercial,anoProjeto:2023,images:a(9)}},{path:"restaurante-pantanal",component:o,title:"Restaurante Pantanal - Toledo/PR",data:{isProjetoInteriores:!0,tipoProjeto:e.Comercial,anoProjeto:2019,images:a(9)}},{path:"drei-schritte",component:o,title:"Drei Schritte",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,tipoProjeto:e.Comercial,anoProjeto:2022,images:a(10)}},{path:"brisa-da-mata",component:o,title:"Brisa da Mata",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2019,images:a(7)}},{path:"chale-do-campo",component:o,title:"Chal\xe9 do Campo",data:{isProjetoArquitetonico:!0,tipoProjeto:e.Residencial,anoProjeto:2021,images:a(6)}},{path:"edificio-aurelio",component:o,title:"Edif\xedcio Aur\xe9lio",data:{isProjetoArquitetonico:!0,tipoProjeto:e.Residencial,anoProjeto:2021,images:a(9)}},{path:"centro-odontologico-lago",component:o,title:"Centro Odontol\xf3gico Lago",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,tipoProjeto:e.Comercial,anoProjeto:2019,images:a(10)}},{path:"casa-41",component:o,title:"Casa 41",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2021,images:a(13)}},{path:"restaurante-pantanal-cascavel",component:o,title:"Restaurante Pantanal - Cascavel/PR",data:{isProjetoInteriores:!0,tipoProjeto:e.Comercial,anoProjeto:2023,images:a(9)}},{path:"casa-alecrim",component:o,title:"Casa Alecrim",data:{isProjetoInteriores:!0,tipoProjeto:e.Residencial,anoProjeto:2023,images:a(9)}},{path:"casa-country",component:o,title:"Casa do Country",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2020,images:a(10)}},{path:"casa-rio",component:o,title:"Casa do Rio",data:{isProjetoInteriores:!0,tipoProjeto:e.Residencial,anoProjeto:2022,images:a(9)}},{path:"ape-do-musico",component:o,title:"Ap\xea do M\xfasico",data:{isProjetoInteriores:!0,tipoProjeto:e.Residencial,anoProjeto:2019,images:a(7)}},{path:"ape-downtown",component:o,title:"Ap\xea Downtown",data:{isProjetoInteriores:!0,tipoProjeto:e.Residencial,anoProjeto:2022,images:a(6)}},{path:"fixar",component:o,title:"Fixar - Propriedade Intelectual",data:{isProjetoInteriores:!0,tipoProjeto:e.Comercial,anoProjeto:2022,images:a(6)}},{path:"vila-neoclassica",component:o,title:"Vila Neocl\xe1ssica",data:{isProjetoArquitetonico:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2011,images:a(7)}},{path:"my-way",component:o,title:"My Way",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2011,images:a(13)}},{path:"la-fontana",component:o,title:"La Fontana",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2006,images:a(7)}},{path:"casa-dos-porticos",component:o,title:"Casa dos P\xf3rticos",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2020,images:a(6)}},{path:"contemporanea",component:o,title:"Contempor\xe2nea",data:{isProjetoArquitetonico:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2015,images:a(6)}},{path:"casa-das-palmeiras",component:o,title:"Casa das Palmeiras",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2019,images:a(6)}},{path:"monumento-fundadores",component:o,title:"Monumento Fundadores",data:{isProjetoArquitetonico:!0,isProjetoInteriores:!0,isProjetoPaisagismo:!0,isObraPublica:!0,tipoProjeto:e.InstitucionalPublico,anoProjeto:2011,images:a(3)}},{path:"academia-da-saude",component:o,title:"Academia da Sa\xfade",data:{isProjetoArquitetonico:!0,isProjetoPaisagismo:!0,tipoProjeto:e.Residencial,anoProjeto:2011,images:a(3)}},{path:"rodoviaria",component:o,title:"Rodovi\xe1ria",data:{isProjetoArquitetonico:!0,tipoProjeto:e.Publico,anoProjeto:2016,images:a(3)}}]}];let F=(()=>{class t{static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.$C({type:t});static#e=this.\u0275inj=n.G2t({imports:[d.iI.forChild(x),d.iI]})}return t})(),b=(()=>{class t{static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.$C({type:t});static#e=this.\u0275inj=n.G2t({imports:[m.MD,d.iI,F]})}return t})()}}]);
(this.webpackJsonpkarangos=this.webpackJsonpkarangos||[]).push([[0],{175:function(e,a,t){},202:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(15),c=t.n(i),o=(t(175),t(128)),l=t(248),s=t(249),d=t.p+"static/media/karangos.637f9a06.png",u=t(6),j=t(147),b=t(58),m=t(70),h=t(142),p=t.n(h),f=t(40),x=t(2),O=Object(o.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},menuLink:{color:e.palette.text.primary,textDecoration:"none"}}}));function v(){var e=O(),a=n.a.useState(null),t=Object(u.a)(a,2),r=t[0],i=t[1],c=function(){i(null)};return Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},children:Object(x.jsx)(p.a,{})}),Object(x.jsxs)(j.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:c,children:[Object(x.jsx)(b.a,{onClick:c,children:Object(x.jsx)(f.b,{to:"/list",className:e.menuLink,children:"Listagem de Karangos"})}),Object(x.jsx)(b.a,{onClick:c,children:Object(x.jsx)(f.b,{to:"/new",className:e.menuLink,children:"Cadastrar Novo Karango"})}),Object(x.jsx)(b.a,{onClick:c,children:Object(x.jsx)(f.b,{to:"/listCliente",className:e.menuLink,children:"Listagem de Clientes"})}),Object(x.jsx)(b.a,{onClick:c,children:Object(x.jsx)(f.b,{to:"/newCliente",className:e.menuLink,children:"Cadastrar Cliente"})})]})]})}var g=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},logo:{width:"300px"}}}));function C(){var e=g();return Object(x.jsx)("div",{className:e.root,children:Object(x.jsx)(l.a,{position:"static",children:Object(x.jsxs)(s.a,{children:[Object(x.jsx)(v,{}),Object(x.jsx)("img",{src:d,className:e.logo,alt:"Logotipo Karangos"})]})})})}var N=t(67),y=t(254),k=t(145),S=t.n(k),w=t(146),E=t.n(w),A=t(100),D=t(143),R=t.n(D),T=Object(o.a)((function(e){return{text:{width:"100%",color:e.palette.text.secondary},toolbar:{backgroundColor:e.palette.background.paper,minHeight:"40px",width:"100%",position:"fixed",bottom:0},link:{color:e.palette.secondary.light,textDecoration:"none","&:hover":{textDecoration:"underline"}}}}));function W(){var e=T();return Object(x.jsx)(s.a,{className:e.toolbar,children:Object(x.jsxs)(A.a,{variant:"caption",align:"center",className:e.text,children:["Desenvolvido com ",Object(x.jsx)(R.a,{fontSize:"small"})," por",Object(x.jsx)("a",{href:"mailto:professor@faustocintra.com.br",className:e.link,children:"Prof. Fausto Cintra"})]})})}var F=t(258),P=t(19),G=t.n(P),L=t(37),M=t(28),B=t.n(M),_=t(112),q=t(154),I=t(95),z=t.n(I),H=t(94),K=t.n(H),U=t(64),V=t(96),J=t.n(V),X=t(17),Y=t(261),Z=t(253),$=t(251),Q=t(252),ee=t(250);function ae(e){var a=e.title,t=void 0===a?"Alerta":a,r=e.isOpen,n=void 0!==r&&r,i=e.onClose,c=e.children,o=function(e){i&&i(e)};return Object(x.jsx)("div",{children:Object(x.jsxs)(Y.a,{open:n,onClose:function(){return o(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(x.jsx)(ee.a,{id:"alert-dialog-title",children:t}),Object(x.jsx)($.a,{children:Object(x.jsx)(Q.a,{id:"alert-dialog-description",children:c})}),Object(x.jsxs)(Z.a,{children:[Object(x.jsx)(U.a,{onClick:function(){return o(!0)},color:"primary",children:"Ok"}),Object(x.jsx)(U.a,{onClick:function(){return o(!1)},color:"primary",autoFocus:!0,children:"Cancelar"})]})]})})}var te=t(262),re=t(259),ne=t(97),ie=Object(o.a)((function(e){return{table:{minWidth:650},dataGrid:{"& .MuiDataGrid-row button":{visibility:"hidden"},"& .MuiDataGrid-row:hover button":{visibility:"visible"}},toolbar:{justifyContent:"flex-end",paddingRight:0,margin:e.spacing(2,0)}}}));function ce(){var e=ie(),a=Object(X.f)(),t=Object(r.useState)([]),n=Object(u.a)(t,2),i=n[0],c=n[1],o=Object(r.useState)(),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(r.useState)(!1),h=Object(u.a)(b,2),p=h[0],f=h[1],O=Object(r.useState)(!1),v=Object(u.a)(O,2),g=v[0],C=v[1],N=Object(r.useState)("success"),y=Object(u.a)(N,2),k=y[0],S=y[1],w=Object(r.useState)("Exclus\xe3o realizada com sucesso."),E=Object(u.a)(w,2),A=E[0],D=E[1];function R(){return T.apply(this,arguments)}function T(){return(T=Object(L.a)(G.a.mark((function e(){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("https://api.faustocintra.com.br/karangos?by=marca,modelo");case 3:(a=e.sent).data.length>0&&c(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function W(){return(W=Object(L.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.delete("https://api.faustocintra.com.br/karangos/".concat(d));case 3:R(),S("success"),D("Exclus\xe3o efetuada com sucesso."),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),S("error"),D("ERRO: "+e.t0.message);case 12:C(!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function F(){C(!1)}Object(r.useEffect)((function(){R()}),[]);var P=[{field:"id",headerName:"C\xf3d.",align:"right",headerAlign:"right",flex:!0,sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"marca",headerName:"Marca",flex:!0},{field:"modelo",headerName:"Modelo",flex:!0},{field:"cor",headerName:"Cor",align:"left",headerAlign:"center",flex:!0},{field:"ano_fabricacao",headerName:"Ano",align:"left",headerAlign:"center",flex:!0,sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"importado",headerName:"Importado?",align:"center",headerAlign:"center",flex:!0,renderCell:function(e){return Object(x.jsx)(q.a,{checked:"1"===e.value,readOnly:!0})}},{field:"placa",headerName:"Placa",align:"left",headerAlign:"center",flex:!0},{field:"preco",headerName:"Pre\xe7o",align:"left",headerAlign:"center",flex:!0,valueFormatter:function(e){return Number(e.value).toLocaleString("pt-br",{style:"currency",currency:"BRL"})},sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"editar",headerName:"Editar",align:"center",headerAlign:"center",flex:!0,renderCell:function(e){return Object(x.jsx)(m.a,{"aria-label":"editar",onClick:function(){return a.push("/edit/".concat(e.id))},children:Object(x.jsx)(K.a,{})})}},{field:"excluir",headerName:"Excluir",align:"center",headerAlign:"center",flex:!0,renderCell:function(e){return Object(x.jsx)(m.a,{"aria-label":"excluir",onClick:function(){return a=e.id,j(a),void f(!0);var a},children:Object(x.jsx)(z.a,{color:"error"})})}}];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ae,{isOpen:p,onClose:function(e){f(!1),e&&function(){W.apply(this,arguments)}()},children:"Deseja realmente excluir este karango?"}),Object(x.jsx)(te.a,{open:g,autoHideDuration:6e3,onClose:F,children:Object(x.jsx)(re.a,{elevation:6,variant:"filled",onClose:F,severity:k,children:A})}),Object(x.jsx)("h1",{children:"Registro de Karangos"}),Object(x.jsx)(s.a,{className:e.toolbar,children:Object(x.jsx)(U.a,{color:"secondary",variant:"contained",size:"large",startIcon:Object(x.jsx)(J.a,{}),onClick:function(){return a.push("/new")},children:"Novo Karango"})}),Object(x.jsx)(_.a,{elevation:4,children:Object(x.jsx)(ne.a,{className:e.dataGrid,rows:i,columns:P,pageSize:5,autoHeight:!0,disableSelectionOnClick:!0})})]})}var oe=t(45),le=t(119),se=t(80),de=t(207),ue=t(69),je=t.n(ue),be=t(257),me=Object(o.a)((function(){return{form:{maxWidth:"80%",margin:"0 auto",display:"flex",justifyContent:"space-around",flexWrap:"wrap","& .MuiFormControl-root":{minWidth:"200px",maxWidth:"500px",marginBottom:"24px"}},toolbar:{marginTop:"36px",width:"100%",display:"flex",justifyContent:"space-around"},checkbox:{alignItems:"center"}}})),he={A:"[A-Za-z]",0:"[0-9]","#":"[0-9A-Ja-j]"};function pe(){var e=me(),a=Object(r.useState)({id:null,marca:"",modelo:"",cor:"",ano_fabricacao:(new Date).getFullYear(),importado:"0",placa:"",preco:0}),t=Object(u.a)(a,2),n=t[0],i=t[1],c=Object(r.useState)(),o=Object(u.a)(c,2),l=o[0],d=o[1],j=Object(r.useState)({open:!1,severity:"success",message:"Karango salvo com sucesso."}),m=Object(u.a)(j,2),h=m[0],p=m[1],f=Object(r.useState)({disabled:!1,label:"Enviar"}),O=Object(u.a)(f,2),v=O[0],g=O[1],C=Object(r.useState)({marca:"",modelo:"",cor:"",placa:"",preco:""}),N=Object(u.a)(C,2),y=N[0],k=N[1],S=Object(r.useState)(!1),w=Object(u.a)(S,2),E=w[0],A=w[1],D=Object(r.useState)(!1),R=Object(u.a)(D,2),T=R[0],W=R[1],F=Object(r.useState)("Cadastrar Karango"),P=Object(u.a)(F,2),M=P[0],_=P[1],I=Object(X.f)(),z=Object(X.g)();function H(){return(H=Object(L.a)(G.a.mark((function e(a){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("https://api.faustocintra.com.br/karangos/".concat(a));case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p({open:!0,severity:"error",message:"N\xe3o foi poss\xedvel carregar os dados para edi\xe7\xe3o."});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function K(e,a){var t=Object(oe.a)({},n),r=l;if(e.target.id&&(a=e.target.id),"importado"===a){var c=!l;t.importado=c?"1":"0",r=c}else t[a]="placa"===a?e.target.value.toUpperCase():e.target.value;i(t),d(r),A(!0),V(t)}function V(e){var a={marca:"",modelo:"",cor:"",placa:"",preco:""},t=!0;return""===e.marca.trim()&&(a.marca="A marca deve ser preenchida",t=!1),""===e.modelo.trim()&&(a.modelo="A modelo deve ser preenchido",t=!1),""===e.cor.trim()&&(a.cor="Escolha uma cor",t=!1),(""===e.placa.trim()||e.placa.includes("_"))&&(a.placa="A placa deve ser corretamente preenchida",t=!1),(isNaN(e.preco)||Number(e.preco)<=0)&&(a.preco="O pre\xe7o deve ser preenchido e maior que zero",t=!1),k(a),t}function J(){return(J=Object(L.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,g({disabled:!0,label:"Enviando..."}),!z.id){e.next=7;break}return e.next=5,B.a.put("https://api.faustocintra.com.br/karangos/".concat(z.id),n);case 5:e.next=9;break;case 7:return e.next=9,B.a.post("https://api.faustocintra.com.br/karangos",n);case 9:p({open:!0,severity:"success",message:"Karango salvo com sucesso!"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),p({open:!0,severity:"error",message:"ERRO: "+e.t0.message});case 15:g({disabled:!1,label:"Enviar"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function Y(e){return Object(x.jsx)(re.a,Object(oe.a)({elevation:6,variant:"filled"},e))}function Z(e,a){"clickway"!==a&&(p(Object(oe.a)(Object(oe.a)({},h),{},{open:!1})),I.push("/list"))}return Object(r.useEffect)((function(){z.id&&(_("Editando Karango"),function(e){H.apply(this,arguments)}(z.id))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ae,{isOpen:T,onClose:function(e){W(!1),e&&I.push("/list")},children:"H\xe1 dados n\xe3o salvos. Deseja realmente voltar?"}),Object(x.jsx)(te.a,{open:h.open,autoHideDuration:6e3,onClose:Z,children:Object(x.jsx)(Y,{onClose:Z,severity:h.severity,children:h.message})}),Object(x.jsx)("h1",{children:M}),Object(x.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),V(n)&&function(){J.apply(this,arguments)}()},children:[Object(x.jsx)(le.a,{id:"marca",label:"Marca",variant:"filled",value:n.marca,onChange:K,fullWidth:!0,required:!0,error:""!==y.marca,helperText:y.marca}),Object(x.jsx)(le.a,{id:"modelo",label:"Modelo",variant:"filled",value:n.modelo,onChange:K,fullWidth:!0,required:!0,error:""!==y.modelo,helperText:y.modelo}),Object(x.jsxs)(le.a,{id:"cor",label:"Cor",variant:"filled",value:n.cor,onChange:function(e){return K(e,"cor")},select:!0,fullWidth:!0,required:!0,error:""!==y.cor,helperText:y.cor,children:[Object(x.jsx)(b.a,{value:"Amarelo",children:"Amarelo"}),Object(x.jsx)(b.a,{value:"Azul",children:"Azul"}),Object(x.jsx)(b.a,{value:"Bege",children:"Bege"}),Object(x.jsx)(b.a,{value:"Branco",children:"Branco"}),Object(x.jsx)(b.a,{value:"Cinza",children:"Cinza"}),Object(x.jsx)(b.a,{value:"Dourado",children:"Dourado"}),Object(x.jsx)(b.a,{value:"Laranja",children:"Laranja"}),Object(x.jsx)(b.a,{value:"Marrom",children:"Marrom"}),Object(x.jsx)(b.a,{value:"Prata",children:"Prata"}),Object(x.jsx)(b.a,{value:"Preto",children:"Preto"}),Object(x.jsx)(b.a,{value:"Roxo",children:"Roxo"}),Object(x.jsx)(b.a,{value:"Verde",children:"Verde"}),Object(x.jsx)(b.a,{value:"Vermelho",children:"Vermelho"})]}),Object(x.jsx)(le.a,{id:"ano_fabricacao",label:"Ano de Fabrica\xe7\xe3o",variant:"filled",value:n.ano_fabricacao,onChange:function(e){return K(e,"ano_fabricacao")},select:!0,fullWidth:!0,children:function(){for(var e=[],a=(new Date).getFullYear();a>=1900;a--)e.push(a);return e}().map((function(e){return Object(x.jsx)(b.a,{value:e,children:e},e)}))}),Object(x.jsx)(le.a,{id:"preco",label:"Pre\xe7o",variant:"filled",value:n.preco,onChange:K,fullWidth:!0,type:"number",onFocus:function(e){return e.target.select()},InputProps:{startAdornment:Object(x.jsx)(be.a,{position:"start",children:"R$"})},required:!0,error:""!==y.preco,helperText:y.preco}),Object(x.jsx)(je.a,{formatChars:he,mask:"AAA-0#00",id:"placa",onChange:function(e){return K(e,"placa")},value:n.placa,children:function(){return Object(x.jsx)(le.a,{label:"Placa",variant:"filled",fullWidth:!0,required:!0,error:""!==y.placa,helperText:y.placa})}}),Object(x.jsx)(se.a,{className:e.checkbox,fullWidth:!0,children:Object(x.jsx)(de.a,{control:Object(x.jsx)(q.a,{checked:l,onChange:K,id:"importado"}),label:"Importado?"})}),Object(x.jsxs)(s.a,{className:e.toolbar,children:[Object(x.jsx)(U.a,{variant:"contained",color:"secondary",type:"submit",disabled:v.disabled,children:v.label}),Object(x.jsx)(U.a,{variant:"contained",onClick:function(){E?W(!0):I.push("/list")},children:"Voltar"})]})]})]})}var fe=Object(o.a)((function(e){return{table:{minWidth:650},dataGrid:{"& .MuiDataGrid-row button":{visibility:"hidden"},"& .MuiDataGrid-row:hover button":{visibility:"visible"}},toolbar:{justifyContent:"flex-end",paddingRight:0,margin:e.spacing(2,0)}}}));function xe(){var e=fe(),a=Object(X.f)(),t=Object(r.useState)([]),n=Object(u.a)(t,2),i=n[0],c=n[1],o=Object(r.useState)(),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(r.useState)(!1),h=Object(u.a)(b,2),p=h[0],f=h[1],O=Object(r.useState)(!1),v=Object(u.a)(O,2),g=v[0],C=v[1],N=Object(r.useState)("SUCESSO"),y=Object(u.a)(N,2),k=y[0],S=y[1],w=Object(r.useState)("CLIENTE EXCLU\xcdDO"),E=Object(u.a)(w,2),A=E[0],D=E[1];function R(){return T.apply(this,arguments)}function T(){return(T=Object(L.a)(G.a.mark((function e(){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("https://api.faustocintra.com.br/clientes?by=nome,cpf");case 3:(a=e.sent).data.length>0&&c(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function W(){return(W=Object(L.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.delete("https://api.faustocintra.com.br/clientes/".concat(d));case 3:R(),S("SUCESSO"),D("CLIENTE EXCLU\xcdDO"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),S("error"),D("ERRO: "+e.t0.message);case 12:C(!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function F(){C(!1)}Object(r.useEffect)((function(){R()}),[]);var P=[{field:"id",headerClassName:"super-app-theme--header",headerName:"ID",align:"center",headerAlign:"center",width:90,sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"nome",headerName:"Nome",align:"left",headerAlign:"left",width:150},{field:"cpf",headerName:"CPF",align:"left",headerAlign:"left",width:125,sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"rg",headerName:"RG",align:"center",headerAlign:"center",width:125,sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"logradouro",headerName:"Logradouro",width:160},{field:"num_imovel",headerName:"N\xba Im\xf3vel",width:90,sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"complemento",headerName:"Complemento",width:150},{field:"bairro",headerName:"Bairro",width:120},{field:"municipio",headerName:"Munic\xedpio",width:150},{field:"uf",headerName:"UF",width:100},{field:"telefone",headerName:"Telefone",width:150,sortComparator:function(e,a){return Number(e)>Number(a)?1:-1}},{field:"email",headerName:"E-mail",width:260},{field:"editar",headerName:"Editar",align:"center",headerAlign:"center",width:150,renderCell:function(e){return Object(x.jsx)(m.a,{"aria-label":"editar",onClick:function(){return a.push("/editCliente/".concat(e.id))},children:Object(x.jsx)(K.a,{})})}},{field:"excluir",headerName:"Excluir",align:"center",headerAlign:"center",width:120,renderCell:function(e){return Object(x.jsx)(m.a,{"aria-label":"excluir",onClick:function(){return a=e.id,j(a),void f(!0);var a},children:Object(x.jsx)(z.a,{color:"error"})})}}];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ae,{isOpen:p,onClose:function(e){f(!1),e&&function(){W.apply(this,arguments)}()},children:"Deseja excluir cliente?"}),Object(x.jsx)(te.a,{open:g,autoHideDuration:6e3,onClose:F,children:Object(x.jsx)(re.a,{elevation:6,variant:"filled",onClose:F,severity:k,children:A})}),Object(x.jsx)("h1",{children:"Cadastro de Cliente"}),Object(x.jsx)(s.a,{className:e.toolbar,children:Object(x.jsx)(U.a,{color:"secondary",variant:"contained",size:"large",startIcon:Object(x.jsx)(J.a,{}),onClick:function(){return a.push("/newCliente")},children:"Novo Cliente"})}),Object(x.jsx)(_.a,{elevation:5,children:Object(x.jsx)(ne.a,{className:e.dataGrid,rows:i,columns:P,pageSize:4,autoHeight:!0,disableSelectionOnClick:!0})})]})}var Oe=Object(o.a)((function(){return{form:{maxWidth:"80%",margin:"0 auto",display:"flex",justifyContent:"space-around",flexWrap:"wrap","& .MuiFormControl-root":{minWidth:"200px",maxWidth:"500px",marginBottom:"24px"}},toolbar:{marginTop:"36px",width:"100%",display:"flex",justifyContent:"space-around"},checkbox:{alignItems:"center"}}})),ve={x:"[0-9]"};function ge(){var e=Oe(),a=Object(r.useState)({id:null,nome:"",cpf:"",rg:"",logradouro:"",num_imovel:"",complemento:"",bairro:"",municipio:"",uf:"",telefone:"",email:""}),t=Object(u.a)(a,2),n=t[0],i=t[1],c=Object(r.useState)({open:!1,severity:"SUCESSO",message:"CLIENTE SALVO"}),o=Object(u.a)(c,2),l=o[0],d=o[1],j=Object(r.useState)({disabled:!1,label:"Enviar"}),m=Object(u.a)(j,2),h=m[0],p=m[1],f=Object(r.useState)({nome:"",cpf:"",rg:"",logradouro:"",num_imovel:"",complemento:"",bairro:"",municipio:"",uf:"",telefone:"",email:""}),O=Object(u.a)(f,2),v=O[0],g=O[1],C=Object(r.useState)(!1),N=Object(u.a)(C,2),y=N[0],k=N[1],S=Object(r.useState)(!1),w=Object(u.a)(S,2),E=w[0],A=w[1],D=Object(r.useState)("Cadastro Cliente"),R=Object(u.a)(D,2),T=R[0],W=R[1],F=Object(X.f)(),P=Object(X.g)();function M(){return(M=Object(L.a)(G.a.mark((function e(a){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("https://api.faustocintra.com.br/clientes/".concat(a));case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d({open:!0,severity:"error",message:"N\xe3o foi poss\xedvel carregar os dados"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e,a){var t=Object(oe.a)({},n);e.target.id&&(a=e.target.id),t[a]=e.target.value,i(t),k(!0),q(t)}function q(e){var a={nome:"",cpf:"",rg:"",logradouro:"",num_imovel:"",complemento:"",bairro:"",municipio:"",uf:"",telefone:"",email:""},t=!0;return""===e.nome.trim()&&(a.nome="Digitar um Nome v\xe1lido",t=!1),(""===e.cpf.trim()||e.cpf.includes("_"))&&(a.cpf="Digitar um CPF v\xe1lido",t=!1),(""===e.rg.trim()||e.rg.includes("_"))&&(a.rg="Digitar um RG v\xe1lido",t=!1),""===e.logradouro.trim()&&(a.logradouro="Escolha um Logradouro",t=!1),""===e.complemento.trim()&&(a.complemento="Digitar um valor v\xe1lido",t=!1),""===e.bairro.trim()&&(a.bairro="Digitar um valor v\xe1lido",t=!1),""===e.municipio.trim()&&(a.municipio="Digitar um valor v\xe1lido",t=!1),""===e.uf.trim()&&(a.uf="Escolha um UF",t=!1),""===e.telefone.trim()&&(a.telefone="Digitar um telefone v\xe1lido",t=!1),Number(e.num_imovel)<=0&&(a.num_imovel="Digitar um valor v\xe1lido",t=!1),(e.email.length<=5||""===e.email.trim()||!e.email.includes("@"))&&(a.email="O e-mail deve ser preenchido corretemente",t=!1),g(a),t}function I(){return(I=Object(L.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p({disabled:!0,label:"Enviando..."}),!P.id){e.next=7;break}return e.next=5,B.a.put("https://api.faustocintra.com.br/clientes/".concat(P.id),n);case 5:e.next=9;break;case 7:return e.next=9,B.a.post("https://api.faustocintra.com.br/clientes",n);case 9:d({open:!0,severity:"success",message:"Cliente salvo com sucesso!"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),d({open:!0,severity:"error",message:"ERRO: "+e.t0.message});case 15:p({disabled:!1,label:"Enviar"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function z(e){return Object(x.jsx)(re.a,Object(oe.a)({elevation:6,variant:"filled"},e))}function H(e,a){"clickway"!==a&&(d(Object(oe.a)(Object(oe.a)({},l),{},{open:!1})),F.push("/listCliente"))}return Object(r.useEffect)((function(){P.id&&(W("Editando Cliente"),function(e){M.apply(this,arguments)}(P.id))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ae,{isOpen:E,onClose:function(e){A(!1),e&&F.push("/listCliente")},children:"Deseja sair desta p\xe1gina ?"}),Object(x.jsx)(te.a,{open:l.open,autoHideDuration:6e3,onClose:H,children:Object(x.jsx)(z,{onClose:H,severity:l.severity,children:l.message})}),Object(x.jsx)("h1",{children:T}),Object(x.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),q(n)&&function(){I.apply(this,arguments)}()},children:[Object(x.jsx)(le.a,{className:e.textfield,id:"nome",label:"Nome",variant:"filled",value:n.nome,onChange:_,fullWidth:!0,required:!0,error:""!==v.nome,helperText:v.nome}),Object(x.jsx)(je.a,{formatChars:ve,mask:"xxx.xxx.xxx-xx",id:"cpf",value:n.cpf,onChange:function(e){return _(e,"cpf")},children:function(){return Object(x.jsx)(le.a,{className:e.textfield,label:"CPF",variant:"filled",fullWidth:!0,required:!0,error:""!==v.cpf,helperText:v.cpf})}}),Object(x.jsx)(je.a,{formatChars:ve,mask:"xx.xxx.xxx-x",id:"rg",value:n.rg,onChange:function(e){return _(e,"rg")},children:function(){return Object(x.jsx)(le.a,{className:e.textfield,label:"RG",variant:"filled",fullWidth:!0,required:!0,error:""!==v.rg,helperText:v.rg})}}),Object(x.jsx)(le.a,{className:e.textfield,id:"logradouro",label:"Logradouro",variant:"filled",value:n.logradouro,onChange:_,fullWidth:!0,required:!0,error:""!==v.logradouro,helperText:v.logradouro}),Object(x.jsx)(le.a,{className:e.textfield,id:"num_imovel",label:"N\xfamero Im\xf3vel",variant:"filled",value:n.num_imovel,onChange:_,fullWidth:!0,required:!0,error:""!==v.num_imovel,helperText:v.num_imovel}),Object(x.jsx)(le.a,{className:e.textfield,id:"complemento",label:"Complemento",variant:"filled",value:n.complemento,onChange:_,fullWidth:!0,required:!0,error:""!==v.complemento,helperText:v.complemento}),Object(x.jsx)(le.a,{className:e.textfield,id:"bairro",label:"Bairro",variant:"filled",value:n.bairro,onChange:_,fullWidth:!0,required:!0,error:""!==v.bairro,helperText:v.bairro}),Object(x.jsx)(le.a,{className:e.textfield,id:"municipio",label:"Munic\xedpio",variant:"filled",value:n.municipio,onChange:_,fullWidth:!0,required:!0,error:""!==v.municipio,helperText:v.municipio}),Object(x.jsxs)(le.a,{className:e.textfield,id:"uf",label:"UF",variant:"filled",value:n.uf,onChange:function(e){return _(e,"uf")},select:!0,fullWidth:!0,required:!0,error:""!==v.uf,helperText:v.uf,children:[Object(x.jsx)(b.a,{value:"Acre",children:"Acre"}),Object(x.jsx)(b.a,{value:"Alagoas",children:"Alagoas"}),Object(x.jsx)(b.a,{value:"Amap\xe1",children:"Amap\xe1"}),Object(x.jsx)(b.a,{value:"Amazonas",children:"Amazonas"}),Object(x.jsx)(b.a,{value:"Bahia",children:"Bahia"}),Object(x.jsx)(b.a,{value:"Cear\xe1",children:"Cear\xe1"}),Object(x.jsx)(b.a,{value:"Distrito Federal",children:"Distrito Federal"}),Object(x.jsx)(b.a,{value:"Esp\xedrito Santo",children:"Esp\xedrito Santo"}),Object(x.jsx)(b.a,{value:"Goi\xe1s",children:"Goi\xe1s"}),Object(x.jsx)(b.a,{value:"Maranh\xe3o",children:"Maranh\xe3o"}),Object(x.jsx)(b.a,{value:"Mato Grosso",children:"Mato Grosso"}),Object(x.jsx)(b.a,{value:"Mato Grosso do Sul",children:"Mato Grosso do Sul"}),Object(x.jsx)(b.a,{value:"Minas Gerais",children:"Minas Gerais"}),Object(x.jsx)(b.a,{value:"Par\xe1",children:"Par\xe1"}),Object(x.jsx)(b.a,{value:"Para\xedba",children:"Para\xedba"}),Object(x.jsx)(b.a,{value:"Paran\xe1",children:"Paran\xe1"}),Object(x.jsx)(b.a,{value:"Pernambuco",children:"Pernambuco"}),Object(x.jsx)(b.a,{value:"Piau\xed",children:"Piau\xed"}),Object(x.jsx)(b.a,{value:"Rio de Janeiro",children:"Rio de Janeiro"}),Object(x.jsx)(b.a,{value:"Rio Grande do Norte",children:"Rio Grande do Norte"}),Object(x.jsx)(b.a,{value:"Rio Grande do Sul",children:"Rio Grande do Sul"}),Object(x.jsx)(b.a,{value:"Rond\xf4nia",children:"Rond\xf4nia"}),Object(x.jsx)(b.a,{value:"Roraima",children:"Roraima"}),Object(x.jsx)(b.a,{value:"Santa Catarina",children:"Santa Catarina"}),Object(x.jsx)(b.a,{value:"S\xe3o Paulo",children:"S\xe3o Paulo"}),Object(x.jsx)(b.a,{value:"Sergipe",children:"Sergipe"}),Object(x.jsx)(b.a,{value:"Tocantins",children:"Tocantins"})]}),Object(x.jsx)(je.a,{formatChars:ve,mask:"(xx)-xxxx-xxxx",id:"telefone",value:n.telefone,onChange:function(e){return _(e,"telefone")},children:function(){return Object(x.jsx)(le.a,{className:e.textfield,label:"Telefone",variant:"filled",fullWidth:!0,required:!0,error:""!==v.telefone,helperText:v.telefone})}}),Object(x.jsx)(le.a,{className:e.textfield,id:"email",label:"E-mail",variant:"filled",value:n.email.toLowerCase(),onChange:_,fullWidth:!0,required:!0,error:""!==v.email,helperText:v.email}),Object(x.jsxs)(s.a,{className:e.toolbar,children:[Object(x.jsx)(U.a,{variant:"contained",color:"secondary",type:"submit",disabled:h.disabled,children:h.label}),Object(x.jsx)(U.a,{variant:"contained",onClick:function(){y?A(!0):F.push("/listCliente")},children:"Voltar"})]})]})]})}var Ce=Object(N.a)({palette:{type:"dark",primary:{main:S.a[500]},secondary:{main:E.a[500]}}}),Ne=Object(o.a)((function(e){return{box:{backgroundColor:e.palette.background.default,minHeight:"100vh",paddingBotton:"42px"},routed:{padding:"25px",color:e.palette.text.primary,fontFamily:e.typography.fontFamily}}}));function ye(){var e=Ne();return Object(x.jsx)(F.a,{className:e.box,children:Object(x.jsxs)(f.a,{children:[Object(x.jsx)(C,{}),Object(x.jsx)(F.a,{id:"routed",className:e.routed,children:Object(x.jsxs)(X.c,{children:[Object(x.jsx)(X.a,{path:"/list",children:Object(x.jsx)(ce,{})}),Object(x.jsx)(X.a,{path:"/new",children:Object(x.jsx)(pe,{})}),Object(x.jsx)(X.a,{path:"/edit/:id",children:Object(x.jsx)(pe,{})}),Object(x.jsx)(X.a,{path:"/listCliente",children:Object(x.jsx)(xe,{})}),Object(x.jsx)(X.a,{path:"/newCliente",children:Object(x.jsx)(ge,{})}),Object(x.jsx)(X.a,{path:"/editCliente/:id",children:Object(x.jsx)(ge,{})})]})}),Object(x.jsx)(W,{})]})})}var ke=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(y.a,{theme:Ce,children:Object(x.jsx)(ye,{})})})},Se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,265)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),r(e),n(e),i(e),c(e)}))};c.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(ke,{})}),document.getElementById("root")),Se()}},[[202,1,2]]]);
//# sourceMappingURL=main.8e9a42d0.chunk.js.map
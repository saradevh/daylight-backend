(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t){},202:function(e,t,n){e.exports=n(304)},207:function(e,t,n){},235:function(e,t){},236:function(e,t){},303:function(e,t,n){},304:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(15),o=n.n(s),r=(n(207),n(39)),l=n(40),u=n(42),c=n(41),d=n(43),m=n(170),p=n.n(m),h=n(78),f=n.n(h);p.a.initializeApp({apiKey:"AIzaSyCU_fktx1OgXKsKCG28BsemqKUg4bxNTJw",authDomain:"daylight-dev-9d4d5.firebaseapp.com",databaseURL:"https://daylight-dev-9d4d5.firebaseio.com",projectId:"daylight-dev-9d4d5",storageBucket:"daylight-dev-9d4d5.appspot.com",messagingSenderId:"76653225069"});var g=f.a.firestore(),q=f.a.storage(),S=n(65),_=n(370),E=n(341),b=n(362),z=n(360),Q=n(366),C=n(367),w=n(347),v=n(136),k=n.n(v),L=n(348),y=n(342),x=n(369),B=n(305),O=n(343),D=n(344),j=n(368),A=n(351),R=n(350),U=n(352),I=n(176),M=n.n(I),N=n(76),P=n.n(N),T=n(87),W=n.n(T),X=n(175),F=n.n(X),H=n(173),K=n.n(H),V=n(174),J=n.n(V),Y=Object(_.a)(E.a)({textAlign:"center"}),G=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={openListItemDelete:!1},n.quizId=0,n.questionSourceId=0,n.switchOpenDelete=function(e,t){if(n.setState({openListItemDelete:!n.state.openListItemDelete}),t)switch(e){case"questionSource":n.questionSourceId=t;break;case"quiz":n.quizId=t;break;default:return}},n.handleItemListDelete=function(e){"questionSource"===e?(g.collection("questions").doc(n.questionSourceId.toString()).get().then(function(e){e.exists?console.log("Document data:",e.data()):console.log("No such document!")}).catch(function(e){console.log("Error getting document:",e)}),g.collection("questions").doc(n.questionSourceId.toString()).delete().then(function(){console.log("Document successfully deleted!")}).catch(function(e){console.error("Error removing document: ",e)}),n.switchOpenDelete(),n.props.updateQuestionsAll()):"quiz"===e&&(g.collection("quiz").doc(n.quizId.toString()).delete().then(function(){console.log("Document successfully deleted!")}).catch(function(e){console.error("Error removing document: ",e)}),n.switchOpenDelete(),n.props.updateQuizAll())},n.addQuestionSource=function(){g.collection("questions").doc((n.props.data[n.props.data.length-1].questions_id+1).toString()).set({answersList:[],questions_id:n.props.data[n.props.data.length-1].questions_id+1,questions_name:"Source "+(n.props.data[n.props.data.length-1].questions_id+1),quizQuestionList:[{answers:[!1,!1,!1,!1],feedback:"",possibilities:["","","",""],question_id:1,question_prequel:"",imageURLQB:"",imageURLQE:"",imageNameQB:"",imageNameQE:""}]}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)}),n.props.updateQuestionsAll()},n.addQuiz=function(){g.collection("quiz").doc((n.props.data.length+1).toString()).set({config:{quiz_id:n.props.data.length+1,SubLines:["","","",""],passScore:0,quiz_time:0,setShuffle:!1,quiz_title:"Titre",quiz_title2:"Sous-titre",pauseButton:!1,chronoButton:!1,questionsSetId:1,shuffledAnswers:!1,showResultConfig:!1,quiz_n_questions:0,quiz_n_questionsMax:0,answers_file_name:"",question_file_name:""}}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)}),n.props.updateQuizAll()},n.downloadSCORMPackage=function(e){return 1===e.config.quiz_id.toString().length?"https://preprod.daylight-back.themoocagency.com/daylightQuizEditor/quizChapter/pre/chap".concat(e.config.quiz_id,"/chap").concat(e.config.quiz_id,".zip"):3===e.config.quiz_id.toString().length?"https://preprod.daylight-back.themoocagency.com/daylightQuizEditor/quizChapter/post/chap".concat(e.config.quiz_id.toString()[2],"chap").concat(e.config.quiz_id.toString()[2],".zip"):void 0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getLink",value:function(e){return 1===e.config.quiz_id.toString().length?"https://preprod.daylight-back.themoocagency.com/daylightQuizEditor/quizChapter/pre/chap"+"".concat(e.config.quiz_id):3===e.config.quiz_id.toString().length?"https://preprod.daylight-back.themoocagency.com/daylightQuizEditor/quizChapter/post/chap"+"".concat(e.config.quiz_id.toString()[2]):void 0}},{key:"render",value:function(){var e=this,t=this.props.isQuestionList;return i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,{component:"nav","aria-label":t?"Liste des sources de questions":"Liste des quiz"},this.props.data&&this.props.data.map(function(n,a){var s=t?n.questions_name:n.config.quiz_title+" // "+n.config.quiz_title2;return i.a.createElement(B.a,{button:!0,key:a},i.a.createElement(O.a,{primary:s,edge:"start","aria-label":s}),i.a.createElement(D.a,null,!t&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{title:"Configurer le quiz"},i.a.createElement(w.a,{onClick:function(){return e.props.handleClick(n,t)}},i.a.createElement(K.a,null))),i.a.createElement(x.a,{title:"Pr\xe9visualiser"},i.a.createElement(L.a,{href:e.getLink(n),target:"_blank"},i.a.createElement(w.a,{edge:"start","aria-label":"Pr\xe9visualiser"},i.a.createElement(J.a,null)))),i.a.createElement(x.a,{title:"T\xe9l\xe9charger le paquet SCORM"},i.a.createElement(L.a,{href:e.downloadSCORMPackage(n),target:"_blank"},i.a.createElement(w.a,{edge:"start","aria-label":"T\xe9l\xe9charger le paquet SCORM"},i.a.createElement(F.a,null))))),t&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{title:"\xc9diter la source de questions"},i.a.createElement(w.a,{onClick:function(){return e.props.handleClick(n,t)},edge:"start","aria-label":"\xc9diter la source de questions"},i.a.createElement(M.a,null)))),i.a.createElement(x.a,{title:t?"Supprimer la source de questions":"Supprimer le quiz"},i.a.createElement(w.a,{edge:"start","aria-label":t?"Supprimer la source de questions":"Supprimer le quiz",onClick:function(){return t?e.switchOpenDelete("questionSource",n.questions_id):e.switchOpenDelete("quiz",n.config.quiz_id)}},i.a.createElement(W.a,null)))))})),i.a.createElement(Y,{maxWidth:"md"},i.a.createElement(x.a,{title:t?"Ajouter une source de questions":"Ajouter un quiz"},i.a.createElement(w.a,{"aria-label":t?"Ajouter une source de questions":"Ajouter un quiz",color:"primary",onClick:function(){return t?e.addQuestionSource():e.addQuiz()}},i.a.createElement(P.a,null)))),i.a.createElement(j.a,{open:this.state.openListItemDelete,onClose:function(){return e.switchOpenDelete(t?"questionSource":"quiz")},"aria-labelledby":"alert-dialog-title"},i.a.createElement(R.a,{id:"alert-dialog-title"},t?"Supprimer la source de donn\xe9es ?":"Supprimer le quiz ?"),i.a.createElement(A.a,null,i.a.createElement(U.a,{onClick:function(){return e.switchOpenDelete(t?"questionSource":"quiz")},color:"primary"},"Annuler"),i.a.createElement(U.a,{onClick:function(){return t?e.handleItemListDelete("questionSource"):e.handleItemListDelete("quiz")},color:"secondary",autoFocus:!0},"Supprimer"))))}}]),t}(i.a.Component),Z=n(37),$=n(353),ee=n(363),te=n(364),ne=n(358),ae=n(365),ie=n(357),se=n(354),oe=n(355),re=n(110),le=n.n(re),ue=Object(_.a)(E.a)({backgroundColor:"white",minHeight:"500px",top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"fixed",maxWidth:"90%",paddingRight:"90px",overflowY:"scroll",overflowX:"visible",height:"88%"}),ce=Object(_.a)($.a)({marginTop:16}),de=Object(_.a)(S.a)({marginTop:16}),me=Object(_.a)($.a)({height:70,position:"relative"}),pe=Object(_.a)($.a)({marginTop:12,height:70,position:"relative"}),he=Object(_.a)(E.a)({margin:"20px 0",paddingTop:"20px",paddingBottom:"30px",backgroundColor:"rgba(243, 144, 0, 0.1)",maxWidth:"none"}),fe=Object(_.a)(se.a)({width:"830px"}),ge=Object(_.a)(oe.a)({bottom:0,position:"absolute"}),qe=Object(_.a)(U.a)({position:"sticky",bottom:"47%",left:"100%",transform:"translate(85px, 0px)",height:"80px",width:"80px",borderRadius:"50%"}),Se=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={SubLines:[],quiz_id:0,passScore:0,quiz_time:0,setShuffle:!1,quiz_title:"",quiz_title2:"",pauseButton:!1,chronoButton:!1,questionsSetId:0,shuffledAnswers:!1,showResultConfig:!1,quiz_n_questions:0,quiz_n_questionsMax:0,answers_file_name:"",question_file_name:"",selectedQuestionSet:{}},n.setQuestionSet=function(){g.collection("questions").where("questions_id","==",n.state.questionsSetId).get().then(function(e){e.forEach(function(e){n.setState({selectedQuestionSet:e.data()})})})},n.componentDidMount=function(){var e=n.props.quiz.config;n.setState({quiz_id:e.quiz_id,SubLines:e.SubLines,passScore:e.passScore,quiz_time:e.quiz_time,setShuffle:e.setShuffle,quiz_title:e.quiz_title,quiz_title2:e.quiz_title2,pauseButton:e.pauseButton,chronoButton:e.chronoButton,questionsSetId:e.questionsSetId,shuffledAnswers:e.shuffledAnswers,quiz_n_questions:e.quiz_n_questions,showResultConfig:e.showResultConfig,answers_file_name:e.answers_file_name,question_file_name:e.question_file_name,quiz_n_questionsMax:e.quiz_n_questionsMax},n.setQuestionSet)},n.handleSaveConfig=function(){var e=n.props.quiz.config;1===e.quiz_id.toString().length?g.collection("quiz").doc(e.quiz_id.toString()).set({configPre:{quiz_id:n.state.quiz_id,SubLines:n.state.SubLines,passScore:n.state.passScore,quiz_time:n.state.quiz_time,setShuffle:n.state.setShuffle,quiz_title:n.state.quiz_title,quiz_title2:n.state.quiz_title2,pauseButton:n.state.pauseButton,chronoButton:n.state.chronoButton,showResultConfig:n.state.showResultConfig,quiz_n_questions:n.state.quiz_n_questions,answers_file_name:n.state.answers_file_name,question_file_name:n.state.question_file_name,quiz_n_questionsMax:n.state.quiz_n_questionsMax},config:{quiz_id:n.state.quiz_id,SubLines:n.state.SubLines,passScore:n.state.passScore,quiz_time:n.state.quiz_time,setShuffle:n.state.setShuffle,quiz_title:n.state.quiz_title,quiz_title2:n.state.quiz_title2,pauseButton:n.state.pauseButton,chronoButton:n.state.chronoButton,showResultConfig:n.state.showResultConfig,quiz_n_questions:n.state.quiz_n_questions,answers_file_name:n.state.answers_file_name,question_file_name:n.state.question_file_name,quiz_n_questionsMax:n.state.quiz_n_questionsMax,shuffledAnswers:n.state.shuffledAnswers,questionsSetId:n.state.questionsSetId},configPost:n.props.quiz.configPost||n.props.quiz.config}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)}):3===e.quiz_id.toString().length&&g.collection("quiz").doc(e.quiz_id.toString()).set({configPost:{quiz_id:n.state.quiz_id,SubLines:n.state.SubLines,passScore:n.state.passScore,quiz_time:n.state.quiz_time,setShuffle:n.state.setShuffle,quiz_title:n.state.quiz_title,quiz_title2:n.state.quiz_title2,pauseButton:n.state.pauseButton,chronoButton:n.state.chronoButton,showResultConfig:n.state.showResultConfig,quiz_n_questions:n.state.quiz_n_questions,answers_file_name:n.state.answers_file_name,question_file_name:n.state.question_file_name,quiz_n_questionsMax:n.state.quiz_n_questionsMax},config:{quiz_id:n.state.quiz_id,SubLines:n.state.SubLines,passScore:n.state.passScore,quiz_time:n.state.quiz_time,setShuffle:n.state.setShuffle,quiz_title:n.state.quiz_title,quiz_title2:n.state.quiz_title2,pauseButton:n.state.pauseButton,chronoButton:n.state.chronoButton,showResultConfig:n.state.showResultConfig,quiz_n_questions:n.state.quiz_n_questions,answers_file_name:n.state.answers_file_name,question_file_name:n.state.question_file_name,quiz_n_questionsMax:n.state.quiz_n_questionsMax,shuffledAnswers:n.state.shuffledAnswers,questionsSetId:n.state.questionsSetId},configPre:n.props.quiz.configPre||n.props.quiz.config}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)}),n.props.switchDataSend(),n.props.handleCloseModal("config")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onTextChange",value:function(e,t){var n=Object(Z.a)(this.state.SubLines);n[t]=e,this.setState({SubLines:n})}},{key:"onCheckBoxChange",value:function(e){switch(e){case"setShuffle":this.setState({setShuffle:!this.state.setShuffle});break;case"chronoButton":this.setState({chronoButton:!this.state.chronoButton});break;case"pauseButton":this.setState({pauseButton:!this.state.pauseButton});break;case"showResultConfig":this.setState({showResultConfig:!this.state.showResultConfig});break;case"shuffledAnswers":this.setState({shuffledAnswers:!this.state.shuffledAnswers});break;default:return}}},{key:"onValueChange",value:function(e,t){switch(t){case"quiz_time":this.setState({quiz_time:e});break;case"quiz_n_questionsMax":this.setState({quiz_n_questionsMax:e});break;case"quiz_n_questions":this.setState({quiz_n_questions:e});break;case"passScore":this.setState({passScore:e});break;default:return}}},{key:"render",value:function(){var e=this,t=this.state,n=t.SubLines,a=t.quiz_time,s=t.passScore,o=t.setShuffle,r=t.quiz_title,l=t.quiz_title2,u=t.pauseButton,c=t.chronoButton,d=t.questionsSetId,m=t.shuffledAnswers,p=t.showResultConfig,h=t.quiz_n_questions,f=t.selectedQuestionSet;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ue,null,i.a.createElement(he,null,i.a.createElement(ae.a,{id:"quiz-title",label:"Titre du Quiz",value:r,onChange:function(t){return e.setState({quiz_title:t.target.value})},margin:"normal",fullWidth:!0}),i.a.createElement(ae.a,{id:"quiz-title2",label:"Sous-titre du Quiz",value:l,onChange:function(t){return e.setState({quiz_title2:t.target.value})},margin:"normal",fullWidth:!0}),n&&i.a.createElement(de,{variant:"caption",color:"textSecondary",display:"block"},"Texte d'introduction"),n&&n.map(function(t,n){return i.a.createElement(ae.a,{key:n,id:"SubLines",multiline:!0,value:t,onChange:function(t){return e.onTextChange(t.target.value,n)},margin:"none",fullWidth:!0})}),i.a.createElement(ce,{container:!0,spacing:3},i.a.createElement(me,{item:!0,xs:4},i.a.createElement(ge,{control:i.a.createElement(te.a,{color:"primary"}),label:"Affichage al\xe9atoire des questions",labelPlacement:"start",checked:o,onChange:function(){return e.onCheckBoxChange("setShuffle")}}))),i.a.createElement($.a,{container:!0,spacing:3},i.a.createElement(me,{item:!0,xs:4},i.a.createElement(ge,{control:i.a.createElement(te.a,{color:"primary"}),label:"Minuteur",labelPlacement:"start",checked:c,onChange:function(){return e.onCheckBoxChange("chronoButton")}})),c&&i.a.createElement(i.a.Fragment,null,i.a.createElement(me,{item:!0,xs:4},i.a.createElement(ae.a,{fullWidth:!0,id:"quiz_time",label:"Dur\xe9e du quiz (min)",value:a,onChange:function(t){return e.onValueChange(parseInt(t.target.value),"quiz_time")},type:"number",margin:"none"})),i.a.createElement(me,{item:!0,xs:4},i.a.createElement(ge,{control:i.a.createElement(te.a,{color:"primary"}),label:"Pause",labelPlacement:"start",checked:u,onChange:function(){return e.onCheckBoxChange("pauseButton")}})))),i.a.createElement($.a,{container:!0,spacing:3},i.a.createElement(me,{item:!0,xs:4},i.a.createElement(ge,{control:i.a.createElement(te.a,{color:"primary"}),label:"Masquer les r\xe9ponses",labelPlacement:"start",checked:p,onChange:function(){return e.onCheckBoxChange("showResultConfig")}})),i.a.createElement(me,{item:!0,xs:4},i.a.createElement(ge,{control:i.a.createElement(te.a,{color:"primary"}),label:"Ordre al\xe9atoire des r\xe9ponses",labelPlacement:"start",checked:m,onChange:function(){return e.onCheckBoxChange("shuffledAnswers")}})))),i.a.createElement(he,null,i.a.createElement(fe,null,i.a.createElement(ie.a,null,"Sources de donn\xe9es"),i.a.createElement(ee.a,{value:d,onChange:function(t){return e.setState({questionsSetId:t.target.value},e.setQuestionSet)}},this.props.questionsAll&&this.props.questionsAll.map(function(e,t){return i.a.createElement(ne.a,{key:t,value:e.questions_id},e.questions_name)}))),i.a.createElement($.a,{container:!0,spacing:3},i.a.createElement(pe,{item:!0,xs:4},i.a.createElement(S.a,{variant:"caption",color:"textSecondary"},"Nombre de questions total"),i.a.createElement(S.a,null,f.quizQuestionList&&f.quizQuestionList.length)),i.a.createElement(me,{item:!0,xs:4},i.a.createElement(ae.a,{fullWidth:!0,id:"quiz-questions",label:"Nombre de questions \xe0 afficher",value:h,onChange:function(t){return e.onValueChange(parseInt(t.target.value),"quiz_n_questions")},type:"number",margin:"normal"})),i.a.createElement(me,{item:!0,xs:4},i.a.createElement(ae.a,{fullWidth:!0,id:"quiz-questions",label:"Seuil de succ\xe8s",value:s,onChange:function(t){return e.onValueChange(parseInt(t.target.value),"passScore")},type:"number",margin:"normal"})))),i.a.createElement(qe,{variant:"contained",color:"secondary",size:"large",onClick:this.handleSaveConfig},i.a.createElement(le.a,null),"Save")))}}]),t}(i.a.Component),_e=n(64),Ee=n.n(_e),be=n(177),ze=n.n(be),Qe=n(90),Ce=n(185),we=n.n(Ce),ve=n(186),ke=n.n(ve),Le=n(183),ye=n(184),xe=n.n(ye),Be=n(134),Oe=n.n(Be),De=n(306),je=n(359),Ae=n(135),Re=n.n(Ae);function Ue(){var e=Object(Le.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Ue=function(){return e},e}var Ie=_.a(xe.a)(Ue()),Me=_.a(E.a)({paddingTop:"20px",paddingBottom:"30px",backgroundColor:"rgba(243, 144, 0, 0.1)",maxWidth:"none"}),Ne=_.a($.a)({width:168,height:177,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}),Pe=_.a(S.a)({paddingRight:10}),Te=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={answers:[],feedback:"",possibilities:[],question_id:0,question_prequel:"",progressQB:0,progressQE:0,isUploadingQB:!1,isUploadingQE:!1,openQuestionDelete:!1,openReponseDelete:!1,imageURLQB:"",imageURLQE:"",imageNameQB:"",imageNameQE:""},n.componentDidMount=function(){n.setQuestion()},n.setQuestion=function(){var e=n.props.question;n.setState({answers:e.answers,feedback:e.feedback,possibilities:e.possibilities,question_id:e.question_id,question_prequel:e.question_prequel,imageURLQB:e.imageURLQB,imageURLQE:e.imageURLQE,imageNameQB:e.imageNameQB,imageNameQE:e.imageNameQE})},n.getQuestionObject=function(){return{answers:n.state.answers,feedback:n.state.feedback,possibilities:n.state.possibilities,question_id:n.state.question_id,question_prequel:n.state.question_prequel,imageURLQB:n.state.imageURLQB,imageURLQE:n.state.imageURLQE,imageNameQB:n.state.imageNameQB,imageNameQE:n.state.imageNameQE}},n.handleUploadStartQB=function(){return n.setState({isUploadingQB:!0,progressQB:0})},n.handleProgressQB=function(e){return n.setState({progressQB:e})},n.handleUploadErrorQB=function(e){n.setState({isUploadingQB:!1}),console.error(e)},n.handleUploadSuccessQB=function(e){n.setState({imageNameQB:e,progressQB:100,isUploadingQB:!1}),f.a.storage().ref(n.props.questions_id.toString()).child(e).getDownloadURL().then(function(e){return n.setState({imageURLQB:e,progressQB:0},function(){return n.props.saveQuestionLocalChange(n.getQuestionObject(),n.props.number)})})},n.handleUploadStartQE=function(){return n.setState({isUploadingQE:!0,progressQE:0})},n.handleProgressQE=function(e){return n.setState({progressQE:e})},n.handleUploadErrorQE=function(e){n.setState({isUploadingQE:!1}),console.error(e)},n.handleUploadSuccessQE=function(e){n.setState({imageNameQE:e,progressQE:100,isUploadingQE:!1}),f.a.storage().ref(n.props.questions_id.toString()).child(e).getDownloadURL().then(function(e){return n.setState({imageURLQE:e,progressQE:0},function(){return n.props.saveQuestionLocalChange(n.getQuestionObject(),n.props.number)})})},n.onTextChange=function(e,t){var a=Object(Z.a)(n.state.possibilities);a[t]=e,n.setState({possibilities:a},function(){return n.props.saveQuestionLocalChange(n.getQuestionObject(),n.props.number)})},n.handleChangeCheckbox=function(e,t){var a=Object(Z.a)(n.state.answers);a[e]=!a[e],n.setState({answers:a},function(){return n.props.saveQuestionLocalChange(n.getQuestionObject(),n.props.number)})},n.repIndex=0,n.switchOpenDelete=function(e,t){"question"===e?n.setState({openQuestionDelete:!n.state.openQuestionDelete}):"reponse"===e&&(n.setState({openReponseDelete:!n.state.openReponseDelete}),n.repIndex=t)},n.handleQuestionDelete=function(){n.props.handleDeleteQuestion(n.props.number),n.switchOpenDelete("question")},n.handleReponseDelete=function(){var e=Object(Z.a)(n.state.possibilities);e.splice(n.repIndex,1),n.setState({possibilities:e},n.switchOpenDelete("reponse"))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(Me,{style:this.props.style},i.a.createElement($.a,{container:!0,spacing:3},i.a.createElement(Ne,{item:!0,align:"center",xs:2},i.a.createElement(S.a,{variant:"h3"},"Q",this.props.number+1),i.a.createElement(x.a,{title:"Supprimer la question"},i.a.createElement(w.a,{"aria-label":"Supprimer la question",onClick:function(){return e.switchOpenDelete("question")}},i.a.createElement(W.a,null)))),i.a.createElement($.a,{item:!0,xs:8},i.a.createElement(ae.a,{id:"outlined-multiline-flexible",label:"\xc9nonc\xe9",multiline:!0,value:this.state.question_prequel,onChange:function(t){return e.setState({question_prequel:t.target.value},function(){return e.props.saveQuestionLocalChange(e.getQuestionObject(),e.props.number)})},margin:"normal",variant:"outlined",fullWidth:!0})),i.a.createElement(Ne,{item:!0,xs:2},i.a.createElement(x.a,{title:"Choisir un fichier image pour l'\xe9nonc\xe9"},i.a.createElement(De.a,null,this.state.imageURLQB?i.a.createElement(Ie,{src:this.state.imageURLQB,alt:"Source upload\xe9e",loader:i.a.createElement(je.a,null)}):i.a.createElement(Re.a,{fontSize:"large"}),i.a.createElement(Oe.a,{accept:"image/*",name:"quiz-begin",filename:function(t){return"sourceID-"+e.props.questions_id+"-questionNb-"+(e.props.number+1)+"-QB"},storageRef:q.ref(this.props.questions_id.toString()),onUploadStart:this.handleUploadStartQB,onUploadError:this.handleUploadErrorQB,onUploadSuccess:this.handleUploadSuccessQB,onProgress:this.handleProgressQB,hidden:!0}))))),this.state.possibilities.map(function(t,n){return i.a.createElement($.a,{container:!0,key:n},i.a.createElement($.a,{item:!0,xs:1},i.a.createElement(Pe,{variant:"h6",align:"right"},n+1)),i.a.createElement($.a,{item:!0,xs:9},i.a.createElement(ae.a,{multiline:!0,value:t,onChange:function(t){return e.onTextChange(t.target.value,n)},margin:"none",fullWidth:!0})),i.a.createElement($.a,{item:!0,xs:2},i.a.createElement(te.a,{checked:e.state.answers[n],onChange:function(t){return e.handleChangeCheckbox(n,e.props.number)}}),i.a.createElement(x.a,{title:"Supprimer la r\xe9ponse"},i.a.createElement(w.a,{"aria-label":"Supprimer la r\xe9ponse",onClick:function(){return e.switchOpenDelete("reponse",n)}},i.a.createElement(W.a,null)))))}),i.a.createElement($.a,{container:!0,justify:"center"},i.a.createElement(x.a,{title:"Ajouter une r\xe9ponse"},i.a.createElement(w.a,{"aria-label":"Ajouter une r\xe9ponse",onClick:function(){return e.setState({possibilities:e.state.possibilities.concat("")})}},i.a.createElement(P.a,null)))),i.a.createElement($.a,{container:!0,spacing:3},i.a.createElement($.a,{item:!0,xs:1}),i.a.createElement($.a,{item:!0,xs:9},i.a.createElement(ae.a,{id:"outlined-multiline-flexible",label:"Explication",multiline:!0,value:this.state.feedback,onChange:function(t){return e.setState({feedback:t.target.value},function(){return e.props.saveQuestionLocalChange(e.getQuestionObject(),e.props.number)})},margin:"normal",variant:"outlined",fullWidth:!0})),i.a.createElement(Ne,{item:!0,xs:2},i.a.createElement(x.a,{title:"Choisir un fichier image pour l'explication"},i.a.createElement(De.a,null,this.state.imageURLQE?i.a.createElement(Ie,{src:this.state.imageURLQE,alt:"Source upload\xe9e",loader:i.a.createElement(je.a,null)}):i.a.createElement(Re.a,{fontSize:"large"}),i.a.createElement(Oe.a,{accept:"image/*",name:"quiz-begin",filename:function(t){return"sourceID-"+e.props.questions_id+"-questionNb-"+(e.props.number+1)+"-QE"},storageRef:q.ref(this.props.questions_id.toString()),onUploadStart:this.handleUploadStartQE,onUploadError:this.handleUploadErrorQE,onUploadSuccess:this.handleUploadSuccessQE,onProgress:this.handleProgressQE,hidden:!0}))))),i.a.createElement(j.a,{open:this.state.openQuestionDelete,onClose:function(){return e.switchOpenDelete("question")},"aria-labelledby":"alert-dialog-title"},i.a.createElement(R.a,{id:"alert-dialog-title"},"Supprimer la question "+(this.props.number+1)+" ?"),i.a.createElement(A.a,null,i.a.createElement(U.a,{onClick:function(){return e.switchOpenDelete("question")},color:"primary"},"Annuler"),i.a.createElement(U.a,{onClick:this.handleQuestionDelete,color:"secondary",autoFocus:!0},"Supprimer"))),i.a.createElement(j.a,{open:this.state.openReponseDelete,onClose:function(){return e.switchOpenDelete("reponse")},"aria-labelledby":"alert-dialog-title"},i.a.createElement(R.a,{id:"alert-dialog-title"},"Supprimer la r\xe9ponse ?"),i.a.createElement(A.a,null,i.a.createElement(U.a,{onClick:function(){return e.switchOpenDelete("reponse")},color:"primary"},"Annuler"),i.a.createElement(U.a,{onClick:this.handleReponseDelete,color:"secondary",autoFocus:!0},"Supprimer"))),i.a.createElement("hr",null))}}]),t}(i.a.Component);Te.getDerivedStateFromProps=function(e,t){if(e.question.question_id===t.question_id)return null;var n=e.question;return{answers:n.answers,feedback:n.feedback,possibilities:n.possibilities,question_id:n.question_id,question_prequel:n.question_prequel,imageURLQB:n.imageURLQB,imageURLQE:n.imageURLQE,imageNameQB:n.imageNameQB,imageNameQE:n.imageNameQE}};var We=Object(_.a)(E.a)({backgroundColor:"white",minHeight:"500px",top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"fixed",maxWidth:"90%",overflowY:"scroll",overflowX:"visible",height:"95%"}),Xe=Object(_.a)(U.a)({height:"50px",width:"50px",borderRadius:"50%"}),Fe=Object(_.a)(w.a)({}),He=Object(_.a)($.a)({display:"flex",justifyContent:"center",alignItems:"center"}),Ke=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={answersList:[],questions_id:0,questions_name:"",quizQuestionList:[],scrollToIndex:void 0},n.componentDidMount=function(){var e=n.props.actualQuestionsSource;n.setState({answersList:e.answersList,questions_id:e.questions_id,questions_name:e.questions_name,quizQuestionList:e.quizQuestionList})},n.saveQuestionLocalChange=function(e,t){var a=Object(Z.a)(n.state.quizQuestionList);a[t]=e,n.setState({quizQuestionList:a})},n.onAddNewQuestion=function(){var e=Object(Z.a)(n.state.quizQuestionList),t={answers:[!1,!1,!1,!1],feedback:"",possibilities:["","","",""],question_id:n.state.quizQuestionList[n.state.quizQuestionList.length-1].question_id+1,question_prequel:"",imageURLQB:"",imageURLQE:"",imageNameQB:"",imageNameQE:""};e.push(t),n.setState({quizQuestionList:e})},n.handleSaveQuestionsSource=function(){var e=Object(Z.a)(n.state.answersList);e.forEach(function(t,a){e[a]=n.state.quizQuestionList[a].answers.findIndex(function(e){return!0===e})+1}),n.setState({answersList:e},function(){g.collection("questions").doc(n.state.questions_id.toString()).set({answersList:n.state.answersList,questions_id:n.state.questions_id,questions_name:n.state.questions_name,quizQuestionList:n.state.quizQuestionList}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)}),n.props.switchDataSend(),n.props.handleCloseModal("questions")})},n.handleDeleteQuestion=function(e){var t=Object(Z.a)(n.state.quizQuestionList);t.splice(e,1),console.log(n.state.quizQuestionList),console.log(t),n.setState({quizQuestionList:t},function(){console.log(n.state.quizQuestionList)})},n.exportXLSX=function(){var e=ze.a.cloneDeep(n.state.quizQuestionList);e.forEach(function(e){e.answers=e.answers.join(),e.possibilities=e.possibilities.join("//")}),console.log(n.state.quizQuestionList),console.log(e);var t=Ee.a.utils.json_to_sheet(e),a=Ee.a.utils.book_new();Ee.a.utils.book_append_sheet(a,t,"data"),Ee.a.writeFile(a,"".concat(n.state.questions_name,".xlsx"))},n.importXLSX=function(e,t){var n=e.target.files[0],a=new FileReader;a.onload=function(e){var n=e.target.result;n=new Uint8Array(n);var i=Ee.a.read(n,{type:"array"}),s={};i.SheetNames.forEach(function(e){var t=Ee.a.utils.sheet_to_json(i.Sheets[e]);t.length&&(s[e]=t)}),a.readyState&&(s.data.forEach(function(e){e.answers=e.answers.split(","),e.answers=e.answers.map(function(e){return"true"===e}),e.possibilities=e.possibilities.split("//")}),t(s.data))},a.readAsArrayBuffer(n)},n.saveOnImportXLSX=function(e){console.log(e),console.log(n.state.quizQuestionList),n.setState({quizQuestionList:e},function(){console.log("did update state",n.state.quizQuestionList),n.handleSaveQuestionsSource()})},n.rowRenderer=function(e){var t=e.key,a=e.index,s=e.parent,o=e.style;e.isScrolling,e.isVisible;return i.a.createElement(Qe.b,{key:t,cache:n.cache,parent:s,columnIndex:0,rowIndex:a},i.a.createElement(Te,{style:o,number:a,question:n.state.quizQuestionList[a],questions_id:n.state.questions_id,handleDeleteQuestion:n.handleDeleteQuestion,saveQuestionLocalChange:n.saveQuestionLocalChange}))},n.cache=new Qe.c({fixedWidth:!0,defaultHeight:600}),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.questions_name;return i.a.createElement(i.a.Fragment,null,i.a.createElement(We,null,i.a.createElement($.a,{container:!0},i.a.createElement($.a,{item:!0,xs:11},i.a.createElement(ae.a,{id:"questionsSource-title",label:"Titre de la source de donn\xe9es",value:t,onChange:function(t){return e.setState({questions_name:t.target.value})},margin:"normal",fullWidth:!0})),i.a.createElement(He,{item:!0,xs:1},i.a.createElement(x.a,{title:"Export XLSX"},i.a.createElement(we.a,{edge:"start","aria-label":"Export XLSX",onClick:function(){return e.exportXLSX()},fontSize:"large"})),i.a.createElement("input",{type:"file",onChange:function(t){return e.importXLSX(t,e.saveOnImportXLSX)},accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",style:{display:"none"},id:"raised-button-file"}),i.a.createElement("label",{htmlFor:"raised-button-file"},i.a.createElement(x.a,{title:"Import XLSX"},i.a.createElement(ke.a,{fontSize:"large"}))))),i.a.createElement($.a,{container:!0,justify:"center"},i.a.createElement(x.a,{title:"Ajouter une question"},i.a.createElement(Fe,{"aria-label":"Ajouter une question",onClick:this.onAddNewQuestion},i.a.createElement(P.a,{fontSize:"large"}))),i.a.createElement(x.a,{title:"Sauvegarder"},i.a.createElement(Xe,{variant:"contained",color:"secondary",size:"large",onClick:this.handleSaveQuestionsSource},i.a.createElement(le.a,null)))),i.a.createElement(Qe.a,null,function(t){var n=t.height,a=t.width;return i.a.createElement(Qe.d,{rowCount:e.state.quizQuestionList.length,width:a,height:n,deferredMeasurementCache:e.cache,rowHeight:e.cache.rowHeight,rowRenderer:e.rowRenderer,overscanRowCount:3,scrollToIndex:e.state.scrollToIndex})})))}}]),t}(i.a.Component),Ve=Object(_.a)(E.a)({paddingTop:20}),Je=Object(_.a)(Q.a)({overflow:"scroll"}),Ye=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={selectedTab:0,openModalConfig:!1,actualQuiz:null,quizAll:[],questionsAll:[],quizDataSend:!1,questionsDataSend:!1,actualQuestionsSource:null,openQuestionsConfig:!1},n.handleChange=function(e,t){n.setState({selectedTab:t})},n.handleClick=function(e,t){t?n.setState({openQuestionsConfig:!0,actualQuestionsSource:e}):t||n.setState({openModalConfig:!0,actualQuiz:e})},n.handleCloseModal=function(e){switch(e){case"config":n.setState({openModalConfig:!1});break;case"questions":n.setState({openQuestionsConfig:!1});break;default:return}n.updateQuizAll(),n.updateQuestionsAll()},n.handleSnackbarClose=function(e,t){n.switchDataSend(t)},n.switchDataSend=function(e){switch(e){case"quiz":n.setState({quizDataSend:!n.state.quizDataSend});break;case"questions":n.setState({questionsDataSend:!n.state.questionsDataSend});break;default:return}},n.updateQuizAll=function(){n.setState({quizAll:[]},function(){var e=this;g.collection("quiz").orderBy("config.quiz_id","asc").get().then(function(t){t.forEach(function(t){var n=e.state.quizAll.concat(t.data());e.setState({quizAll:n})})})})},n.updateQuestionsAll=function(){n.setState({questionsAll:[]},function(){var e=this;g.collection("questions").get().then(function(t){t.forEach(function(t){var n=e.state.questionsAll.concat(t.data());e.setState({questionsAll:n})})})})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateQuizAll(),this.updateQuestionsAll()}},{key:"render",value:function(){var e=this,t=this.state.selectedTab;return i.a.createElement(i.a.Fragment,null,i.a.createElement(Ve,{maxWidth:"md"},i.a.createElement(S.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"QUIZ MAKER"),i.a.createElement(S.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Cette interface vous permet d'\xe9diter vos quiz en temps r\xe9el.",i.a.createElement("br",null))),i.a.createElement(b.a,{value:t,onChange:this.handleChange,centered:!0,textColor:"primary"},i.a.createElement(z.a,{label:"Quiz"}),i.a.createElement(z.a,{label:"Sources"})),i.a.createElement(Je,{"aria-labelledby":"Quiz Config modal","aria-describedby":"Modal pour configurer le quiz",open:this.state.openModalConfig,onClose:function(){return e.handleCloseModal("config")}},i.a.createElement(Se,{quiz:this.state.actualQuiz,questionsAll:this.state.questionsAll,handleCloseModal:this.handleCloseModal,switchDataSend:function(){return e.switchDataSend("quiz")}})),i.a.createElement(Je,{"aria-labelledby":"Questions Config modal","aria-describedby":"Modal pour configurer les sources de questions",open:this.state.openQuestionsConfig,onClose:function(){return e.handleCloseModal("questions")}},i.a.createElement(Ke,{actualQuestionsSource:this.state.actualQuestionsSource,handleCloseModal:this.handleCloseModal,switchDataSend:function(){return e.switchDataSend("questions")}})),0===t&&i.a.createElement(E.a,{maxWidth:"md"},i.a.createElement(G,{handleClick:this.handleClick,data:this.state.quizAll,isQuestionList:!1,updateQuizAll:this.updateQuizAll})),1===t&&i.a.createElement(E.a,{maxWidth:"md"},i.a.createElement(G,{handleClick:this.handleClick,data:this.state.questionsAll,isQuestionList:!0,updateQuestionsAll:this.updateQuestionsAll})),i.a.createElement(C.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.quizDataSend,autoHideDuration:4e3,onClose:function(t){return e.handleSnackbarClose(t,"quiz")},ContentProps:{"aria-describedby":"message-id"},message:i.a.createElement("span",{id:"message-id"},"Configuration sauvegard\xe9e !"),action:[i.a.createElement(w.a,{key:"close","aria-label":"Fermer",color:"inherit",onClick:function(t){return e.handleSnackbarClose(t,"quiz")}},i.a.createElement(k.a,null))]}),i.a.createElement(C.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.questionsDataSend,autoHideDuration:4e3,onClose:function(t){return e.handleSnackbarClose(t,"questions")},ContentProps:{"aria-describedby":"message-id"},message:i.a.createElement("span",{id:"message-id"},"Source de questions sauvegard\xe9e !"),action:[i.a.createElement(w.a,{key:"close","aria-label":"Fermer",color:"inherit",onClick:function(t){return e.handleSnackbarClose(t,"questions")}},i.a.createElement(k.a,null))]}))}}]),t}(i.a.Component);n(303);var Ge=function(){return i.a.createElement(Ye,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[202,1,2]]]);
//# sourceMappingURL=main.d4924c5f.chunk.js.map
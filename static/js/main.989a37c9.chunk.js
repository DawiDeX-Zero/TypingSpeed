(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports={name:"Pan Tadeusz autorstwa Adama Mickiewicza",language:"PL",text:["Litwo! Ojczyzno moja! ty jeste\u015b jak zdrowie.","Ile ci\u0119 trzeba ceni\u0107, ten tylko si\u0119 dowie,","Kto ci\u0119 straci\u0142. Dzi\u015b pi\u0119kno\u015b\u0107 tw\u0105 w ca\u0142ej ozdobie","Widz\u0119 i opisuj\u0119, bo t\u0119skni\u0119 po tobie.","Panno \u015awi\u0119ta, co jasnej bronisz Cz\u0119stochowy","I w Ostrej \u015bwiecisz Bramie! Ty, co gr\xf3d zamkowy","Nowogr\xf3dzki ochraniasz z jego wiernym ludem!","Jak mnie dziecko do zdrowia powr\xf3ci\u0142a\u015b cudem","(Gdy od p\u0142acz\u0105cej matki pod Twoj\u0105 opiek\u0119","Ofiarowany, martw\u0105 podnios\u0142em powiek\u0119","I zaraz mog\u0142em pieszo do Twych \u015bwi\u0105ty\u0144 progu","I\u015b\u0107 za wr\xf3cone \u017cycie podzi\u0119kowa\u0107 Bogu),","Tak nas powr\xf3cisz cudem na Ojczyzny \u0142ono.","Tymczasem przeno\u015b moj\u0119 dusz\u0119 ut\u0119sknion\u0105","Do tych pag\xf3rk\xf3w le\u015bnych, do tych \u0142\u0105k zielonych,","Szeroko nad b\u0142\u0119kitnym Niemnem rozci\u0105gnionych;","Do tych p\xf3l malowanych zbo\u017cem rozmaitem,","Wyz\u0142acanych pszenic\u0105, posrebrzanych \u017cytem;","Gdzie bursztynowy \u015bwierzop, gryka jak \u015bnieg bia\u0142a,","Gdzie panie\u0144skim rumie\u0144cem dzi\u0119cielina pa\u0142a,","A wszystko przepasane, jakby wst\u0119g\u0105, miedz\u0105","Zielon\u0105, na niej z rzadka ciche grusze siedz\u0105."]}},function(e){e.exports={name:"The Mysterious Island by Julius Verne",language:"EN",text:"On this barren rock they had now existed for nine days. A few provisions taken from the magazine of Granite House before the catastrophe, a little fresh water from the rain which had fallen in a hollow of the rock, was all that the unfortunate colonists possessed. Their last hope, the vessel, had been shattered to pieces. They had no means of quitting the reef; no fire, nor any means of obtaining it. It seemed that they must inevitably perish."}},function(e,t,a){e.exports=a(35)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t){Array.prototype.replaceAt=function(e,t){var a=this.slice(0);return a[e]=t,a}},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(7),r=a.n(i),c=(a(17),a(3)),o=a(2),l=a(5),u=a(4),h=a(6),p=a(1),d=(a(19),a(21),a(23),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={elements:[]},a.IndicateWord=a.IndicateWord.bind(Object(p.a)(Object(p.a)(a))),a.ActiveWord=a.ActiveWord.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"IndicateWord",value:function(e){switch(e){case 0:return"";case 1:return"word--negative";case 2:return"word--positive"}}},{key:"ActiveWord",value:function(e,t){return e===t?"word--active":""}}]),Object(o.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],t=0,a=0;a<this.props.text.length;a++)if(Array.isArray(this.props.text[a])){for(var n=this.props.text[a],i=0;i<n.length;i++)e.push(s.a.createElement("span",{key:"word"+t,className:"word"},n[i])),t++;e.push(s.a.createElement("br",{key:"newline"+t}))}else e.push(s.a.createElement("span",{key:"word"+a,className:"word"},this.props.text[a])),t++;this.setState({elements:e})}},{key:"componentDidUpdate",value:function(e){if(e.mistakes!==this.props.mistakes||e.active!==this.props.active){this.props.active<this.props.mistakes.length-1&&Array.from(this.textRef.children).filter(function(e){return"br"!==e.nodeName.toLowerCase()})[this.props.active].scrollIntoView();for(var t=[],a=0,n=0;n<this.props.text.length;n++)if(Array.isArray(this.props.text[n])){for(var i=this.props.text[n],r=0;r<i.length;r++)t.push(s.a.createElement("span",{key:"word"+a,className:"word "+this.IndicateWord(this.props.mistakes[a])+" "+this.ActiveWord(a,this.props.active)},i[r])),a++;t.push(s.a.createElement("br",{key:"newline"+n}))}else t.push(s.a.createElement("span",{key:"word"+n,className:"word "+this.IndicateWord(this.props.mistakes[n])+" "+this.ActiveWord(n,this.props.active)},this.props.text[n])),a++;this.setState({elements:t})}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{ref:function(t){return e.textRef=t},className:"typing__text"+(this.props.mistakes.length===this.props.active?" typing__text--scrollable":"")},this.state.elements)}}]),t}(n.Component)),m=(a(25),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={timer:null,startedTimer:!1,startTime:null,elapsedTime:null,wpmSpeed:0,wpmSpeedWithoutMistakes:0,cpmSpeed:0,cpmSpeedWithoutMistakes:0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"tick",value:function(){var e=this;this.setState(function(t){return{elapsedTime:(new Date-t.startTime)/6e4,wpmSpeed:Math.max(0,Math.round((e.props.charTyped/5-e.props.mistakes)/e.state.elapsedTime)),wpmSpeedWithoutMistakes:Math.max(0,Math.round(e.props.charTyped/5/e.state.elapsedTime)),cpmSpeed:Math.max(0,Math.round((e.props.charTyped-e.props.mistakes)/e.state.elapsedTime)),cpmSpeedWithoutMistakes:Math.max(0,Math.round(e.props.charTyped/e.state.elapsedTime))}})}}]),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;if(this.props.stopped&&this.props.started&&clearInterval(this.state.timer),this.props.started&&!this.state.startedTimer&&!this.props.stopped){var t=setInterval(function(){return e.tick()},1e3);this.setState({startedTimer:!0,timer:t,startTime:new Date})}}},{key:"render",value:function(){return s.a.createElement("div",{className:"typing__speed"},s.a.createElement("div",{className:"typing__speed-wpm"},s.a.createElement("div",{className:"typing__speed-single"},"WPM: ",this.state.wpmSpeed),s.a.createElement("div",{className:"typing__speed-single"},"WPM without mistakes: ",this.state.wpmSpeedWithoutMistakes)),s.a.createElement("div",{className:"typing__speed-cpm"},s.a.createElement("div",{className:"typing__speed-single"},"CPM: ",this.state.cpmSpeed),s.a.createElement("div",{className:"typing__speed-single"},"CPM without mistakes: ",this.state.cpmSpeedWithoutMistakes)))}}]),t}(n.Component)),g=(a(27),a(29),a(31),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"multipleClassName",value:function(e){var t="btn";return e.forEach(function(e){t+=" "+e}),t}},{key:"render",value:function(){var e;return e=Array.isArray(this.props.classes)?" "+this.props.classes.length>0?this.multipleClassName(this.props.classes):"":"btn",s.a.createElement("button",{className:e,onClick:this.props.onClick},this.props.name)}}]),t}(n.Component)),v=[a(9),a(10)],k=a(33),y=function(){function e(t,a,n){if(Object(c.a)(this,e),this.name=t,Array.isArray(a)){for(var s=[],i=0;i<a.length;i++)a[i].includes(" ")?s.push(a[i].split(" ")):s.push(a[i]);this.text=s}else this.text=a.split(" ");this.array=a,this.language=n}return Object(o.a)(e,null,[{key:"randomTextObject",value:function(){return new e("random",k({min:15,max:30}),"EN")}}]),e}(),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={texts:v.map(function(e){return new y(e.name,e.text,e.language)})},e.TextBtn_Clicked=e.TextBtn_Clicked.bind(Object(p.a)(Object(p.a)(e))),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"TextBtn_Clicked",value:function(e,t){null===e?r.a.render(s.a.createElement(N,null),document.getElementById("root")):r.a.render(s.a.createElement(N,{textObj:e}),document.getElementById("root"))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{activePage:"Texts"}),s.a.createElement("div",{className:"textsList"},s.a.createElement("div",{key:"fragmentrandom",className:"texts__single"},s.a.createElement("div",{className:"texts__single-name"},"Random Word"),s.a.createElement("div",{className:"texts__single-language"},"EN"),s.a.createElement("div",{className:"texts__single-button"},s.a.createElement(g,{name:"USE",classes:["texts__single-btn"],onClick:function(){return e.TextBtn_Clicked(null)}}))),this.state.texts.map(function(t,a){return s.a.createElement("div",{key:"fragment"+a,className:"texts__single"},s.a.createElement("div",{className:"texts__single-name"},t.name),s.a.createElement("div",{className:"texts__single-language"},t.language),s.a.createElement("div",{className:"texts__single-button"},s.a.createElement(g,{name:"USE",classes:["texts__single-btn"],onClick:function(){return e.TextBtn_Clicked(t)}})))})))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={activePage:a.props.activePage},a.ClassToActivePage=a.ClassToActivePage.bind(Object(p.a)(Object(p.a)(a))),a.Btn_ChangePage=a.Btn_ChangePage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"Btn_ChangePage",value:function(e){switch(e){case"Typing":r.a.render(s.a.createElement(N,null),document.getElementById("root"));break;case"Texts":r.a.render(s.a.createElement(f,null),document.getElementById("root"))}}},{key:"ClassToActivePage",value:function(e){return this.props.activePage===e?"active":""}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"nav"},s.a.createElement("h2",{className:"nav__logo"},"TypingSpeed"),s.a.createElement("div",{className:"nav__menu"},s.a.createElement("ul",null,s.a.createElement("li",{className:this.ClassToActivePage("Typing"),onClick:function(){return e.Btn_ChangePage("Typing")}},"Typing"),s.a.createElement("li",{className:this.ClassToActivePage("Texts"),onClick:function(){return e.Btn_ChangePage("Texts")}},"Texts"))))}}]),t}(n.Component),N=(a(34),function(e){function t(e){var a;Object(c.a)(this,t);var n,s=[],i=[];if((a=Object(l.a)(this,Object(u.a)(t).call(this,e))).props.textObj instanceof y){n=a.props.textObj;for(var r=0;r<n.text.length;r++)if(Array.isArray(n.text[r])){var o=n.text[r];i.push(new Array(o.length));for(var h=0;h<o.length;h++)s.push(o[h]),i[r][h]=o[h]}else s.push(n.text[r]),i.push(n.text[r])}else i=(s=(n=y.randomTextObject()).text.slice(0)).slice(0);return a.state={startSpeedCalc:!1,stopSpeedCalc:!1,words:i,wordsFiltered:s,wordsAmount:s.length,tmpWord:"",wordNode:0,charNode:0,charWordNode:0,mistakes:0,mistakesArr:new Array(s.length).fill(0),mistakeInWordFlag:!1,disableInputFlag:!1},a.TextAreaOnInput=a.TextAreaOnInput.bind(Object(p.a)(Object(p.a)(a))),a.PreventKeyPressOnInput=a.PreventKeyPressOnInput.bind(Object(p.a)(Object(p.a)(a))),a.PreventTextSelecting=a.PreventTextSelecting.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"PreventTextSelecting",value:function(e){var t=2*e.target.value.length;e.target.setSelectionRange(t,t)}},{key:"PreventKeyPressOnInput",value:function(e){var t=[37,38,39,40];8===e.keyCode?e.preventDefault():e.keyCode>=t[0]&&e.keyCode<=t[t.length-1]&&e.preventDefault()}},{key:"TextAreaOnInput",value:function(e){try{this.state.startSpeedCalc||this.setState({startSpeedCalc:!0});var t=e.target.value.length-1,a=e.target.value[t],n=this.state.wordsFiltered[this.state.wordNode][this.state.charWordNode],s="\n"===a,i=" "===a,r=i&&s?this.state.tmpWord:this.state.tmpWord+a;this.setState(function(e){return{tmpWord:r}}),i||s?(this.state.mistakeInWordFlag||this.state.wordsFiltered[this.state.wordNode]!==this.state.tmpWord?this.setState(function(e){return{mistakesArr:e.mistakesArr.replaceAt(e.wordNode,1)}}):this.setState(function(e){return{mistakesArr:e.mistakesArr.replaceAt(e.wordNode,2)}}),this.setState(function(e){return{wordNode:e.wordNode+1,charNode:e.charNode+1,charWordNode:0,tmpWord:"",mistakeInWordFlag:!1}})):(a!==n&&this.setState(function(e){return{mistakes:e.mistakes+1,mistakesArr:e.mistakesArr.replaceAt(e.wordNode,1),mistakeInWordFlag:!0}}),this.setState(function(e){return{charNode:e.charNode+1,charWordNode:e.charWordNode+1}})),this.state.wordsAmount-1===this.state.wordNode&&r.length===this.state.wordsFiltered[this.state.wordNode].length&&(r===this.state.wordsFiltered[this.state.wordNode]?this.setState(function(e){return{mistakesArr:e.mistakesArr.replaceAt(e.wordNode,2),stopSpeedCalc:!0,disableInputFlag:!0,wordNode:e.wordNode+1}}):this.setState(function(e){return{mistakes:e.mistakes+1,mistakesArr:e.mistakesArr.replaceAt(e.wordNode,1),stopSpeedCalc:!0,disableInputFlag:!0,wordNode:e.wordNode+1}}))}catch(c){console.log(c)}}}]),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{activePage:"Typing"}),s.a.createElement("div",{className:"typing"},s.a.createElement(d,{active:this.state.wordNode,text:this.state.words,mistakes:this.state.mistakesArr}),s.a.createElement("div",{className:"typing__textarea"},s.a.createElement("textarea",{autoComplete:"off",autoCapitalize:"off",spellCheck:"false",disabled:this.state.disableInputFlag,onInput:this.TextAreaOnInput,onKeyDown:this.PreventKeyPressOnInput,onSelect:this.PreventTextSelecting})),s.a.createElement(m,{started:this.state.startSpeedCalc,stopped:this.state.stopSpeedCalc,charTyped:this.state.charNode,mistakes:this.state.mistakes})))}}]),t}(n.Component)),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).Btn_StartClicked=e.Btn_StartClicked.bind(Object(p.a)(Object(p.a)(e))),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"Btn_StartClicked",value:function(){r.a.render(s.a.createElement(N,null),document.getElementById("root"))}},{key:"render",value:function(){return s.a.createElement("div",{className:"startScreen"},s.a.createElement("h1",{className:"startScreen__header"},"TypingSpeed"),s.a.createElement("small",{className:"startScreen__header-author"},"by DawiDeX-Zero"),s.a.createElement(g,{name:"Start",classes:["btn--start"],onClick:this.Btn_StartClicked}))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={activePage:a.props.page},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return"StartScreen"===this.state.activePage?s.a.createElement(E,null):s.a.createElement(N,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.title="TypingSpeed",r.a.render(s.a.createElement(x,{page:"StartScreen"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.989a37c9.chunk.js.map
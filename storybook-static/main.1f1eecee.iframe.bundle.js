(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{460:function(module,exports,__webpack_require__){__webpack_require__(461),__webpack_require__(617),__webpack_require__(618),__webpack_require__(822),__webpack_require__(823),__webpack_require__(828),__webpack_require__(825),__webpack_require__(824),__webpack_require__(829),__webpack_require__(826),module.exports=__webpack_require__(820)},528:function(module,exports){},618:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(328)},820:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(328).configure)([__webpack_require__(821)],module,!1)}).call(this,__webpack_require__(185)(module))},821:function(module,exports,__webpack_require__){var map={"./Main/stories.tsx":827};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=821},826:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__(15),__webpack_require__(34),__webpack_require__(44),__webpack_require__(815),__webpack_require__(35),__webpack_require__(36),__webpack_require__(816),__webpack_require__(817),__webpack_require__(818);var _templateObject,client_api=__webpack_require__(834),esm=__webpack_require__(5),react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(438),styled_components_browser_esm=__webpack_require__(101),global=Object(styled_components_browser_esm.a)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  html, body, #__next {\n    height: 100%;\n  }\n\n  body {\n    font-family: -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, \n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n  }\n\n"]))),jsx_runtime=__webpack_require__(42),parameters=(react_default.a.createElement,{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}),decorators=[function(Story){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(global,{}),",",Object(jsx_runtime.jsx)(Story,{})]})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},827:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return stories_Basic})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return stories_Default}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__(9),__webpack_require__(34),__webpack_require__(38),__webpack_require__(101)),Wrapper=styled_components_browser_esm.b.main.withConfig({displayName:"styles__Wrapper",componentId:"dzx1ao-0"})(["background-color:#000;color:#ffffff;width:100%;height:100%;padding:3rem;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;"]),Logo=styled_components_browser_esm.b.img.withConfig({displayName:"styles__Logo",componentId:"dzx1ao-1"})(["width:25rem;margin-bottom:2rem;"]),Title=styled_components_browser_esm.b.h1.withConfig({displayName:"styles__Title",componentId:"dzx1ao-2"})(["font-size:2.5rem;"]),Description=styled_components_browser_esm.b.h2.withConfig({displayName:"styles__Description",componentId:"dzx1ao-3"})(["font-size:2rem;font-weight:400;"]),Illustration=styled_components_browser_esm.b.img.withConfig({displayName:"styles__Illustration",componentId:"dzx1ao-4"})(["margin-top:3rem;width:min(30rem,100%);"]),jsx_runtime=__webpack_require__(42);react_default.a.createElement;function Main(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"BOILERPLATE":_ref$title,_ref$description=_ref.description,description=void 0===_ref$description?"TypeScript, ReactJS, NextJS e Styled Components":_ref$description;return Object(jsx_runtime.jsxs)(Wrapper,{children:[Object(jsx_runtime.jsx)(Logo,{src:"img/logo.png",alt:"logo"}),Object(jsx_runtime.jsx)(Title,{children:title}),Object(jsx_runtime.jsx)(Description,{children:description}),Object(jsx_runtime.jsx)(Illustration,{src:"img/hero-illustration.svg",alt:"Desenvolvedor codando"})]})}Main.displayName="Main";try{Main.displayName="Main",Main.__docgenInfo={description:"",displayName:"Main",props:{title:{defaultValue:{value:"BOILERPLATE"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:"TypeScript, ReactJS, NextJS e Styled Components"},description:"",name:"description",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Main/index.tsx#Main"]={docgenInfo:Main.__docgenInfo,name:"Main",path:"src/components/Main/index.tsx#Main"})}catch(__react_docgen_typescript_loader_error){}react_default.a.createElement,__webpack_exports__.default={title:"Main",component:Main,args:{title:"Title Default",description:"Description Default"}};var stories_Basic=function Basic(args){return Object(jsx_runtime.jsx)(Main,Object.assign({},args))};stories_Basic.displayName="Basic",stories_Basic.args={title:"BOILERPLATE",description:"TypeScript, ReactJS, NextJS e Styled Components"};var stories_Default=function Default(args){return Object(jsx_runtime.jsx)(Main,Object.assign({},args))};stories_Default.displayName="Default"}},[[460,2,3]]]);
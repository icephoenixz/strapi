"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5783],{5966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(3117),s=(n(7294),n(3905));const i={title:"Event Hub",description:"The event hub is a central system that processes a variety of events in a Strapi application",tags:["core","plugins"]},a="Event Hub",o={unversionedId:"core/utils/event-hub",id:"core/utils/event-hub",title:"Event Hub",description:"The event hub is a central system that processes a variety of events in a Strapi application",source:"@site/docs/core/utils/event-hub.md",sourceDirName:"core/utils",slug:"/core/utils/event-hub",permalink:"/core/utils/event-hub",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/core/utils/event-hub.md",tags:[{label:"core",permalink:"/tags/core"},{label:"plugins",permalink:"/tags/plugins"}],version:"current",frontMatter:{title:"Event Hub",description:"The event hub is a central system that processes a variety of events in a Strapi application",tags:["core","plugins"]},sidebar:"docs",previous:{title:"Async utils functions",permalink:"/core/utils/async"},next:{title:"Custom fields",permalink:"/custom-fields"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Detailed design",id:"detailed-design",level:2},{value:"Emitting events",id:"emitting-events",level:3},{value:"<code>emit</code>",id:"emit",level:4},{value:"Managing subscribers",id:"managing-subscribers",level:3},{value:"<code>subscribe</code>",id:"subscribe",level:4},{value:"<code>unsubscribe</code>",id:"unsubscribe",level:4},{value:"Listening to a single event",id:"listening-to-a-single-event",level:3},{value:"<code>on</code>",id:"on",level:4},{value:"<code>off</code>",id:"off",level:4},{value:"<code>once</code>",id:"once",level:4},{value:"Tradeoffs",id:"tradeoffs",level:2},{value:"Alternatives",id:"alternatives",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"event-hub"},"Event Hub"),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"The event hub is a central system that processes a variety of events in a Strapi application. These events can be emitted from a variety of sources to trigger associated subscriber functions."),(0,s.kt)("img",{src:"/img/utils/event-hub-diagram.png",alt:"A diagram showing how the event hub processes events with multiple sources with multiple subscribers"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"above: A diagram showing how the event hub processes events from different sources with multiple subscribers")),(0,s.kt)("p",null,"Events are mainly used in Strapi to power the webhooks and audit logs features. However, plugin developers can also access the event-hub using the plugin API. This means plugins can listen to events emitted by Strapi and emit new events to the event hub."),(0,s.kt)("h2",{id:"detailed-design"},"Detailed design"),(0,s.kt)("p",null,"The event hub is a store of subscriber functions. When an event is emitted to the hub, each subscriber function in the store will be called with the event's name and a variable number of arguments."),(0,s.kt)("p",null,"This design was inspired by the way Strapi handles ",(0,s.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/development/backend-customization/models.html#lifecycle-hooks"},"lifecycle hooks"),". It was chosen over the ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/events.html#class-eventemitter"},"Node.js event emitter")," because it provides the ability to have a single subscriber function per feature, and does not cause ",(0,s.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/9768444/possible-eventemitter-memory-leak-detected"},"memory leak concerns"),"."),(0,s.kt)("h3",{id:"emitting-events"},"Emitting events"),(0,s.kt)("h4",{id:"emit"},(0,s.kt)("inlineCode",{parentName:"h4"},"emit")),(0,s.kt)("p",null,"Dispatches a new event into the hub. It returns a promise that resolves when all the subscribers have run."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Types\ntype Emit = (name: string, ...args: any[]) => Promise<void>;\n\n// Usage\nstrapi.eventHub.emit('some.event', { meta: 'data' });\n")),(0,s.kt)("h3",{id:"managing-subscribers"},"Managing subscribers"),(0,s.kt)("h4",{id:"subscribe"},(0,s.kt)("inlineCode",{parentName:"h4"},"subscribe")),(0,s.kt)("p",null,"Adds a subscriber function that will be called for each event emitted to the hub. It returns a function that can be called to remove the subscriber."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Types\ntype Subscriber = (name: string, ...args: Object) => void | Promise<void>;\ntype UnsubscribeCallback = () => void;\ntype Subscribe = (subscriber: Subscriber) => UnsubscribeCallback;\n\n// Add a subscriber\nconst unsubcribe = strapi.eventHub.subscribe((name: string, ...args: any[]) => {\n  // Write your subscriber logic here\n});\n\n// Remove the subscriber using the returned function\nunsubscribe();\n")),(0,s.kt)("h4",{id:"unsubscribe"},(0,s.kt)("inlineCode",{parentName:"h4"},"unsubscribe")),(0,s.kt)("p",null,"Removes a subscriber function. You need to give it the reference of the subscriber as an argument."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Types\ntype Subscriber = (name: string, ...args: any[]) => void | Promise<void>;\ntype Unsubscribe = (subscriber: Subscriber) => void;\n\n// After a subscriber has been added\nconst subscriber: Subscriber = (name, ...args) => {};\nstrapi.eventHub.subscribe(subscriber);\n\n// Use its reference to remove it\nstrapi.eventHub.unsubcribe(subscriber);\n")),(0,s.kt)("h3",{id:"listening-to-a-single-event"},"Listening to a single event"),(0,s.kt)("p",null,"If you only need to run a function for one specific event, then creating a subscriber function may be overkill. For this reason, the event hub provides the ",(0,s.kt)("inlineCode",{parentName:"p"},"on"),",",(0,s.kt)("inlineCode",{parentName:"p"},"off")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"once")," methods, inspired by the ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/events.html#class-eventemitter"},"Node.js event emitter"),"."),(0,s.kt)("h4",{id:"on"},(0,s.kt)("inlineCode",{parentName:"h4"},"on")),(0,s.kt)("p",null,"Registers a listener function that is called every time a ",(0,s.kt)("em",{parentName:"p"},"specific")," event is emitted. It returns a function that can be called to remove the listener."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Types\ntype Listener = (args: any[]) => void | Promise<void>;\ntype RemoveListenerCallback = () => void;\ntype On = (eventName: string, listener: Listener) => RemoveListenerCallback;\n\n// Add a listener\nconst removeListener = strapi.eventHub.on('some.event', () => {\n  // Write your listener logic here\n});\n\n// Remove the listener using the returned function\nremoveListener();\n")),(0,s.kt)("h4",{id:"off"},(0,s.kt)("inlineCode",{parentName:"h4"},"off")),(0,s.kt)("p",null,"Removes a listener function. You need to give it the name of the event it's listening to, as well as the reference of the listener as an argument."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Types\ntype Listener = (args: any[]) => void | Promise<void>;\ntype Off = (listener: Listener) => void;\n\n// After a listener has been added\nconst listener: Listener = (...args) => {};\nstrapi.eventHub.on('some.event', listener);\n\n// Use its reference to remove it\nstrapi.eventHub.off('some.event', listener);\n")),(0,s.kt)("h4",{id:"once"},(0,s.kt)("inlineCode",{parentName:"h4"},"once")),(0,s.kt)("p",null,"Registers a listener function that will only be called the first time an event is emitted. Once the event has been emitted, the listener will be removed automatically. It also returns a function that can be used to remove the listener before it was called."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Types\ntype Listener = (args: any[]) => void | Promise<void>;\ntype RemoveListenerCallback = () => void;\ntype Once = (eventName: string, listener: Listener) => RemoveListenerCallback;\n\n// Add a single-use listener\nconst removeListener = strapi.eventHub.once('some.event', () => {\n  // Write your listener logic here\n});\n\n// Remove the single-use listener using the returned function\nremoveListener();\n")),(0,s.kt)("h2",{id:"tradeoffs"},"Tradeoffs"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Potential breaking changes: a change to an event's name or payload may affect other features or plugins listening to the same event. Backwards compatibility is a concern when managing these events."),(0,s.kt)("li",{parentName:"ul"},"Performance: Strapi emits a lot of events, so you need to make sure your subscriber functions aren't too expensive to run.")),(0,s.kt)("h2",{id:"alternatives"},"Alternatives"),(0,s.kt)("p",null,"You may not need the event hub:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you want to listen to database events on a specific content type, use ",(0,s.kt)("a",{parentName:"li",href:"https://docs.strapi.io/developer-docs/latest/development/backend-customization/models.html#lifecycle-hooks"},"lifecycle hooks")),(0,s.kt)("li",{parentName:"ul"},"If you want to listen to database events on all content types, use a ",(0,s.kt)("a",{parentName:"li",href:"https://docs.strapi.io/developer-docs/latest/development/backend-customization/models.html#declarative-and-programmatic-usage"},"generic database lifecycle hook")),(0,s.kt)("li",{parentName:"ul"},"If you want to emit an event, but don't want it to be exposed to other features or plugins, create a ",(0,s.kt)("a",{parentName:"li",href:"https://docs.strapi.io/developer-docs/latest/development/backend-customization/services.html#services"},"service")," and call it directly instead")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(()=>{"use strict";class e{constructor(e,t){this.title=e,this.due=t}}function t(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(e,t){n(2,arguments);var o=a(e),r=a(t),i=o.getTime()-r.getTime();return i<0?-1:i>0?1:i}function r(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}}var d,l={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(e){return function(t,n){var a,o=n||{};if("formatting"===(o.context?String(o.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=o.width?String(o.width):r;a=e.formattingValues[i]||e.formattingValues[r]}else{var s=e.defaultWidth,d=o.width?String(o.width):e.defaultWidth;a=e.values[d]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,o=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],r=t.match(o);if(!r)return null;var i,s=r[0],d=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?f(d,(function(e){return e.test(s)})):m(d,(function(e){return e.test(s)}));i=e.valueCallback?e.valueCallback(l):l,i=n.valueCallback?n.valueCallback(i):i;var u=t.slice(s.length);return{value:i,rest:u}}}function m(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function f(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const v={code:"en-US",formatDistance:function(e,t,n){var a,o=i[e];return a="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:l,formatRelative:function(e,t,n,a){return u[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(d.matchPattern);if(!n)return null;var a=n[0],o=e.match(d.parsePattern);if(!o)return null;var r=d.valueCallback?d.valueCallback(o[0]):o[0];r=t.valueCallback?t.valueCallback(r):r;var i=e.slice(a.length);return{value:r,rest:i}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var g=6e4,y=1440,p=43200,b=525600;function w(e,i){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n(2,arguments);var d=s.locale||v;if(!d.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var l=o(e,i);if(isNaN(l))throw new RangeError("Invalid time value");var u,c,h=r(s);h.addSuffix=Boolean(s.addSuffix),h.comparison=l,l>0?(u=a(i),c=a(e)):(u=a(e),c=a(i));var m,f=null==s.roundingMethod?"round":String(s.roundingMethod);if("floor"===f)m=Math.floor;else if("ceil"===f)m=Math.ceil;else{if("round"!==f)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");m=Math.round}var w,S=c.getTime()-u.getTime(),L=S/g,T=t(c)-t(u),M=(S-T)/g;if("second"===(w=null==s.unit?L<1?"second":L<60?"minute":L<y?"hour":M<p?"day":M<b?"month":"year":String(s.unit))){var x=m(S/1e3);return d.formatDistance("xSeconds",x,h)}if("minute"===w){var C=m(L);return d.formatDistance("xMinutes",C,h)}if("hour"===w){var k=m(L/60);return d.formatDistance("xHours",k,h)}if("day"===w){var D=m(M/y);return d.formatDistance("xDays",D,h)}if("month"===w){var W=m(M/p);return 12===W&&"month"!==s.unit?d.formatDistance("xYears",1,h):d.formatDistance("xMonths",W,h)}if("year"===w){var E=m(M/b);return d.formatDistance("xYears",E,h)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function S(e,t){return n(1,arguments),w(e,Date.now(),t)}class L{constructor(e){this.activeList=""}static resetTodoInput(){document.querySelector('input[name="todo-input"]').value=""}static renderTodo(e,t){const n=document.querySelector(".todo-container"),a=document.createElement("div");a.classList.add("todo-element");const o=document.createElement("p");o.textContent=e.title,a.appendChild(o);const r=document.createElement("div");r.classList.add("todo-right-side");const i=document.createElement("p");i.textContent=this.dateStringMaker(e.due),r.appendChild(i);const s=document.createElement("ion-icon");s.name="close-outline",s.addEventListener("click",(()=>{console.log(t);let e=t.findIndex((e=>{if(e.title===o.textContent)return!0}));n.removeChild(a),t.splice(e,1)})),r.appendChild(s),a.appendChild(r),n.appendChild(a)}static todoInputValue(){return document.querySelector('input[name="todo-input"]').value}static renderClearTodos(){const e=document.querySelector(".todo-container").childNodes;for(let t=e.length-1;t>=0;t--)e[t].remove()}static async renderList(e){this.displayRemoveListButton("show"),this.displayAddNewTodo("show");for(let t=0;t<e.length;t++){const n=e[t];this.renderTodo(n,e),await this.waitforme(50)}}static renderSidebarLists(e){const t=document.querySelector("#lists");document.querySelector("#inbox");for(const n in e){const e=document.createElement("button");e.textContent=n,t.appendChild(e)}}static renderClearSidebarLists(){const e=document.querySelector("#lists").childNodes;for(let t=e.length-1;t>=0;t--)e[t].remove()}static activeSidebarButton(){const e=document.querySelector("#lists").childNodes,t=document.querySelector("#inbox").querySelectorAll("button");for(let t=0;t<e.length;t++){const n=e[t];n.classList.remove("active"),this.activeList===n.textContent&&n.classList.add("active")}for(let e=0;e<t.length;e++){const n=t[e];n.classList.remove("active"),this.activeList===n.textContent&&n.classList.add("active")}}static addSidebarListeners(e){const t=document.querySelector("#lists").childNodes;for(let n=0;n<t.length;n++){const a=t[n];a.addEventListener("click",(()=>{this.renderClearTodos(),this.renderList(e[a.textContent]),this.activeList=a.textContent,this.activeSidebarButton(),this.renderTodoTitle()}))}}static waitforme(e){return new Promise((t=>{setTimeout((()=>{t()}),e)}))}static newListEventListener(){const e=document.querySelector("#new-list"),t=document.querySelector("#modal");e.addEventListener("click",(()=>{t.style.display="flex"}))}static modalEventListener(){const e=document.querySelector("#modal");e.addEventListener("click",(t=>{t.preventDefault(),"modal"===t.target.id&&(e.style.display="none")}))}static addNewListEventListener(e){const t=document.querySelector("#add-list-button"),n=document.querySelector("#add-list-input"),a=document.querySelector("#lists").childNodes;t.addEventListener("click",(t=>{t.preventDefault(),e[n.value]=[],this.activeList=n.value,this.renderClearSidebarLists(),this.renderSidebarLists(e),this.addSidebarListeners(e);for(let e=0;e<a.length;e++){const t=a[e];t.textContent===n.value&&t.click()}modal.style.display="none",this.localStorageSave(e)}))}static renderTodoTitle(){document.querySelector(".todo-title").textContent=this.activeList}static removeListEventListener(e){const t=document.querySelector("#remove-list"),n=document.querySelector("#new-list");t.addEventListener("click",(()=>{delete e[this.activeList],this.renderClearSidebarLists(),this.renderSidebarLists(e),this.addSidebarListeners(e),this.renderClearTodos(),void 0===Object.keys(e)[0]?n.click():(this.activeList=Object.keys(e)[0],this.renderList(e[this.activeList]),this.activeSidebarButton(),this.renderTodoTitle()),this.localStorageSave(e)}))}static todoInputDate(){const e=document.querySelector("#date");return""===e.value?new Date:new Date(e.value+"T12:00:00")}static dateStringMaker(e){let t=S(e,{unit:"day",addSuffix:!0});return"0 days ago"===t?"Today":"in 1 day"===t?"Tomorrow":t}static isInbox(e){return"🕡️ Today"===e||"📅 This Week"===e||"🗓️ This Month"===e}static addInboxEventListeners(e,t){const n=document.querySelector("#inbox").childNodes;for(let a=0;a<n.length;a++){const o=n[a];o.addEventListener("click",(()=>{this.renderClearTodos(),this.updateInboxLists(e,t),this.renderInboxList(t[o.textContent]),this.activeList=o.textContent,this.activeSidebarButton(),this.displayRemoveListButton("hide"),this.renderTodoTitle()}))}}static displayRemoveListButton(e){const t=document.querySelector("#remove-list");"show"===e?t.style.display="flex":"hide"===e&&(t.style.display="none")}static displayAddNewTodo(e){const t=document.querySelector("#add-todo-form");"show"===e?t.style.display="flex":"hide"===e&&(t.style.display="none")}static updateInboxLists(e,t){for(const e in t)t[e].length=0;const n=Object.keys(e);let a=[];for(let t=0;t<n.length;t++){const o=n[t];a=a.concat(e[o])}for(let e=0;e<a.length;e++){let n=a[e],o=parseInt(S(n.due,{unit:"day"}).slice(0,2));0===o?(t["🕡️ Today"].push(n),t["📅 This Week"].push(n),t["🗓️ This Month"].push(n)):o>=1&&o<=7?(t["📅 This Week"].push(n),t["🗓️ This Month"].push(n)):o>=8&&o<=30&&t["🗓️ This Month"].push(n)}}static async renderInboxList(e){this.displayRemoveListButton("hide"),this.displayAddNewTodo("hide");for(let t=0;t<e.length;t++){const n=e[t];this.renderInboxTodo(n,e),await this.waitforme(50)}}static renderInboxTodo(e){const t=document.querySelector(".todo-container"),n=document.createElement("div");n.classList.add("todo-element");const a=document.createElement("p");a.textContent=e.title,n.appendChild(a);const o=document.createElement("p");o.textContent=this.dateStringMaker(e.due),o.classList.add("dateText"),n.appendChild(o),t.appendChild(n)}static localStorageSave(e){localStorage.setItem("todoLists",JSON.stringify(e)),console.log("saved")}}let T={};!function(){for(let t=0;t<localStorage.length;t++){const n=JSON.parse(localStorage.getItem(localStorage.key(t)));for(let t in n)for(let a=0;a<n[t].length;a++){let o=n[t][a],r=new e(o.title,new Date(o.due));void 0===T[t]&&(T[t]=[]),T[t].push(r)}}}(),0===Object.keys(T).length&&(T["🍏 Groceries"]=[],T["🥱 Chores"]=[],T["🍏 Groceries"].push(new e("Broccoli",new Date,!0)),T["🍏 Groceries"].push(new e("Beans",new Date,!0)),T["🍏 Groceries"].push(new e("Tortilla Wraps",new Date,!0)),T["🥱 Chores"].push(new e("Take Bins Out",new Date,!0)),T["🥱 Chores"].push(new e("Do Laundry",new Date,!0))),L.activeList=Object.keys(T)[0],L.renderList(T[L.activeList]),L.renderSidebarLists(T),L.addSidebarListeners(T),L.activeSidebarButton(),L.newListEventListener(),L.modalEventListener(),L.addNewListEventListener(T),L.renderTodoTitle(),L.removeListEventListener(T),L.addInboxEventListeners(T,{"🕡️ Today":[],"📅 This Week":[],"🗓️ This Month":[]}),document.querySelector(".add-todo").addEventListener("click",(t=>{t.preventDefault();let n=new e(L.todoInputValue(),L.todoInputDate());T[L.activeList].push(n),L.renderTodo(n,T[L.activeList],T),L.resetTodoInput(),L.localStorageSave(T)}));const M=document.querySelector("#theme-switch");M.addEventListener("click",(function(){const e=document.documentElement;console.log("hi"),console.log(e.className);const t="light"===e.className?"dark":"light";e.className=t;const n="☀️"===M.textContent?"🌙":"☀️";M.textContent=n}))})();
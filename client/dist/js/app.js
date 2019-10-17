!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=s(r(1)),i=s(r(7)),c=s(r(8));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"add",value:function(e,t,r){var n={};if(void 0===r||t.name&&"string"==typeof t.name||(t=(0,c.default)(this.get(e,r),t)),(!t.name||"string"!=typeof t.name)&&void 0===r)return"";var a=this.__normalize(t.name);for(var i in n[a]={},t)t.hasOwnProperty(i)&&(n[a][i]=t[i]);return o.default.setData(e,n),a}},{key:"delete",value:function(e,t){o.default.deleteData(e,t)}},{key:"get",value:function(e,t){return void 0===t?o.default.getData(e):o.default.getData(e,t)}},{key:"__normalize",value:function(e){if("string"===!(void 0===e||n(e)))return!1;var t=e.toLowerCase().trim();return i.default.remove(t.split(" ").join("-").split("'").join("-"))}}]),e}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var a=r(5),o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"setData",value:function(e,t){var r=this.getData(e);for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);localStorage.setItem(e,this.__serialize(r));var o=new a("storageChange",{detail:{groupType:e}});window.dispatchEvent(o)}},{key:"deleteData",value:function(e,t){if(localStorage.getItem(e)&&void 0===t)localStorage.removeItem(e);else{var r=this.getData(e);delete r[t],this.setData(e,r)}}},{key:"getData",value:function(e,t){if(null===localStorage.getItem(e))return{};var r=this.__deserialize(localStorage.getItem(e));return void 0!==t?r[t]:r}},{key:"getAllData",value:function(){var e={};for(var t in localStorage)if(localStorage.hasOwnProperty(t)){var r=this.__deserialize(localStorage[t]);e[t]=r}return e}},{key:"__serialize",value:function(e){return JSON.stringify(e)}},{key:"__deserialize",value:function(e){return JSON.parse(e)}}]),e}();t.default=o},function(e,t,r){const n=r(3);window.app=(()=>{for(const e in n){new(0,n[e].default.prototype.constructor)}})()},function(e,t,r){"use strict";e.exports={renderList:r(4),citiesForm:r(9),divisionsForm:r(10),storageObserver:r(11),editJson:r(12)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),i=(n=o)&&n.__esModule?n:{default:n};var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.lists=document.querySelectorAll("[data-list]"),e.objectManager=new i.default,e.exec(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"exec",value:function(){var e=this;[].forEach.call(this.lists,(function(t){var r=t.getAttribute("data-list"),n=e.objectManager.get(r);e.fillListArea(t,n)})),this.buildDistrictSelectors(),this.buildRegionSelectors()}},{key:"fillListArea",value:function(e,t){if(0===Object.keys(t).length)return!1;var r=e.firstElementChild;null!==r&&e.removeChild(r);var n=document.createElement("ul");for(var a in t){var o=document.createElement("li"),i=document.createElement("a");i.href=t[a].link,i.target="_blank",i.innerHTML=t[a].name,o.appendChild(i),n.appendChild(o)}e.appendChild(n)}},{key:"buildRegionSelectors",value:function(){var e=document.getElementById("cities-region-selector");null!==e&&e.parentElement.removeChild(e);var t=document.createElement("select");t.id="cities-region-selector",t.name="region-selector";var r=document.querySelector("#cities-form"),n=document.querySelector("#divisions-form"),a=r.querySelector('input[type="submit"]'),o=n.querySelector('input[type="submit"]'),i=this.objectManager.get("regions");for(var c in i)if(i.hasOwnProperty(c)){var s=document.createElement("option");s.value=c,s.innerHTML=i[c].name,t.appendChild(s)}var l=t.cloneNode(!0);l.id="division-region-selector",r.insertBefore(t,a),n.insertBefore(l,o)}},{key:"buildDistrictSelectors",value:function(){var e=document.getElementById("cities-district-selector");null!==e&&e.parentElement.removeChild(e);var t=document.createElement("select");t.id="cities-district-selector",t.name="district-selector";var r=document.querySelector("#cities-form"),n=r.querySelector('input[type="submit"]'),a=this.objectManager.get("districts");for(var o in a)if(a.hasOwnProperty(o)){var i=document.createElement("option");i.value=o,i.innerHTML=a[o].name,t.appendChild(i)}r.insertBefore(t,n)}}]),t}(i.default);t.default=c},function(e,t,r){(function(t){var r=t.CustomEvent;e.exports=function(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?r:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var r=document.createEvent("CustomEvent");return t?r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):r.initCustomEvent(e,!1,!1,void 0),r}:function(e,t){var r=document.createEventObject();return r.type=e,t?(r.bubbles=Boolean(t.bubbles),r.cancelable=Boolean(t.cancelable),r.detail=t.detail):(r.bubbles=!1,r.cancelable=!1,r.detail=void 0),r}}).call(this,r(6))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){t.remove=function(e){return e.replace(/[^\u0000-\u007e]/g,(function(e){return n[e]||e}))};for(var r=[{base:" ",chars:" "},{base:"0",chars:"߀"},{base:"A",chars:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",chars:"Ꜳ"},{base:"AE",chars:"ÆǼǢ"},{base:"AO",chars:"Ꜵ"},{base:"AU",chars:"Ꜷ"},{base:"AV",chars:"ꜸꜺ"},{base:"AY",chars:"Ꜽ"},{base:"B",chars:"ⒷＢḂḄḆɃƁ"},{base:"C",chars:"ⒸＣꜾḈĆCĈĊČÇƇȻ"},{base:"D",chars:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"},{base:"Dh",chars:"Ð"},{base:"DZ",chars:"ǱǄ"},{base:"Dz",chars:"ǲǅ"},{base:"E",chars:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"},{base:"F",chars:"ꝼⒻＦḞƑꝻ"},{base:"G",chars:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"},{base:"H",chars:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",chars:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",chars:"ⒿＪĴɈȷ"},{base:"K",chars:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",chars:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",chars:"Ǉ"},{base:"Lj",chars:"ǈ"},{base:"M",chars:"ⓂＭḾṀṂⱮƜϻ"},{base:"N",chars:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"},{base:"NJ",chars:"Ǌ"},{base:"Nj",chars:"ǋ"},{base:"O",chars:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OE",chars:"Œ"},{base:"OI",chars:"Ƣ"},{base:"OO",chars:"Ꝏ"},{base:"OU",chars:"Ȣ"},{base:"P",chars:"ⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",chars:"ⓆＱꝖꝘɊ"},{base:"R",chars:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",chars:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",chars:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",chars:"Þ"},{base:"TZ",chars:"Ꜩ"},{base:"U",chars:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",chars:"ⓋＶṼṾƲꝞɅ"},{base:"VY",chars:"Ꝡ"},{base:"W",chars:"ⓌＷẀẂŴẆẄẈⱲ"},{base:"X",chars:"ⓍＸẊẌ"},{base:"Y",chars:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",chars:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",chars:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",chars:"ꜳ"},{base:"ae",chars:"æǽǣ"},{base:"ao",chars:"ꜵ"},{base:"au",chars:"ꜷ"},{base:"av",chars:"ꜹꜻ"},{base:"ay",chars:"ꜽ"},{base:"b",chars:"ⓑｂḃḅḇƀƃɓƂ"},{base:"c",chars:"ｃⓒćĉċčçḉƈȼꜿↄ"},{base:"d",chars:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"},{base:"dh",chars:"ð"},{base:"dz",chars:"ǳǆ"},{base:"e",chars:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"},{base:"f",chars:"ⓕｆḟƒ"},{base:"ff",chars:"ﬀ"},{base:"fi",chars:"ﬁ"},{base:"fl",chars:"ﬂ"},{base:"ffi",chars:"ﬃ"},{base:"ffl",chars:"ﬄ"},{base:"g",chars:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"},{base:"h",chars:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",chars:"ƕ"},{base:"i",chars:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",chars:"ⓙｊĵǰɉ"},{base:"k",chars:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",chars:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"},{base:"lj",chars:"ǉ"},{base:"m",chars:"ⓜｍḿṁṃɱɯ"},{base:"n",chars:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",chars:"ǌ"},{base:"o",chars:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"},{base:"oe",chars:"œ"},{base:"oi",chars:"ƣ"},{base:"oo",chars:"ꝏ"},{base:"ou",chars:"ȣ"},{base:"p",chars:"ⓟｐṕṗƥᵽꝑꝓꝕρ"},{base:"q",chars:"ⓠｑɋꝗꝙ"},{base:"r",chars:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",chars:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"},{base:"ss",chars:"ß"},{base:"t",chars:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",chars:"þ"},{base:"tz",chars:"ꜩ"},{base:"u",chars:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",chars:"ⓥｖṽṿʋꝟʌ"},{base:"vy",chars:"ꝡ"},{base:"w",chars:"ⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",chars:"ⓧｘẋẍ"},{base:"y",chars:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",chars:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],n={},a=0;a<r.length;a+=1)for(var o=r[a].chars,i=0;i<o.length;i+=1)n[o[i]]=r[a].base;t.replacementList=r,t.diacriticsMap=n},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,s=i(e),l=1;l<arguments.length;l++){for(var u in r=Object(arguments[l]))a.call(r,u)&&(s[u]=r[u]);if(n){c=n(r);for(var f=0;f<c.length;f++)o.call(r,c[f])&&(s[c[f]]=r[c[f]])}}return s}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),i=(n=o)&&n.__esModule?n:{default:n};var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.form=document.getElementById("cities-form"),e.objectManager=new i.default,e.exec(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"exec",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){var e=this,t=this.form.querySelector('input[name="displayDistrictsSelector"]'),r=this.form.querySelector('input[name="displayRegionsSelector"]');t.addEventListener("change",(function(){if(t.checked)return e.displayDistrictSelector(!0),!0;e.displayDistrictSelector(!1)})),r.addEventListener("change",(function(){if(r.checked)return e.displayRegionSelector(!0),!0;e.displayRegionSelector(!1)})),this.form.addEventListener("submit",(function(t){t.preventDefault();var r=e.form.querySelector('input[name="displayRegionsSelector"]'),n=e.form.querySelector('input[name="displayDistrictsSelector"]'),a=e.form.querySelector('input[name="cityName"]').value,o=e.form.querySelector('input[name="cityLink"]').value,i=e.form.querySelector('select[name="region-selector"]').value,c=e.form.querySelector('select[name="district-selector"]').value,s=e.objectManager.get("regions",i),l=e.objectManager.get("districts",c),u=e.objectManager.add("cities",{name:a,link:o});if(r.checked||n.checked){if(r.checked&&Object.keys(s).length>0){var f=s.attachment.cities;f.indexOf(u)<0&&f.push(u),e.objectManager.add("regions",{attachment:{cities:f,districts:s.attachment.districts}},i)}if(n.checked&&Object.keys(l).length>0){var d=l.attachment.cities;d.indexOf(u)<0&&d.push(u),e.objectManager.add("districts",{attachment:{cities:d}},c)}}}))}},{key:"displayDistrictSelector",value:function(e){var t=this.form.querySelector('select[name="district-selector"]');return null!==t&&(e?(t.style.display="inline",!0):void(t.style.display="none"))}},{key:"displayRegionSelector",value:function(e){var t=this.form.querySelector('select[name="region-selector"]');return null!==t&&(e?(t.style.display="inline",!0):void(t.style.display="none"))}}]),t}(i.default);t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),i=(n=o)&&n.__esModule?n:{default:n};var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.form=document.getElementById("divisions-form"),e.objectManager=new i.default,e.exec(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"exec",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){var e=this,t=this.form.querySelectorAll('input[name="divisionType"]'),r=this.form.querySelector('input[name="displayRegionsSelector"]');r.addEventListener("change",(function(){if(r.checked)return e.displayRegionSelector(!0),!0;e.displayRegionSelector(!1)})),[].forEach.call(t,(function(t){t.addEventListener("change",(function(){if("districts"===t.value)return e.displayCheckboxSelector(!0),!0;e.displayCheckboxSelector(!1)}))})),this.form.addEventListener("submit",(function(n){n.preventDefault();var a="regions",o=e.form.querySelector('input[name="divisionName"]').value,i=e.form.querySelector('input[name="divisionLink"]').value,c=e.form.querySelector('select[name="region-selector"]').value,s=e.objectManager.get("regions",c);[].forEach.call(t,(function(e){e.checked&&(a=e.value)}));var l="regions"===a?{cities:[],districts:[]}:{cities:[]},u=e.objectManager.add(a,{name:o,link:i,attachment:l});if(r.checked&&"districts"===a&&Object.keys(s).length>0){var f=s.attachment.districts;f.indexOf(u)<0&&f.push(u),e.objectManager.add("regions",{attachment:{cities:s.attachment.cities,districts:f}},c)}}))}},{key:"displayRegionSelector",value:function(e){var t=this.form.querySelector('select[name="region-selector"]');return null!==t&&(e?(t.style.display="inline",!0):void(t.style.display="none"))}},{key:"displayCheckboxSelector",value:function(e){var t=this.form.querySelector('input[name="displayRegionsSelector"]'),r=this.form.querySelector('select[name="region-selector"]');return null!==t&&(e?(t.parentElement.style.display="block",!0):(t.checked=!1,r.style.display="none",void(t.parentElement.style.display="none")))}}]),t}(i.default);t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=i(r(1)),o=i(r(0));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.groups={cities:document.getElementById("cities-area"),regions:document.getElementById("regions-area"),districts:document.getElementById("districts-area")},e.objectManager=new o.default,e.exec(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"exec",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){var e=this;window.addEventListener("storageChange",(function(t){e.buildArea(t.detail.groupType,a.default.getData(t.detail.groupType))}))}},{key:"buildArea",value:function(e,t){var r=this,n=this.groups[e].firstElementChild;null!==n&&this.groups[e].removeChild(n);var a=document.createElement("ul");for(var o in t){var i=document.createElement("li"),c=document.createElement("a");if(c.href=t[o].link,c.target="_blank",c.innerHTML=t[o].name,i.appendChild(c),a.appendChild(i),void 0!==t[o].attachment){var s=function(e){t[o].attachment.hasOwnProperty(e)&&t[o].attachment[e].forEach((function(t){var n=r.objectManager.get(e,t);console.log(n)}))};for(var l in t[o].attachment)s(l)}}this.groups[e].appendChild(a)}}]),t}(o.default);t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(1),i=(n=o)&&n.__esModule?n:{default:n};var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data={},this.dlButton=document.getElementById("download-json"),this.bindEvents()}return a(e,[{key:"bindEvents",value:function(){this.dlButton.addEventListener("click",this.fillJsonfile.bind(this))}},{key:"fillJsonfile",value:function(){var e=JSON.stringify(i.default.getAllData()),t=JSON.stringify({jsonData:e}),r=new XMLHttpRequest;r.open("post","/api/writeJson"),r.setRequestHeader("Content-Type","application/json"),r.responseType="text",r.addEventListener("load",(function(){200===r.status?(window.location.href=r.response,console.log(r.response)):(console.log(r.status),console.error("request api failed"))})),r.send(t)}}]),e}();t.default=c}]);
//# sourceMappingURL=app.js.map
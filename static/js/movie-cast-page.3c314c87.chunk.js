(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{122:function(t,e,a){"use strict";a.r(e);var r=a(82),n=a.n(r),c=a(85),s=a(83),o=a(86),i=a(87),u=a(90),l=a(89),m=a(0),p=a.n(m),f=a(84),h=a(123),b=a.n(h),d=(a(124),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={credits:[],message:""},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=Object(s.a)(n.a.mark((function t(){var e,a,r,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.url,a=Object(f.b)(e),t.prev=2,t.next=5,Object(f.a)("get",a);case 5:r=t.sent,this.setState({credits:Object(c.a)(r.cast)}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),s=t.t0.message,this.setState({message:s});case 13:case"end":return t.stop()}}),t,this,[[2,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.credits,a=t.message;return p.a.createElement("div",{className:"CastWrapper"},a&&p.a.createElement("h2",{className:"Error"},"Whoops, something went wrong: ",a),e.length>0?p.a.createElement("ul",{className:"CastList"},e.map((function(t){return p.a.createElement("li",{key:t.cast_id,className:"CastCard"},p.a.createElement("div",{className:"CastProfile"},t.profile_path?p.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:t.about}):p.a.createElement("img",{src:b.a,alt:t.about})),p.a.createElement("h3",{className:"CastName"},t.name),p.a.createElement("p",{className:"CastCharacter"},"Character: ",t.character))}))):p.a.createElement("p",null,"We don't have any information about cast for this movie"))}}]),a}(m.Component));e.default=d},123:function(t,e,a){t.exports=a.p+"static/media/default-profile.5330d4f4.png"},124:function(t,e,a){},85:function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=movie-cast-page.3c314c87.chunk.js.map
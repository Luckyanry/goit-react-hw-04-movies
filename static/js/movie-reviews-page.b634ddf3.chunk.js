(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{125:function(e,t,r){"use strict";r.r(t);var n=r(82),a=r.n(n),s=r(85),o=r(83),c=r(86),i=r(87),u=r(90),l=r(89),m=r(0),p=r.n(m),f=r(84),h=(r(126),function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={reviews:[],message:""},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,r,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.url,r=Object(f.b)(t),e.prev=2,e.next=5,Object(f.a)("get",r);case 5:n=e.sent,this.setState({reviews:Object(s.a)(n.results)}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),o=e.t0.message,this.setState({message:o});case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.reviews,r=e.message;return p.a.createElement("div",{className:"ReviewsWrapper"},r&&p.a.createElement("h2",{className:"Error"},"Whoops, something went wrong: ",r),t.length>0?p.a.createElement("ul",{className:"ReviewsList"},t.map((function(e){return p.a.createElement("li",{key:e.id,className:"ReviewsItem"},p.a.createElement("h3",{className:"ReviewsTitle"},"Author: ",e.author),p.a.createElement("p",{className:"ReviewsDesc"},e.content))}))):p.a.createElement("p",null,"We don't have any reviews for this movie"))}}]),r}(m.Component));t.default=h},126:function(e,t,r){},85:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=movie-reviews-page.b634ddf3.chunk.js.map
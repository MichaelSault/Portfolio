(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/project1.4256483b.png"},function(e,t,a){e.exports=a.p+"static/media/project2.8e98e4df.png"},function(e,t,a){e.exports=a.p+"static/media/project3.0f2961e4.png"},function(e,t,a){e.exports=a.p+"static/media/email_icon.fd99f8e3.png"},function(e,t,a){e.exports=a.p+"static/media/github_icon.e2a62886.png"},function(e,t,a){e.exports=a.p+"static/media/linkedin_icon.56ab00e8.png"},function(e,t,a){e.exports=a.p+"static/media/twitter_icon.512536cb.png"},function(e,t,a){e.exports=a.p+"static/media/profile.d9abe4d4.png"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(6),r=a.n(l),c=a(1),o=a(2),u=a(3),m=a(4),s=a(7),p=a.n(s),h=a(8),g=a.n(h),d=a(9),f=a.n(d),b=[{id:1,title:"Motion Data Visualizer",description:"A motion data visualizer using hierachical human modeling",link:"https://skeleton.michaelsault.ca",linktext:"skeleton.michaelsault.ca",image:p.a,github:"https://github.com/MichaelSault/HumanSkeletonJS",ghtext:"JS Source",linksplit:"  |   ",link2:"https://github.com/MichaelSault/MotionDataVisualizer",link2text:"Java Source"},{id:2,title:"Motion and Emotion",description:"A web based, 2D animation program built with the JS Processing library (p5)",link:"https://motion.michaelsault.ca",linktext:"motion.michaelsault.ca",image:g.a,github:"https://github.com/MichaelSault/Motion-And-Emotion",ghtext:"Source",link2:"https://github.com/MichaelSault/MotionDataVisualizer",link2text:""},{id:3,title:"Doubloon Clicker",description:'A pirate themed "cookie clicker" game with custom assets',link:"https://pirate.michaelsault.ca",linktext:"pirate.michaelsault.ca",image:f.a,github:"https://github.com/MichaelSault/PirateClickerGame",ghtext:"Source",link2:"https://github.com/MichaelSault/MotionDataVisualizer",link2text:""}],k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.project,t=e.title,a=e.image,n=e.description,l=e.link,r=e.linktext,c=e.github,o=e.ghtext,u=e.linksplit,m=e.link2,s=e.link2text;return i.a.createElement("div",{style:{display:"inline-block",width:400,margin:10}},i.a.createElement("hr",{class:"bigHr"}),i.a.createElement("h2",null,t),i.a.createElement("hr",null),i.a.createElement("img",{src:a,alt:"profile",style:{width:250,height:150}}),i.a.createElement("p1",null,n),i.a.createElement("a",{href:l},i.a.createElement("p1",null,r)),i.a.createElement("a",{href:c},i.a.createElement("p2",null,o)),i.a.createElement("p2",null,u),i.a.createElement("a",{href:m},i.a.createElement("p2",null,s)))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Highlighted Projects"),i.a.createElement("div",null,b.map((function(e){return i.a.createElement(k,{key:e.id,project:e})}))))}}]),a}(n.Component),y=a(10),v=a.n(y),j=a(11),O=a.n(j),S=a(12),x=a.n(S),w=a(13),M=a.n(w),C=[{id:1,link:"mailto:michael_sault@hotmail.com",image:v.a},{id:2,link:"https://github.com/MichaelSault",image:O.a},{id:3,link:"https://www.linkedin.com/in/michaelsault/",image:x.a},{id:4,link:"https://twitter.com/michael_sault",image:M.a}],B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.socialProfile,t=e.link,a=e.image;return i.a.createElement("span",null,i.a.createElement("a",{href:t},i.a.createElement("img",{src:a,alt:"social-profile",style:{width:35,height:35,margin:10}})))}}]),a}(n.Component),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Connect with me!"),i.a.createElement("div",null,C.map((function(e){return i.a.createElement(B,{key:e.id,socialProfile:e})}))))}}]),a}(n.Component),J=a(14),A=a.n(J),_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={displayBio:!1},e.toggleDisplayBio=function(){e.setState({displayBio:!e.state.displayBio})},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{src:A.a,alt:"profile",className:"profile"}),i.a.createElement("h1",null,"Michael Sault"),i.a.createElement("p",null,"H.B.Sc in Computer Science"),this.state.displayBio?i.a.createElement("div",null,i.a.createElement("p1",null,"I live in Burlington Ontario."),i.a.createElement("p1",null,"I am a recent Computer Science graduate from the University of Ottawa."),i.a.createElement("p1",null,"My preferred programming languages are Java and JS."),i.a.createElement("p1",null,"I am currently training for a half marathon."),i.a.createElement("button",{onClick:this.toggleDisplayBio},"Show Less")):i.a.createElement("div",null,i.a.createElement("button",{onClick:this.toggleDisplayBio},"More About Me")),i.a.createElement("hr",null),i.a.createElement(E,null),i.a.createElement("hr",null),i.a.createElement(D,null))}}]),a}(n.Component);a(20);r.a.render(i.a.createElement(_,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.1ffe5df4.chunk.js.map
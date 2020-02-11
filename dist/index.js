!function(t){var e={};function s(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);class o{constructor(){}render(t,e){this.parentDoment=e,this.putDown(e),this.domElement=document.createElement(t.name),this.doRender(t,e,this.domElement)}renderMouseFollower(t,e){let s=document.createElement(t.name);return this.doRender(t,e,s),this.domElement&&(s.style.width=this.domElement.clientWidth+"px"),s}refreshState(t){this.domElement&&(this.domElement.classList.remove("actived","focused","dragged","dragover"),this.renderStylesAndClasses(t,this.domElement))}refresh(t,e){this.domElement&&(this.putDown(),this.parentDoment=e,this.doRender(t,e,this.domElement))}doRender(t,e,s){this.renderStylesAndClasses(t,s),this.bindEvents(s,t.on),this.showTextNode(t,s),this.showLabel(t,s),this.showToolbar(t,s),this.showAttributes(t,s),e.appendChild(s)}renderStylesAndClasses(t,e){if(e){if(t.styles)for(var s in t.styles)e.style[s]=t.styles[s];t.classList.forEach(t=>{e.classList.add(t)})}}showTextNode(t,e){t.text&&e.appendChild(document.createTextNode(t.text))}showLabel(t,e){if(t.label){let s=document.createElement("div");s.classList.add("element-label"),s.title="Can be dragged",s.appendChild(document.createTextNode(t.label.text)),e.appendChild(s)}}showToolbar(t,e){if(t.toolbar){let s=document.createElement("div");s.classList.add("element-toolbar"),s.appendChild(this.createToolbarButton("Move","fa-arrow-up",t.toolbar.up)),s.appendChild(this.createToolbarButton("Move","fa-arrows",t.toolbar.move)),s.appendChild(this.createToolbarButton("Duplicate","fa-copy",t.toolbar.duplicate)),s.appendChild(this.createToolbarButton("Edit","fa-edit",t.toolbar.edit)),s.appendChild(this.createToolbarButton("Delete","fa-trash-o",t.toolbar.delete)),e.appendChild(s)}}showAttributes(t,e){for(var s in t.attributes)e[s]=t.attributes[s]}createToolbarButton(t,e,s){let o=document.createElement("div");o.classList.add("button"),o.title=t;let i=document.createElement("i");return i.classList.add("fa"),i.classList.add(e),o.appendChild(i),this.bindEvents(o,s),o}bindEvents(t,e){for(var s in e)t[s]=e[s]}putDown(){this.domElement&&this.parentDoment.contains(this.domElement)&&this.parentDoment.removeChild(this.domElement)}}class i extends Array{first(){if(this.length>0)return this[0]}last(){if(this.length>0)return this[this.length-1]}before(t){for(var e=0;e<this.length;e++)if(this[e]===t&&e>0)return this[e-1]}after(t){for(var e=0;e<this.length;e++)if(this[e]===t&&e<this.length)return this[e+1]}inertBefore(t,e){for(var s=0;s<this.length;s++)if(this[s]===e)return void this.splice(s,0,t)}inertAfter(t,e){for(var s=0;s<this.length;s++)if(this[s]===e)return void this.splice(s+1,0,t)}remove(t){for(var e=0;e<this.length;e++)if(this[e]===t){this.splice(e,1);break}}add(t){this.push(t)}contains(t){for(var e=0;e<this.length;e++)if(this[e]===t)return!0;return!1}}class r{constructor(t){this.node=t,this.classList=[],this.styles={},this.onMousemove=()=>{},this.onBegindrag=()=>{},this.onMouseover=t=>{},this.onMouseout=()=>{},this.onClick=()=>{rxEditor.clearFocusStates()}}mouseAtBefore(t){let e=this.node.dropMargin;return t.offsetX<=e||t.offsetY<=e}mouseAtAfter(t){let e=this.node.dropMargin;return t.srcElement.clientWidth-t.offsetX<=e||t.srcElement.clientHeight-t.offsetY<=e}mouseAtLeft(t){return t.offsetX<=this.node.widthDropMargin}mouseAtRight(t){return t.srcElement.clientWidth-t.offsetX<=this.node.widthDropMargin}mouseAtTop(t){return t.offsetY<=this.node.heightDropMargin}mouseAtBottom(t){return t.srcElement.clientHeight-t.offsetY<=this.node.heightDropMargin}mouseAtDropArea(t){let e=this.node.dropMargin;return event.offsetX>e&&event.offsetY>e&&event.srcElement.clientWidth-event.offsetX>e&&event.srcElement.clientHeight-event.offsetY>e}}class n extends r{constructor(t){super(t),this.onMousemove=t=>{this.node.adoptFromToolbox(),this.doDragover(t),rxEditor.followMouse(t)}}doDragover(t){if(rxEditor.draggedNode){if(rxEditor.clearDraggedoverStates(),this.mouseAtLeft(t)||this.mouseAtTop(t))return void(this.node.parent&&this.node.parent.canAccept(rxEditor.draggedNode)&&(rxEditor.draggedNode.moveBefore(this.node),this.node.parent.changeToState("dragoverState")));if(this.mouseAtRight(t)||this.mouseAtBottom(t))return void(this.node.parent&&this.node.parent.canAccept(rxEditor.draggedNode)&&(rxEditor.draggedNode.moveAfter(this.node),this.node.parent.changeToState("dragoverState")));if(this.mouseAtBefore(t))return void(this.node.canAccept(rxEditor.draggedNode)&&(rxEditor.draggedNode.moveInTop(this.node),this.node.changeToState("dragoverState")));(this.mouseAtAfter(t)||this.mouseAtDropArea(t))&&this.node.canAccept(rxEditor.draggedNode)&&(rxEditor.draggedNode.moveIn(this.node),this.node.changeToState("dragoverState"))}}}class a extends n{constructor(t){super(t),this.onMouseover=t=>{rxEditor.draggedNode||(rxEditor.clearActiveStates(),this.node.changeToState("activeState"))}}}class h extends n{constructor(t){super(t),this.classList.push("dragover"),this.onMouseout=()=>{this.node.changeToState("normalState")}}}class l extends n{constructor(t){super(t),this.classList.push("actived"),this.onMouseout=()=>{this.node.changeToState("normalState")},this.onMouseover=t=>{rxEditor.draggedNode||(rxEditor.clearActiveStates(),this.node.changeToState("activeState"))},this.onClick=t=>{rxEditor.clearFocusStates(),this.node.changeToState("focusState")}}}class d extends r{constructor(t){super(t),this.classList.push("focused"),this.onBegindrag=t=>{this.node.draggable&&(this.preventDefault,rxEditor.draggedNode=this.node,rxEditor.beginFollowMouse(t),this.node.changeToState("draggedState"))}}}class c extends r{constructor(t){super(t),this.onMousemove=t=>{t.preventDefault(),rxEditor.followMouse(t)},this.onMouseout=t=>{t.preventDefault()}}}class u extends c{constructor(t){super(t),this.classList.push("dragged"),this.onMousemove=t=>{this.node.parent&&this.node.parent.changeToState("dragoverState"),rxEditor.followMouse(t)}}}class m{constructor(){this.seedId(),this.toolboxInfo={moduleName:"not define",elementName:"not define"},this.children=new i,this.view=new o,this.draggable=!0,this.dropMargin=30,this.padding="30px",this.mouseFollowerWidth="200px",this.acceptedChildren=[],this.exceptChildren="",this.initStates(),this.mouseFollower={offsetX:10,offsetY:0},this.begindrag=t=>{t.stopPropagation(),this.state.onBegindrag(t)},this.begindragLabel=t=>{this.view.domElement&&(this.mouseFollower.offsetX=t.offsetX,this.mouseFollower.offsetY=-18+t.offsetY),this.begindrag(t)},this.begindragIcon=t=>{this.view.domElement&&(this.mouseFollower.offsetX=this.view.domElement.clientWidth-96+t.offsetX,this.mouseFollower.offsetY=-24+t.offsetY),this.begindrag(t)},this.mousemove=t=>{t.stopPropagation(),this.state.onMousemove(t)},this.mouseover=t=>{t.stopPropagation(),this.state.onMouseover(t)},this.mouseout=t=>{t.stopPropagation(),this.state.onMouseout(t)},this.onclick=t=>{t.stopPropagation(),this.state.onClick(t)},this.duplicate=()=>{this.changeToState("normalState"),this.inertAfterSelf(this.clone()),rxEditor.render()},this.edit=t=>{console.log("Edit"),t.stopPropagation()},this.up=t=>{this.parent&&(this.changeToState("normalState"),this.parent.changeToState("focusState"),t.stopPropagation())},this.delete=()=>{confirm("Are you sure to delete?")&&this.removeFromParent()},this.stateChanged=(t,e)=>{}}seedId(){m.idSeed||(m.idSeed=1),m.idSeed++,this.$rxId=m.idSeed}initStates(){this.normalState=new a(this),this.activeState=new l(this),this.focusState=new d(this),this.dragoverState=new h(this),this.draggedState=new u(this),this.disableState=new c(this),this.state=this.normalState}changeToState(t){let e=this.state;this.state=this[t],this.refreshState(),this.stateChanged(e,this[t])}render(){this.view.render(this.toViewModel(),this.getParentViewDomElement()),this.children.forEach((function(t){t.render()}))}refreshState(){this.view.refreshState(this.toViewModel()),this.children.forEach((function(t){t.refreshState()}))}refresh(){this.view.refresh(this.toViewModel(),this.getParentViewDomElement()),this.children.forEach((function(t){t.refresh()}))}createMouseFollower(){let t=document.createElement("div");return t.classList.add("mouse-follow"),this.parent||(t.style.width=this.mouseFollowerWidth),this.renderMouseFollower(t),this.mouseFollower.domElement=t,this.mouseFollower}renderMouseFollower(t){let e=this.view.renderMouseFollower(this.toViewModel(),t);return this.children.forEach((function(t){t.renderMouseFollower(e)})),e}clearDraggedoverStates(){this.state===this.dragoverState&&this.changeToState("normalState"),this.children.forEach((function(t){t.clearDraggedoverStates()}))}clearActiveStates(){this.state===this.activeState&&this.changeToState("normalState"),this.children.forEach((function(t){t.clearActiveStates()}))}clearFocusStates(){this.state===this.focusState&&this.changeToState("normalState"),this.children.forEach((function(t){t.clearFocusStates()}))}adoptFromToolbox(){let t=rxEditor.draggedNode;t&&!t.parent&&this.canAccept(t)&&(t.parent=this,t.render(),t.changeToState("draggedState"))}getParentViewDomElement(){return this.parent.view.domElement}createChild(t){let e=m.createNode(this,t);return this.children.push(e),e}firstChild(){return this.children.first()}removeFromParent(){this.parent&&(this.view.putDown(),this.parent.children.remove(this))}unshiftChild(t){t.parent=this,this.children.unshift(t)}pushChild(t){t.parent=this,this.children.push(t)}moveInTop(t){t.children.first()!==this&&(this.removeFromParent(),t.unshiftChild(this),rxEditor.refresh())}moveIn(t){t.children.last()!==this&&(this.removeFromParent(),t.pushChild(this),rxEditor.refresh())}moveBefore(t){t.children.before()!==this&&(this.removeFromParent(),this.parent=t.parent,t.parent.children.inertBefore(this,t),rxEditor.refresh())}moveAfter(t){t.children.after()!==this&&(this.removeFromParent(),this.parent=t.parent,t.parent.children.inertAfter(this,t),rxEditor.refresh())}inertAfterSelf(t){t.parent=this.parent,this.parent.children.inertAfter(t,this),this.parent.refresh()}clone(){let t=this.make(this.parent);return this.children.forEach(e=>{t.pushChild(e.clone())}),t}canAccept(t){return(!this.acceptedChildren||0!=this.acceptedChildren.length)&&(!(this.acceptedChildren&&!this.containsInAccepted(t))&&!(!this.acceptedChildren&&this.containsInExcept(t)))}containsInAccepted(t){let e=t.className;for(var s=0;s<this.acceptedChildren.length;s++)if(this.acceptedChildren[s]===e)return!0;return!1}containsInExcept(t){let e=t.className;if(this.exceptChildren)for(var s=0;s<this.exceptChildren.length;s++)if(this.exceptChildren[s]===e)return!0;return!1}toViewModel(){let t=["element-outline","element"];t.push.apply(t,this.state.classList);let e={padding:this.padding,position:"relative"};return Object.assign(e,this.state.styles),{name:"div",styles:e,classList:t,label:{on:{onmousedown:this.begindragLabel}},toolbar:{up:{onclick:this.up},move:{onmousedown:this.begindragIcon},duplicate:{onclick:this.duplicate},edit:{onclick:this.edit},delete:{onclick:this.delete}},attributes:{},on:{onmousemove:this.mousemove,onmouseover:this.mouseover,onmouseout:this.mouseout,onclick:this.onclick}}}}class p extends m{constructor(t){super(),this.activeState=this.normalState,this.parentViewDomElement=t,this.acceptedChildren="",this.exceptChildren=["BSCol"],this.heightDropMargin=0,this.widthDropMargin=0,this.padding="30px"}getParentViewDomElement(){return this.parentViewDomElement}toViewModel(){let t=super.toViewModel();return t.styles.width="100%",t.styles["min-height"]="calc(100vh)",t.styles.cursor="default",t.classList.push("canvas"),t.toolbar="",t.label="",t}}class g{constructor(){}hangOn(t,e){this.workspace=document.getElementById(t),this.canvas=new p(this.workspace),this.canvas.render(),e.serveForRXEditor=this,this.commandProxy=e,this.commandProxy.rxeditorReady(),document.onmouseup=t=>{this.dropElement(),console.log("canvas mouse up")}}render(){this.canvas.render()}refresh(){this.canvas.refresh()}clearDraggedoverStates(){this.canvas.clearDraggedoverStates()}clearActiveStates(){this.canvas.clearActiveStates()}clearFocusStates(){this.canvas.clearFocusStates()}dragFromToolbox(t){if(this.draggedNode)return;let e=this.getElementByRxNameId(t);this.draggedNode=e.make(),this.beginFollowMouse(),this.clearFocusStates()}getElementDefine(t){return this.getElementByRxNameId(t).toolboxInfo}getElementByRxNameId(t){let e=t.split("."),s=e[0],o=e[1],i=this[s][o];return console.assert(i,"Can not find element:"+t),i.toolboxInfo.rxNameId=t,i.toolboxInfo.rxModuleNameId=s,i.toolboxInfo.rxElementNameId=o,i}dropElement(){this.endFollowMouse(),this.draggedNode&&(this.clearActiveStates(),this.draggedNode.changeToState("focusState"),this.draggedNode.parent&&this.draggedNode.parent.changeToState("normalState"),this.draggedNode="")}endDragFromToolbox(){console.log("canvas endDragFromToolbox"),this.draggedNode="",this.endFollowMouse()}followMouse(t){let e=this.mouseFollower;e&&(e.domElement.style.left=this.followX(t),e.domElement.style.top=this.followY(t),this.commandProxy.takeOverDraggingByWorkspace())}followX(t){return t.clientX-this.mouseFollower.offsetX+"px"}followY(t){return t.clientY-this.mouseFollower.offsetY+"px"}beginFollowMouse(){if(this.draggedNode){let t=this.draggedNode.createMouseFollower(event);this.workspace.appendChild(t.domElement),this.mouseFollower=t}}endFollowMouse(){this.mouseFollower&&this.workspace.contains(this.mouseFollower.domElement)&&this.workspace.removeChild(this.mouseFollower.domElement),this.mouseFollower=""}bindToolboxItem(t,e){new ToolboxItem(t).bindTo(e)}}class f{constructor(t="div"){this.children=new i,this.classList=new i,this.style={},this.attrs={},this.domOns={},this.elementName=t}on(t,e){return this[t]=e,this}off(t){return delete this[t],this}domOn(t,e){return this.$dom&&(this.$dom[t]=e),this.domOns[t]=e,this}domOff(t,e){return this.$dom&&this.$dom.removeEventListener(t,e),delete this.domOns[t],this}pushChild(t){return this.children.push(t),this}cssClass(t){return this.classList.add(t),this}removeCssClass(t){return this.classList.remove(t),this}cssStyle(t,e){return this.style[t]=e,this}removeCssStyle(t){delete this.style[t]}domAttr(t,e){return this.attrs[t]=e,this}removeDomAttr(t){return delete this.attrs[t],this}setInnerHTML(t){return this.innerHTML=t,this}render(t){for(var e in this.$dom=document.createElement(this.elementName),t.appendChild(this.$dom),this.innerHTML&&(this.$dom.innerHTML=this.innerHTML),this.style)this.$dom.style[e]=this.style[e];for(var s in this.classList.forEach(t=>{this.$dom.classList.add(t)}),this.attrs)this.$dom[s]=this.attrs[s];for(var o in this.domOns)this.$dom[o]=this.domOns[o];return this.children.forEach(t=>{t.render(this.$dom)}),this}destory(){this.$dom.parentNode.removeChild(this.$dom)}}class w{constructor(){this.header=(new f).cssClass("item"),this.body=(new f).cssClass("tab-body")}pushChild(t){this.body.pushChild(t)}active(t=!0){return t?(this.header.$dom?this.header.$dom.classList.add("active"):this.header.classList.add("active"),this.body.$dom?this.body.$dom.classList.add("active"):this.body.classList.add("active")):(this.header.$dom?this.header.$dom.classList.remove("active"):this.header.classList.remove("active"),this.body.$dom?this.body.$dom.classList.remove("active"):this.body.classList.remove("active")),this}}class b extends f{constructor(){super(),this.cssClass("rx-right-area"),this.layout=new w,this.layout.header.domAttr("title","Layout").innerHTML='<i class="fa fa-th-large"></i>',this.options=new w,this.options.header.domAttr("title","Options").innerHTML='<i class="fa fa-paint-brush"></i>',this.pushChild((new f).cssClass("rx-drawer").pushChild((new f).cssClass("top-header").pushChild(this.layout.header).pushChild(this.options.header)).pushChild((new f).cssClass("tab-contents").pushChild(this.layout.body).pushChild(this.options.body))),this.toolbox=new v,this.layout.pushChild(this.toolbox),this.options.body.innerHTML='<div style="padding:20px;">No element is selected</div>'}render(t){return super.render(t),this.layout.header.domOn("onclick",()=>{this.onTabHeaderClick("layout")}),this.options.header.domOn("onclick",()=>{this.onTabHeaderClick("options")}),this}activeTab(t){this.layout.active(!1),this.options.active(!1),this[t].active()}}class v extends f{constructor(){super(),this.assembleToolboxItem=t=>{let e=t.rxModuleNameId;this[e]||(this[e]=new x(t.moduleName).render(this.$dom));let s=this[e].add(t);s.domOn("onmousedown",t=>{this.draggingFromToolbox(s.toolboxInfo.rxNameId),s.mouseFollower.offsetX=t.offsetX,s.mouseFollower.offsetY=t.offsetY,this.beginFollowMouse(s.mouseFollower,t)})},document.onmousemove=t=>{this.followMouse(t)},document.onmouseup=t=>{console.log("toolbox mouseup"),this.endFollowMouse(),this.endDragFromToolbox()}}followMouse(t){let e=this.mouseFollower;e&&(e.$dom.style.left=this.followX(t),e.$dom.style.top=this.followY(t))}followX(t){return t.clientX-this.mouseFollower.offsetX-4+"px"}followY(t){return t.clientY-this.mouseFollower.offsetY-3+"px"}beginFollowMouse(t,e){t.show(),this.mouseFollower=t,this.followMouse(e)}endFollowMouse(){this.mouseFollower&&this.mouseFollower.hiden(),this.mouseFollower=""}}class x extends f{constructor(t){super(),this.title=new f,this.title.cssClass("group-title"),this.title.innerHTML='<i class="fa fa-caret-down"></i> '+t,this.pushChild(this.title),this.groupBody=new f,this.groupBody.cssClass("group-body"),this.pushChild(this.groupBody)}add(t){let e=new S(t).render(this.groupBody.$dom);return this.groupBody.pushChild(e),e}}class E extends f{constructor(){super(),this.cssClass("shell-mousefollower"),this.cssStyle("display","none"),this.show=()=>{this.$dom.style.display="block"},this.hiden=()=>{this.$dom.style.display="none"}}}class S extends f{constructor(t){super(),this.toolboxInfo=t,this.cssClass("element"),this.innerHTML='<i class="fa fa-arrows"></i> '+t.elementName,this.mouseFollower=new E,this.mouseFollower.cssClass("element"),this.mouseFollower.innerHTML=this.innerHTML,this.pushChild(this.mouseFollower)}}class y extends f{constructor(t){super(),this.classList.add("toolbar-button"),this.innerHTML=`<i class="fa ${t}" ></i>`}active(t=!0){return t?this.$dom?this.$dom.classList.add("active"):this.classList.add("active"):this.$dom?this.$dom.classList.remove("active"):this.classList.remove("active"),this}title(t){return this.attrs.title=t,this}}class C extends f{constructor(t,e){super(),this.rxEditorShell=t,this.classList.add("rx-toolbar"),this.barLeft=new f,this.barLeft.classList.add("left"),this.pushChild(this.barLeft),e&&(this.createScreenSizeButtons(),t.state.watch("screenWidth",t=>{this.refreshScreenSizeButtonsState()})),this.barCenter=new f,this.barCenter.cssClass("center").innerHTML="\n                      <span style=\"color:#75b325; font-size:22px;font-weight:900;font-family: 'Handlee', cursive;\">\n                        RXEditor</span>",this.pushChild(this.barCenter),this.barRight=new f,this.barRight.cssClass("right"),this.pushChild(this.barRight),this.creatRightButton("fa-arrows-h").active(),this.creatRightButton("fa-eye").title("Preview"),this.creatRightButton("fa-undo"),this.creatRightButton("fa-repeat"),this.creatRightButton("fa-download"),this.creatRightButton("fa-trash"),this.creatRightButton("fa-cog"),this.creatRightButton("fa-question-circle"),this.creatRightButton("fa-bars").domOn("onclick",()=>{t.state.showDrawer=!t.state.showDrawer})}creatRightButton(t){let e=new y(t);return this.barRight.pushChild(e),e}creatLeftButton(t){let e=new y(t);return this.barLeft.pushChild(e),e}createScreenSizeButtons(){this.xlBtn=this.creatLeftButton("fa-desktop").title("Extra large: ≥1200px"),this.xlBtn.style.fontSize="22px",this.xlBtn.style.lineHeight="34px",this.lgBtn=this.creatLeftButton("fa-desktop").title("Large: ≥992px"),this.mdBtn=this.creatLeftButton("fa-tablet").title("Medium:≥768px"),this.smBtn=this.creatLeftButton("fa-mobile").title("Small:≥576px"),this.xsBtn=this.creatLeftButton("fa-mobile").title("Extra small: <576px"),this.xsBtn.style.fontSize="14px",this.xlBtn.domOns.onclick=t=>{this.rxEditorShell.state.screenWidth="xl"},this.lgBtn.domOns.onclick=t=>{this.rxEditorShell.state.screenWidth="lg"},this.mdBtn.domOns.onclick=t=>{this.rxEditorShell.state.screenWidth="md"},this.smBtn.domOns.onclick=t=>{this.rxEditorShell.state.screenWidth="sm"},this.xsBtn.domOns.onclick=t=>{this.rxEditorShell.state.screenWidth="xs"},this.refreshScreenSizeButtonsState()}refreshScreenSizeButtonsState(){switch(this.xlBtn.active(!1),this.lgBtn.active(!1),this.mdBtn.active(!1),this.smBtn.active(!1),this.xsBtn.active(!1),this.rxEditorShell.state.screenWidth){case"xl":this.xlBtn.active();break;case"lg":this.lgBtn.active();break;case"md":this.mdBtn.active();break;case"sm":this.smBtn.active();break;case"xs":this.xsBtn.active()}}}class T{constructor(){window.addEventListener("message",t=>{this.handleMessage(t.data)})}rxeditorReady(){this.sendMessage({name:"rxeditorReady"})}takeOverDraggingByWorkspace(){this.sendMessage({name:"takeOverDraggingByWorkspace"})}handleMessage(t){switch(t.name){case"requestAssemble":let e=this.serveForRXEditor.getElementDefine(t.rxNameId);this.sendMessage({name:"replyAssemble",toolboxInfo:e});break;case"draggingFromToolbox":this.serveForRXEditor.dragFromToolbox(t.rxNameId);break;case"endDragFromToolbox":this.serveForRXEditor.endDragFromToolbox(t.rxNameId)}}sendMessage(t){window.parent.postMessage(t,"/")}}class M extends m{constructor(){super(),this.toolboxInfo.moduleName="Bootstrap"}}class B extends M{constructor(){super(),this.toolboxInfo.elementName="Container",this.className="BSContainer",this.heightDropMargin=15,this.acceptedChildren=["BSRow","BSContainer","HTMLDiv"]}make(){return new B}toViewModel(){let t=super.toViewModel();return t.label.text="Container",t.classList.push("container"),t}}class _ extends M{constructor(t){super(),this.toolboxInfo.elementName="Row",this.className="BSRow",this.heightDropMargin=15,this.acceptedChildren=["BSCol"]}make(){return new _}toViewModel(){let t=super.toViewModel();return t.label.text="Row",t.styles.margin="0",t.classList.push("row"),t}}class L extends M{constructor(){super(),this.toolboxInfo.elementName="Column",this.className="BSCol",this.widthDropMargin=15,this.acceptedChildren=["BSRow","BSContainer","HTMLDiv"]}make(){return new L}toViewModel(){let t=super.toViewModel();return t.label.text="Column",t.classList.push("col"),t.attributes.contentEditable=!1,t}}var F={container:new B,row:new _,column:new L};function k(){window.rxEditor=new g,window.RXEditorCommandProxy=T,rxEditor.bootstrap=F}class D{constructor(t){this.workspaceFrame=t,this.waitingAccembles={},window.addEventListener("message",t=>{this.handleMessage(t.data)})}endDragFromToolbox(){this.sendMessageToRXEditor({name:"endDragFromToolbox"})}draggingFromToolbox(t){this.sendMessageToRXEditor({name:"draggingFromToolbox",rxNameId:t})}handleMessage(t){switch(t.name){case"rxeditorReady":this.serveForShell.onRxEditorReady();break;case"replyAssemble":let e=t.toolboxInfo.rxNameId;this.waitingAccembles[e](t.toolboxInfo);break;case"takeOverDraggingByWorkspace":this.serveForShell.endFollowMouse()}}requestAssemble(t,e){this.waitingAccembles[t]=e,this.sendMessageToRXEditor({name:"requestAssemble",rxNameId:t})}sendMessageToRXEditor(t){let e=this.workspaceFrame;e&&(e.contentWindow.postMessage(t,"/"),window.postMessage(t,"/"))}}class N{constructor(){this.envetHandlers={}}watch(t,e){this.envetHandlers[t]||(this.envetHandlers[t]=new i),this.envetHandlers[t].contains(e)||this.envetHandlers[t].push(e)}cancelWatch(t,e){console.assert(this.envetHandlers[t],"EditorState: did not register this event handler"),this.envetHandlers[t].remove(e)}distributeEvent(t){let e=this.envetHandlers[t];e&&e.forEach(t=>{t(this)})}}class A extends N{constructor(){super(),this.__screenWidth="xl",this.__preView=!1,this.__fullscreen=!1,this.__canUndo=!1,this.__canRedo=!1,this.__showDrawer=!0,this.__activeDrawerTab="layout",this.__activedToolboxGroup="bootstrap"}get screenWidth(){return this.__screenWidth}set screenWidth(t){this.__screenWidth!=t&&(this.__screenWidth=t,this.distributeEvent("screenWidth"))}get preView(){return this.__preView}set preView(t){this.__preView!=t&&(this.__preView=t,this.distributeEvent("preView"))}get fullscreen(){return this.__fullscreen}set fullscreen(t){this.__fullscreen!=t&&(this.__fullscreen=t,this.distributeEvent("fullscreen"))}get canUndo(){return this.__canUndo}set canUndo(t){this.__canUndo!=t&&(this.__canUndo=t,this.distributeEvent("canUndo"))}get canRedo(){return this.__canRedo}set canRedo(t){this.__canRedo!=t&&(this.__canRedo=t,this.distributeEvent("canRedo"))}get showDrawer(){return this.__showDrawer}set showDrawer(t){this.__showDrawer!=t&&(this.__showDrawer=t,this.distributeEvent("showDrawer"))}get activeDrawerTab(){return this.__activeDrawerTab}set activeDrawerTab(t){this.__activeDrawerTab!=t&&(this.__activeDrawerTab=t,this.distributeEvent("activeDrawerTab"))}get activedToolboxGroup(){return this.__activedToolboxGroup}set activedToolboxGroup(t){this.__activedToolboxGroup!=t&&(this.__activedToolboxGroup=t,this.distributeEvent("activedToolboxGroup"))}}class R extends f{constructor(t){super(),this.config=t,this.cssClass("rx-workspace"),this.domAttr("id","workspace")}render(t){super.render(t);let e=document.createElement("iframe");this.iframe=e,e.src="javascript:0",e.frameBorder="0",e.border="0",e.allowTransparency="no",e.scrolling="auto",e.height="100%",this.$dom.appendChild(e);let s=e.contentDocument,o=`\n        <html style="width:100%;height:100%;">\n          <head>\n            <title>RXEditor Workspace</title>\n            <link rel=stylesheet href="${this.config.mainCss}">\n            <link rel="stylesheet" href="${this.config.bootstrapCss}">\n            <link href="${this.config.fontAwesome}" rel="stylesheet">\n          </head>\n          <body style="background-color:#FFF;padding:0;width:100%; height:100%;">\n            <div id="canvas"></div>\n            <script type="text/javascript" src="${this.config.mainJs}"><\/script>\n            <script>\n              rxEditor.hangOn('canvas', new RXEditorCommandProxy);\n            <\/script>\n          </body>\n        </html>\n      `;s.open(),s.write(o),s.close()}resizeScreen(t){"xl"==t&&(this.iframe.width="100%"),"lg"==t&&(this.iframe.width="1199px"),"md"==t&&(this.iframe.width="991px"),"sm"==t&&(this.iframe.width="767px"),"xs"==t&&(this.iframe.width="575")}}class I{constructor(){k(),this.state=new A,this.itemRxNameIds=[]}assemble(t){this.itemRxNameIds.push(t)}hangOn(t,e){this.domElement=document.getElementById(t),this.domElement.classList.add("rx-editor"),this.workspace=new R(e),(new f).cssClass("rx-left-area").pushChild(new C(this,!0)).pushChild(this.workspace).render(this.domElement),this.workspace.resizeScreen(this.state.screenWidth),this.state.watch("screenWidth",t=>{this.workspace.resizeScreen(t.screenWidth)}),this.drawer=new b,this.drawer.activeTab("layout"),this.drawer.on("onTabHeaderClick",t=>{this.state.activeDrawerTab=t}),this.state.watch("showDrawer",t=>{this.drawer.$dom.style.width=t.showDrawer?"250px":"0"}),this.state.watch("activeDrawerTab",t=>{this.drawer.activeTab(t.activeDrawerTab)}),this.commandProxy=new D(this.workspace.iframe),this.commandProxy.serveForShell=this}onRxEditorReady(){for(var t in this.drawer.render(this.domElement),this.itemRxNameIds)this.commandProxy.requestAssemble(this.itemRxNameIds[t],this.drawer.toolbox.assembleToolboxItem);this.drawer.toolbox.on("draggingFromToolbox",t=>{this.draggingFromToolbox(t)}),this.drawer.toolbox.on("endDragFromToolbox",t=>{this.commandProxy&&this.commandProxy.endDragFromToolbox()})}renderRight(){return createChild("rx-right-area",this.domElement)}draggingFromToolbox(t){this.commandProxy.draggingFromToolbox(t)}endFollowMouse(){this.drawer.toolbox.endFollowMouse()}}function H(t,e){let s=document.createElement("div");return s.classList.add(t),e.appendChild(s),s}class $ extends N{constructor(){super(),this.__bold=!1,this.__italic=!1,this.__underline=!1,this.__strikethrough=!1}get bold(){return this.__bold}set bold(t){this.__bold!=t&&(this.__bold=t,this.distributeEvent("bold"))}get italic(){return this.__italic}set italic(t){this.__italic!=t&&(this.__italic=t,this.distributeEvent("italic"))}get underline(){return this.__underline}set underline(t){this.__underline!=t&&(this.__underline=t,this.distributeEvent("underline"))}get strikethrough(){return this.__strikethrough}set strikethrough(t){this.__strikethrough!=t&&(this.__strikethrough=t,this.distributeEvent("strikethrough"))}}window.createRXEditorFM=()=>{window.rxEditor=new g;let t=new I;return t.assemble("bootstrap.container"),t.assemble("bootstrap.row"),t.assemble("bootstrap.column"),t},window.rxEditorInline=new class{constructor(){k()}hangOn(t){}},window.MiniEditor=class{constructor(){this.state=new $}hangOn(t){console.log("enter mini editor"),this.domElement=t,t.classList.add("mini-editor");let e=H("mini-editor-canvas",t);this.canvas=e,e.innerHTML="欢迎使用 Mini Editor ,双击该区域试试",this.canvas.onkeydown=t=>{if(13===t.keyCode)return t.preventDefault(),!1},t.ondblclick=()=>{e.contentEditable=!0,e.focus(),this.showToolbar()},e.onblur=()=>{e.contentEditable=!1,this.hideToolbar()},document.addEventListener("selectionchange",()=>{this.refreshBoldBtn(),this.refreshItalicBtn()})}showToolbar(){this.toolbar=H("mini-editor-toolbar",this.domElement),this.createBoldBtn(),this.createItalicBtn();let t=H("sp-button",this.toolbar);t.classList.add("icon-button"),t.innerHTML="<u>U</u>";let e=H("sp-button",this.toolbar);e.classList.add("icon-button"),e.innerHTML="<strike>S</strike>";let s=H("sp-button",this.toolbar);s.classList.add("icon-button"),s.innerHTML="<span>⫘</span>";let o=H("sp-button",this.toolbar);o.classList.add("sp-styles"),o.title="Bootstrap Style",o.innerHTML="Insert <span>▾</span>",o.onclick=t=>{console.log("style  s button click"),document.execCommand("insertHTML",!1,'<span style="color:red;">EX<span>')},this.toolbar.onmousedown=t=>{console.log("mouse down"),t.preventDefault()}}setHeading(t){formatBlock=document.queryCommandValue("formatBlock"),formatBlock.length>0&&formatBlock.toLowerCase(),document.execCommand("formatBlock",!1,"")}createBoldBtn(){let t=H("sp-button",this.toolbar);this.boldBtn=t,t.classList.add("icon-button"),t.innerHTML="<b>B</b>",t.onclick=t=>{document.execCommand("bold",!1,null)},this.state.watch("bold",()=>{this.state.bold?this.boldBtn.classList.add("active"):this.boldBtn.classList.remove("active")})}refreshBoldBtn(){this.state.bold=document.queryCommandState("bold")}createItalicBtn(){let t=H("sp-button",this.toolbar);this.italicBtn=t,t.classList.add("icon-button"),t.innerHTML="<i>I</i>",t.onclick=t=>{document.execCommand("italic",!1,null),this.state.italic=!this.state.italic},this.state.watch("italic",()=>{this.state.italic?this.italicBtn.classList.add("active"):this.italicBtn.classList.remove("active")})}refreshItalicBtn(){this.state.italic=document.queryCommandState("italic")}hideToolbar(){this.toolbar.style.display="none"}}}]);
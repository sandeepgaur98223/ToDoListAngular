import './polyfills.server.mjs';
import{A as ne,B as re,C as h,D as oe,E as p,F as se,G as w,H as ae,O as le,P as ue,Q as U,S as de,T as ce,U as he,V as fe,Y as pe,a as X,b as Y,c as K,ca as ge,d as b,e as M,f as m,g as J,h as A,i as f,j as Q,k as P,l as k,m as T,n as G,o as j,p as _,q as a,r as ee,s as E,t as y,u as F,v as te,w as ie,x as u,y as c,z as B}from"./chunk-6WZ2WF63.mjs";import{a as d,b as g}from"./chunk-KRLCULJA.mjs";var be=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(j),a(G))},e.\u0275dir=f({type:e});let t=e;return t})(),Me=(()=>{let e=class e extends be{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=T(e)))(o||e)}})(),e.\u0275dir=f({type:e,features:[y]});let t=e;return t})(),W=new m("NgValueAccessor"),He={provide:W,useExisting:b(()=>q),multi:!0},q=(()=>{let e=class e extends Me{writeValue(i){this.setProperty("checked",i)}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=T(e)))(o||e)}})(),e.\u0275dir=f({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,o){r&1&&h("change",function(l){return o.onChange(l.target.checked)})("blur",function(){return o.onTouched()})},features:[w([He]),y]});let t=e;return t})(),Le={provide:W,useExisting:b(()=>x),multi:!0};function $e(){let t=U()?U().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var We=new m("CompositionEventMode"),x=(()=>{let e=class e extends be{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!$e())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(j),a(G),a(We,8))},e.\u0275dir=f({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&h("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[w([Le]),y]});let t=e;return t})();var qe=new m("NgValidators"),ze=new m("NgAsyncValidators");function Ae(t){return t!=null}function Ee(t){return re(t)?X(t):t}function Fe(t){let e={};return t.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function we(t,e){return e.map(n=>n(t))}function Ze(t){return!t.validate}function Ie(t){return t.map(e=>Ze(e)?e:n=>e.validate(n))}function Xe(t){if(!t)return null;let e=t.filter(Ae);return e.length==0?null:function(n){return Fe(we(n,e))}}function Se(t){return t!=null?Xe(Ie(t)):null}function Ye(t){if(!t)return null;let e=t.filter(Ae);return e.length==0?null:function(n){let i=we(n,e).map(Ee);return K(i).pipe(Y(Fe))}}function Oe(t){return t!=null?Ye(Ie(t)):null}function me(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ke(t){return t._rawValidators}function Je(t){return t._rawAsyncValidators}function R(t){return t?Array.isArray(t)?t:[t]:[]}function S(t,e){return Array.isArray(t)?t.includes(e):t===e}function ye(t,e){let n=R(e);return R(t).forEach(r=>{S(n,r)||n.push(r)}),n}function ve(t,e){return R(e).filter(n=>!S(t,n))}var O=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Se(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Oe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},H=class extends O{get formDirective(){return null}get path(){return null}},D=class extends O{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Qe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Lt=g(d({},Qe),{"[class.ng-submitted]":"isSubmitted"}),xe=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(D,2))},e.\u0275dir=f({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[y]});let t=e;return t})();var C="VALID",I="INVALID",v="PENDING",V="DISABLED";function et(t){return(N(t)?t.validators:t)||null}function tt(t){return Array.isArray(t)?Se(t):t||null}function it(t,e){return(N(e)?e.asyncValidators:t)||null}function nt(t){return Array.isArray(t)?Oe(t):t||null}function N(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var $=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===C}get invalid(){return this.status===I}get pending(){return this.status==v}get disabled(){return this.status===V}get enabled(){return this.status!==V}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ye(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ye(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ve(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ve(e,this._rawAsyncValidators))}hasValidator(e){return S(this._rawValidators,e)}hasAsyncValidator(e){return S(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=v,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=V,this.errors=null,this._forEachChild(i=>{i.disable(g(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=C,this._forEachChild(i=>{i.enable(g(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===C||this.status===v)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?V:C}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;let n=Ee(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?V:this.errors?I:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(I)?I:C}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){N(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=tt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}};var Ne=new m("CallSetDisabledState",{providedIn:"root",factory:()=>z}),z="always";function rt(t,e){return[...e.path,t]}function ot(t,e,n=z){at(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),lt(t,e),dt(t,e),ut(t,e),st(t,e)}function _e(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function st(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function at(t,e){let n=Ke(t);e.validator!==null?t.setValidators(me(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Je(t);e.asyncValidator!==null?t.setAsyncValidators(me(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();_e(e._rawValidators,r),_e(e._rawAsyncValidators,r)}function lt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Pe(t,e)})}function ut(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Pe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Pe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function dt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function ct(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ht(t){return Object.getPrototypeOf(t.constructor)===Me}function ft(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===x?n=o:ht(o)?i=o:r=o}),r||i||n||null}function Ce(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ve(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var pt=class extends ${constructor(e=null,n,i){super(et(n),it(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),N(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ve(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ce(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ce(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ve(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var gt={provide:D,useExisting:b(()=>Z)},De=(()=>Promise.resolve())(),Z=(()=>{let e=class e extends D{constructor(i,r,o,s,l,Ue){super(),this._changeDetectorRef=l,this.callSetDisabledState=Ue,this.control=new pt,this._registered=!1,this.name="",this.update=new E,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ft(this,s)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),ct(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ot(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){De.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&le(r);De.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?rt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(a(H,9),a(qe,10),a(ze,10),a(W,10),a(ee,8),a(Ne,8))},e.\u0275dir=f({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[w([gt]),y,Q]});let t=e;return t})();var mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=M({});let t=e;return t})();var yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=M({imports:[mt]});let t=e;return t})();var ke=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Ne,useValue:i.callSetDisabledState??z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=M({imports:[yt]});let t=e;return t})();function _t(t,e){if(t&1){let n=ne();u(0,"li")(1,"input",8),h("ngModelChange",function(r){let s=P(n).$implicit;return k(s.isDone=r)}),c(),p(2),u(3,"button",9),h("click",function(){let o=P(n).$implicit,s=oe();return k(s.deleteItem(o.id))}),p(4,"Delete"),c()()}if(t&2){let n=e.$implicit;_(1),F("ngModel",n.isDone),_(1),se(" ",n.value," ")}}var Te=(()=>{let e=class e{constructor(){this.title="First Angular Project"}ngOnInit(){this.list=[],this.todoValue=""}addItem(){if(this.todoValue!=""){let i={id:Date.now(),value:this.todoValue,isDone:!1};this.list.push(i)}this.todoValue=""}deleteItem(i){this.list=this.list.filter(r=>r.id!==i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=J({type:e,selectors:[["app-root"]],standalone:!0,features:[ae],decls:15,vars:2,consts:[[2,"text-align","center"],["src","../assets/logo.png","alt","LCO Logo","width","100","height","100",1,"logo"],[1,"app-title"],[1,"container"],["type","text","placeholder","Type a to do",1,"input-text",3,"ngModel","ngModelChange","keyup.enter"],[1,"add-btn",3,"click"],[1,"list"],[4,"ngFor","ngForOf"],["type","checkbox","name","isDone",3,"ngModel","ngModelChange"],[1,"btn",3,"click"]],template:function(r,o){r&1&&(u(0,"div",0)(1,"h1"),p(2," Angular First Project "),c(),B(3,"img",1),u(4,"h1",2),p(5,"To Do List"),c()(),u(6,"div",3),p(7," Add a todo... "),B(8,"br"),u(9,"input",4),h("ngModelChange",function(l){return o.todoValue=l})("keyup.enter",function(){return o.addItem()}),c(),u(10,"button",5),h("click",function(){return o.addItem()}),p(11,"Add Todo"),c(),u(12,"div",6)(13,"ul"),ie(14,_t,5,2,"li",7),c()()()),r&2&&(_(9),F("ngModel",o.todoValue),_(5),F("ngForOf",o.list))},dependencies:[ce,de,ke,x,q,xe,Z],styles:[".logo[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}.input-text[_ngcontent-%COMP%]{display:inline;margin:0;border:none;border-radius:.4rem;padding:10px}.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0%;background:red;color:#fff!important;text-transform:uppercase;text-decoration:none;margin-left:10px;margin-right:10px;padding:10px;border-radius:.4rem;display:inline-block;border:none}.add-btn[_ngcontent-%COMP%]{color:#fff!important;text-transform:uppercase;text-decoration:none;background:purple;margin:20px;padding:10px;border-radius:.4rem;display:inline-block;border:none}.app-title[_ngcontent-%COMP%]{text-align:center;color:#c1c1c1;font-size:70px}ul[_ngcontent-%COMP%]{margin:0;padding:0}.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;width:100%;text-decoration:none;color:#000;background-color:#fff;line-height:30px;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#fff;padding:10px;position:relative}.container[_ngcontent-%COMP%]{color:#fff;max-width:500px;margin:auto}"]});let t=e;return t})();var Ge=[];var je={providers:[ge(Ge),fe()]};var Ct={providers:[pe()]},Be=ue(je,Ct);var Vt=()=>he(Te,Be),li=Vt;export{li as a};

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11918deb"],{"6ca7":function(t,e,i){},eb82:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PetModelPage",{key:"vaccine",attrs:{title:"Vaccines",newModelBtnText:"New Vaccine",module:"vaccine",headers:t.headers,type:t.type,initModel:t.initModel},on:{create:t.onCreate,update:t.onUpdate,delete:t.onDelete},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.model;return[i("v-row",[i("v-col",{attrs:{cols:"6",sm:"4",md:"3"}},[i("v-text-field",{attrs:{label:"ID",outlined:"",readonly:"",hint:"create"==t.type?"Automatically generated":"","persistent-hint":""},model:{value:n.id,callback:function(e){t.$set(n,"id",e)},expression:"model.id"}})],1),i("v-col",{attrs:{cols:"6",sm:"4",md:"3"}},[i("v-text-field",{attrs:{label:"Name",outlined:"",rules:[t.validations.required]},model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"model.name"}})],1),i("v-col",{attrs:{cols:"6",sm:"4",md:"3"}},[i("v-text-field",{attrs:{label:"Price",outlined:"",type:"number",prefix:"$",rules:[t.validations.required]},model:{value:n.price,callback:function(e){t.$set(n,"price",e)},expression:"model.price"}})],1),i("v-col",{attrs:{cols:"6",sm:"4",md:"3"}},[i("v-checkbox",{attrs:{label:"Show Notification"},model:{value:n.showNotification,callback:function(e){t.$set(n,"showNotification",e)},expression:"model.showNotification"}})],1)],1)]}},{key:"item.createdAt",fn:function(e){var i=e.value;return[t._v(" "+t._s(t._f("formatDate")(i))+" ")]}},{key:"item.price",fn:function(e){var i=e.value;return[t._v(" $ "+t._s(t._f("currency")(i))+" ")]}},{key:"item.showNotification",fn:function(e){var n=e.item,a=e.value;return[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-icon",t._g({on:{click:function(e){return t.notificationClick(n)}}},o),[t._v(" "+t._s(a?"mdi-bell":"mdi-bell-off")+" ")])]}}],null,!0)},[t._v(" Notification "+t._s(a?"Enabled":"Disabled")+" ")])]}}])})},a=[],o=(i("b0c0"),i("d3b7"),i("25f0"),i("5530")),s=i("2b0e"),c=i("8a23"),l=i("19fd"),r=i("7996"),u=i("b850"),d=s["a"].extend({name:"Vaccine",components:{PetModelPage:c["a"]},filters:Object(o["a"])({},Object(l["a"])()),props:{type:String},data:function(){return Object(o["a"])({headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Price",value:"price"},{text:"Created At",value:"createdAt"},{text:"Show Notification",value:"showNotification"}]},Object(r["c"])(),{},Object(r["b"])())},methods:{initModel:function(){return{id:Math.random().toString(36).substring(3,8),showNotification:!0}},onCreate:function(t){u["a"].dispatch.vaccine.add(t),u["a"].commit.snack.OPEN({text:"Vaccine ".concat(t.name," created successfully!")})},onUpdate:function(t){u["a"].dispatch.vaccine.update(t),u["a"].commit.snack.OPEN({text:"Vaccine ".concat(t.name," updated successfully")})},onDelete:function(t){u["a"].dispatch.vaccine.delete(t),u["a"].commit.snack.OPEN({text:"Vaccine ".concat(t.name," deleted successfully")})},notificationClick:function(t){u["a"].dispatch.vaccine.toggleNotification(t),u["a"].commit.snack.OPEN({text:"Notification updated!"})}}}),h=d,p=i("2877"),f=i("6544"),m=i.n(f),v=(i("6ca7"),i("ec29"),i("9d26")),b=i("c37a"),k=(i("4de4"),i("45fc"),i("5607")),g=s["a"].extend({name:"rippleable",directives:{ripple:k["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),x=i("8547"),y=i("58df"),V=Object(y["a"])(b["a"],g,x["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=b["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),C=V.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(o["a"])({},b["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(v["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(o["a"])({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),w=i("62ad"),I=i("132d"),S=i("0fd9"),_=i("8654"),A=i("3a2f"),N=Object(p["a"])(h,n,a,!1,null,null,null);e["default"]=N.exports;m()(N,{VCheckbox:C,VCol:w["a"],VIcon:I["a"],VRow:S["a"],VTextField:_["a"],VTooltip:A["a"]})},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-11918deb.f9542544.js.map
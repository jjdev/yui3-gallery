YUI.add("gallery-bidi-textinput",function(B){function A(){A.superclass.constructor.apply(this,arguments);}A.NS="bidi";A.NAME="bidiTextInput";B.extend(A,B.Plugin.Base,{initializer:function(){this.afterHostEvent("valueChange",function(){var D=this.get("host"),C=D.get("value"),E=B.Intl.bidiDirection(C);D.setDirection(E);});}});B.namespace("Plugin");B.Plugin.BidiTextInput=A;},"gallery-2010.06.16-19-51",{requires:["plugin","gallery-value-change","gallery-intl-bidi","gallery-node-setdir"]});
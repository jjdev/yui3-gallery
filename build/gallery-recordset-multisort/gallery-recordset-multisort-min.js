YUI.add("gallery-recordset-multisort",function(d){var b=d.ArraySort.compare,c=d.Lang.isValue,a=d.Lang.isArray;function e(f,g){e.superclass.constructor.apply(this,arguments);}d.mix(e,{NS:"multisort",NAME:"recordsetMultiSort",ATTRS:{lastSortProperties:{value:{fields:undefined,sorter:undefined},validator:function(f){return(a(f.fields)&&c(f.sorter));}},defaultSorter:{value:function(j,h,g){var f;for(var k=0;k<g.length&&!f;k++){f=b(j.getValue(g[k].field),h.getValue(g[k].field),g[k].desc);}return f;}},isSorted:{value:false}}});d.extend(e,d.Plugin.Base,{initializer:function(g){var f=this,h=this.get("host");this.publish("sort",{defaultFn:d.bind("_defSortFn",this)});this.on("sort",function(){f.set("isSorted",true);});this.onHostEvent("add",function(){f.set("isSorted",false);},h);this.onHostEvent("update",function(){f.set("isSorted",false);},h);},destructor:function(f){},_defSortFn:function(f){this.get("host")._items.sort(function(h,g){return(f.sorter)(h,g,f.fields);});this.set("lastSortProperties",f);},sort:function(f,g){this.fire("sort",{fields:f,sorter:g||this.get("defaultSorter")});},resort:function(){var f=this.get("lastSortProperties");this.fire("sort",{fields:f.fields,sorter:f.sorter||this.get("defaultSorter")});},reverse:function(){this.get("host")._items.reverse();},flip:function(){var g=this.get("lastSortProperties");if(a(g.fields)){for(var f=0;f<g.fields.length;f++){g.fields[f].desc=!g.fields[f].desc;}this.fire("sort",{fields:g.fields,sorter:g.sorter||this.get("defaultSorter")});}else{}}});d.namespace("Plugin").RecordsetMultiSort=e;},"@VERSION@",{requires:["arraysort","recordset-base","plugin"],skinnable:false});
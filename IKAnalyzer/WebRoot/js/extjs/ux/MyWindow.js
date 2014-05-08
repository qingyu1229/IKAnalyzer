//define的类名，一点要严格按照包层次路径去编写
Ext.define('js.extjs.ux.MyWindow',{
		extend:'Ext.window.Window' , //继承Ext的window类
		title:'我是动态加载进来的组件',
		height:300 , 
		width:400 ,
		constrain:true , 
		modal:true , 
		html:'我是窗体的内容!!!!' , 
		renderTo:Ext.getBody()	
});
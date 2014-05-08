Ext.define('js.extjs.ux.Toast',{
	extend:'Ext.Component',
	alias:'widget.toast',
	initComponent:function(){
		var me = this;
		
		var msgCt;

		function createBox(t, s) {
			return [
					'<div class="msg">',
					'<div class="x-box-tl"><div class="x-box-tr"><div class="x-box-tc"></div></div></div>',
					'<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc" style="font-size:13px"><h3>',
					t,
					'</h3>',
					s,
					'</div></div></div>',
					'<div class="x-box-bl"><div class="x-box-br"><div class="x-box-bc"></div></div></div>',
					'</div>'].join('');
		}
		
		/**
		 * 信息提示
		 * @member Ext.ux.Toast
		 * @param {String}
		 *            title 标题
		 * @param {String}
		 *            format 内容
		 * ＠param {autoHide} 
		 * 			  autoHide 是否自动隐藏
		 * ＠param {pauseTime}
		 * 			  pauseTime 信息停留时间 
		 */
		me.msg = function(title, message, autoHide, pauseTime) {
			if (!msgCt) {
				msgCt = Ext.DomHelper.insertFirst(document.body, {
					id : 'msg-div',
					style : 'position:absolute;top:10px;width:250px;margin:0 auto;z-index:20000;'
				}, true);
			}

			// //给消息框右下角增加一个关闭按钮
			// message+='<br><span style="text-align:right;font-size:12px;
			// width:100%;">' +
			// '<font color="blank"><a style="cursor:hand;"
			// onclick="Ext.example.hide(this);">关闭</a></font></span>'

			var s = Ext.String.format.apply(String, Array.prototype.slice.call(
							arguments, 1));
			var m = Ext.DomHelper.append(msgCt, {
						html : createBox(title, s)
					}, true);
			msgCt.alignTo(document, 't-t');

			m.slideIn('t');

			if (!Ext.isEmpty(autoHide) && autoHide == true) {
				if (Ext.isEmpty(pauseTime)) {
					pauseTime = 1000;
				}
				
				//console.log('pauseTime==>'+pauseTime);
				
				// 在extjs4中m.pause(t)方法已经被标记为 
				//<strong style="font-size: 0.7em; border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; margin-left: 5px; padding: 0px 3px; color: white; background-color: #aa0000; font-family: HelveticaNeue, helvetica, arial, clean, sans-serif; line-height: 19px; white-space: normal;" class="deprecated signature">DEPRECATED</strong>
				m.ghost("t", {
							delay: pauseTime,
							remove : true
						});
			}
		}
		
		me.callParent();
		
		return me;
		
	},
	/**
	 * 隐藏提示框
	 * @param {} v
	 */
	hide : function(v) {
		var msg = Ext
				.get(v.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
		msg.ghost("t", {
					remove : true
				});
	}
},function(){
	Ext.ux.Toast = new this();
});
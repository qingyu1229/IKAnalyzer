

Ext.onReady(function() {
			Ext.QuickTips.init();
			new Ext.Viewport({
						layout : "border",
						padding : 1,
						items : [mainPanel]
					});
		});

var mainPanel = new Ext.form.Panel({
			xtype : 'form',
			region : 'north',
			frame : true,
			bodyPadding : 5,
			items: [
                {
                    xtype: 'panel',
                    title: 'IK分词测试',
                    items: [
                        {
                            xtype: 'label',
                            text: 'IK分词测试',
                            width: '100%'
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    activeTab: 1,
                    items: [
                        {
                            xtype: 'panel',
                            title: 'IK分词',
                            items: [
                                {
                                    xtype: 'textareafield',
                                    fieldLabel: '原文本',
                                    labelAlign: 'right',
                                     width: '100%',
                                    labelWidth: 60
                                },
                                {
                                    xtype: 'button',
                                    text: '分     词'
                                },
                                {
                                    xtype: 'textareafield',
                                    fieldLabel: '分词结果',
                                    labelAlign: 'right',
                                     width: '100%',
                                    labelWidth: 60
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Lucene测试',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '搜索',
                                    labelAlign: 'right',
                                    labelWidth: 50
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: '其他'
                        }
                    ]
                }
            ]
			
			
			});
// 创建一个Block类
var Block = Class.create(
    // 构造函数
    function(top, left, width, height){
        this.top = top;
        this.left = left;
        this.border = null;
    },
    // 属性方法
    {
        "init": function(){},
        "changeBg":function(){},
        "crossBorder":function(){}
    }
);
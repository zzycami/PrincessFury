// Utility, 工具对象
var Util = {
    // 判断对象是否是函数
    "isArray":function(argv){
        return Object.prototype.toString.call(argv) == "[object Array]";
    },
    // 对对象进行深拷贝
    "copy":function(_obj){
        var obj = {};
        for(var i in _obj){
            if(Util.isArray(_obj[i])) {
                obj[i] = _obj[i].slice(0);
            }else {
                obj[i] = _obj[i];
            }
        }
        return obj;
    },
    // 图片对象
    "images":["archers.png", "barbarianb.png", "bgs.png", "bishop.png", 
    "effects.png", "footmen.png", "knight.png", "lichboss.png", "mages.png", 
    "objects.png", "ogres.png", "pikemen.png", "princess.png", "princessboss.png",
    "userinterface.png", "vip.png"],
    // 保存载入以后得到的图片对象
    "imgObj":{},
    // 返回载入得到的图片对象
    "getImage":function(name){
        return this.imgObj[name];
    },
    // 载入图片素材， 在游戏初始化的时候需要载入所有的游戏素材
    "loadImage":function(){
        var root = "images/";//图片根目录
        var count = this.images.length;//得到所有图片素材的个数
        var num = 0;//已经载入的图片个数
        
        // 遍历本地图片素材数组， 载入所有的图片素材
        for(var i = 0;i<this.images.length;i++){
            var src = root + this.images[i];
            var image = new Image();
            // 重写图片的载入函数
            image.onload = function(){
                var name = src.split("/");
                name = name[name.length - 1].split(".")[0];
                Util.imgObj[name] = {
                    obj:this,
                    width:this.width,
                    height:this.height
                }
                
                num += 1;
                // 显示载入文字的DOM对象, 显示目前载入的进度
                loading.innerHTML = num + "/" + count;
                // 结束载入
                if(count == num){
                    return callBack && callBack();
                }
                this.onload = null;
            }
            // 这里才会真正的载入图片
            image.src = src;
        }
    }
}
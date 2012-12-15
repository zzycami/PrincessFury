/*
使用示例
//这里相当于创建了一个Hero的类
var Hero = Class.create(function(name){ 
    this.name =  name; 
},{ 
    addSkill: function(skill){ 
        // to do 
    } 
});
 
 // 这里得到了这个类的若干个对象
var hero1 = Hero.getInstance("半人马酋长"); 
hero1.addSkill("六级跳大"); 
var hero2 = Hero.getInstance("山岭巨人") 
hero2.addSkill("六级跳大");
var hero3 = Hero.getInstance("黑暗游侠"); 
hero3.addSkill("六级跳大");
*/

var Class = function(){
    var cached = {};
    // fn就相当于是一个类的构造函数
    // method就是该类中
    var create = function(fn, methods, parent){
        // 以下划线开头的变量都是该类的私有变量或者方法
        var _initialize;// 初始化
        var _instances = [];// 实例对象数组
        var instance;// 实例
        var _unique = 0;// 全局标记该类生成的对象的下标
        
        // 构造函数
        _initialize = function( args ){
            fn.apply(this, args);
        }
        
        if(parent) {
            _initialize.prototype = parent;
        }
        
        for(var i in methods) {
            _initialize.prototype[i] = methods[i];
        }
        
        _initialize.prototype.implement = function(){
            var fns = arguments[0].split('.');
            // 将arguments这个对象当成数组来使用调用slice方法，slice(start, [end])方法返回一个从start开始的项
            var args = Array.prototype.slice.call(arguments, 1);
            var fn = this;
            
            for(var i=0, c; c=fns[i++];){
                fn = fn[c];
                if(!fn){
                    alert("接口尚未实现!");
                }
                return fn.apply(this, args);
            }
        }
        
        var getInstance = function(){
            var args = Array.prototype.slice.call(arguments, 0);
            _instances[_unique ++] = new _initialize(args);
            return _instances[_unique - 1];
        }
        
        // 清除这个类所生成的所有对象
        var empty = function(){
            for(var i=0,c;c=_instances[i++];){
                c = null;
            }
            _instances = [];
            _instances.length = 0;
            _unique = 0;
        }
        
        // 得到由该类创建的对象的个数
        var getCount = function(){
            return _unique;
        }
        
        var getPrototype = function(){
            return _initialize.prototype;
        }
        
        var subClass = function(fn, methods){
            return Class.create(fn , methods, _instances[0]||getInstance());
        }
        
        var interfaces = function(key, fn){
            if(_initialize){
                _initialize.prototype[key] = fn;
            }
        }
        
        return {
            interfaces:interfaces,
            getInstance:getInstance,
            empty:empty,
            getCount:getCount,
            getPrototype:getPrototype,
            subClass:subClass
        }
    }
    
    return {
        create:create,
        getInstances:function(){
            return _instances;
        }
    }
}()
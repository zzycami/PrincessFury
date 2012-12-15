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
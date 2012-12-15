关于PricessFury(愤怒的公主)
=============
这是一款基于HTML5的横版动作游戏。

文件目录结构
-------------
	[PricessFury]
	  |--[images] //图片资源
	  | 
	  |--[scripts]   //脚本目录
	  |      |--class.js //对js进行访问控制设置
	  | 
	  |--index.html //游戏主页
	  |
	  |--style.css //主页样式
	  |
	  |--README.md
	  
	  
function.apply(obj, args)的例子代码
---------------------
	  function Person(name, age){
		    this.age = age;
		    this.name = name;
		    this.sayHello = function(){
		        alert("hello!");
		    }
		}
		
		// 显示类的属性
		function Print(){
		    this.funcName = "Print";
		    this.show = function(){
		        var msg = [];
		        for(var key in this){
		            if(typeof(this[key]) != "function"){
		                msg.push(["key", ":", this[key]].join(" "));
		            }
		        }
		        alert(msg.join(" "));
		    }
		}
		
		function Student(name, age, grade, school){
		    Person.apply(this, arguments);
		    Print.apply(this, arguments);
		    this.grade = grade;
		    this.shool = school;
		}
		
		function getMax(arr){
		    return Math.max.apply(null, arr);
		}
		
		var person1 = new Person("Zhou.Zeyong", 22);
		person1.sayHello();
		var student1 = new Student("Xiao.Ming", 10, 2, "杭州夏洐中学");
		student1.show();
		student1.sayHello();
		alert(student1.funcName);
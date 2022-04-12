///////////////////////////////////////////////////////////////////////放入var後的函式，this指向全域
var obj0 = {
    x : 2,
    obj1 : {
        x : 3,
        fn: function() {
        var test = function() {
        console.log(this.x)      //放變數test，this指向全域
        };
        test();
    }
    }
};

obj0.obj1.fn() //全域
obj0.obj1.fn.call(obj0.obj1) //全域
///////////////////////////////////////////////////////////////////////用that抓住this後, that進入放入var後的函式
var obj2 = {
    x : 2,
    obj3 : {
        x : 3,
        fn: function() {
        console.log(this);       //this指向obj之測試
        var that = this;         
        var test = function() {  //將具有that的函數放入test裡
        console.log(that.x)      //that指的是obj3的環境
        };
        test();
    }
    }
};

obj2.obj3.fn()   //this指向測試 與 obj的x:3
obj2.obj3.fn.call(obj2.obj3)   //同上一行
//() => {}.bind(this)
//////////////////////////////////////////////////////////////函數內的箭頭函數
const user1 = {
  name: 'abc',
  speak: function () {
    const arrow = () => {      //創造arrow所在地(speak{})的上一層環境(物件user1)
      console.log(this.name);   //arrow.bind(this)  //第一個
    }
    arrow();
  }
}

user1.speak();

const user2 = {
  name: 'abc',
  speak: () => {
    const arrow = () => {
      console.log(this.name);   //第二個
    }
    arrow();
  }
}

user2.speak();
//////////////////////////////////////////////////////////////物件內函式的箭頭函式
const obj = {
  x: "aaaaaa",
  y: function () { console.log(this); },
  hello: function () {
    const test = () => {
      console.log(this.x)
    }
    test()
  },
}

obj.y()          //obj的環境 //第三個
obj.hello()      //hello所在地的環境  //第四個this.x:aaaaaa
//////////////////////////////////////////////////////////////物件內的箭頭函式
const obj2 = {
  a: function () { console.log(this) },
  b: {                                        //b的上一層環境(即全域)
    c: () => { console.log(this) }
  }
}
obj2.a()   //obj2        //第五個
obj2.b.c()  //window     //第六個
//////////////////////////////////////////////////////////////
var info = {
  name: "A",
  changeName: function () {

    this.name = "B";

    var changeNameAgain = (() => {
      this.name = "C";
      console.log(info.name)
    })();                                   //() => {this}.bind(this), this指向花括號的this

  }
};

info.changeName();      //C 第七個

const globalCall = info.changeName;

globalCall();         //第八個
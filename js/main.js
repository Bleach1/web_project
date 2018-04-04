`这是一个
多行
字符串`;

//alert("js....")
var person = {
    name: "ljn",
    age: "27",
    nickname: "Bleach_One",
    HaSaKi: function (a, b) {
        return a + b;
    }
}
var str = "dsdgshgdhsdsdsd";

function test() {



    /*
     document.getElementById("demo").innerHTML = "段落已修改。";
     document.write("你好世界！"); //会进行覆盖操作
     查找 id="main" 的元素，然后查找 id="main" 元素中的所有 <p> 元素：
     var x=document.getElementById("main");
     var y=x.getElementsByTagName("p");
     document.getElementById(id).style.property=新样式

     */
    //alert(person.HaSaKi(1, 2))
    //console.log("Success");
}

/**
 * 组件
 * Vue.component() 要在Vue实例化之前
 * 名字 要小写
 * 模板中 只有一个跟标签
 */
Vue.component("first-component", {
    template: `<div>
                   <p>{{myself}}:使用组件中的模板初始化P标签</p>
                   <button v-on:click="changeName">改名</button>
               </div>`,
    data: function () {
        return {
            myself: "我自己"
        }
    },
    methods: {
        changeName: function () {
            this.myself = "God"
        }
    },
});
/**
 *
 *el: element 获取的html根元素
 *data:存储数据
 *  methods:方法
 */
new Vue({
    el: "#vue-app",
    data: {
        name: "Bleach",
        nickName: "HaSaKi",
        website: "Http://www.baidu.com",
        websiteTag: "<a href='Http://www.baidu.com'>AaAaAaAa</a>",
        x: 0,
        y: 0,
        inputName: "我是默认数据",
        a: 0,
        b: 0,
        age: 20,
        changeColor: false,
        changeLength: false,
        error: false,
        success: false,
        characters: ["Bleach", "OnePiece", "Yu-Gi-Oh!"],
        users: [
            {name: "黑崎一护", age: 27},
            {name: "路飞", age: 19},
            {name: "武藤游戏", age: 16}
        ],
        color: "blue"
    },
    methods: {//当methods被触发是 都会执行  耗费性能  Computed
        Hello: function (str) {
            alert(str + this.name + this.nickName)
        },
        UpdateXY: function (event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        logSomething: function () {
            //this.inputName = this.$refs.name.value;
        },
        /* addToA: function () {
             return this.a + this.age;
         },
         addToB: function () {
             return this.b + this.age;
         }*/

    },
    computed: {
//耗时操作 使用
        addToA: function () {
            return this.a + this.age;
        },
        addToB: function () {
            return this.b + this.age;
        },
        compClasses: function () {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }

    },
    directives: {
        ljn: {
            inserted: function (el, binding) {
                el.style = "color" + binding.value;
            }
        }
    },

});








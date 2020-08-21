
console.log(window.vue)
const Vue =window.Vue

Vue.config.productionTip = false

//引入的Demo就是一个组件
import Demo from "./Demo.vue";

Vue.component('Demo2',{
  template:`
  <div>demo2方式二</div>
  `
})
const vm = new Vue({
  //告诉程序我要使用的组件是谁，和它对应的值
  components:{
    Frank:Demo
  },
  data:{
    n:0,
    array:[1,2,3,4,5,6,7,8]
  },
  template:`
    <div class="red">
      {{n}}
      <button @click="add">+1</button>
      <Frank/>
      <Demo2 />
    <hr>
    {{filter()}}
    </div>
  `,
  methods:{
    add(){
      this.n+=1
    },
    filter(){
      return this.array.filter(i=>i%2===0)
    }
  }

})
vm.$mount('#frank')

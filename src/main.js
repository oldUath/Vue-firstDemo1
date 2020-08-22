
console.log(window.vue)
const Vue =window.Vue

Vue.config.productionTip = false

import Demo from './Demo.vue'

const vm = new Vue({
  //不用render渲染的方法
  components:{Demo},
  data:{
    visible:true,
    n:0
  },
  template:`
      <div>
        {{n}}
        <Demo :message="n" :fn="add" />
      </div>
  `,
  methods:{
    add(){
      this.n+=1
    },
    toggle(){
      this.visible=!this.visible
    }
  }

  // render: h => h(Demo)
})
vm.$mount('#frank')

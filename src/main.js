
console.log(window.vue)
const Vue =window.Vue

Vue.config.productionTip = false

import Demo from './Demo.vue'

const vm = new Vue({
  //不用render渲染的方法
  components:{Demo},
  data:{
    visible:true
  },
  template:`
      <div>
        <button @click="toggle">toggle</button>
        <hr>
        <Demo v-if="visible === true" />
      </div>
  `,
  methods:{
    toggle(){
      this.visible=!this.visible
    }
  }
  // render: h => h(Demo)
})
vm.$mount('#frank')

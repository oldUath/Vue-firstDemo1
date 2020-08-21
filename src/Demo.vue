<template>
<!-- 写视图 -->
    <div class="red">
        demo
    </div>
</template>

<script>
// 除了视图外的其他选项
export default {
    data(){
        return {
            n:0
        }
    },
    methods:{
        add(){
            this.n+=1
        }
    }
};
</script>

<style scoped>
.red{
    color:red;
}
</style>
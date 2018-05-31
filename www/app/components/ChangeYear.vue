<template>
    <div class="box">
        <h2>年选择器</h2>
        <button @click="goPrev">-</button>
        <a href="javascript:;" @click="tdview()">{{year}}年</a>{{month}} 月
        <button @click="goNext">+</button>
    </div>

</template>

<script>
    export default {
        props:["year","month","setYear","setMonth","setView"],
        methods: {
            goPrev(){
                if(this.year<1900)return;
                    this.setYear(this.year-1)

            },
            goNext(){
                    this.setYear(this.year+1);
            },
            tdview(){
                this.setView("month")
            }
        }
    }
</script>

<style scoped lang="less">
    .box {
        margin: 10px auto;
        height: 60px;
        button {
            width: 30px;
            height: 30px;
            text-align: center;
        }
    }

</style>
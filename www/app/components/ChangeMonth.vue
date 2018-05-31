<template>
   <div class="box">
       <h2>月选择器</h2>
       <button @click="goPrev">-</button>
       <a href="javascript:;" @click="setView('year')">{{year}} </a> 年 {{month}} 月
       <button @click="goNext">+</button>
   </div>

</template>

<script>
    export default {
        name: "ChangeMonth",
        props:["year","month","setYear","setMonth","setView"],
        methods: {
            goPrev(){
              if (this.month>1){
                  this.setMonth(this.month-1)
              }else{
                  this.setYear(this.year-1);
                  this.setMonth(12)
              }
            },
            goNext(){
                if (this.month>=12){
                    this.setYear(this.year+1);
                    this.setMonth(1)
                } else {
                    this.setMonth(this.month+1)
                }
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
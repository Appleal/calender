<template>
    <div class="box">
        <table>
            <tr v-for="i in 10">
                <td v-for="j in 3" :class="{cur:year==showYear(i,j)}" @click="tdclick(i,j)">
                    {{showYear(i,j)}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: ["year","setView","setYear"],
        computed: {
            arr() {
                var _arr = [];
                var tou = this.year - this.year % 10 - 10;
               for(var i=tou;i<tou+30;i++){
                   _arr.push(i)
               }
              return _arr
            }
        },
        methods:{
            showYear(i,j){
                return this.arr[(j-1)*10+(i-1)]
            },
            tdclick(i,j){
                this.setYear(this.showYear(i,j));
                this.setView('month');
            }
        }
    }
</script>

<style scoped lang="less">
    table,tr,td{
        border-collapse: collapse;
        border: 1px solid #000;
    }
    td{
        width: 100px;
        height: 60px;
    }
    .cur{
        color:red;
        font-weight: bold;
    }


</style>
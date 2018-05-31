<template>
    <div class="box">

        <table>
            <th v-for="i in weeks">{{i}}</th>
           <tr v-for="i in 6">
               <td v-for="j in arr.slice((i-1)*7,i*7)">
                   <p class="p1">{{j.d}}</p>
                   <p class="p2">{{j.n.dayCn}}</p>
               </td>

           </tr>
        </table>
    </div>
</template>

<script>
    import solarLunar from "solarlunar"
    export default {
        name: "monthView",
        props:["year","month"],
        data(){
            return{
                weeks:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
            }
        },
        computed:{
            arr(){
                //用一个数组去储存那些数字
                var _arr = [];
                //本月1号是星期几，来计算出上月留下来多少天
              var xingqi = new Date(this.year,this.month-1,1).getDay();
                //本月多少天
                var days = new Date(this.year,this.month,0).getDate();
                //上月多少天
                var nextDays = new Date(this.year,this.month-1,0).getDate()
                // console.log(week,days,nextDays)
                for (var i=0;i<xingqi;i++){
                    _arr.unshift({
                        d: nextDays-i,
                        n:solarLunar.solar2lunar(this.year,this.month-1,nextDays-i)

                    })
                }
                for (var i=1;i<=days;i++){
                    _arr.push({
                        d:i,
                        n:solarLunar.solar2lunar(this.year,this.month,i)
                    })
                }
                var i = 1;
                while (_arr.length!==42){
                    _arr.push({
                        d:i++,
                        n:solarLunar.solar2lunar(this.year,this.month+1,i)
                    })
                }
              return _arr;

            }
        }
    }
</script>

<style lang="less" scoped>
    table,tr,th,td{
        border: 1px solid #000;
        border-collapse: collapse;
    }
    td{
        width: 80px;
        height: 50px;
        text-align:center;
    }
    p{
        padding: 0;
        margin:0;
    }
    .p1{font-weight:bold;}
    .p2{color:#666;}
</style>
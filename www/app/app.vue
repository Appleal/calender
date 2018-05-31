<template>
    <div class="box">
        <changemonth
        :year="year"
        :month="month"
        :setYear="setYear"
        :setMonth="setMonth"
        :setView="setView"
        v-if="view == 'month'"
        ></changemonth>

    <monthview :year="year" :month="month"  v-if="view == 'month'">
    </monthview>
        <changeyear  :year="year"
                     :month="month"
                     :setYear="setYear"
                     :setMonth="setMonth"
                     :setView="setView"
                     v-if="view == 'year'"></changeyear>
        <yearview :year="year"
                  :setYear="setYear"
                  :setView ="setView"
                  v-if="view=='year'"></yearview>

    </div>
</template>

<script>
    import monthview from "./components/monthView.vue"
    import changemonth from "./components/ChangeMonth.vue"
    import yearview from "./components/YearView.vue"
    import changeyear from "./components/ChangeYear.vue"

    export default {
        components:{
            monthview,
            changemonth,
            yearview,
            changeyear
        },
        data(){
            return {
               year:2018,
                month:5,
                view:'month'
            }
        },
        methods:{
            setYear(year){
                this.year = year;
            },
            setMonth(month){
                this.month = month;
            },
            setView(view){
                this.view = view;
            }
        }
    }
</script>

<style lang="less" scoped>
.box{
    width: 80%;
    margin: 0 auto;
    text-align: center;
}
</style>
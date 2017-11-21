<template>
    <div>
        <div v-for="(day, index) in days" :key="index">{{ day }}</div>
    </div>
</template>
<script>
export default {
    data() {
       return {
           month: 11,
           year: 2017
       }
    },
    computed: {
        days() {
            let days = [];
            let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
            do {
                days.push(currentDay);
                currentDay = this.$moment(currentDay).add(1, 'days');
            } while ( (currentDay.month() + 1)  === this.month );
            return days;
        }
    }
}
</script>


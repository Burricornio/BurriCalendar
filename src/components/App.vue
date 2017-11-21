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

            // Generamos todos los días en el mes actual
            let days = [];
            let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
            do {
                days.push(currentDay);
                currentDay = this.$moment(currentDay).add(1, 'days');
            } while ( (currentDay.month() + 1)  === this.month );

            // Añadimos los dias previos al principio del calendario
            currentDay = this.$moment(days[0]);

            const SUNDAY = 0;
            const MONDAY = 1;

            if (currentDay.day() !== MONDAY) {
                do {
                    currentDay = this.$moment(currentDay).subtract(1, 'days');
                    days.unshift(currentDay);
                } while (currentDay.day() !== MONDAY);
            }

            // Añadimos los primeros dias del siguiente mes al final del calendario
            currentDay = this.$moment(days[days.length - 1]);

            if (currentDay.day() !== SUNDAY) {
                do {
                    currentDay = this.$moment(currentDay).add(1, 'days');
                    days.push(currentDay);
                } while (currentDay.day() !== SUNDAY);
            }
            
            return days;
        }
    }
}
</script>


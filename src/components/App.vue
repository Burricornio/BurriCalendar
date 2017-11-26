<template>
    <main>
       <header-calendar></header-calendar>
       <bar-day></bar-day>
        <div id="calendar">
            <div v-for="(week, index) in weeks" :key="index" class="calendar-week">
                <calendar-day v-for="(day, index) in week" :key="index" :day="day"></calendar-day>
            </div>
        </div>
    </main>
</template>

<script>

import HeaderCalendar from './HeaderCalendar.vue';
import BarDay from './BarDay.vue'
import CalendarDay from './CalendarDay.vue';

export default {
    components: {
        HeaderCalendar,
        CalendarDay,
        BarDay
    },
    computed: {
        month() {
            return this.$store.state.currentMonth;
        },
        year() {
            return this.$store.state.currentYear;
        },
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
        },
        weeks() {
            let weeks = [];
            let week = [];

            for (let day of this.days) {
                week.push(day);
                if (week.length === 7) {
                    weeks.push(week);
                    week = [];
                }
            }

            return weeks;
        }
    }
}
</script>


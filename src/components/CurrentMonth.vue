<template>
    <div>
        <div>{{ formattedDate }}</div>
        <button @click="dec">-</button>
        <button @click="inc">+</button>
    </div>
</template>
<script>
export default {
    computed: {
        month() {
            return this.$store.state.currentMonth;
        },
        year() {
            return this.$store.state.currentYear;
        },
        formattedDate() {
            return this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D').format('MMMM YYYY');
        }
    },
    methods: {
        dec() {
            console.log('dec')
        },
        inc() {
            console.log('inc')
        }
    }
}
</script>


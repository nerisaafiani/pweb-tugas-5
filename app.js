const app = Vue.createApp({
    data() {
        return {
            angka1: '',
            angka2: '',
            operator: '',
            hasil: ''
        }
    },
    methods: {
        calculate: function() {
            const n1 = parseFloat(this.angka1)
            const n2 = parseFloat(this.angka2)

            switch (this.operator) {
                case '+':
                    this.hasil = n1 + n2
                    break;
                case '-':
                    this.hasil = n1 - n2
                    break;
                case '*':
                    this.hasil = n1 * n2
                    break;
                case '/':
                    this.hasil = n1 / n2
                    break;
            }
        }
    }
})
app.mount('#app')
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

class BudgetElement {
    title: string;
    planned: number;
    remaining: number;

    constructor(title: string, planned: number, remaining: number) {
        this.title = title;
        this.planned = planned;
        this.remaining = remaining;
    }
}
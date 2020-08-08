import '@babel/polyfill'
import App from './App'

const app = new App({
    target: document.body,
    props: {
        name: 'Svelte'
    }
})
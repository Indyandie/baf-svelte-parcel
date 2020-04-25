import '@babel/polyfill'
import App from './Components/App'

const app = new App({
    target: document.body,
    props: {
        name: 'world'
    }
})
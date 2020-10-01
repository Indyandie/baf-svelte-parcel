import App from './App.svelte'

// const app = new App({
//     target: document.body,
//     props: { 
//         name: 'Svelte'
//     }
// })


if (module.hot) {
    module.hot.accept()
}

// HMR is not working this is a  workaround
const target = document.body
target.innerHTML = ''
new App({ 
    target,
    props: { 
        name: 'Svelte'
    }
})
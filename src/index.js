import App from './App.svelte'

const app = new App({
    target: document.body
})


if (module.hot) {
    module.hot.accept()
}

// HMR is not working this is work around
// const target = document.body
// target.innerHTML = ''
// new App({ target })
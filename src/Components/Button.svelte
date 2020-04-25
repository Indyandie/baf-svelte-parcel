<script>
    export let buttonName = 'button'

    function buttonMsg(params) {
        alert(`I am button: ${buttonName}`)
    }
</script>

<style>
    button {
        font-size: 1em;
        padding: 12px;
        color: white;
        background: tomato
    }
</style>

<button on:click={buttonMsg}> {buttonName} </button>
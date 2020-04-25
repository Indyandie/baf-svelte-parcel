<script>
  import Button from './Button'
  export let name = "anon";
</script>

<style>
  h1 {
    color: rosybrown
  }

  p {
    font-size: 1.5em
  }
</style>

<h1>App</h1>

<p>
  Hello {name}!
</p>

<Button/>
<Button buttonName={"Hello"}/>


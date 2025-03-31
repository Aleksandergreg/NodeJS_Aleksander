<script>
    import { fridgeMessages } from "../../stores/fridgemessagesStore.js";
    //alle stores skal have en subscribe, så når man kalder dette komponent ved svelte at det skal opdateres
    console.log($fridgeMessages);
</script>

{#each $fridgeMessages as fridgeMessage}
   <p> {fridgeMessage.message} </p>
    
{/each}
<h3 id="welcome-mat">Home Sweet Home</h3>
<slot></slot>



<style>
    #welcome-mat {
        background-color: rgb(26, 187, 42);
        padding: 20px;
        border-radius: 0 0 12px 12px;
    }
</style>
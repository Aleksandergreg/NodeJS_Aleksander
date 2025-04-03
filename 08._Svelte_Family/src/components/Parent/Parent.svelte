<script>
  import Child from "../Child/Child.svelte";
  import { fridgeMessages } from "../../stores/fridgemessagesStore.js";
  import toast from 'svelte-5-french-toast';

  // Get props using Svelte 5 runes
  const { name: parentName, children } = $props();

  // State for the cookie jar using Svelte 5 runes
  let cookieJar = $state(["🍪","🍪","🍪","🍪"]);

  // Handler for the 'showLove' event from Child component
  function handleShowLove(childName) {
    console.log(`${childName} loves ${parentName} very much! 💙`);
  }

  // Handler for the 'eatCookie' event from Child component
  function handleEatCookie(childName) {
    if (cookieJar.length > 0) { // Check if there are cookies left
         cookieJar.pop();
         console.log(`${childName} eats a cookie`);

         // Show a success toast with specific position override
         toast.success(
             `${childName} enjoyed a cookie! 🍪`,
             { position: "top-right" } // Override position here
         );

         if(cookieJar.length === 0){
             // Refill toast uses default position (bottom-center)
             toast('Cookie jar refilled!');
             cookieJar = ["🍪","🍪","🍪","🍪"];
         }
    } else {
         // Error toast uses default position (bottom-center)
         toast.error('Uh oh, the cookie jar is empty!');
    }
  }

  // Function to wipe fridge messages and show a notification
  function wipeAndNotify() {
    fridgeMessages.wipe();
    // Wipe toast uses default position (bottom-center) unless overridden
    toast.success('Fridge messages wiped clean!');
  }

</script>

<button onclick={wipeAndNotify}> Wipe fridge </button>

<p>
  {#if cookieJar.length > 0}
    {#each cookieJar as cookie}
      {cookie}
    {/each}
  {:else}
    (empty)
  {/if}
</p>

<h1>{parentName}</h1>

{#each children as child (child.name)}
    <Child
      {...child}
      onShowLove={handleShowLove}
      onEatCookie={handleEatCookie}
    />
{/each}

<style>
    h1 {
        color: cornflowerblue;
        margin-top: 1rem;
    }
    p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
    }
     button {
        margin-top: 0.5rem;
        margin-right: 0.5rem; /* Add some space between buttons if needed */
        padding: 0.3rem 0.6rem;
        cursor: pointer;
    }
</style>
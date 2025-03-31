<script>
  import Child from "../Child/Child.svelte";
  import { fridgeMessages } from "../../stores/fridgemessagesStore.js";

const { name: parentName, children } = $props();

function handleShowLove(childName) {
    console.log(`${childName} loves ${parentName} very much! 💙`);
}

let cookieJar = $state(["🍪","🍪","🍪","🍪"]);

function handleEatCookie(childName) {
  cookieJar.pop();

  console.log(`${childName} eats a cookie`)

  if(cookieJar.length=== 0){
    cookieJar = ["🍪","🍪","🍪","🍪"];
  }
}

// function wipe() {
//     fridgeMessages.set([]);
// }


</script>

<button onclick = {fridgeMessages.wipe}> Wipe fridge </button>

<p>
{#each cookieJar as cookie }
{cookie}
    
{/each}
</p>
<h1>{parentName}</h1>

{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onEatCooki={handleEatCookie} />   
{/each}
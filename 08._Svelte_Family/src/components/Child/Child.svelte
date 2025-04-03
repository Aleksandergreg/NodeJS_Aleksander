<script>
    // Destructure props - Use the correct prop name 'onEatCookie'
    const { name, familySheep, isGirl, onShowLove, onEatCookie } = $props();

    import { fridgeMessages } from "../../stores/fridgemessagesStore.js";
    import { createEventDispatcher } from 'svelte'; // Needed if using dispatch later

    // Note: If you were using event dispatching instead of passing callbacks
    // you would use: const dispatch = createEventDispatcher();
    // and the button would be: <button on:click={() => dispatch('eatCookie', name)}>Eat cookie</button>
    // But since you are passing the handler function directly as a prop,
    // calling onEatCookie(name) is the correct approach for *this* setup.

    let fridgeMessageInput = $state("");

    function writeMessageOnFridge() {
        // Assuming $fridgeMessages works with runes or you import and subscribe
        // A safer way with stores is usually using the update method:
        fridgeMessages.update(currentMessages => [
            ...currentMessages,
            { message: fridgeMessageInput }
        ]);

        fridgeMessageInput = "";
    }
</script>

<div
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
    class={familySheep || "not-a-sheep"}
>
    <h3>{name}</h3>
</div>

<button onclick={() => onShowLove(name)}>Show love</button>

<button onclick={() => onEatCookie(name)}>Eat cookie</button>

<br>

<input bind:value={fridgeMessageInput} placeholder="Write on fridge...">
<button onclick={writeMessageOnFridge}>Write message</button>

<style>
    div {
        padding: 1em;
        margin: 0.5em 0;
        color: white;
        min-height: 50px; /* Ensure div has some height */
    }
    button {
        margin: 0.2em;
        padding: 0.3em 0.6em;
    }
    input {
        margin-right: 0.5em;
    }
    .is-boy {
        background-color: blue;
    }
    .is-girl {
        background-color: chartreuse;
        color: #333; /* Darker text for light background */
    }
    .not-a-sheep {
        border: 0.5em solid goldenrod;
    }
    .grey-sheep {
        border: 0.5em solid pink;
    }
    .black-sheep {
        border: 0.5em solid purple;
    }
</style>
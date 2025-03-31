<script>
    //destructure den = henter den ud af props
    const { name, familySheep, isGirl, onShowLove, onEatCooki  } = $props();

    import { fridgeMessages } from "../../stores/fridgemessagesStore.js";

    let fridgeMessageInput = $state("");

    function writeMessageOnFridge() {

        fridgeMessages.set(
            [...$fridgeMessages,
            {
                message: fridgeMessageInput
            }
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

<!-- task create an input field and a button and when the button is clicked, log the value of the input -->



<button onclick={() => onShowLove(name)} >Show love</button>

<button onclick={() => onEatCooki(name)}>Eat cookie</button>

<br>


<input bind:value={fridgeMessageInput}>
<button onclick={writeMessageOnFridge}>Write message</button>

<style>
    .is-boy {
        background-color: blue;
    }

    .is-girl {
        background-color: chartreuse;
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

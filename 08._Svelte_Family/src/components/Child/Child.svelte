<script>
    const { name, familySheep, isGirl,  } = $props();
</script>
<div
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
    class={familySheep || "not-a-sheep"}
>
    <h3>{name}</h3>
</div>

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

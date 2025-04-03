<script lang="ts">
    // Import the Toaster component and its position type from the library
    import { Toaster as FrenchToastToaster, type ToastPosition } from 'svelte-5-french-toast';

    // Define an exported prop 'position' with TypeScript type and a default value
    export let position: ToastPosition = "top-right";
</script>

<FrenchToastToaster {position} />
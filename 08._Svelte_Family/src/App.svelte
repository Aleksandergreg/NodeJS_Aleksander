<script>
  // Import necessary components and functions
  import Home from "./components/Home/Home.svelte"; // Assuming this component exists
  import Parent from "./components/Parent/Parent.svelte";
  import toast from 'svelte-5-french-toast';
  import CustomToaster from "./components/Toaster/Toaster.svelte";

  // Define data for parents and children
  const parentNames = ["Gurli", "Rene"];
  const children = [
    { name: "Kain", familySheep: "black-sheep" },
    { name: "Abel", familySheep: "grey-sheep" },
    { name: "Leona", isGirl: true }
  ];

  // Function to show a success toast
  function showSuccess() {
    toast.success('It works with Svelte 5!');
  }
</script>

<Home>
  <Parent name={parentNames[0]} children={children} />
  <Parent name={parentNames[1]} children={children} />
</Home>

<CustomToaster position="bottom-center" />

<button on:click={showSuccess}>Show Toast</button>

<style>
  /* Optional: Add some basic styling if needed */
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
</style>
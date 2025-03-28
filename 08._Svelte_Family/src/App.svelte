<script>
  import Children from "./components/Child/Child.svelte";
import Home from "./components/Home/Home.svelte";
  import Parent from "./components/Parent/Parent.svelte";

  const parentNames = ["Gurli","Rene"];
  const children = [
    {
      name: "Kain",
      familySheep: "black-sheep"

    },
    {
      name: "Abel",
      familySheep: "grey-sheep"
    },
    {
      name: "Leona",
      isGirl: true
    }
  ]

</script>
<!-- Name your .svelte files with pascal case because it refers to classes, and also so that we can distuingish it between html and components -->

<Home>
  <Parent name={parentNames[0]}  children={children} />
  <Parent name={parentNames[1]}  children={children} />
</Home>
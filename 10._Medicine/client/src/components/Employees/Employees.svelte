<script>
    let employees = $state([]);

    fetch("http://localhost:8080/employees")
    .then((response) => response.json())
    .then((result) => {
        employees = result.data;
    } )

</script>

<h3>Employees Available</h3>
<h4>...</h4>
{#each employees as employee }
    <h4>{employee}</h4>
    {/each}
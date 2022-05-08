<script>
	import SearchFilter from '$lib/SearchFilter.svelte';
    import Field from '$lib/Field.svelte'
    import BetterAccordion from '$lib/BetterAccordion.svelte'
    import Toggle from '$lib/Toggle.svelte'
    let isToggled = false;
    let items = [
        "coffee",
        "tea",
        "pepsi",
        "bbt",
        "sprite",
        "juice",
        "Coke",
    ];
    let search = '';
</script>

<h1>Welcome to Level UI {search}</h1>

<Field bind:value={search} label="Search" instructions="Type to search" placeholder="Ice Water" />
<Field value={0} label="Number" type="number" />

<SearchFilter {items} bind:search />

<!-- <BetterAccordion isOpen={true} buttonText="Do I need a credit card?">
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aliquam, corrupti tenetur assumenda iure facilis accusantium iste aliquid vitae odio quaerat ducimus et vel animi explicabo amet debitis, ratione fugiat.
    </p>
</BetterAccordion> -->

<!-- <Toggle bind:isToggled label="Beta" />
<Toggle bind:isToggled label="Beta" style="--toggleBackgroundColor: red;" /> -->

{#if isToggled}
    <h1>I'm toggled</h1>
{/if}
<script>
	import Markdown from '$lib/Markdown.svelte';
	import SearchFilter from '$lib/SearchFilter.svelte';
    import Field from '$lib/Field.svelte'
    import Portal from '$lib/Portal.svelte';
    import Modal from '$lib/Modal.svelte';
    import Toast from "$lib/toast/Toast.svelte";
    import { toast } from '$lib/toast/toast'
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
    let text = '';
    // $: console.log(text);
    let isModalOpen = false;
    
</script>

<h1>Welcome to Level UI {search}</h1>
<!-- <Portal>
    <Markdown bind:text />
</Portal> -->

<Modal bind:isModalOpen>
    <div style="background: white; box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3)">
        <Field bind:value={search} label="Search" instructions="Type to search" placeholder="Ice Water" />
        <Field value={0} label="Number" type="number" />
    </div>
</Modal>

<Toast />

<button on:click={() => toast.send('NEW MESSAGE!')}>New Toast</button>
<!-- <button on:click={() => (isModalOpen = true)}>Open Modal Form</button> -->

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
<script>
    import BetterAccordion from '$lib/BetterAccordion.svelte'
    import Toggle from '$lib/Toggle.svelte'
    let isToggled = false;
</script>

<h1>Welcome to Level UI</h1>

<BetterAccordion isOpen={true} buttonText="Do I need a credit card?">
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aliquam, corrupti tenetur assumenda iure facilis accusantium iste aliquid vitae odio quaerat ducimus et vel animi explicabo amet debitis, ratione fugiat.
    </p>
</BetterAccordion>

<Toggle bind:isToggled label="Beta" />
<Toggle bind:isToggled label="Beta" style="--toggleBackgroundColor: red;" />

{#if isToggled}
    <h1>I'm toggled</h1>
{/if}
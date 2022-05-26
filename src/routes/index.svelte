<script context="module">
	import Shopcard from "./Shopcard.svelte"; 

	export const prerender = true;

</script>
		

<svelte:head>
	<title>Best reviews!</title>
	<meta name="description" content="Best reviews!" />
</svelte:head>





<section>
	
	
	<Shopcard  />
	

	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}




</style>

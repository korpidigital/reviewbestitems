<script context="module">
	import Shopcard from "./Shopcard.svelte"; 
	import { shops } from "./shopinfo";
	export const prerender = true;



	
</script>
		


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Best reviews!" />
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<p>
				ReviewBestItems.com
			</p>
			<p>
				Best item reviews for 2022
			</p>
		</div>
	</h1>

	<h2>
		Add shop card
	</h2>
	
	
	
	
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

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		background-color: antiquewhite;
	}


</style>

<script context="module">
	import Shopcard from "./Shopcard.svelte"; 
	import '../title.css';
	import { shops } from "./shopinfo";
	export const prerender = true;



	
</script>
		


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Best reviews!" />
</svelte:head>

<section>
	<div id="wrapper">
  
		<p id="stars"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></p>
		<p id="title" contenteditable="true" spellcheck="false"><span>REVIEWBESTITEMS</span><span>.</span><span>COM</span></p>
		<p id="slogan"><span>Compare</span> best products for <span> you </span>.</p>
		
	  </div>
	  
	
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

<script>
import Header from "../Header.svelte"; 
import Nav from "../Nav.svelte"; 
import '../app.css';
</script>
<Nav />
<Header />

<main>
	<slot />
</main>

<footer>
	<p>As an Amazon Associate I earn from qualifying purchases.</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;

		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}


	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		font-size: 11px;
		margin-top: 100px;
	}



	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}

</style>

<script>
import {shops} from  "./shopinfo";

 function handleClick() {
		alert('no more alerts')
	}
</script>



{#each  shops as shops, i}
    <div class="card">
        <div class="pic">
            <img src={shops.pic} alt="Italian Trulli">
            
        </div>
        <div class="desc">
            {shops.desc}
        </div>

        <div class="link">
 
            <button on:click|once={handleClick}>
                Go to review
            </button>
            
        </div>

    </div>
{/each}

<style>
.card{
    flex-direction: row;
    height: 150px;
    width: 100%;
    display: flex;
    padding: 10px;
}

img {
 
  height: 150px;
  object-fit: contain;
}
.pic{
 width: 20%;
 text-align: center;
}
.desc{
    width: 60%;
}
.link{

}
</style>
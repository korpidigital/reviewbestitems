<script>
import {shops} from  "./shopinfo";
import { goto } from '$app/navigation';

const handleClick = (/** @type {string} */ route) => {
        goto("/"+route);
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
            <button on:click={() => handleClick(shops.name)}> go to review </button>
            
        </div>

    </div>
{/each}

<style>
.card{
    flex-direction: row;
    height: 150px;
    width: 80%;
    display: flex;
    padding: 10px;
    border: 3px solid black;
    margin: 5px;
    border-radius: 25px;
}

img {
 
  height: 150px;
  object-fit: contain;
}
.pic{
 width: 30%;
 text-align: center;
 
}
.desc{
    width: 50%;
    text-align: center;
    font-size: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
button{
    height: 100%;
    width: 100%;
    background-color: greenyellow;
    text-transform: uppercase;
    font-weight: bold;
}
.link{
    width: 20%;
}
</style>
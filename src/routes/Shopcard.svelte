<script>
import {shops} from  "./shopinfo";
import { goto } from '$app/navigation';

const handleClick = (/** @type {string} */ route) => {
        goto("/"+route);
    }
</script>



{#each  shops as shops, i}
    
    <div class="card">
        <div class="desc">
            {shops.desc}
        </div>

        <div class="imggrid">
        <div class="pic">
            <img src={shops.pic1} alt="">
        </div>
        <div class="pic">
            <img src={shops.pic2} alt="">
        </div>
        <div class="pic">
            <img src={shops.pic3} alt="">
        </div>
        <div class="pic">
            <img src={shops.pic4} alt="">
        </div>
        </div>


        <div class="link">
            <button on:click={() => handleClick(shops.name)}> go to review </button>
            
        </div>

    </div>
{/each}

<style>
    .imggrid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
.card{
    flex-direction: column;;
    height: auto;
    width: 250px;
    display: flex;
    padding: 10px;
    margin: 10px;
    justify-content: space-between;
    background-color:  #e6e6e6;
    border: 1px solid black;
}

img {
 
  width: 120px;
  object-fit: contain;
}
.pic{
padding: 2px;
 text-align: center;

 
}
.desc{
    text-align: center;
    font-size: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
   
    
}

button{
    height: 100%;
    width: 100%;
    background-color: greenyellow;
    text-transform: uppercase;
    font-weight: bold;
    
    
  
}
.link{
    width: 30%;
    display:block;
    margin:0 auto;

}
</style>
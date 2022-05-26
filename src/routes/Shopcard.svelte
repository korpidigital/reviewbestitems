<script>
import {shops} from  "./shopinfo";
import { goto } from '$app/navigation';

const handleClick = (/** @type {string} */ route) => {
        goto("/"+route);
    }
</script>



{#each  shops as shops, i}
    
    <div class="card" on:click={() => handleClick(shops.name)}>
        <div class="desc">
            {shops.desc}
        </div>

        <div class="imggrid">
            <div class="vs"><span class="v">V</span> <span class="lightning">&#128498;</span>  <span class="s">S</span> </div>
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


        <div class="goto">
            GO TO REVIEW
            
        </div>

    </div>
{/each}

<style>

.v{
    position: absolute;
    top: -20%;
    left: 10%;
   
}
.s{
    position: absolute;
    top: 20%;
    right: 20%;
   
}
.vs{
    font-size: 70px;
    position: absolute;
    margin: 0 auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    letter-spacing: -20px;
    top: 25%;
    left: 25%;
    color: #FF69B4;
  text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
     background: rgba(255, 255, 255, 0.7);
     padding-right: 50px;
     padding-left: 30px;
     padding-bottom: 10px;
     border-radius: 50px;

    
  
}
.imggrid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
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
.card:hover{
    cursor: pointer;
}

img {
 
  width: 120px;
  height: 120px;
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
    height: 50px;
    padding-bottom: 5px;
   
    
}


.goto{
    width: 100%;
    display:block;
    margin:0 auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    text-align: center;
    

}
</style>
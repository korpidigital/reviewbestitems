<script>
    import {drones} from  "./iteminfo";
    import { goto } from '$app/navigation';
    
    const handleClick = (/** @type {string} */ route) => {
            goto("/"+route);
        }
    </script>
    
    
    
    {#each  drones as item, i}
        
        <div class="card">
            <div class="pic">

                
            </div>
            <div class="desc">
           
            </div>
    
            <div class="link">
         
                
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
    @media screen and (max-width:560px){
        .desc{
            font-size:20px !important;
        }  
    }
    button{
        height: 100%;
        width: 100%;
        background-color: greenyellow;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 25px;
        
      
    }
    .link{
        width: 30%;
        display:block;
        margin-left:auto;
        margin-right: 0;
    }
    </style>
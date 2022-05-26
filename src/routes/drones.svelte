<script>
    import {drones} from  "./iteminfo";
    import { goto } from '$app/navigation';
    
    const handleClick = (/** @type {string} */ route) => {
            goto("/"+route);
        }
    </script>
    
    <div class="all">
     <div class="title">{drones[0].title}</div>
    {#each  drones as item, i}
        
        <div class="card">
            <!-- col1 name, pic, details -->
            <div class="col col1">
   
                <div class="pic">
                    <img src={item.pic} alt="">
                </div>
                <div class="link">
                    <button on:click={() => handleClick()}>
                        CHECK PRICE
                    </button>
                </div>
        
            </div>
            <!-- col2 reviews -->
            <div class="col">
                <div class="name">
                    {item.name}
                    
                </div>
                <div class="details">
                    <ul>
                        <li>{item.detail1}</li>
                        <li>{item.detail2}</li>
                        <li>{item.detail3}</li>
                    </ul>
                </div>
                <div class="name">
                    Reviews
                    <p><img class="star" src="star1.png" alt=""></p>
                </div>
                <div class="details">
                    <ul>
                        <blockquote><li>{item.review1}</li></blockquote>
                        <blockquote><li>{item.review2}</li></blockquote>
                        <blockquote><li>{item.review3}</li></blockquote>
                        <blockquote><li>{item.review4}</li></blockquote>
                    </ul>
                </div>
  
            </div>

    
        </div>



    {/each}
        </div>
    <style>
        .star{
            height: 20px;
        }
        button{
            width: 100%;
            height: 100%;
            min-height: 400px;
            font-weight: 700;
            background-color: #ffd633;
            color: black;
            border: none;
            font-size: 15px;
            border-radius: 15px;
            
            
            
        }
        .name{
            text-align: center;
            font-weight: 700;
        }
        .col{
            display: flex;
            flex-direction: column;
            padding: 2px;
            height: 100%;
        }
        .title{
            height: 30px;
            width: 100%;
            text-align: center;
            color: black;
            font-size: 40px;
            font-weight: 700;
            padding-bottom: 20px;
        
        }
        .all{
            margin-top: -120px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
        }
    .card{
        flex-direction: row;
        height: auto;
        width: 100%;
        display: flex;
        margin: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color:  #e6e6e6;
        padding: 4px;
  

        
    }
    .pic{
        padding-bottom: 70px;
        padding-top: 20px;
    }
    img {
        width: 120px;
        height: 120px;
        object-fit: contain;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }




    /* BLOCK QUOTE----------------------------------- */
    blockquote{
  display:block;
  background: #fff;
  padding: 15px 20px 15px 45px;
  margin: 0 0 20px;
  position: relative;
  
  /*Font*/
  font-family: Georgia, serif;
  font-size: 16px;
  line-height: 1.2;
  color: #666;
  text-align: justify;
  
  /*Borders - (Optional)*/
  border-left: 15px solid #c76c0c;
  border-right: 2px solid #c76c0c;
  
  /*Box Shadow - (Optional)*/
  -moz-box-shadow: 2px 2px 15px #ccc;
  -webkit-box-shadow: 2px 2px 15px #ccc;
  box-shadow: 2px 2px 15px #ccc;
}

blockquote::before{
  content: "\201C"; /*Unicode for Left Double Quote*/
  
  /*Font*/
  font-family: Georgia, serif;
  font-size: 60px;
  font-weight: bold;
  color: #999;
  
  /*Positioning*/
  position: absolute;
  left: 10px;
  top:5px;
}

blockquote::after{
  /*Reset to make sure*/
  content: "";
}

blockquote a{
  text-decoration: none;
  background: #eee;
  cursor: pointer;
  padding: 0 3px;
  color: #c76c0c;
}

blockquote a:hover{
 color: #666;
}

blockquote em{
  font-style: italic;
}
 
 
    </style>
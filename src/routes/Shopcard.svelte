<script>
 import {shops} from  "./shopinfo";
</script>



{#each  shops as shops, i}
    <div class="card">
        <div class="name">
            {shops.name}
        </div>
        <div class="desc">
            {shops.desc}
        </div>
        <div class="pic">
            {shops.pic}
        </div>
        <div class="link">
            {shops.link}
        </div>

    </div>
{/each}

<style>
.card{
    flex-direction: row;
    height: 100px;
    width: 100%;
}
</style>
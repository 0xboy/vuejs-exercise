<template>
    <div class="card">
        <img :src="card.img" alt="">
    </div>
</template>
<script>
export default{
    props :["card"]
}
</script>

<style scoped>
.card{
    width:200px;
    height: 200px;
    border-radius: 5px;
    border:1px solid #666;
    margin-left:15px;
}

.card:hover{
    box-shadow:0px 5px 48px #666;
    transition: box-shadow 1s;
}

.card img{
    width: 100%;
    height: 100%;
}
</style>

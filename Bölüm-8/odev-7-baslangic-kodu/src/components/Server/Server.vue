<template>
    <li
        class="list-group-item">
        Sunucu # {{ server.id }}  - {{server.status}}
      </li>
</template>

<script>
export default{
    props : {
        server : {
            tpye: Object
        }
    }
}
</script>

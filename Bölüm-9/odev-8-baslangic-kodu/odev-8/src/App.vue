<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComp='appBlue'">Mavi Temayı Yükle</button>
                <button class="btn btn-success" @click="selectedComp='appGreen'">Yeşil Temayı Yükle</button>
                <button class="btn btn-danger" @click="selectedComp='appRed'">Kırmızı Temayı Yükle </button>
                <hr>

                <component :is="selectedComp">
                    <h1 slot="mavi">Mavi</h1>
                    <p slot="yesil">Yeşil</p>
                    <h2 slot="kirmizi">kırmızı</h2>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data : function(){
            return {
                selectedComp : 'appGreen'
            }
        }
    }
</script>

<style>
</style>

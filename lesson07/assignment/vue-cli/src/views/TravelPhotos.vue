<template>
<div class='travel-photos'>
<div v-for="(item, idx) in decks" :key="idx">
    <app-photos :card='item'></app-photos>
    </div>
</div>
</template>


<script>

import Images from '@/components/Images.vue'
import { decks } from '../util.js'


  export default {
    name: 'TravelPhotos',

    components: {
      'app-photos': Images
    },
    data(){
        return {
        decks: decks
                }
    },
 }
</script>

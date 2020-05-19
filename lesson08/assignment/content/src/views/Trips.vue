<template>
    <div class="Trips">
        <b-row>
            <b-col lg = '2' sm="12">
                <!-- <search :decks='flist'></search> -->
                <input type="text" v-model="search" placeholder="Search location..."/>
                <label>Search title:</label>
            </b-col>
            <b-col lg = '10' sm="12">
                <div class='card-multiple'>
                    <b-row>
                        <b-col md = '6' lg ='4' sm="12" v-for="(card, idx) in flist" :key="idx" :id="card.id">
                            <card-single :card='card'> </card-single>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import { decks } from '../util.js'

import Card from '@/components/Card.vue'
// import Searchbar from '@/components/Searchbar.vue'

export default {
    name: 'Trips',
    components: {
        'card-single': Card
    },
    data() {
        return {
          search: '',
          decks: decks
        }
    },
    computed: {
      flist: function(){
        return this.decks.filter(function (litem) {
            return (litem.area != null) && (litem.location.toLowerCase().includes(this.search.toLowerCase()))
        }, this)
      }
    }
};
</script>

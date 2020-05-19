<template>
    <div class="Trips">
        <b-row>
            <b-col lg = '2' sm="12">
                  <div class="search-wrapper">
                    <label>
                        <h2>search</h2>
                    </label>
                    <input type="text" v-model="search" placeholder="Search location..."/>
                    <div class='side'>
                        <ul class="side__list" data-title="Central America">
                            <div  v-for="(card, idx) in decks" v-bind:key="idx">
                                <div  v-if='card.area == "Central America"'>
                                    <!--couldn't not figure out more clever way to get unique area values-->
                                    <li class="side__item">
                                        {{card.location}}
                                    </li>
                                </div>
                            </div>
                        </ul>
                        <ul class="side__list"  data-title="Asia">
                            <div  v-for="(card, idx) in decks" v-bind:key="idx">
                                <div  v-if='card.area == "Asia"'>
                                    <li class="side__item">
                                        {{card.location}}
                                    </li>
                                </div>
                            </div>
                        </ul>
                        <ul class="side__list"  data-title="Europe">
                            <!-- TODO: change this to a checkbox, when unselected, toggle this.area back to '' -->
                            <button v-on:click="areaFilter('europe')">Europe</button>

                            <div v-for="(card, idx) in decks" v-bind:key="idx">
                                <div v-if='card.area == "Europe"'>
                                    <li class="side__item">
                                        {{card.location}}
                                    </li>
                                </div>
                            </div>
                        </ul>
                        <!-- Other should not be shown but is there incase new continent needs to be added -->
                        <div v-for="(card, idx) in decks" v-bind:key="idx">
                            <div v-if='!["Europe", "Asia", "Central America"].includes(card.area)'>
                                <ul class="side__list"  data-title="Other" >
                                    <li class="side__item">
                                        {{card.location}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

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
// Note: might be able to move Searchbar back into its own child component and have it pass search info back up to this one:
// https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events
export default {
    name: 'Trips',
    components: {
        'card-single': Card
    },
    data() {
        return {
          search: '',
          area: '',
          decks: decks,
          areaFilter: function(area){
            console.log("area filter with ", area)
            this.area = area
          }
        }
    },
    computed: {
      flist: function(){
        return this.decks.filter(function (litem) {
          // if both search & area have been set, use && in conditional
          // if only search has a value, only use it
          // else if area, only use it
          let litemAreaSet = litem.area != null
          let areaSet = this.area != ''
          let searchSet = this.search != ''

          if (!litemAreaSet){
            return false
          }

          let includesSearchTerm = (litem.location.toLowerCase().includes(this.search.toLowerCase()))
          let isInArea = (litem.area.toLowerCase() === this.area.toLowerCase())

          if (areaSet && searchSet){
            // check that both area & search match
            return includesSearchTerm && isInArea
          } else if(areaSet){
            return isInArea
          } else if(searchSet){
            return includesSearchTerm
          }
          return true
        }, this)
      }
    }
};
</script>


<style scoped lang='scss'>
@import './src/main.scss';
.side {
	margin-top: 1em;
	text-align: left;
	display: block;
	padding: .5rem;
	&__list {
		text-align: left;
	}
	&__list[data-title]::before {
		content: attr(data-title);
	}
}

ul {
	display: block;
	@include media-query($mq: 'md') {
		display: inline-block;
	}
}

ul[data-title]::before {
	content: attr(data-title);
	text-decoration: underline;
	font-weight: bold;
	padding: 0;
}

h2 {
	padding: .5em;
	text-align: center;
}

</style>

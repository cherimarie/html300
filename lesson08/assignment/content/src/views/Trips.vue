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

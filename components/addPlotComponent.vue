<template>
  <div class="type-cards">
    <slide-out :visible.sync="open" :title="'Select Plot Types'" size="600px" allow-resize
               :fullscreen.sync="fullscreen" append-to="body" show-fullscreen fixed>
      <ul>
        <li v-for="plotType in plotTypes" class="plot-type-item">
          <plotTypeCard
              :plotType='plotType.type'
              :plotKey='plotType.key'
          />
        </li>
      </ul>
    </slide-out>

    <div>
      <v-btn rounded
             icon
             fab
             bottom
             right
             absolute
             class="add-btn"
             dark
             @click="onClick"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>

import plotTypeCard from "@/components/plotTypeCard";

export default {
  name: "addPlotComponent",
  components: {
    plotTypeCard
  },

  data() {
    return {
      open: false,
      plotTypes: [],
      fullscreen: false
    };
  },

  methods: {

    onClick() {
      this.open = true;
      this.getData()
    },

    getData() {
      this.$axios.$get('https://us-central1-viz-your-data.cloudfunctions.net/api/plotTypes').then(response => {
        this.plotTypes = response
      });
    },
  }
}
</script>

<style>
.add-btn {
  background-color: #35495e;
  margin-bottom: 100px;
}

li {
  display: inline-block;
  *display: inline;
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 40px;
}

ul {
  text-align: center;
  list-style: inside;
}

.vue-slideout-title-text {
  color: #35495e;
  font-weight: bold;
  font-size: 20px;
}
</style>
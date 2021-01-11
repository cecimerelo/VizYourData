<template>
  <div class="type-cards">
    <slide-out
      :visible.sync="openPanel"
      :title="'Select Plot Types'"
      size="600px"
      allow-resize
      :fullscreen.sync="fullscreen"
      append-to="body"
      show-fullscreen
      fixed
    >
      <ul>
        <li
          v-for="plotType in plotTypes"
          :key="plotType.key"
          class="plot-type-item"
        >
          <plotTypeCard
            :plot-type="plotType.type"
            :plot-key="plotType.key"
            @clicked-add-plot="onClickChild"
          />
        </li>
      </ul>
    </slide-out>

    <div>
      <v-btn
        rounded
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

import plotTypeCard from '@/components/plotTypeCard'

export default {
  name: 'AddPlotButtonComponent',
  components: {
    plotTypeCard
  },

  data () {
    return {
      openPanel: false,
      plotTypes: [],
      fullscreen: false
    }
  },

  methods: {

    onClick () {
      this.openPanel = true
      this.getData()
    },

    onClickChild (value) {
      this.openPanel = value
    },

    getData () {
      const url = `http://${this.$host}:${this.$port}/plotTypes`
      this.$http.$get(url).then((response) => {
        this.plotTypes = response
      })
    }
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

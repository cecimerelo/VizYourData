<template>
  <div class="demo">
    <slide-out :visible.sync="open" :title="'Select Plot Types'" size="600px" allow-resize
               :fullscreen.sync="fullscreen" append-to="body" show-fullscreen fixed>
      <ul id="example-1">
        <li v-for="type in plotTypes" :key="`${type}`">
          {{ type }}
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

export default {
  name: "addPlotComponent",

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

<style scoped>
.add-btn {
  background-color: #35495e;
  margin-bottom: 100px;
}
</style>
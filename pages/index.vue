<template>
  <div id="app">

    <v-app-bar dense color="#35495e" hide-on-scroll>
      <v-toolbar-title class="toolbar-title"> 👀 VizYourData !</v-toolbar-title>
    </v-app-bar>

    <v-app id="inspire">
      <p class="main-text">No graphics found...</p>
      <addPlotButtonComponent/>
    </v-app>
  </div>
</template>

<script src="/__/firebase/init.js"></script>

<script>
import addPlotButtonComponent from "@/components/addPlotButtonComponent";

export default {
  components: {
    addPlotButtonComponent,
  }
}
</script>

<style>
.toolbar-title {
  color: white;
  font-weight: bold;
}

.main-text {
  text-align: center;
  margin-top: 30px;
  color: gray;
}

</style>

<template>
  <div id="app">
    <v-app-bar dense color="#35495e" hide-on-scroll>
      <v-toolbar-title class="toolbar-title"> 👀 VizYourData !</v-toolbar-title>
    </v-app-bar>
    <p class="main-text">No graphics found...</p>
    <v-btn rounded
           icon
           fab
           bottom
           right
           absolute
           class="add-btn"
           dark
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {}
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

.add-btn {
  background-color: #35495e;
  margin-bottom: 50px;
}
</style>

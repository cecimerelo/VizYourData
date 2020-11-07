<template>
  <div id="app">

    <v-app-bar dense color="#35495e" hide-on-scroll>
      <v-toolbar-title class="toolbar-title"> 👀 VizYourData !</v-toolbar-title>
    </v-app-bar>

    <v-app id="inspire">
      <p class="main-text">No graphics found...</p>

      <v-row justify="center">
        <v-dialog
            v-model="dialog"
            scrollable
            max-width="300px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn rounded
                   icon
                   fab
                   bottom
                   right
                   absolute
                   class="add-btn"
                   dark
                   v-bind="attrs"
                   v-on="on"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title>Select Plot Type</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px;">
              <v-radio-group
                  v-model="dialogm1"
                  column
              >
                <v-radio v-for="type in plotTypes" :key="`${type} Plot`" :label="`${type} Plot`"
                         :value="`${type.name} Plot`"></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="dialog = false"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {

  async asyncData(context) {
    let response = await context.$axios.get('http://localhost:3000/api/plotTypes');
    console.log(response);
    let plotTypes = response.data.map(type => type.name);
    debugger;
    return {
      plotTypes
    }
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

.add-btn {
  background-color: #35495e;
  margin-bottom: 100px;
}
</style>

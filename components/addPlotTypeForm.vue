<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on"
             outlined
             rounded
             text
             @click="onClickAdd">
        Add
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add {{ plotType }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12"
                   sm="6"
                   md="4"
                   v-for="plotField in plotFields" class="plot-field" :key="`field-${plotField}`">
              <v-text-field
                  :label='plotField'
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-file-input
                placeholder="File with the data"
                truncate-length="15"
            ></v-file-input>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
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
</template>


<script>
export default {
  name: "addPlotTypeForm",
  props: ["plotType", "plotKey"],

  data() {
    return {
      dialog: false,
      plotFields: [],
    };
  },

  methods: {
    onClickAdd() {
      this.dialog=true;
      this.$emit('clicked-add-plot', false);
      const getUrl = window.location.hostname;
      this.$http.$get(`http://${getUrl}:3000/definitions/${this.$props.plotKey}`).then(response => {
        this.plotFields = response
      });
    },
  },
};
</script>
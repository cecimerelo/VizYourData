<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on"
             outlined
             rounded
             text @click="onClickAdd">
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
                   v-for="plotField in plotFields" :class=`plot-field-${plotField}`>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  name: "addPlotTypeForm",
  props: ["plotType", "plotKey"],

  data() {
    return {
      plotFields: [],
    };
  },

  methods: {
    onClickAdd() {
      this.$emit('clicked-add-plot', false)
      const baseUrl = window.location.origin;
      this.$axios.$get(`${baseUrl}/definitions/${this.$props.plotKey}`).then(response => {
        this.plotFields = response
      });
    },
  },
};
</script>
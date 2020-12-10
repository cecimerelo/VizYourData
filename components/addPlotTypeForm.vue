<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on"
               outlined
               rounded
               text @click="onClick">
          Add
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add {{ plotType }}</span>
        </v-card-title>
      </v-card>
    </v-dialog>
</template>


<script>
export default {
  name: "addPlotTypeForm",
  props: ["plotType"],

  methods: {
    onClick() {
      this.$emit('clicked-add-plot', false)
    },
  },
};
</script>
<template>
  <v-card class="mx-auto" max-width="360" outlined>
    <v-card-title>
      {{ plotType }}
    </v-card-title>
    <v-img
        :src="require(`~/assets/img/icons/${plotKey}.jpg`)"
        max-width="200px"
    ></v-img>
    <v-card-actions>
      <addPlotTypeForm @clicked-add-plot="clickedAddPlot" :plotType=plotType :plotKey=plotKey></addPlotTypeForm>
    </v-card-actions>
  </v-card>
</template>

<script>
import addPlotTypeForm from '@/components/addPlotTypeForm'

export default {
  name: 'plotTypeCard',
  components: {
    addPlotTypeForm
  },
  props: ['plotType', 'plotKey'],

  methods: {
    clickedAddPlot (value) {
      this.$emit('clicked-add-plot', value)
    }
  }
}
</script>

<style scoped>

</style>

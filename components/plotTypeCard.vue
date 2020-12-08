<template>
  <v-card
      class="mx-auto"
      max-width="360"
      outlined>
    <v-card-title>
      {{ plotType }}
    </v-card-title>
    <v-img
        :src="require(`~/assets/img/icons/${plotKey}.jpg`)"
        max-width="200px"
    ></v-img>
    <v-card-actions>
      <v-btn
          outlined
          rounded
          text
      >
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: "plotTypeCard",
  props: ["plotType", "plotKey"],
}
</script>

<style scoped>

</style>
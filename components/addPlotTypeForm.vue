<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        outlined
        rounded
        text
        v-on="on"
        @click="onClickAdd"
      >
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
            <v-col
              v-for="plotField in plotFields"
              :key="`field-${plotField}`"
              cols="12"
              sm="6"
              md="4"
              class="plot-field"
            >
              <v-text-field
                :label="`${plotField} *`"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-file-input
              placeholder="File with the data"
              truncate-length="15"
              v-model="plotInfoDocument"
            />
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
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
          @click="sendPlotInfo"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/* eslint-disable prefer-const */
export default {
  name: 'AddPlotTypeForm',
  props: ['plotType', 'plotKey'],

  data () {
    return {
      dialog: false,
      plotFields: [],
      plotInfoDocument: null
    }
  },

  methods: {
    onClickAdd () {
      this.dialog = true
      this.$emit('clicked-add-plot', false)
      const url = `/definitions/${this.$props.plotKey}`
      this.$axios.$get(url).then((response) => {
        this.plotFields = response
      })
    },

    sendPlotInfo () {
      const config = {
        headers: {
          'Content-Type': undefined
        }
      }

      const payload = {
        file: this.plotInfoDocument

      }
      const url = `/plotTypes/${this.$props.plotKey}`
      this.$axios.$post(url, payload, config).then(
        (response) => {
          this.dialog = false
          console.log(response)
        }
      )
    }
  }
}
</script>

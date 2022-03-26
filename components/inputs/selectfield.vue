<template>
  <v-select
    v-model="data"
    :items="items"
    :label="label"
    :rules="rules"
    item-text="label"
    item-value="value"
    outlined
    clearable
    :multiple="multiple"
    color="black"
    hide-details
    dense
    @blur="sendData"
    class="shadowy rounded"
    :style="css"
  >
    <template v-if="multiple" v-slot:selection="{ item, index }">
      <v-chip class="chip" v-if="index < 2">
        <span>{{ item.label }}</span>
      </v-chip>
      <span v-if="index === 2" class="grey--text text-caption">
        (+ outros {{ data.length - 2 }})
      </span>
    </template>
  </v-select>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    dataname: {
      type: String,
      required: false,
      default: '',
    },
    rules: {
      type: Array,
      required: false,
      default: () => {},
    },
    css: {
      type: String,
      required: false,
      default: '',
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      data: '',
    }
  },
  methods: {
    sendData() {
      const toEmit = {}
      toEmit.dataname = this.dataname
      toEmit.data = this.data
      this.$emit('change', toEmit)
    },
  },
}
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: black;
  border-width: 1px;
}

.chip {
  margin: 5px 2px 0 !important;
}
</style>

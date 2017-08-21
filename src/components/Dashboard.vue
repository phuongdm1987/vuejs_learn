<template>
  <div>
    <v-data-table
      v-bind:headers="headers"
      v-bind:items="items"
      v-bind:search="search"
      v-bind:pagination.sync="pagination"
      :total-items="totalItems"
      :loading="loading"
      class="elevation-1"
    >
      <template slot="headerCell" scope="props">
        <span v-tooltip:bottom="{ 'html': props.header.text }">
          {{ props.header.text }}
        </span>
      </template>
      <template slot="items" scope="props">
        <td>{{ props.item.name }}</td>
        <td  class="text-xs-right">{{ props.item.calories }}</td>
        <td  class="text-xs-right">{{ props.item.fat }}</td>
        <td  class="text-xs-right">{{ props.item.carbs }}</td>
        <td  class="text-xs-right">{{ props.item.protein }}</td>
        <td  class="text-xs-right">{{ props.item.sodium }}</td>
        <td  class="text-xs-right">{{ props.item.calcium }}</td>
        <td  class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'dashboard',
  data () {
    return {
      search: '',
      totalItems: 0,
      items: [],
      loading: true,
      pagination: {},
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Sodium (mg)', value: 'sodium' },
        { text: 'Calcium (%)', value: 'calcium' },
        { text: 'Iron (%)', value: 'iron' }
      ]
    }
  },
  mounted () {
    this.items = this.getAllCity()
  },
  methods: {
    ...mapActions('city', ['getAllCity'])
  },
  computed: {
    ...mapGetters('city', ['cities'])
  }
}
</script>

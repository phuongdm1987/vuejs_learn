<template>
  <div>
    <h4>Drivers</h4>
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
        <td>{{ props.item.phone }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.shipment_count }}</td>
        <td>{{ props.item.shipment_process_count }}</td>
        <td>{{ props.item.shipment_wait_count }}</td>
        <td>{{ props.item.balance }}</td>
        <td>{{ props.item.is_verify }}</td>
        <td>{{ props.item.is_online }}</td>
        <td>{{ props.item.is_active }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'drivers',
  data () {
    return {
      search: '',
      totalItems: 0,
      items: [],
      loading: true,
      pagination: {},
      headers: [
        {
          text: 'Drivers listing',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Phone', value: 'phone' },
        { text: 'Email', value: 'email' },
        { text: 'Shipment All', value: 'shipment_count' },
        { text: 'Shipment Process', value: 'shipment_process_count' },
        { text: 'Shipment Wait', value: 'shipment_wait_count' },
        { text: 'Balance', value: 'balance' },
        { text: 'Verify', value: 'is_verify' },
        { text: 'Online', value: 'is_online' },
        { text: 'Active', value: 'is_active' }
      ]
    }
  },
  computed: {
    ...mapGetters('driver', ['drivers'])
  },
  methods: {
    ...mapActions('driver', ['getDrivers'])
  },
  mounted () {
    // if (!this.drivers) {
    this.getDrivers()
    this.items = this.drivers.data
    this.totalItems = this.drivers.meta.pagination.total
    // }
  }
}
</script>

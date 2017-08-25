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
        <td>
          {{ props.item.name }} <br>
          {{ props.item.phone }} <br>
          {{ props.item.email }}
        </td>
        <td>
          <span class="left">All:</span>
          <span class="right">{{ props.item.shipment_count }}</span>
          <br>
          <span class="left">Process:</span>
          <span class="right">{{ props.item.shipment_process_count }}</span>
          <br>
          <span class="left">Wait accept:</span>
          <span class="right">{{ props.item.shipment_wait_count }}</span>
        </td>
        <td>
          <span class="left">Basic:</span>
          <span class="right">{{ props.item.balance | number }}đ</span>
          <br>
          <span class="left">Bonus:</span>
          <span class="right">{{ props.item.balance_bonus | number }}đ</span>
          <br>
          <span class="left">Confirm:</span>
          <span class="right">{{ props.item.balance_confirm | number }}đ</span>
        </td>
        <td>
          <span class="left">Created:</span>
          <span class="right">{{ props.item.created_at }}</span>
          <br>
          <span class="left">updated:</span>
          <span class="right">{{ props.item.updated_at}}</span>
          <br>
          <span class="left">Expired:</span>
          <span class="right">{{ props.item.expired_at }}</span>
        </td>
        <td>
          <v-chip small v-tooltip:left="{ html: 'Verify' }" :class="{ orange : props.item.is_verify }" class="white--text">
            <v-icon right>star</v-icon>
          </v-chip>
          <v-chip v-tooltip:left="{ html: 'Active' }" small :class="{ green : props.item.is_active }" class="white--text">
            <v-icon right>check_circle</v-icon>
          </v-chip>
          <br>
          <v-chip small v-tooltip:left="{ html: 'Online' }" :class="{ teal : props.item.is_online }" class="white--text">
            <v-icon right>face</v-icon>
          </v-chip>
          <v-chip small v-tooltip:left="{ html: 'In app' }" :class="{ primary : props.item.is_inapp }" class="white--text">
            <v-icon right>input</v-icon>
          </v-chip>
        </td>
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
        { text: 'Shipment', value: 'shipment_count' },
        { text: 'Balance', value: 'balance' },
        { text: 'Date', value: 'packaged_at' },
        { text: 'state', value: 'is_online' }
      ]
    }
  },
  computed: {
    ...mapGetters('driver', ['drivers'])
  },
  methods: {
    ...mapActions('driver', ['getDrivers'])
  },
  watch: {
    drivers () {
      if (this.drivers) {
        if (this.drivers.data) {
          this.items = this.drivers.data
        }
        if (this.drivers.meta) {
          this.totalItems = this.drivers.meta.pagination.total
        }
      }
    }
  },
  mounted () {
    // if (this.drivers.length <= 0) {
    this.loading = true
    this.getDrivers()
    this.loading = false
    // }
  }
}
</script>

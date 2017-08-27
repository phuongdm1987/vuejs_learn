<template>
  <v-card>
    <v-card-title>
      Drivers
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-bind:headers="headers"
      v-bind:items="drivers"
      v-bind:search="search"
    >
      <template slot="items" scope="props">
        <span v-tooltip:bottom="{ 'html': props.header.text }">
          {{ props.header.text }}
        </span>
      </template>
      <template slot="items" scope="props">
        <td>
          {{ props.item.name }} [{{ props.item.rating_count }}/{{ props.item.rating_avg }}]<br>
          {{ props.item.phone }} <br>
          {{ props.item.email }}
        </td>
        <td>{{ props.item.address }}</td>
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
          <v-btn icon v-tooltip:left="{ html: 'Verify' }" :class="{ 'orange--text' : props.item.is_verify }">
            <v-icon>star</v-icon>
          </v-btn>
          <v-btn icon v-tooltip:left="{ html: 'Online' }" :class="{ 'teal--text' : props.item.is_online }">
            <v-icon>face</v-icon>
          </v-btn>
          <br>
          <v-btn icon v-tooltip:left="{ html: 'In app' }" :class="{ 'primary' : props.item.is_inapp }">
            <v-icon>input</v-icon>
          </v-btn>
          <v-btn icon v-tooltip:left="{ html: 'Detail' }" class="warning">
            <v-icon>info_outline</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'drivers',
  data () {
    return {
      search: '',
      loading: true,
      headers: [
        {
          text: 'Drivers listing',
          align: 'left',
          sortable: false,
          value: 'phone'
        },
        { text: 'Address', value: 'address' },
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
  mounted () {
    if (this.drivers.length <= 0) {
      this.loading = true
      this.getDrivers()
      this.loading = false
    }
  }
}
</script>

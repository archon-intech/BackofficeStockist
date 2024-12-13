<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Breadcrumbs from '@/Components/Breadcrumbs.vue'
import { Head, Link } from '@inertiajs/vue3'
</script>

<template>

  <Head title="Paket" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Paket</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card class="pa-4">
      <div class="d-flex flex-wrap align-center">
        <v-text-field v-model="search" label="Search" variant="underlined" prepend-inner-icon="mdi-magnify" hide-details
          clearable single-line />
        <v-spacer />
        <Link href="/paket/create" as="div">
          <v-btn color="primary">Create</v-btn>
        </Link>
      </div>
      <v-data-table-server :items="data.data" :items-length="data.total" :headers="headers" :search="search"
        class="elevation-0" :loading="isLoadingTable" @update:options="loadItems">
        <template #[`item.created_at`]="{ item }">
          <div style="white-space: nowrap;">{{ formatDate(item.created_at) }}</div>
          <div style="white-space: nowrap;">{{ formatDate2(item.created_at) }}</div>
        </template>
        <template #[`item.price`]="{ item }">
          <div style="white-space: nowrap; text-align: right;">
              {{ formatMoney(item.price) }}
          </div>
        </template>
        <template #[`item.is_enabled`]="{ item }">
          <div>
            <v-btn v-if="item.is_enabled == 1" color="success">Aktif</v-btn>
            <v-btn v-else color="error">Inactive</v-btn>
          </div>
        </template>
        <template #[`item.store.id`]="{ item }">
          <div>
            <v-btn v-if="item.store" color="success">Available</v-btn>
            <v-btn v-else color="error">Not Available</v-btn>
          </div>
        </template>
        <template #[`item.gender`]="{ item }">{{ item.gender == 'male' ? 'Male' : 'Female' }}</template>
        <template #[`item.action`]="{ item }">
          <Link :href="`/paket/${item.id}/edit`" as="button">
          <v-icon color="warning" icon="mdi-pencil" size="small" />
          </Link>
          <Link :href="`/paket/${item.id}`" as="button">
          <v-icon color="info" icon="mdi-eye" size="small" />
          </Link>
          <v-icon class="ml-2" color="error" icon="mdi-delete" size="small" @click="deleteItem(item)" />
        </template>
      </v-data-table-server>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="deleteDialog" persistent width="auto">
        <v-card>
          <v-card-text>Are you sure you want to delete this item?</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="error" text @click="deleteDialog = false">Cancel</v-btn>
            <v-btn color="primary" :loading="isLoading" text @click="submitDelete">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </AuthenticatedLayout>
</template>

<script>
export default {
  name: 'PaketIndex',
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      headers: [
        { title: 'Name', key: 'name' },
        { title: 'Price', key: 'price' },
        { title: 'Status', key: 'is_enabled' },
        { title: 'Action', key: 'action', sortable: false },
      ],
      breadcrumbs: [
        {
          title: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: 'Paket',
          disabled: true,
        },
      ],
      isLoadingTable: false,
      search: null,
      deleteDialog: false,
      isLoading: false,
      deleteId: null,
    }
  },
  methods: {
    loadItems({ page, itemsPerPage, sortBy, search }) {
      this.isLoadingTable = true
      var params = {
        page: page,
        limit: itemsPerPage,
        sort: sortBy[0],
      }
      if (search) {
        params.search = search
      }
      this.$inertia.get('/paket', params, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.isLoadingTable = false
        },
      })
    },
    deleteItem(item) {
      this.deleteId = item.id
      this.deleteDialog = true
    },
    submitDelete() {
      this.isLoading = true
      this.$inertia.delete(`/paket/${this.deleteId}`, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.isLoading = false
          this.deleteDialog = false
        },
      })
    },
    formatDate(dateTimeString) {
      const dateTime = new Date(dateTimeString);
      const day = dateTime.getDate().toString().padStart(2, '0');
      const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
      const year = dateTime.getFullYear();
      const hours = dateTime.getHours().toString().padStart(2, '0');
      const minutes = dateTime.getMinutes().toString().padStart(2, '0');
      return `${day}-${month}-${year} ${hours}:${minutes}`;
    },
    formatDate2(dateTimeString) {
      const dateTime = new Date(dateTimeString);
      const now = new Date();

      const elapsedMilliseconds = now - dateTime;
      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      const elapsedDays = Math.floor(elapsedHours / 24);
      const elapsedMonths = Math.floor(elapsedDays / 30); // Assuming a month is 30 days

      if (elapsedMonths > 0) {
        return `${elapsedMonths} months ago`;
      } else if (elapsedDays > 0) {
        return `${elapsedDays} days ago`;
      } else if (elapsedHours > 0) {
        return `${elapsedHours} hours ago`;
      } else if (elapsedMinutes > 0) {
        return `${elapsedMinutes} minutes ago`;
      } else {
        return `${elapsedSeconds} seconds ago`;
      }
    },
    formatMoney(amount) {
      const amountString = amount.toString();
      const isNegative = amountString.startsWith('-');
      const absoluteAmount = isNegative ? amountString.slice(1) : amountString;
      const [integerPart, decimalPart] = absoluteAmount.split('.');
      let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      const formattedDecimalPart = decimalPart ? `.${decimalPart}` : '.00';
      let formattedAmount = formattedIntegerPart + formattedDecimalPart;
      formattedAmount = `Rp ${isNegative ? '-' : ''}${formattedAmount}`;
      return formattedAmount;
    }

  },
}
</script>

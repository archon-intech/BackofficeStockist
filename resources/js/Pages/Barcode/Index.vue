<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Breadcrumbs from '@/Components/Breadcrumbs.vue'
import { Head, Link } from '@inertiajs/vue3'
</script>

<template>

  <Head title="Barcode" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Barcode</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card class="pa-4">
      <div class="d-flex flex-wrap align-center">
        <v-text-field v-model="search" label="Search" variant="underlined" prepend-inner-icon="mdi-magnify" hide-details
          clearable single-line />
        <v-spacer />
        <Link href="/barcode/create" as="div">
        <v-btn color="primary">Create</v-btn>
        </Link>
      </div>
      <div style="display: flex; flex-direction: row; gap: 10px;">
        <v-card width="400">
          <template v-slot:title>
            <div style="display: flex; align-items: center;">
              <v-icon color="primary" size="small" style="vertical-align: middle;">mdi-barcode</v-icon>
              <span style="margin-left: 5px;">TOTAL 442 Barcode</span>
            </div>
          </template>
          <template v-slot:subtitle>
            <div style="display: flex; align-items: center;">
              <span style="margin-left: 5px;">Rp 287,300,000</span>
            </div>
          </template>
        </v-card>
        <v-card width="400">
          <template v-slot:title>
            <div style="display: flex; align-items: center;">
              <v-icon color="success" size="small" style="vertical-align: middle;">mdi-barcode</v-icon>
              <span style="margin-left: 5px;">AVAILABLE 442 Barcode</span>
            </div>
          </template>
          <template v-slot:subtitle>
            <div style="display: flex; align-items: center;">
              <span style="margin-left: 5px;">Rp 287,300,000</span>
            </div>
          </template>
        </v-card>
        <v-card width="400">
          <template v-slot:title>
            <div style="display: flex; align-items: center;">
              <v-icon color="warning" size="small" style="vertical-align: middle;">mdi-barcode</v-icon>
              <span style="margin-left: 5px;"> SOLD 94 Barcode</span>
            </div>
          </template>
          <template v-slot:subtitle>
            <div style="display: flex; align-items: center;">
              <span style="margin-left: 5px;">Rp 61,100,000</span>
            </div>
          </template>
        </v-card>
      </div>
      <v-data-table-server :items="data.data" :items-length="data.total" :headers="headers" :search="search"
        class="elevation-0" :loading="isLoadingTable" @update:options="loadItems">
        <template #[`item.code`]="{ item }">
          <div>{{ item.code }}</div>
          <div>{{ item.variant }}</div>
        </template>
        <template #[`item.creator.name`]="{ item }">
          <div>{{ item.creator.name }}</div>
          <div>{{ formatDate(item.created_at) }}</div>
        </template>
        <template #[`item.seller.name`]="{ item }">
          <div>{{ item.seller?.name }}</div>
          <div>{{ formatDate(item.sold_at) }}</div>
        </template>
        <template #[`item.owner.name`]="{ item }">
          <div>{{ item.owner?.name }}</div>
          <div>{{ formatDate(item.owned_at) }}</div>
        </template>
        <template #[`item.action`]="{ item }">
          <Link :href="`/barcode/${item.id}`" as="button" title="History">
          <v-icon color="info" icon="mdi-history" size="small" />
          </Link>
          <v-icon class="ml-2" color="error" icon="mdi-delete" title="Delete" size="small" @click="deleteItem(item)" />
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
  name: 'BarcodeIndex',
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      headers: [
        { title: 'Code', key: 'code' },
        { title: 'Type', key: 'type' },
        { title: 'Creator', key: 'creator.name' },
        { title: 'Seller', key: 'seller.name' },
        { title: 'Owner', key: 'owner.name' },

        { title: 'Action', key: 'action', sortable: false },
      ],
      breadcrumbs: [
        {
          title: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: 'Barcode',
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
      this.$inertia.get('/barcode', params, {
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
      this.$inertia.delete(`/barcode/${this.deleteId}`, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.isLoading = false
          this.deleteDialog = false
        },
      })
    },
    formatDate(dateTimeString) {
      if (!dateTimeString) return ""; 
      const dateTime = new Date(dateTimeString);
      const day = dateTime.getDate().toString().padStart(2, '0');
      const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
      const year = dateTime.getFullYear();
      const hours = dateTime.getHours().toString().padStart(2, '0');
      const minutes = dateTime.getMinutes().toString().padStart(2, '0');
      return `${day}-${month}-${year} ${hours}:${minutes}`;
    },
    formatDate2(dateTimeString) {
      if (!dateTimeString) return ""; 
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
    addThousandSeparator(number) {
      if (number === null) {
        return ""; 
      }

      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
}
</script>

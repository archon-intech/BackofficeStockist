<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Breadcrumbs from '@/Components/Breadcrumbs.vue'
import { Head, Link } from '@inertiajs/vue3'
</script>

<template>

  <Head title="Deposit" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Deposit</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card class="pa-4">
      <div class="d-flex flex-wrap align-center">
        <v-text-field v-model="search" label="Search" variant="underlined" prepend-inner-icon="mdi-magnify" hide-details
          clearable single-line />
        <v-spacer />
        <Link href="/deposit/create" as="div">
        <v-btn color="primary">Create</v-btn>
        </Link>
      </div>
      <div style="display: flex; flex-direction: row; gap: 10px;">
        <v-card width="200">
          <template v-slot:title>
            <div style="display: flex; align-items: center;">
              <v-icon color="primary" size="small" style="vertical-align: middle;">mdi-bank</v-icon>
              <span style="margin-left: 5px;">911,800,000</span>
            </div>
          </template>
          <template v-slot:subtitle>
            <div style="display: flex; align-items: center;">
              <span style="margin-left: 5px;">IDR</span>
              <span style="margin-left: 5px;">DEPOSIT</span>
            </div>
          </template>
        </v-card>

        <v-card width="200">
          <template v-slot:title>
            <div style="display: flex; align-items: center;">
              <v-icon color="warning" size="small" style="vertical-align: middle;">mdi-sale</v-icon>
              <span style="margin-left: 5px;">14,833,000</span>
            </div>
          </template>
          <template v-slot:subtitle>
            <div style="display: flex; align-items: center;">
              <span style="margin-left: 5px;">IDR</span>
              <span style="margin-left: 5px;">DISCOUNT</span>
            </div>
          </template>
        </v-card>

        <v-card width="200">
          <template v-slot:title>
            <div style="display: flex; align-items: center;">
              <v-icon color="primary" size="small" style="vertical-align: middle;">mdi-percent</v-icon>
              <span style="margin-left: 5px;">98,666,370</span>
            </div>
          </template>
          <template v-slot:subtitle>
            <div style="display: flex; align-items: center;">
              <span style="margin-left: 5px;">IDR</span>
              <span style="margin-left: 5px;">TAX</span>
            </div>
          </template>
        </v-card>
        <v-card width="200">
          <template v-slot:title>
            <div style="display: flex; align-items: center;">
              <v-icon color="primary" size="small" style="vertical-align: middle;">mdi-credit-card</v-icon>
              <span style="margin-left: 5px;">896,967,000</span>
            </div>
          </template>
          <template v-slot:subtitle>
            <div style="display: flex; align-items: center;">
              <span style="margin-left: 5px;">IDR</span>
              <span style="margin-left: 5px;">PAYMENT</span>
            </div>
          </template>
        </v-card>
        <v-card width="200">
          <template v-slot:title>
            <div style="display: flex; align-items: center;">
              <v-icon color="primary" size="small" style="vertical-align: middle;">mdi-sale</v-icon>
              <span style="margin-left: 5px;">0</span>
            </div>
          </template>
          <template v-slot:subtitle>
            <div style="display: flex; align-items: center;">
              <span style="margin-left: 5px;">IDR</span>
              <span style="margin-left: 5px;">RABAT</span>
            </div>
          </template>
        </v-card>
      </div>
      <v-data-table-server :items="data.data" :items-length="data.total" :headers="headers" :search="search"
        class="elevation-0" :loading="isLoadingTable" @update:options="loadItems">
        <template #[`item.member.name`]="{ item }">
          <div>{{ item.member.name }}</div>
          <div>{{ item.member.user.name }}</div>
        </template>
        <template #[`item.total`]="{ item }">
          <div>{{ addThousandSeparator(item.total) }}</div>
        </template>
        <template #[`item.product_total`]="{ item }">
          <div>{{ addThousandSeparator(item.product_total) }}</div>
        </template>
        <template #[`item.starter_kit_total`]="{ item }">
          <div>{{ addThousandSeparator(item.starter_kit_total) }}</div>
        </template>
        <template #[`item.amount`]="{ item }">
          <div>{{ addThousandSeparator(item.amount) }}</div>
        </template>
        <template #[`item.discount`]="{ item }">
          <div>{{ addThousandSeparator(item.discount) }}</div>
        </template>
        <template #[`item.tax`]="{ item }">
          <div>{{ addThousandSeparator(item.tax) }}</div>
        </template>
        <template #[`item.total`]="{ item }">
          <div>{{ addThousandSeparator(item.total) }}</div>
        </template>
        <template #[`item.rabat_pajak`]="{ item }">
          <div>{{ addThousandSeparator(item.rabat_pajak) }}</div>
        </template>
        <template #[`item.rabat`]="{ item }">
          <div>{{ addThousandSeparator(item.rabat) }}</div>
        </template>
        <template #[`item.created_at`]="{ item }">
          <div style="white-space: nowrap;">
            <div>{{ formatDate(item.created_at) }}</div>
            <div>{{ item.code }}</div>
          </div>
        </template>
        <template #[`item.is_blocked`]="{ item }">
          <div>
            <v-btn v-if="item.is_blocked === 0" color="success">Active</v-btn>
            <v-btn v-else color="error">Inactive</v-btn>
          </div>
        </template>
        <template #[`item.status`]="{ item }">
          <div>
            <v-btn v-if="item.status == 'D'" @click="showPasswordDialog(item.id)" color="warning">PAID</v-btn>
            <v-btn v-else-if="item.status == 'P'" @click="showPasswordDialog(item.id)" color="info">PENDING</v-btn>
            <v-btn v-else color="error">EXPIRED</v-btn>
          </div>
        </template>
        <template #[`item.action`]="{ item }">
          <Link :href="`/deposit/${item.id}/edit`" as="button" title="View Detail">
          <v-icon color="success" icon="mdi-eye" />
          </Link>
          <Link :href="`/deposit/${item.id}`" as="button" title="Download">
          <v-icon color="info" icon="mdi-download" />
          </Link>
          <!-- <v-icon class="ml-2" color="error" icon="mdi-delete" size="small" @click="deleteItem(item)" /> -->
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
    <v-row justify="center">
      <v-dialog v-model="passwordDialog" persistent width="400px">
        <v-card>
          <v-card-title>Enter Password</v-card-title>
          <v-card-text>
            <v-text-field v-model="password" label="Password" type="password"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" text @click="cancelPassword">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submitPassword">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </AuthenticatedLayout>
</template>

<script>
import { useToast } from 'vue-toastification'
export default {
  name: 'DepositIndex',
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      passwordDialog: false,
      password: '',
      userId: null,
      headers: [
        { title: 'Date', key: 'created_at' },
        { title: 'Owner', key: 'member.name' },
        { title: 'Status', key: 'status' },
        { title: 'Product', key: 'product_total' },
        { title: 'Starter Kit', key: 'starter_kit_total' },
        { title: 'Amount', key: 'amount' },
        { title: 'Discount', key: 'discount' },
        { title: 'Tax', key: 'tax' },
        { title: 'Payment', key: 'total' },
        { title: 'Rabat + Pajak', key: 'rabat_pajak' },
        { title: 'Rabat ', key: 'rabat' },
        { title: 'Action', key: 'action', sortable: false },
      ],
      breadcrumbs: [
        {
          title: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: 'Deposit',
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
    cancelPassword() {
      this.passwordDialog = false;
      this.password = ''; // Reset the password field when cancel is clicked
    },
    showPasswordDialog(userId) {
      this.userId = userId;
      this.passwordDialog = true;
    },
    submitPassword() {
      this.isLoading = true;
      this.$inertia.post(`/deposit/activate/${this.userId}`, { password: this.password }, {
        onSuccess: () => {
          this.isLoading = false;
          this.passwordDialog = false;
        },
        onError: (errors) => {
          this.isLoading = false;
                    const toast = useToast()
          toast.error('Password Anda Salah');
          // Handle errors
        }
      });
    },
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
      this.$inertia.get('/deposit', params, {
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
      this.$inertia.delete(`/deposit/${this.deleteId}`, {
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
    addThousandSeparator(number) {
      if (number === null) {
        return "";
      }

      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
}
</script>

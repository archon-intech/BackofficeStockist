<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Breadcrumbs from '@/Components/Breadcrumbs.vue'
import { Head, Link } from '@inertiajs/vue3'
</script>

<template>

  <Head title="Official Store" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Official Store</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card class="pa-4">
      <div class="d-flex flex-wrap align-center">
        <v-text-field v-model="search" label="Search" variant="underlined" prepend-inner-icon="mdi-magnify" hide-details
          clearable single-line />
        <v-spacer />
        <Link href="/officialstore/create" as="div">
        <v-btn color="primary">Create</v-btn>
        </Link>
      </div>
      <v-data-table-server :items="data.data" :items-length="data.total" :headers="headers" :search="search"
        class="elevation-0" :loading="isLoadingTable" @update:options="loadItems">
        <template #[`item.name`]="{ item }">
          <div>{{ item.name }}</div>
          <div>{{ item.code }}</div>
        </template>
        <template #[`item.member.name`]="{ item }">
          <div>{{ item.member.name }}</div>
          <div>{{ item.member.user.name }}</div>
        </template>
        <template #[`item.created_at`]="{ item }">
          <div>{{ formatDate(item.created_at) }}</div>
          <div>{{ formatDate2(item.created_at) }}</div>
        </template>
        <template #[`item.is_blocked`]="{ item }">
          <div>
            <v-btn v-if="item.is_blocked === 0" @click="showPasswordDialog(item.id)" color="success">Active</v-btn>
            <v-btn v-else color="error" @click="showPasswordDialog(item.id)">Inactive</v-btn>
          </div>
        </template>
        <template #[`item.action`]="{ item }">
          <Link :href="`/officialstore/${item.id}/edit`" as="button">
          <v-icon color="warning" icon="mdi-pencil" size="small" />
          </Link>
          <Link :href="`/officialstore/${item.id}`" as="button">
          <v-icon color="info" icon="mdi-eye" size="small" />
          </Link>
          <!-- <Link
            :href="`https://wa.me/${item.phone}?text=https://archonproject.com/demo-moment-stockist/${item.member.user.name}`"
            as="button">
          <v-icon color="success" icon="mdi-whatsapp" size="small" />
          </Link> -->
          <v-icon color="success" size="small" @click="shareWhatsApp(item.phone, item.member.user.name)"
            icon="mdi-whatsapp"></v-icon>
          <v-icon @click="link(item.member.user.name)" color="info" icon="mdi-link" size="small" />
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
  name: 'OfficialStoreIndex',
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
        { title: 'Name', key: 'name' },
        { title: 'Owner', key: 'member.name' },
        { title: 'Address', key: 'address' },
        { title: 'Phone', key: 'phone' },
        { title: 'Status', key: 'is_blocked' },
        { title: 'Activation Date', key: 'created_at' },

        { title: 'Action', key: 'action', sortable: false },
      ],
      breadcrumbs: [
        {
          title: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: 'Official Store',
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
    shareWhatsApp(phone, name) {
      const message = encodeURIComponent(`https://archonproject.com/demo-moment-stockist/${name}`);
      const url = `https://wa.me/${phone}?text=${message}`;
      window.open(url, '_blank');
    },
    link(name) {
      const url = `https://archonproject.com/demo-moment-stockist/${encodeURIComponent(name)}`;
      window.open(url, '_blank');
    },
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
      this.$inertia.post(`/officialstore/activate/${this.userId}`, { password: this.password }, {
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
      this.$inertia.get('/officialstore', params, {
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
      this.$inertia.delete(`/officialstore/${this.deleteId}`, {
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

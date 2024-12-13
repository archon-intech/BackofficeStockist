<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Breadcrumbs from '@/Components/Breadcrumbs.vue'
import { Head, Link } from '@inertiajs/vue3'
</script>

<template>

  <Head title="Member" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Member</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card class="pa-4">
      <div class="d-flex flex-wrap align-center">
        <v-text-field v-model="search" label="Search" variant="underlined" prepend-inner-icon="mdi-magnify" hide-details
          clearable single-line />
        <v-spacer />
        <!-- <Link href="/member/create" as="div"> -->
        <v-btn color="primary">Filter</v-btn>
        <!-- </Link> -->
      </div>
      <v-data-table-server :items="data.data" :items-length="data.total" :headers="headers" :search="search"
        class="elevation-0" :loading="isLoadingTable" @update:options="loadItems">
        <template #[`item.user.email`]="{ item }">
          <div>{{ item.user.email }}</div>
          <div>{{ item.user.phone }}</div>
        </template>
        <template #[`item.user.created_at`]="{ item }">
          <div style="white-space: nowrap;">{{ formatDate(item.user.created_at) }}</div>
          <div style="white-space: nowrap;">{{ formatDate2(item.user.created_at) }}</div>
        </template>
        <template #[`item.user.is_blocked`]="{ item }">
          <div>
            <v-btn v-if="item.user.is_blocked === 0" color="success" @click="showPasswordDialog(item.user.id)">Active</v-btn>
            <v-btn v-else color="error" @click="showPasswordDialog(item.user.id)">Inactive</v-btn>
          </div>
        </template>
        <template #[`item.store.id`]="{ item }">
          <div>
            <v-btn v-if="item.store" color="success">Available</v-btn>
            <v-btn v-else color="error" @click="createStore(item.id)">Not Available</v-btn>
          </div>
        </template>
        <template #[`item.gender`]="{ item }">{{ item.gender == 'male' ? 'Male' : 'Female' }}</template>
        <template #[`item.action`]="{ item }">
          <Link :href="`/member/${item.id}/edit`" as="button">
          <v-icon color="warning" icon="mdi-pencil" size="small" />
          </Link>
          <v-icon class="ml-2" color="info" icon="mdi-eye" size="small" @click="showMemberDialog(item.id)" />
          <v-icon class="ml-2" color="error" icon="mdi-delete" size="small" @click="deleteItem(item)" />
        </template>
      </v-data-table-server>
    </v-card>
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
import { useToast } from 'vue-toastification'
export default {
  name: 'MemberIndex',
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
        { title: 'Username', key: 'user.name' },
        { title: 'Contact', key: 'user.email' },
        { title: 'Member ID', key: 'user.id' },
        { title: 'Status', key: 'user.is_blocked' },
        { title: 'Store', key: 'store.id' },
        { title: 'Register Date', key: 'user.created_at' },
        { title: 'Action', key: 'action', sortable: false },
      ],
      breadcrumbs: [
        {
          title: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: 'Member',
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
    createStore(id) {
      console.log(id)
      this.id = id;
      this.$inertia.get(`/member/toko/${this.id}`);
    },
    showPasswordDialog(userId) {
      this.userId = userId;
      this.passwordDialog = true;
    },
    showMemberDialog(userId) {
      this.userId = userId;
      this.$inertia.get(`/member/${this.userId}`);
    },
    submitPassword() {
      this.isLoading = true;
      this.$inertia.post(`/member/activate/${this.userId}`, { password: this.password }, {
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
      this.$inertia.get('/member', params, {
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
      this.$inertia.delete(`/member/${this.deleteId}`, {
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
    }
  },
}
</script>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Breadcrumbs from '@/Components/Breadcrumbs.vue'
import { Head, Link, useForm, router } from '@inertiajs/vue3'

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
})

</script>

<template>

  <Head title="Show Store" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Show Store</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card class="pa-4">
      <v-table density="compact">
        <thead>
          <tr>
            <th colspan="2" class="text-left">
              Store
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Code</td>
            <td>{{ store.code }}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{{ store.name }}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{{ store.address }}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{{ store.phone }}</td>
          </tr>
          <tr>
            <td>TaxPayer</td>
            <td>{{ store.taxpayer_identification_number }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-spacer />
      <Link href="/store" as="div">
      <v-btn text>Cancel</v-btn>
      </Link>
    </v-card>
  </AuthenticatedLayout>
</template>

<script>
export default {
  name: 'StoreShow',
  data() {
    return {
      breadcrumbs: [
        {
          title: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: 'Store',
          disabled: false,
          href: '/store',
        },
        {
          title: 'Show',
          disabled: true,
        },
      ],
    }
  },
}
</script>

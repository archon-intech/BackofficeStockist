<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Breadcrumbs from '@/Components/Breadcrumbs.vue'
import { Head, Link, useForm, router } from '@inertiajs/vue3'

const props = defineProps({
  paket: {
    type: Object,
    required: true,
  },
  paket_has_products: {
    type: Object,
    required: true,
  },
})

</script>

<template>

  <Head title="Show Paket" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Show Paket</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card class="pa-4">
      <v-table density="compact">
        <thead>
          <tr>
            <th colspan="2" class="text-left">
              Paket
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{{ paket.name }}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{{ paket.price }}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{{ paket.status === 1 ? 'Active' : 'Inactive' }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-spacer />
      <v-table>
        <thead>
          <tr>
            <th colspan="2" class="text-left">
              Product
            </th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in paket_has_products" :key="index">
                <td>{{ product.name }}</td>
                <td>{{ product.qty }}</td>
            </tr>
        </tbody>
      </v-table>
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
          title: 'Paket',
          disabled: false,
          href: '/paket',
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

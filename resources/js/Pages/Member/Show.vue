<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Breadcrumbs from '@/Components/Breadcrumbs.vue'
import { Head, Link, useForm, router } from '@inertiajs/vue3'

const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
})

</script>

<template>

  <Head title="Show Member" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Show Member</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card class="pa-4">
      <v-table density="compact">
        <thead>
          <tr>
            <th colspan="2" class="text-left">
              Member
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Referrer</td>
            <td>{{ member.referrer }}</td>
          </tr>
          <tr>
            <td>Upline</td>
            <td>{{ member.upline }}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{{ member.type }}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{{ member.name }}</td>
          </tr>
          <tr>
            <td>Product Point</td>
            <td>{{ member.product_point }}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{{ member.user.name }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{ member.user.email }}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{{ member.user.phone }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-spacer />
      <Link href="/member" as="div">
      <v-btn text>Cancel</v-btn>
      </Link>
    </v-card>
  </AuthenticatedLayout>
</template>

<script>
export default {
  name: 'MemberShow',
  data() {
    return {
      breadcrumbs: [
        {
          title: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: 'Member',
          disabled: false,
          href: '/member',
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

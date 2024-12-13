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

const form = useForm({
  name: props.member.name,
  nameUser: props.member.user.name,
  email: props.member.user.email,
  phone: props.member.user.phone,
})

const submit = () => {
  form.patch('/member/' + props.member.id, {
    onSuccess: () => {
      router.visit('/member')
    },
  })
}
</script>

<template>
  <Head title="Edit Member" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Edit Member</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card>
      <v-form @submit.prevent="submit">
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.name" label="Name Member" variant="underlined" :error-messages="form.errors.name" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.nameUser" label="Name User" variant="underlined" :error-messages="form.errors.nameUser" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                v-model="form.email"
                label="Email"
                variant="underlined"
                type="email"
                :error-messages="form.errors.email"
              />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                v-model="form.phone"
                label="Phone"
                variant="underlined"
                type="tel"
                :error-messages="form.errors.phone"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <Link href="/member" as="div">
            <v-btn text>Cancel</v-btn>
          </Link>
          <v-btn type="submit" color="primary">Save</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </AuthenticatedLayout>
</template>

<script>
export default {
  name: 'MemberEdit',
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
          title: 'Edit',
          disabled: true,
        },
      ],
    }
  },
}
</script>

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

const form = useForm({
  code: props.store.code,
  owner_id: props.id,
  name: props.store.name,
  address: props.store.address,
  phone: props.store.phone,
  phone_with_whatsapp: props.store.phone_with_whatsapp,
  type: props.store.type,
  taxpayer_identification_number: props.store.taxpayer_identification_number,
})

const submit = () => {
  form.patch('/store/' + props.store.id, {
    onSuccess: () => {
      router.visit('/store')
    },
  })
}
</script>

<template>
  <Head title="Update Store" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Update Store</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card>
      <v-form @submit.prevent="submit">
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.code" label="Code" variant="underlined" :error-messages="form.errors.code" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.name" label="Name" variant="underlined" :error-messages="form.errors.name" />
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field v-model="form.address" label="Address" variant="underlined" :error-messages="form.errors.address" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.phone" label="Phone" variant="underlined" :error-messages="form.errors.phone" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-checkbox v-model="form.phone_with_whatsapp" label="Whatsapp" value="1" :error-messages="form.errors.phone_with_whatsapp" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-select
                v-model="form.type"
                :items="type"
                item-title="text"
                item-value="value"
                label="Type"
                variant="underlined"
                :error-messages="form.errors.type"
              />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.taxpayer_identification_number" label="Number Tax" variant="underlined" :error-messages="form.errors.taxpayer_identification_number" />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <Link href="/store" as="div">
            <v-btn text>Cancel</v-btn>
          </Link>
          <v-btn type="submit" color="primary">Create</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </AuthenticatedLayout>
</template>

<script>
export default {
  name: 'StoreCreate',
  data() {
    return {
      type: [
        { text: 'Reguler', value: 'R' },
        { text: 'Master', value: 'M' },
      ],
      breadcrumbs: [
        {
          title: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: 'Store',
          disabled: false,
          href: '/toko',
        },
        {
          title: 'Create',
          disabled: true,
        },
      ],
    }
  },
}
</script>

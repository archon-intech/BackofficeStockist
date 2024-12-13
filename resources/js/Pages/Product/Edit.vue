<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import Breadcrumbs from '@/Components/Breadcrumbs.vue'
import { Head, Link, useForm, router } from '@inertiajs/vue3'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const form = useForm({
  name: props.product.name,
  sku: props.product.sku,
  price: props.product.price,
  description: props.product.description,
  ingredients: props.product.ingredients,
  benefits: props.product.benefits, 
  usage: props.product.usage,
  point: props.product.point,
  weight: props.product.weight,
  length: props.product.length,
  width: props.product.width,
  height: props.product.height,
  type: props.product.type,
})

const submit = () => {
  form.patch('/product/' + props.product.id, {
    onSuccess: () => {
      router.visit('/product')
    },
  })
}
</script>

<template>
  <Head title="Edit Product" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Edit Product</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card>
      <v-form @submit.prevent="submit">
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.sku" label="SKU" variant="underlined" :error-messages="form.errors.sku" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.name" label="Name" variant="underlined" :error-messages="form.errors.name" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.price" label="Price" variant="underlined" :error-messages="form.errors.price" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.description" label="Description" variant="underlined" :error-messages="form.errors.description" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.ingredients" label="Ingredients" variant="underlined" :error-messages="form.errors.ingredients" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.benefits" label="Benefits" variant="underlined" :error-messages="form.errors.benefits" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.usage" label="Usage" variant="underlined" :error-messages="form.errors.usage" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.point" label="Point" variant="underlined" :error-messages="form.errors.point" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.weight" label="Weight" variant="underlined" :error-messages="form.errors.weight" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.length" label="Length" variant="underlined" :error-messages="form.errors.length" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.width" label="Width" variant="underlined" :error-messages="form.errors.width" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="form.height" label="Height" variant="underlined" :error-messages="form.errors.height" />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-select
                v-model="form.type"
                :items="types"
                item-title="text"
                item-value="value"
                label="Type"
                variant="underlined"
                :error-messages="form.errors.type"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <Link href="/product" as="div">
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
  name: 'ProductEdit',
  data() {
    return {
      types: [
        { text: 'Reguler', value: 'reguler' },
        { text: 'Starter Plan', value: 'starter plan' },
      ],
      breadcrumbs: [
        {
          title: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        {
          title: 'Product',
          disabled: false,
          href: '/product',
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

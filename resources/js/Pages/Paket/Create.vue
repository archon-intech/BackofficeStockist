<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Breadcrumbs from "@/Components/Breadcrumbs.vue";
import { Head, Link, useForm, router } from "@inertiajs/vue3";
const props = defineProps({
  products: {
    type: Object,
    required: true,
  },
});

const form = useForm({
  name: null,
  price: null,
  is_enabled: 0,
  product: {},
});

const submit = () => {
  form.post("/paket", {
    onSuccess: () => {
      router.visit("/paket");
    },
  });
};
</script>

<template>
  <Head title="Create Paket" />
  <AuthenticatedLayout>
    <div class="mb-5">
      <h5 class="text-h5 font-weight-bold">Create Paket</h5>
      <Breadcrumbs :items="breadcrumbs" class="pa-0 mt-1" />
    </div>
    <v-card>
      <v-form @submit.prevent="submit">
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="4">
              <v-text-field
                v-model="form.name"
                label="Name"
                variant="underlined"
                :error-messages="form.errors.name"
              />
            </v-col>
            <v-col cols="12" sm="12" md="4">
              <v-text-field
                v-model="form.price"
                label="Price"
                variant="underlined"
                :error-messages="form.errors.price"
              />
            </v-col>
            <v-col cols="12" sm="12" md="4">
              <v-checkbox v-model="form.is_enabled" label="Enabled" value="1" />
            </v-col>
            <v-col cols="12">
              <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
              <v-checkbox-group
                v-model="form.product"
                :error-messages="form.errors.product"
              >
                <v-row>
                  <v-col cols="6" v-for="product in products" :key="product.id">
                    <v-text-field
                      v-model="form.product[product.id]"
                      :label="product.name"
                      variant="underlined"
                      :error-messages="
                        form.errors.product && form.errors.product[product.id]
                      "
                    />
                  </v-col>
                </v-row>
              </v-checkbox-group>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <Link href="/paket" as="div">
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
  name: "PaketCreate",
  data() {
    return {
      breadcrumbs: [
        {
          title: "Dashboard",
          disabled: false,
          href: "/dashboard",
        },
        {
          title: "Paket",
          disabled: false,
          href: "/paket",
        },
        {
          title: "Create",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<script setup>
import { Link } from "@inertiajs/vue3";
import { ref, computed, onMounted } from "vue";

// Define role as a ref
const role = ref("guest");

// Fetch role data from API on component mount
onMounted(async () => {
  const response = await fetch("/api/check-role");
  const data = await response.json();
  role.value = data.role;
  console.log(data);
});

// Computed properties to check role
const isAdmin = computed(() => role.value === "admin");
const isUser = computed(() => role.value === "user");
const isGuest = computed(() => role.value === "guest");

// Retrieve theme from localStorage or default to 'light'
const currentTheme = ref(localStorage.getItem("theme") || "light");

// Watch for theme changes
const toggleTheme = () => {
  currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
  localStorage.setItem("theme", currentTheme.value); // Save to localStorage
};
</script>

<template>
  <v-app :class="currentTheme">
    <v-list nav>
      <!-- List Menu -->
      <Link href="/dashboard" method="get" as="div">
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" link />
      </Link>
      <Link href="/profile" method="get" as="div">
        <v-list-item prepend-icon="mdi-account" title="Profile" link />
      </Link>

      <!-- <Link href="/people" method="get" as="div">
      <v-list-item prepend-icon="mdi-account-group" title="People" link />
    </Link> -->

      <Link v-if="isAdmin" href="/member" method="get" as="div">
        <v-list-item prepend-icon="mdi-account-group" title="Member" link />
      </Link>

      <Link v-if="isAdmin" href="/product" method="get" as="div">
        <v-list-item prepend-icon="mdi-package-variant" title="Product" link />
      </Link>

      <Link href="/paket" method="get" as="div">
        <v-list-item prepend-icon="mdi-package-variant" title="Paket" link />
      </Link>

      <Link href="/member" method="get" as="div">
        <v-list-item prepend-icon="mdi-gift" title="Bonus" link />
      </Link>

      <Link href="/member" method="get" as="div">
        <v-list-item prepend-icon="mdi-ticket" title="Ticket" link />
      </Link>

      <Link href="/store" method="get" as="div">
        <v-list-item prepend-icon="mdi-store" title="Store" link />
      </Link>

      <Link href="/officialstore" method="get" as="div">
        <v-list-item
          prepend-icon="mdi-storefront"
          title="Official Store Moment"
          link
        />
      </Link>

      <Link href="/order" method="get" as="div">
        <v-list-item prepend-icon="mdi-cart" title="Order" link />
      </Link>

      <Link href="/promo" method="get" as="div">
        <v-list-item prepend-icon="mdi-tag" title="Promo" link />
      </Link>

      <Link href="/balance" method="get" as="div">
        <v-list-item prepend-icon="mdi-scale-balance" title="Balance" link />
      </Link>

      <Link href="/member" method="get" as="div">
        <v-list-item prepend-icon="mdi-wrench" title="Automaintenance" link />
      </Link>

      <Link href="/member" method="get" as="div">
        <v-list-item
          prepend-icon="mdi-file-document-outline"
          title="Bukti Potong Pajak"
          link
        />
      </Link>

      <Link href="/deposit" method="get" as="div">
        <v-list-item prepend-icon="mdi-currency-usd" title="Deposit" link />
      </Link>

      <Link href="/barcode" method="get" as="div">
        <v-list-item prepend-icon="mdi-barcode" title="Barcode" link />
      </Link>

      <Link href="/member" method="get" as="div">
        <v-list-item
          prepend-icon="mdi-account-settings"
          title="Administrator"
          link
        />
      </Link>

      <Link href="/member" method="get" as="div">
        <v-list-item prepend-icon="mdi-bank" title="Bank" link />
      </Link>

      <Link href="/manufacture" method="get" as="div">
        <v-list-item prepend-icon="mdi-factory" title="Manufacture" link />
      </Link>

      <!-- Log Out -->
      <Link href="/logout" method="post" as="div">
        <v-list-item prepend-icon="mdi-exit-to-app" title="Log Out" link />
      </Link>
    </v-list>
  </v-app>
</template>

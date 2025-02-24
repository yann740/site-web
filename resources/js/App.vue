<template>
  <div>
    <!-- Header avec menu de navigation -->
    <header v-if="!isOnDashboardPage" class="absolute top-0 left-0 w-full p-4 z-20 bg-transparent backdrop-blur-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold text-white hover:scale-105 transition-transform duration-300">
          Nom de l'Entreprise
        </h1>
        <nav>
          <ul class="flex space-x-6">
            <li><router-link to="/" class="text-white hover:text-blue-300 transition duration-300">Accueil</router-link></li>
            <li><router-link to="/dashboard" class="text-white hover:text-blue-300 transition duration-300">Tableau de bord</router-link></li>
            <li><a href="#" class="text-white hover:text-blue-300 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Contenu dynamique -->
    <router-view></router-view> 
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    
    // Masquer la navigation sur la page "/dashboard"
    const isOnDashboardPage = computed(() => route.path === '/dashboard');

    return { isOnDashboardPage };
  }
};
</script>

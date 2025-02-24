<template>
    <div class="flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-800 text-white min-h-screen p-4">
            <h2 class="text-2xl font-bold mb-8">Tableau de Bord</h2>
            <nav>
                <ul>
                    <li><router-link to="/">Accueil</router-link></li> 
                    <li><a href="#" class="block py-2 px-4 hover:bg-gray-700">Utilisateurs</a></li>
                    <li><a href="#" class="block py-2 px-4 hover:bg-gray-700">Statistiques</a></li>
                </ul>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-6">
            <h1 class="text-3xl font-semibold mb-6">Bienvenue sur votre Tableau de Bord</h1>

            <!-- Dashboard Stats -->
            <section class="grid grid-cols-3 gap-6">
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <h3 class="text-lg font-bold">Statistique 1</h3>
                    <p class="text-2xl">123</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <h3 class="text-lg font-bold">Statistique 2</h3>
                    <p class="text-2xl">456</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-lg">
                    <h3 class="text-lg font-bold">Statistique 3</h3>
                    <p class="text-2xl">789</p>
                </div>
            </section>

        </main>
    </div>
</template>

<script>
export default {
    name: 'DashboardPage'
}
</script>

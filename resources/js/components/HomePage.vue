<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Header avec menu de navigation -->
   

    <!-- Section principale avec image de fond animée -->
    <section 
      class="relative flex flex-col justify-center items-center text-center h-screen bg-cover bg-center animated-bg"
      :style="{ backgroundImage: 'url(' + backgroundImageSrc + ')', backgroundSize: 'contain', backgroundPosition: 'center' }">
      
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10">
        <h2 class="text-4xl font-bold mb-4 text-gray-900 relative animated-gradient">
        Bienvenue chez <span class="text-blue-500">Nom de votre entreprise</span>
        </h2>
        <p class="text-lg text-white mb-6 animate__animated animate__fadeInUp">Découvrez nos services et plus encore.</p> <!-- 🖋️ Effet de machine à écrire -->
        <p class="text-lg text-yellow-600 mb-8 typing-text">{{ typedText }}</p>

        <button @click="scrollToServices"
                class="px-8 py-4 bg-blue-600 text-white rounded-lg btn-animated pulse-animation">
                 Découvrez nos services
        </button>
      </div>

      <!-- Flocons de neige -->
      <div class="snowflakes">
        <div class="snowflake">❄</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❄</div>
      </div>
    </section>


   <!-- Section avec l'image d'aperçu -->
   <section class="py-24 bg-white text-center relative overflow-hidden">
    <div class="container mx-auto">
      
      <!-- 🌟 Titre avec effet gradient animé -->
    

     
      <!-- 📊 Section des statistiques animées -->
      <div class="grid grid-cols-3 gap-8 mt-10">
        <div v-for="stat in stats" :key="stat.label" class="p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
          <h3 class="text-4xl font-bold text-blue-600 counter">{{ stat.value }}</h3>
          <p class="text-gray-600">{{ stat.label }}</p>
        </div>
      </div>

      <!-- 💡 Bloc interactif "Pourquoi nous choisir ?" -->
      <div class="grid grid-cols-2 gap-8 mt-16">
        <div
          v-for="(reason, index) in reasons"
          :key="index"
          class="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          data-aos="flip-left"
        >
          <h4 class="text-xl font-semibold">{{ reason.title }}</h4>
          <p class="text-sm">{{ reason.description }}</p>
        </div>
      </div>

      <!-- 🌟 Slider Témoignages -->
      <div class="mt-16" data-aos="zoom-in">
        <swiper :slides-per-view="1" :loop="true" :autoplay="{ delay: 3000 }" class="w-3/4 mx-auto">
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="p-6 bg-blue-100 rounded-lg shadow-lg">
              <p class="text-lg text-gray-700 italic">"{{ testimonial.text }}"</p>
              <h4 class="text-sm font-semibold mt-4">{{ testimonial.author }}</h4>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 🎯 Bouton animé -->
      <div class="mt-6">
        <button
          @click="scrollToServices"
          class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 animate-pulse"
        >
          Découvrir Nos Services
        </button>
      </div>
    </div>
  </section>

   <!-- Section des Services -->
<!-- Section des Services -->
<section id="services" class="py-24 bg-gray-50">
  <div class="container mx-auto text-center">
    <h3 class="text-3xl font-semibold mb-8">Nos Services</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Carte Service 1 -->
      <div class="service-card">
        <div class="service-card-inner">
          <!-- Face avant -->
          <div class="service-card-front">
            <div class="icon-container">
              <i class="fas fa-cogs"></i>
            </div>
            <h4>Service 1</h4>
            <p>Descriptions de services avec animation dynamique.</p>
          </div>
          <!-- Face arrière -->
          <div class="service-card-back">
            <h4>Détails du service</h4>
            <p>Explication plus complète du service avec des avantages spécifiques.</p>
          </div>
        </div>
      </div>

      <!-- Carte Service 2 -->
      <div class="service-card">
        <div class="service-card-inner">
          <div class="service-card-front">
            <div class="icon-container">
              <i class="fas fa-chart-line"></i>
            </div>
            <h4>Service 2</h4>
            <p>Descriptions de services avec animation dynamique.</p>
          </div>
          <div class="service-card-back">
            <h4>Détails du service</h4>
            <p>Présentation des résultats et analyses en temps réel.</p>
          </div>
        </div>
      </div>

      <!-- Carte Service 3 -->
      <div class="service-card">
        <div class="service-card-inner">
          <div class="service-card-front">
            <div class="icon-container">
              <i class="fas fa-users"></i>
            </div>
            <h4>Service 3</h4>
            <p>Descriptions de services avec animation dynamique.</p>
          </div>
          <div class="service-card-back">
            <h4>Détails du service</h4>
            <p>Engagement client et solutions adaptées.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



    <!-- Section Témoignages -->
    <section class="py-24 bg-white">
       <div class="testimonial-card">
       <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Client" class="testimonial-avatar">
        <h3 class="text-3xl font-semibold mb-8">Témoignages</h3>
        <Swiper :slides-per-view="1" :loop="true">
          <SwiperSlide>
            <p class="italic">"Excellent service, je recommande vivement !"</p>
            <p class="mt-4 font-semibold">- Client Satisfait</p>
          </SwiperSlide>
          <SwiperSlide>
            <p class="italic">"Une expérience incroyable, merci beaucoup."</p>
            <p class="mt-4 font-semibold">- Client Heureux</p>
          </SwiperSlide>
          <SwiperSlide>
            <p class="italic">"Des professionnels dévoués et compétents."</p>
            <p class="mt-4 font-semibold">- Client Fidèle</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-8 mt-12">
      <div class="container mx-auto text-center">
        <p>&copy; 2025 Nom de l'Entreprise - Tous droits réservés</p>
      <div class="mt-4 flex justify-center space-x-6 social-icons">
             <a href="#" class="text-blue-400 hover:text-blue-500"><i class="fab fa-facebook-f"></i></a>
             <a href="#" class="text-blue-400 hover:text-blue-500"><i class="fab fa-twitter"></i></a>
             <a href="#" class="text-blue-400 hover:text-blue-500"><i class="fab fa-linkedin-in"></i></a>
             <a href="#" class="text-blue-400 hover:text-blue-500"><i class="fab fa-instagram"></i></a>
      </div>
      </div>
    </footer>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted, ref, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import miseEnSceneImage from '../../assets/mise_en_scene.png';
import backgroundImage from '../../assets/image4.png';

export default {
  name: 'HomePage',
  components: { Swiper, SwiperSlide },
  setup() {
    const imageSrc = ref(miseEnSceneImage);
    const backgroundImageSrc = ref(backgroundImage);
    const typedText = ref('');
    const phrases = ['Bienvenue sur notre site !', 'Découvrez nos services !', 'Votre satisfaction, notre priorité !'];
    let index = 0;

    // Effet de texte animé (machine à écrire)
    const typeEffect = () => {
      let i = 0;
      const interval = setInterval(() => {
        typedText.value = phrases[index].substring(0, i);
        i++;
        if (i > phrases[index].length) {
          clearInterval(interval);
          setTimeout(() => {
            index = (index + 1) % phrases.length;
            typeEffect();
          }, 2000);
        }
      }, 100);
    };

    // Effet de zoom au scroll
    const isImageZoomed = ref(false);
    const handleScroll = () => {
      isImageZoomed.value = window.scrollY > 200;
    };

    // Scroll vers la section services
    const scrollToServices = () => {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    };

    // Statistiques animées
    const stats = ref([
      { value: '250+', label: 'Clients satisfaits' },
      { value: '1000+', label: 'Projets réalisés' },
      { value: '10+', label: 'Années d’expérience' }
    ]);

    // Bloc interactif "Pourquoi nous choisir ?"
    const reasons = ref([
      { title: 'Qualité garantie', description: 'Nos services sont conçus pour offrir le meilleur' },
      { title: 'Support 24/7', description: 'Nous sommes disponibles à tout moment pour vous aider' }
    ]);

    onMounted(() => {
      AOS.init(); // Initialiser AOS pour les animations
      typeEffect();
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      imageSrc,
      backgroundImageSrc,
      typedText,
      scrollToServices,
      isImageZoomed,
      stats,
      reasons,
      services: [
        { icon: 'fas fa-cogs', title: 'Service 1', description: 'Descriptions de services avec animation dynamique.' },
        { icon: 'fas fa-chart-line', title: 'Service 2', description: 'Descriptions de services avec animation dynamique.' },
        { icon: 'fas fa-users', title: 'Service 3', description: 'Descriptions de services avec animation dynamique.' }
      ],
      testimonials: [
        { text: 'Excellent service, je recommande vivement !', author: 'Client Satisfait' },
        { text: 'Une expérience incroyable, merci beaucoup.', author: 'Client Heureux' },
        { text: 'Des professionnels dévoués et compétents.', author: 'Client Fidèle' }
      ]
    };
  }
};
</script>

<style scoped>
@import 'animate.css/animate.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';


footer {
  animation: fadeInUp 1s ease-in-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.social-icons a {
  transition: transform 0.3s ease-in-out;
}

.social-icons a:hover {
  transform: scale(1.2);
}


.testimonial-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  text-align: center;
}

.testimonial-card:hover {
  transform: scale(1.05);
}

.testimonial-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
}


.service-card {
  perspective: 1000px;
  background-color: transparent;
  width: 100%;
  height: 250px;
}

.service-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.service-card:hover .service-card-inner {
  transform: rotateY(180deg);
}

.service-card-front, 
.service-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 250px; /* Évite la superposition */
}

/* Face avant */
.service-card-front {
  background: white;
}

/* Face arrière */
.service-card-back {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  transform: rotateY(180deg);
}

/* Style des icônes */
.icon-container {
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 10px;
}


/* Animation améliorée de l'image de fond */
.animated-bg {
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
}

.btn-animated {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-animated:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.pulse-animation {
  animation: pulse 1.5s infinite;
}

/* Déplacement horizontal progressif */
@keyframes bgMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* Effet de zoom progressif */
@keyframes bgZoom {
  0% { background-size: 100%; }
  100% { background-size: 110%; }
}

body {
  font-family: 'Arial', sans-serif;
}

button:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Animation de l'image de fond */
.animated-bg {
  animation: bgMove 15s infinite linear;
}

@keyframes bgMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.pulse-animation:hover {
  animation: pulse 1s infinite;
}

/* Réduire l'image d'arrière-plan */
.animated-bg {
  background-size: cover; /* L'image occupe tout l'écran sans déformation */
  background-position: center; /* Centrer l'image */
  animation: moveBackground 30s infinite linear; /* Animation de l'arrière-plan */
}

/* Animation de neige */
.snowflakes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* S'assurer que les flocons couvrent toute la section */
  pointer-events: none; /* Les flocons ne bloquent pas les autres éléments */
  z-index: 2; /* Placer les flocons au-dessus de l'arrière-plan */
}

.snowflake {
  position: absolute;
  top: -10px;
  font-size: 2rem;
  color: white;
  animation: snow 10s linear infinite;
  opacity: 0.7; /* Rendre les flocons légèrement translucides */
}

.snowflake:nth-child(odd) {
  animation-duration: 12s;
  left: 20%; /* Position aléatoire à gauche */
}

.snowflake:nth-child(even) {
  animation-duration: 8s;
  left: 50%; /* Position aléatoire à gauche */
}

@keyframes snow {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(-50px); /* L'animation fait tomber les flocons du haut vers le bas */
    opacity: 0;
  }
}

/* Animation de l'image en mouvement (effet parallax) */
@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}


@keyframes zoomBackground {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Ajout d'une animation de bouton */
.btn-animated {
  position: relative;
  overflow: hidden;
}

.btn-animated::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
}

.btn-animated:hover::before {
  transform: translate(-50%, -50%) scale(1);
}


/* ✨ Effet gradient animé sur le titre */
.animated-gradient {
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradient-animation 3s infinite alternate;
}

@keyframes gradient-animation {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
}

/* ⌨️ Effet de machine à écrire */
.typing-text {
  font-family: monospace;
  border-right: 3px solid #007cf0;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  width: 100%;
  text-align: center;
  animation: blink 0.7s infinite step-end;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

/* 📊 Animation compteur */
.counter {
  animation: count 2s ease-in-out;
}

@keyframes count {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>

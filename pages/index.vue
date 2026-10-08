<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/30">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="bg-blue-600 p-2 rounded-lg">
             <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <span class="text-xl font-bold tracking-tight text-slate-900">Hayyiz HRIS</span>
        </div>
        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#promotions" class="hover:text-blue-600 transition-colors">Promotions</a>
          <a href="#stock-options" class="hover:text-blue-600 transition-colors">Stock Options</a>
          <a href="#benefits" class="hover:text-blue-600 transition-colors">Benefits</a>
          <a href="#team" class="hover:text-blue-600 transition-colors">Founders</a>
        </div>
        <div class="flex items-center gap-4">
          <NuxtLink to="/auth" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Sign In</NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <main class="relative pt-24 pb-20 flex flex-col items-center text-center px-6">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm text-blue-700 mb-8">
        <span class="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
        Enterprise Human Resources Management
      </div>
      
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight max-w-4xl">
        Manage your workforce with <span class="text-blue-600">precision.</span>
      </h1>
      
      <p class="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl">
        The complete HRIS platform designed for modern enterprises. Track promotions, administer benefits, and manage stock options efficiently and professionally.
      </p>

      <div class="flex justify-center mb-10">
        <NuxtLink to="/auth" class="group flex items-center justify-center gap-3 rounded-xl bg-white border border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-300">
          <svg class="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
            <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
            <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
            <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853" />
          </svg>
          Sign in with Google
        </NuxtLink>
      </div>
    </main>

    <!-- Promotions Section -->
    <section id="promotions" class="py-24 bg-white border-y border-slate-200">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Promotion & Growth Analytics</h2>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              Empower your workforce with clear career paths. Our platform provides comprehensive tools to track performance, manage promotion cycles, and automatically visualize compensation growth over time.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span class="text-slate-700">Clear visibility into performance metrics and career trajectories.</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span class="text-slate-700">Automated salary adjustments upon promotion approval.</span>
              </li>
            </ul>
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <img src="@/assets/img/hris_promotion.jpg" alt="Promotion Analytics" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Stock Options Section -->
    <section id="stock-options" class="py-24 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Equity & Stock Options Management</h2>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              Attract and retain top talent by easily managing their equity. Hayyiz HRIS simplifies the administration of employee stock options, vesting schedules, and fair market value tracking.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span class="text-slate-700">Automate and track complex vesting schedules with ease.</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span class="text-slate-700">Real-time fair market valuation and financial impact modeling.</span>
              </li>
            </ul>
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <img src="@/assets/img/hris_stock.jpg" alt="Stock Options Vesting" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="py-24 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Benefits Administration</h2>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              Simplify open enrollment and benefit elections. Our dashboard gives employees a crystal-clear breakdown of health insurance, retirement plans, and other perks in one unified view.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span class="text-slate-700">Dynamic benefit enrollment updates corresponding to new titles.</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span class="text-slate-700">Detailed cost breakdowns for medical, dental, and retirement plans.</span>
              </li>
            </ul>
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <img src="@/assets/img/hris_benefits.jpg" alt="Benefits Dashboard" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Founders Section -->
    <section id="team" class="py-24 bg-slate-50 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership</h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
          Founded by industry experts dedicated to building the future of Human Resources technology.
        </p>
        <div class="flex flex-wrap justify-center gap-12">
          <div class="w-72 text-center">
            <img src="@/assets/img/founder_1.jpg" alt="Tariq Al-Fayed" class="w-48 h-48 mx-auto rounded-full object-cover shadow-lg border-4 border-white mb-6" />
            <h3 class="text-xl font-bold text-slate-900">Tariq Al-Fayed</h3>
            <p class="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
            <p class="text-slate-500 text-sm">Over 15 years of experience in enterprise software and workforce management solutions across the MENA region and globally.</p>
          </div>
          <div class="w-72 text-center">
            <img src="@/assets/img/founder_2.jpg" alt="Fatima Al-Zahra" class="w-48 h-48 mx-auto rounded-full object-cover shadow-lg border-4 border-white mb-6" />
            <h3 class="text-xl font-bold text-slate-900">Fatima Al-Zahra</h3>
            <p class="text-blue-600 font-medium mb-3">Chief Operating Officer</p>
            <p class="text-slate-500 text-sm">Former HR executive who brings deep domain expertise in compensation, benefits, and equity strategy to Hayyiz HRIS.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-6">
            <div class="bg-blue-600 p-1.5 rounded-md">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <span class="text-lg font-bold text-white">Hayyiz HRIS</span>
          </div>
          <p class="text-sm text-slate-400">
            Empowering organizations with professional HR, benefits, and equity management tools.
          </p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Platform</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#promotions" class="hover:text-blue-400 transition-colors">Promotions</a></li>
            <li><a href="#benefits" class="hover:text-blue-400 transition-colors">Benefits Admin</a></li>
            <li><a href="#stock-options" class="hover:text-blue-400 transition-colors">Stock Options</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#team" class="hover:text-blue-400 transition-colors">Leadership</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Legal</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" class="hover:text-blue-400 transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2026 Hayyiz Technologies. All rights reserved.</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
           <!-- Social Icons Placeholder -->
           <a href="#" class="hover:text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
           <a href="#" class="hover:text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#app'

useHead({
  title: 'Hayyiz HRIS | Enterprise Human Resources Management',
})
</script>

<style>
html {
  scroll-behavior: smooth;
  background-color: #f8fafc;
}
</style>
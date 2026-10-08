<template>
  <div class="min-h-screen flex items-center justify-center font-sans py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
    <!-- Abstract Background Elements -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]"></div>
      <div class="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-50/50 blur-[100px]"></div>
    </div>

    <!-- Login Card -->
    <div class="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-50 text-blue-600 flex-shrink-0 mb-6 hover:bg-blue-100 transition-colors">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        </NuxtLink>
        <h2 class="text-2xl font-bold tracking-tight text-slate-900">Welcome to Hayyiz HRIS</h2>
        <p class="mt-2 text-sm text-slate-500">Sign in to manage your enterprise workforce</p>
      </div>

      <!-- Google Sign In Button -->
      <button type="button" class="flex w-full justify-center items-center gap-3 rounded-xl bg-white border border-slate-200 px-4 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:shadow hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all mb-6">
        <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
          <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
          <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
          <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853" />
        </svg>
        Sign in with Google
      </button>

      <div class="relative flex py-2 items-center mb-6">
        <div class="flex-grow border-t border-slate-200"></div>
        <span class="flex-shrink-0 mx-4 text-slate-400 text-sm">Or continue with email</span>
        <div class="flex-grow border-t border-slate-200"></div>
      </div>

      <form class="space-y-5" @submit.prevent="handleSubmit">
        <div>
          <label for="email" class="block text-sm font-medium text-slate-700 mb-1.5">Email address</label>
          <input v-model="formData.email" id="email" type="email" autocomplete="email" placeholder="name@company.com" class="block w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all" />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
          <div class="relative">
            <input v-model="formData.password" :type="showPassword ? 'text' : 'password'" id="password" placeholder="••••••••" autocomplete="current-password" class="block w-full rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-10 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all" />
            <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-4" @click="showPassword = !showPassword">
              <svg v-if="!showPassword" class="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <svg v-else class="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.978 9.978 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </button>
          </div>
        </div>

        <div class="pt-4">
          <button type="submit" :disabled="processing || !isFormEmpty" class="flex w-full justify-center items-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
            <span v-if="processing" class="mr-2">
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            {{ processing ? 'Signing in...' : 'Sign in' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead, useNuxtApp } from '#app'

useHead({
  title: 'Sign In | Hayyiz HRIS',
})

const router = useRouter();
const showModal = ref(false);
const processing = ref(false);
const showPassword = ref(false)

const detectBrowserType = () => {
  if (typeof window !== "undefined") {
    const agent = window.navigator.userAgent.toLowerCase();
    if (agent.includes("chrome") && !agent.includes("edg")) {
      return "Chrome";
    } else if (agent.includes("safari") && !agent.includes("chrome")) {
      return "Safari";
    } else if (agent.includes("firefox")) {
      return "Firefox";
    } else if (agent.includes("edg")) {
      return "Edge";
    } else {
      return "Other";
    }
  }
  return "Unknown";
};

const formData = ref({
  email: "",
  password: "",
  ip: "",
  browser: detectBrowserType(),
});

const handleSubmit = async () => {
  processing.value = true;
  const url = "https://pophirs-backend.onrender.com/api/auth/signin";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (!response.ok) {
      if(useNuxtApp().$toast) {
        useNuxtApp().$toast.error("Network response was not ok", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      }
    }

    await response.json();
    showModal.value = true;
    formData.value.email = "";
    formData.value.password = "";
    if(useNuxtApp().$toast) {
      useNuxtApp().$toast.success("Login was successful", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    }
    router.push("/");
  } catch (error) {
    if (typeof window !== "undefined") {
      if(useNuxtApp().$toast) {
        useNuxtApp().$toast.error("Error occured whhile submiting form", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      }
    }
  } finally {
    processing.value = false;
  }
};

const isFormEmpty = computed(() => {
  return !!(formData.value.email && formData.value.password);
});

const fetchIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    formData.value.ip = data.ip;
  } catch (error) {
    formData.value.ip = "Unavailable";
  }
};

fetchIPAddress();
</script>

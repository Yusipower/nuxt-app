<template>
  <div class="min-h-screen font-Raleway bg-primary">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>


<script setup></script>

<template>
  <UiLayoutDisplay title="Progress">
    <div class="content">
      <div class="progress">
        <ProgressBar
          mode="indeterminate"
          class="app-progressline"></ProgressBar>
        <ProgressBar :value="50" class="app-progressline-percent"></ProgressBar>
        <ProgressSpinner class="app-progressspinner" fill="transparent" />
      </div>
    </div>
  </UiLayoutDisplay>
</template>

<style lang="scss" scoped>
.progress {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>

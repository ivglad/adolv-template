<script setup></script>

<template>
  <UiLayoutDisplay title="Paginator">
    <div class="content">
      <Paginator
        :rows="10"
        :totalRecords="120"
        :rowsPerPageOptions="[10, 20, 50]"
        :pt="{
          pcRowPerPageDropdown: {
            root: {
              class: 'ml-10',
            },
          },
        }">
      </Paginator>
    </div>
  </UiLayoutDisplay>
</template>

<style lang="scss" scoped>
.content {
  width: fit-content;
}
</style>

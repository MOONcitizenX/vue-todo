<template>
  <div class="container header-container">
    <header class="header">
      <img src="../assets/logo.png" class="header-logo" />
      <h1 class="header-title">MyTodos</h1>
    </header>
  </div>
</template>

<style scoped>
.header-container {
  background-color: var(--bg-color);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.header {
  display: flex;
  justify-content: space-between;
}
.header-logo {
  width: 60px;
  aspect-ratio: 1/1;
}
.header-title {
  color: var(--main-color);
}
</style>

<template lang='pug'>
  v-app
    v-app-bar(app color='#B700A5' dark v-if="currentRoute != '/primeiroacesso'")
      v-container(style='position: absolute; left: 50%; transform: translate(-50%);')
        img(height='90' src='../imagens/logo.png')
      v-spacer
    router-view
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    currentRoute () {
      return this.$route.path
    }
  }
};
</script>

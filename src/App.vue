<template lang='pug'>
  v-app
    v-app-bar(app color='#7bc4d1' dark v-if="currentRoute != '/primeiroacesso'")
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

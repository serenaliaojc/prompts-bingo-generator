<template>
  <v-app>

    <!-- TODO: shrink on scroll app bar -->
    <AppBar/>

    <v-content>

      <!-- TODO: p1- introduction, user guide -->
      <!-- TODO: p2- bingo card options, preview -->
      <!-- TODO: p3- bingo card, share buttons, download -->

    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'

export default {
  name: 'App',
  components: {
    AppBar,
  },
  data: () => ({
    //
  }),
};
</script>

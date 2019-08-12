<template>
  <v-app>

    <!-- TODO: shrink on scroll app bar -->
    <AppBar/>

    <v-content class="white">

      <!-- TODO: p1- introduction, user guide -->
      <Introduction/>
      <BingoCard/>
      <!-- TODO: p2- bingo card options, preview -->
      <!-- TODO: p3- bingo card, share buttons, download -->

    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import Introduction from './components/Introduction'
import BingoCard from './components/BingoCard'

export default {
  name: 'App',
  components: {
    AppBar,
    Introduction,
    BingoCard,
  },
  data: () => ({
    //
  }),
};
</script>

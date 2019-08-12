<template>
  <v-container
    grid-list-xl
    style="height: 100vh"
  >
    <v-layout
      align-center
      justify-center
      fill-height
      row
      wrap
    >

      <v-flex
        xs12
        md8
      >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sapiente iure odio sed nisi ab reprehenderit odit cum assumenda dolorem neque inventore blanditiis perferendis fugiat delectus saepe et, nemo alias.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sapiente iure odio sed nisi ab reprehenderit odit cum assumenda dolorem neque inventore blanditiis perferendis fugiat delectus saepe et, nemo alias.</p>
      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: "Introduction"
};
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
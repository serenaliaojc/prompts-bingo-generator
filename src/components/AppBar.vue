<template>
  <v-app-bar
    light
    fixed
    elevate-on-scroll
  >
    <v-container>
      <v-layout
        justify-space-around
        align-center
      >
        <v-toolbar-title>
          <i class="far fa-star primary--text"></i>
          {{ $t('site-name') }}
        </v-toolbar-title>

        <div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                small
                rounded
                href="https://github.com/serenaliaojc"
                target="_blank"
                v-on="on"
              >
                <v-icon>fab fa-github</v-icon>
              </v-btn>
            </template>
            <span>{{ $t('github') }}</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                small
                rounded
                href="https://github.com/serenaliaojc"
                target="_blank"
                v-on="on"
              >
                <v-icon>fab fa-weibo</v-icon>
              </v-btn>
            </template>
            <span>{{ $t('weibo') }}</span>
          </v-tooltip>
        </div>

      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
};
</script>

<i18n>
{
  "en": {
    "site-name": "Prompts Bingo Generator",
    "github": "Source Code",
    "weibo": "Give some feedback :)"
  }
}
</i18n>

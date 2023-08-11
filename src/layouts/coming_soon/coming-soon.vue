<template>
  <v-app id="error">
    <v-container fluid class="error-page center divcol">
      <v-row justify="center" align="center">
        <v-col class="tcenter center divcol padd0mobile">
          <!-- content -->
          <h1 class="h5_em bold">C o m i n g s o o n</h1>
          <v-btn href="#" :to="'/'" class="font2 h7_em bold">{{$t('buttonTitle')}}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'coming-soon',
  i18n: require("./i18n"),
};
</script>

<style src="./coming-soon.scss" lang="scss"></style>

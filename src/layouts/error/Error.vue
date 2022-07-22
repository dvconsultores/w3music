<template>
  <v-app id="error">
    <v-container fluid class="error-page center divcol">
      <v-row justify="center" align="center">
        <v-col class="tcenter center divcol padd0mobile">
          <!-- content -->
          <h1 class="p bold">404</h1>
          <span class="h5_em bold">{{$t('errorTitle')}}</span>
          <v-btn href="#" :to="'/'" class="h7_em bold">{{$t('buttonTitle')}}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'error',
  i18n: require("./i18n"),
};
</script>

<style src="./Error.scss" lang="scss"></style>

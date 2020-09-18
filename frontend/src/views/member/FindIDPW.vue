<template>
  <v-main>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <slot name="find"></slot>
        <v-card>
          <span class="headline">Find Your Information</span>
          <v-card-text>
            <v-container>
              <v-row>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-main>
</template>

<script>
</script>

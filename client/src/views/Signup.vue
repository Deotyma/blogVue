<template>
  <v-conrainer>
    <v-row>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
           <v-card-title>Rejestracja</v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation>
            <v-text-field
              v-model="pseudo"
              :rules="pseudoRules"
              label="Pseudonim"
              required>
              </v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required>
              </v-text-field>

            <v-text-field
              v-model="password"
              type="password"
              :rules="passwordRules"
              label="Haslo"
              required>
              </v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate">
              Rejestracja
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-conrainer>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      pseudo: '',
      pseudoRules: [
        v => !!v || 'prosze wpisac pseudonim',
      ],
      email: '',
      emailRules: [
        v => !!v || 'prosze wpisac adres mail',
        v => /.+@.+\..+/.test(v) || 'E-mail jest niewazny',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'prosze wpisac haslo',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>
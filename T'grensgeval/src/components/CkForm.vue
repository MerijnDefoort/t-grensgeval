<template>
  <div class="">
    <h1 class="text-center max-md:text-2xl mb-12 uppercase text-5xl">Contact Formulier</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="font-medium text-xl max-md:text-base">Naam</label>
        <input
          type="text"
          id="name"
          class="p-2 px-4 text-xl rounded-md max-md:text-base"
          v-model="emailParams.from_name"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="font-medium text-xl max-md:text-base">Email</label>
        <input
          type="email"
          class="p-2 px-4 rounded-md text-xl max-md:text-base"
          id="email"
          v-model="emailParams.email"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="font-medium text-xl max-md:text-base">Bericht</label>
        <textarea
          id="message"
          class="p-2 px-4 rounded-md text-xl max-md:text-base"
          v-model="emailParams.message"
          required
        ></textarea>
      </div>
      <p
        v-if="errorMessage"
        class="p-2 mb-6 text-red-700 font-semibold text-center bg-red-50 w-1/2 max-md:w-full rounded-xl"
      >
        {{ errorMessage }}
      </p>
      <p
        v-if="successMessage"
        class="p-2 mb-6 font-semibold text-green-700 text-center bg-green-50 w-1/2 max-md:w-full rounded-xl"
      >
        {{ successMessage }}
      </p>
      <div class="flex mt-12 mb-12 flex-col relative justify-center items-center">
        <button
          class="rounded-3xl uppercase absolute border-solid border-black border-2 hover:border-2 hover:bg-primary-100 hover:border-primary-100 hover:text-bg-100 bg-bg-200 w-2/6 max-lg:w-2/3 text-2xl max-lg:text-base font-semibold py-2 px-4"
          type="submit"
        >
          Verstuur
        </button>
        <div class="border-b-2 border-black w-2/3 max-md:w-full"></div>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      emailParams: {
        from_name: '',
        reply_to: '',
        email: '',
        message: '',
        name: "'t Grensgeval'"
      },
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    submitForm() {
      this.errorMessage = ''
      this.successMessage = ''
      this.emailParams.reply_to = this.emailParams.email

      emailjs
        .send('service_2izc6aq', 'template_74qnu4h', this.emailParams, 'sxI2ValDxR_88N3vK')
        .then(
          (result) => {
            this.successMessage = 'Formulier succesvol verzonden!'
            console.log('You have successfully submitted your message', result.text)
          },
          (error) => {
            console.log(
              'This form failed to submit, please kindly check your internet connection',
              error.text
            )
            this.errorMessage = 'Er liep iets mis. Probeer het later opnieuw.'
          }
        )

      // Here you can handle form submission, like sending the data to an API
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>

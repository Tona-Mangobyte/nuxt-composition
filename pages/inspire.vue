<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script setup>
  import { ref, onMounted, useFetch, useAsync, useContext } from '@nuxtjs/composition-api'
  useFetch(() => {
    const { $http } = useContext()
    const posts = ref(null)
    posts.value = useAsync(() =>
      $http.$get('https://jsonplaceholder.typicode.com/posts')
    )
    // console.info(posts.value)
  })
  onMounted(() => {
    console.info('======onMounted=======')
  })
</script>

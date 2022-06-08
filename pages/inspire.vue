<template>
  <v-row>
    <v-col class="text-center">
      <v-card>
        <v-card-title>
          Composition api demo
        </v-card-title>
        <v-card-text>
          <p>
            Count: {{ count }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn class="primary" @click="increment">Increment</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import { ref, onMounted, useFetch, useAsync, useContext } from '@nuxtjs/composition-api'

  const { app } = useContext()

  const count = ref(0)
  const posts = ref(null)

  useFetch(() => {
    posts.value = useAsync(() =>
      app.$http.$get('https://jsonplaceholder.typicode.com/posts')
    )
    // console.info(posts.value)
  })
  onMounted(() => {
    console.info('======onMounted=======')
    count.value = 0
  })

  function increment() {
    count.value++
  }
</script>

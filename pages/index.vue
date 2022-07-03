<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p id="count">Count: {{ count }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn id="btnCount" color="primary" @click="increment"> Count </v-btn>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {
  defineComponent,
  ref,
  useFetch,
  useAsync,
  useContext,
  onMounted,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const count = ref(0)
    const posts = ref(null)
    const { $http } = useContext()

    useFetch(() => {
      posts.value = useAsync(() =>
        $http.$get('https://jsonplaceholder.typicode.com/posts')
      )
      // console.info(posts.value)
    })

    onMounted(() => {
      console.log(`The initial count is ${count.value}.`)
    })

    return { count, posts }
  },
  methods: {
    increment() {
      this.count++
    },
  },
})
</script>

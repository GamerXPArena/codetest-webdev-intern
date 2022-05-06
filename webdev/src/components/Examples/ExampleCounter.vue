<!-- This is an example component written in vue for reference on your test -->
<!-- HTML Template -->
<template>
    <div class="container">
        <div class="counter">
            <button class="btn-primary" @click="subtract()">-</button>
            <pre>{{ count }}</pre>
            <button class="btn-primary" @click="add()">+</button>
        </div>
        <div class="counter-message">
            <slot />
        </div>
    </div>
</template>

<!-- VUE | JS -->
<script>
export default {
  name: "ExampleCounter",
  data ( ) 
  {
    return {
      count: 0,
    };
  },
  methods: 
  {
    add ( ) 
    {
        this.count++;
    },
    subtract ( )
    {
        this.count--;
    },
  },
};
</script>

<!-- CSS -->
<style>
.counter {
  display: grid;
  font-size: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2em;
  place-items: center;
}
.counter-message {
  text-align: center;
}
.btn-primary {
    @apply py-2 px-4 w-24 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
}
</style>
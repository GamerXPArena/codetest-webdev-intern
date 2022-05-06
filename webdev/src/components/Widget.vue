<template>
    <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
        <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" v-bind:style="{ backgroundImage: 'url(' + image_url + ')' }">
        </a>
        <div class="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
            <a href="#_" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white">{{ type }}</a>
            <h2 class="mb-5 text-5xl font-bold"><a href="#_">{{ name }}</a></h2>
            <p class="mb-2 text-lg font-normal text-blue-100 opacity-100">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "Widget",
  props: [ 'name', 'description', 'type', 'image_url' ],
  data ( ) 
  {
    return {
    };
  },
  methods: 
  {
  },
};
</script>

<style>

</style>

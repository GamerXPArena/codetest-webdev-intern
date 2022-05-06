<!-- HTML Template -->
<template>
    <div id="container">
        <div class="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
        <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
            <h1 class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"><a href="#_">Widget Scroller</a></h1>
            <p class="text-lg font-medium text-gray-500 sm:text-2xl">O seu objetivo é fazer este scroller funcionarcomo o descrito! Boa Sorte!</p>
            <div class="flex overflow-x-scroll pb-10 pt-20">
                <div class="flex flex-nowrap lg:ml-1000 md:ml-20 ml-10" v-for="widget in widgets" :key="widget.name">
                    <div class="inline-block px-2">
                        <component :is="Widget" :name="widget.name" :description="widget.description" :type="widget.type" :image_url="widget.image_url" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- VUE | JS -->
<script>
import {shallowRef} from '@vue/reactivity';
import Widget from './Widget.vue';

const response = await fetch ( 'https://example.api.connect-stack.com/codetest/webdev/data' );
const data = await response.json ( );
const widgets = data.objects.widgets;

export default {
  name: "WidgetSlider",
  data ( ) 
  {
    return {
        Widget: shallowRef (Widget),
        widgets: widgets,
    };
  },
  methods: 
  {
      OnScrollLeft ( )
      {
          
      },
      OnScrollRight ( )
      {

      }
  }
};
</script>

<!-- CSS -->
<style>
.btn-scroller {
    @apply py-2 px-4 w-12 h-12 bg-blue-500 text-white font-bold text-xl rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
}
</style>
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwindIntegration from '@astrojs/tailwind';

export default defineConfig({
	integrations: [vue(), tailwindIntegration()],
});
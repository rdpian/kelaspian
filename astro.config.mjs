import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vue from '@astrojs/vue';

export default defineConfig({
  // Ganti 'username' dengan nama akun GitHub milikmu
  site: 'https://kelas.rdpian.my.id',
  base: '/', 

  integrations: [
vue(),
starlight({
    title: 'Kelas Pian',
    social: [
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/rdpian/kelaspian',
      },
    ],
    sidebar: [
      {
        label: 'Kelas Moodle & Moodiy',
        items: [
          { autogenerate: { directory: 'moodle-moodiy' } }
        ],
      },
      {
        label: 'Kelas Pemrograman Micro:bit',
        items: [
          { autogenerate: { directory: 'microbit' } }
        ],
      },
    ],
  }), vue()],
});
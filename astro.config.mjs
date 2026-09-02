import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // Ganti 'username' dengan nama akun GitHub milikmu
  site: 'https://rdpian.github.io',
  base: '/kelaspian', 

  integrations: [
    starlight({
      title: 'Kelas Pian',
      social: {
        github: 'https://github.com/rdpian/kelaspian',
      },
      sidebar: [
        {
          label: 'Kelas Moodle & Moodiy',
          autogenerate: { directory: 'moodle-moodiy' },
        },
        {
          label: 'Kelas Pemrograman Micro:bit',
          autogenerate: { directory: 'microbit' },
        },
      ],
    }),
  ],
});
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/proyecto_academia_conquer/', // Necesario para despliegue en GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Entrada principal
        // legal: resolve(__dirname, 'pages/aviso-legal.html'), // Aviso legal
        // who: resolve(__dirname, 'pages/quienes-somos.html'), // Quienes somos
        // blog: resolve(__dirname, 'pages/blog.html'), //Blog
        // contact: resolve(__dirname, 'pages/contact.html'), // Contact
        // curso1: resolve(__dirname, 'pages/curso1.html'), //Curso1
        // curso2: resolve(__dirname, 'pages/curso2.html'), //Curso2
        // cursos: resolve(__dirname, 'pages/cursos.html'), //Cursos
        // login: resolve(__dirname, 'pages/login.html'), //Login
        // noti1: resolve(__dirname, 'pages/noticia1.html'), //Noticia1
        // noti2: resolve(__dirname, 'pages/noticia2.html'), //Noticia2
        // registro: resolve(__dirname, 'pages/registro.html') //Registro

      },
    },
  },
});
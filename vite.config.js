import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/proyecto_academia_conquer/', // Necesario para despliegue en GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Entrada principal
        legal: resolve(__dirname, 'pages/legal-advise.html'), // Aviso legal
        who: resolve(__dirname, 'pages/quienes-somos.html'), // Quienes somos
        cursoFullstack: resolve(__dirname, 'pages/cursos-fullstack.html'), //Curso1
        cursoBlockchain: resolve(__dirname, 'pages/cursos-blockchain.html'), //Curso2
        cursoCibersegruidad: resolve(__dirname, 'pages/cursos-ciberseguridad.html'), //Curso3
        cursos: resolve(__dirname, 'pages/cursos.html'), //Cursos
        blog: resolve(__dirname, 'pages/blog.html'), //Blog
        new_algoritmo: resolve(__dirname, 'pages/new_algoritmo.html'), //Noticia 1
        new_bit: resolve(__dirname, 'pages/new_bit.html'), //Noticia 2
        new_diagrama: resolve(__dirname, 'pages/new_diagrama.html'), //Noticia 3
        new_junior: resolve(__dirname, 'pages/new_junior.html'), //Noticia 4
        new_lenguaje: resolve(__dirname, 'pages/new_lenguaje.html'), //Noticia 5
        new_marketer: resolve(__dirname, 'pages/new_marketer.html'), //Noticia 6
        contact: resolve(__dirname, 'pages/contact.html'), // Contact
        login: resolve(__dirname, 'pages/login.html'), //Login
        registro: resolve(__dirname, 'pages/registro.html') //Registro

      },
    },
  },
});
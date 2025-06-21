# Lista de Animes - App con React

Una aplicación interactiva construida con **React** que permite a los usuarios buscar animes, agregarlos a una lista de favoritos y navegar por los resultados utilizando filtros, ordenamiento y paginación. Diseñada para practicar el uso de todos los **React Hooks esenciales**, junto con una arquitectura limpia y modular.

---

## 🚀 Características principales

* Buscar animes mediante una API externa (Jikan API)
* Filtros por tipo de anime (tv, movie, ova, etc.)
* Orden ascendente/descendente
* Paginación dinámica con scroll horizontal
* Animaciones fluidas con Framer Motion
* Lista de favoritos persistente usando localStorage
* Componentes reutilizables y modularizados
* **Desplegado en Netlify**

---

## 🔧 Tecnologías y librerías utilizadas

* **React 18**
* **Vite** (entorno de desarrollo)
* **React Icons**
* **Framer Motion** (animaciones)
* **Jikan API** (fuente de datos de anime)
* **LocalStorage** (persistencia de datos)
* **Netlify** (hosting gratuito)

---

## 🧠 Hooks personalizados y aplicación de hooks de React

### `useState`

Manejo de estados para filtros, páginas, carga, favoritos, etc.

### `useEffect`

Llamadas a la API y sincronización de filtros y datos al cargar o actualizar

### `useRef`

Control de scroll horizontal y valores persistentes como `totalPage`

### `useMemo`

Evita recalcular ordenamientos innecesarios

### `useCallback`

Previene recreación de funciones como `loadPage`, `updateFilter`

### `useReducer`

Manejo avanzado del estado de favoritos (ADD, DELETE, CLEAR)

### `useContext`

Contexto global para la lista de favoritos, accesible desde cualquier componente

### `useId`

IDs accesibles y consistentes para formularios e inputs

---

## 📁 Estructura del proyecto (simplificada)

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Animes.jsx
│   ├── Filters.jsx
│   ├── List.jsx
│   ├── Pagination.jsx
│   └── ViewAnimes.jsx
├── context/
│   └── Favorites.jsx
├── hooks/
│   ├── useFavorites.js
│   ├── useFilters.js
│   └── useGetAnime.js
├── Reducers/
│   └── favoriteReduce.js
├── services/
│   └── searchAnime.js
├── styles/
    ├── animes.css
    └── filters.css
```

---

## 🧩 Componentes Clave

### `Animes.jsx`

Carga animes desde la API y permite navegar entre páginas

### `List.jsx`

Muestra animes favoritos con filtrado local

### `ViewAnimes.jsx`

Componente visual común para mostrar listas de animes (de API o favoritos)

### `Filters.jsx`

Maneja filtros de búsqueda, tipo y ordenamiento

### `Pagination.jsx`

Muestra páginas y permite moverse entre ellas

### `Favorites.jsx`

Contexto global con `useReducer` + `localStorage`

---

## 📦 Instalación y uso

```bash
git clone https://github.com/tuusuario/ListaAnimes.git
cd ListaAnimes
npm install
npm run dev
```

---

## 🌐 Enlace desplegado

[👉 Ver aplicación en Netlify](https://lista-animes.netlify.app)

---

## 🎯 Aprendizaje y objetivos

Este proyecto fue diseñado como una práctica para dominar React con:

* Estructura de componentes reutilizables
* React Hooks esenciales y personalizados
* Manejo de contexto global
* Interacción con APIs externas
* Persistencia con localStorage
* Animaciones con Framer Motion

---

## 🔮 Próximamente

* ✅ Página de detalles para cada anime usando **React Router**
* ✅ Sistema de autenticación de usuarios con **Firebase Auth** (gratuito)
* ✅ Almacenamiento de favoritos en la nube con **Firebase Firestore** (plan gratuito disponible)
* ✅ Comentarios por usuario y valoración del anime
* ✅ Filtros avanzados por temporada, año o popularidad
* ✅ Mejoras en rendimiento, accesibilidad y SEO

---

## ✨ Autor

Desarrollado por **Juan David Silva** como ejercicio completo de React moderno.

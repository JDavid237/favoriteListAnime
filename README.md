# Lista de Animes - App con React

Una aplicación interactiva construida con **React** que permite a los usuarios buscar animes, agregarlos a una lista de favoritos y navegar por los resultados utilizando filtros, ordenamiento y paginación. Diseñada para practicar el uso de todos los **React Hooks esenciales**, junto con una arquitectura limpia, modular y escalable.

---

## 🚀 Características principales

* Buscar animes mediante una API externa (Jikan API)
* Filtros por tipo de anime (tv, movie, ova, etc.)
* Orden ascendente/descendente
* Paginación dinámica con scroll horizontal
* Página de detalles con información extendida del anime
* Animaciones fluidas con Framer Motion
* Lista de favoritos persistente usando localStorage
* Lazy loading de rutas con `React.lazy` y `Suspense`
* Transiciones entre rutas con **AnimatePresence**
* Modales visuales con **SweetAlert2**
* Manejo de datos eficiente con **React Query**
* Pruebas unitarias y de integración con **Vitest**
* Pruebas end-to-end con **Playwright**
* Componentes reutilizables y modularizados
* **Desplegado en Netlify**

---

## 🔧 Tecnologías y librerías utilizadas

* **React 18**
* **Vite** (entorno de desarrollo)
* **React Router DOM**
* **React Icons**
* **Framer Motion** (animaciones)
* **Jikan API** (fuente de datos)
* **LocalStorage** (persistencia de datos)
* **React Query** (manejo de estado asincrónico)
* **SweetAlert2** (alertas visuales)
* **Vitest** + **Testing Library** (pruebas unitarias/integración)
* **Playwright** (pruebas E2E)
* **Netlify** (hosting gratuito)

---

## 🧠 Hooks personalizados y aplicación de hooks de React

### `useState`

Manejo de estados locales como filtros, carga, favoritos y paginación.

### `useEffect`

Ejecución de efectos secundarios al cambiar filtros, cargar datos, etc.

### `useRef`

Referencias persistentes para scroll horizontal y lógica auxiliar.

### `useMemo`

Memoización para ordenamientos y renderizados costosos.

### `useCallback`

Evita recreaciones innecesarias de funciones dependientes.

### `useReducer`

Gestión de favoritos mediante acciones: agregar, eliminar y limpiar.

### `useContext`

Provee acceso global al estado de favoritos en toda la app.

### `useId`

Identificadores únicos y accesibles para formularios e inputs.

### `useQuery` (de React Query)

Manejo de peticiones asincrónicas con cache, loading, error y refetch automático.

---

## 📁 Estructura del proyecto (simplificada)

```
src/
├── App.jsx
├── main.jsx
├── components/
│ ├── Animes.jsx
│ ├── Filters.jsx
│ ├── List.jsx
│ ├── Pagination.jsx
│ └── ViewAnimes.jsx
├── context/
│ └── Favorites.jsx
├── hooks/
│ ├── useFavorites.js
│ ├── useFilters.js
│ └── useGetAnime.js
├── pages/
│ └── Details.jsx
├── Reducers/
│ └── favoriteReduce.js
├── services/
│ └── searchAnime.js
├── styles/
│ ├── animes.css
│ └── filters.css
├── test/
│ ├── Animes.test.jsx
│ ├── List.test.jsx
│ ├── Details.test.jsx
│ └── favoriteReduce.test.js
├── e2e/
│ └── favorites.spec.js
```

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

## 📦 Instalación y uso

```bash
git clone https://github.com/JDavid237/favoriteListAnime
cd ListaAnimes
npm install
npm run dev


## 🌐 Enlace desplegado

[👉 Ver aplicación en Netlify](https://willowy-cuchufli-9e3359.netlify.app/)

---

## 🎯 Aprendizaje y objetivos

Este proyecto fue diseñado como una práctica para dominar React con:

* Estructura de componentes reutilizables
* React Hooks esenciales y personalizados
* Manejo de contexto global y escalabilidad del proyecto
* Interacción con APIs externas
* Persistencia con localStorage
* Animaciones con Framer 
* Lazy loading de rutas y manejo de errores
* Interacción con APIs externas y cache con React Query
* Animaciones visuales con Framer Motion
* Pruebas automatizadas unitarias y E2E

---

## 🔮 Próximamente

* ✅ Sistema de autenticación de usuarios con **Firebase Auth** (gratuito)
* ✅ Almacenamiento de favoritos en la nube con **Firebase Firestore** (plan gratuito disponible)
* ✅ Comentarios por usuario y valoración del anime
* ✅ Filtros avanzados por temporada, año o popularidad
* ✅ Mejoras en rendimiento, accesibilidad y SEO

---

## ✨ Autor

Desarrollado por **Juan David Silva** como ejercicio completo de React moderno.

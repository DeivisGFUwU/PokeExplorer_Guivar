<<<<<<< HEAD
# PokeExplorer Guivar

Aplicación móvil hecha en **React Native** para explorar Pokémon usando la [PokeAPI](https://pokeapi.co/). Permite buscar, ver detalles y gestionar favoritos, con soporte para modo claro/oscuro y feedback visual moderno.

## Características

- Listado de Pokémon con imágenes y tipos.
- Detalle de cada Pokémon (estadísticas, habilidades, tipos).
- Gestión de favoritos (agregar/quitar).
- Búsqueda y paginación.
- Modo claro y oscuro.
- Feedback global con toasts y mensajes unificados.
- Optimización de rendimiento en listas.

## Instalación y ejecución

1. **Clona el repositorio:**
	```sh
	git clone <url-del-repo>
	cd PokeExplorer_Guivar
	```

2. **Instala dependencias:**
	```sh
	npm install
	# o
	yarn install
	```

3. **Ejecuta Metro (servidor JS):**
	```sh
	npm start
	# o
	yarn start
	```

4. **Corre la app:**
	- **Android:**
	  ```sh
	  npm run android
	  # o
	  yarn android
	  ```
	- **iOS:**
	  ```sh
	  npm run ios
	  # o
	  yarn ios
	  ```
	  > Asegúrate de instalar CocoaPods en iOS: `cd ios && pod install`

## Estructura del proyecto

- `src/components/` — Componentes reutilizables (Botón, Card, Mensajes, Toast, etc).
- `src/screens/` — Pantallas principales (Home, Favoritos, Perfil, Detalle, Login).
- `src/api/` — Lógica de conexión con la PokeAPI.
- `src/store/` — Estado global (favoritos, usuario, etc) usando Zustand.
- `src/theme/` — Temas y proveedor de modo claro/oscuro.
- `__tests__/` — Pruebas unitarias (si aplica).

## Scripts útiles

- `npm start` — Inicia Metro Bundler.
- `npm run android` — Compila y ejecuta en Android.
- `npm run ios` — Compila y ejecuta en iOS.
- `npm test` — Ejecuta pruebas.

## Créditos y agradecimientos

- [React Native](https://reactnative.dev/)
- [PokeAPI](https://pokeapi.co/)
- [Zustand](https://github.com/pmndrs/zustand)

---

Desarrollado por DeivisGFUwU y colaboradores. ¡Atrápalos todos!

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
=======
# PokeExplorer_Guivar
>>>>>>> 54c1b106a7fcf0ceb69dd4adc2f3951dda1971ac

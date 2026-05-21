# Portfolio Website

Responsive single-page portfolio powered by Three.js. No build step required -- deploy straight to GitHub Pages.

---

## Editing links

Open `main.js` and find the `LINKS` array near the top of the file:

```js
const LINKS = [
  { label: 'GitHub',    url: 'https://github.com/your-username', icon: `...` },
  { label: 'LinkedIn',  url: 'https://linkedin.com/in/you',      icon: `...` },
  // ...
];
```

Change `label` and `url` for each entry. Add or remove objects in the array to change the number of buttons. The page renders however many entries are in the array.

---

## Swapping in your own 3D model

1. Export your model as a `.glb` file and place it at `/assets/model.glb`.
2. In `main.js`, uncomment the `GLTFLoader` import near the top:
   ```js
   import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
   ```
3. Delete or comment out everything between `// PLACEHOLDER START` and `// PLACEHOLDER END`.
4. Uncomment the GLTFLoader block that follows the placeholder section.
5. Adjust the scale normalization lines inside the loader callback if the model appears too large or too small.

---

## Deploy to GitHub Pages

1. Create a new GitHub repository (public or private with Pages enabled).
2. Push all files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. Go to the repository on GitHub.
4. Open **Settings > Pages**.
5. Under **Source**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`.
7. Click **Save**. GitHub will provide a URL (e.g. `https://your-username.github.io/your-repo/`) -- it typically goes live within a minute or two.

> No build step is needed. The site uses an `importmap` to load Three.js directly from a CDN, so the raw files deploy as-is.

---

## Customising colors and animation

| What               | Where              | Key to change           |
|--------------------|--------------------|-------------------------|
| Background blue    | `style.css`        | `--blue-bg`, `--blue-mid` and `scene.background` in `main.js` |
| Button style       | `style.css`        | `--btn-*` custom properties |
| Model color        | `main.js`          | `color: 0xf0f4f8` in `solidMat` |
| Rotation speed     | `main.js`          | `ROTATION_SPEED`        |
| Bob speed/height   | `main.js`          | `BOB_SPEED`, `BOB_AMPLITUDE` |

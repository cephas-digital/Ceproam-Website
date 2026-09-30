// import { defineConfig } from "vite";
// import react, { reactCompilerPreset } from "@vitejs/plugin-react";
// import babel from "@rolldown/plugin-babel";

// export default defineConfig(({ command }) => ({
//   base: command === "build" ? "/ceproam/" : "/",

//   plugins: [
//     react(),
//     babel({
//       presets: [reactCompilerPreset()],
//     }),
//   ],
// }));

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/ceproam/" : "/",
  plugins: [react()],
}));

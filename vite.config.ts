import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    Unocss({
      shortcuts: {
        btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
        "input-label-auth": "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        "input-auth":
          "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      },
      theme: {
        colors: {
          primary: "#F8F9FD",
          nav: {
            primary: "#1B2430",
            secondary: "",
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@test": path.resolve(__dirname, "./src/test"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@util": path.resolve(__dirname, "./src/utilities"),
      "@service": path.resolve(__dirname, "./src/service"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});

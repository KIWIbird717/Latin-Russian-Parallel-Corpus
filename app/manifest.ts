export default function manifest() {
  return {
    name: "Latin Russian Corpus",
    short_name: "LRC",
    description:
      "Latin-Russian корпус сделанный под руководством Института Лингвистический Исследований РАН",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    start_url: "/",
    icons: [
      { src: "favicons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "favicons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

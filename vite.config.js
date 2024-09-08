import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: "src",
  envDir: resolve(__dirname),
  publicDir: resolve(__dirname, "public"),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        sessions: resolve(__dirname, 'src/sessions/index.html'),
        speakers: resolve(__dirname, 'src/speakers/index.html'),
        gallery: resolve(__dirname, 'src/gallery/index.html'),
        membership: resolve(__dirname, 'src/membership/index.html'),

        "sessions/1492-greed-luck-world-shrank/index": resolve(__dirname, "src/sessions/1492-greed-luck-world-shrank/index.html"),
        "sessions/1979-a-revolution-of-our-times/index": resolve(__dirname, "src/sessions/1979-a-revolution-of-our-times/index.html"),
        "sessions/ahom-arunachal-story-tribes-mountain/index": resolve(__dirname, "src/sessions/ahom-arunachal-story-tribes-mountain/index.html"),
        "sessions/ancient-body-medicine-story/index": resolve(__dirname, "src/sessions/ancient-body-medicine-story/index.html"),
        "sessions/big-hunger-death-at-the-doorsteps/index": resolve(__dirname, "src/sessions/big-hunger-death-at-the-doorsteps/index.html"),
        "sessions/chequered-history-of-a-promised-land/index": resolve(__dirname, "src/sessions/chequered-history-of-a-promised-land/index.html"),
        "sessions/circle-of-sweet-time-jalebi/index": resolve(__dirname, "src/sessions/circle-of-sweet-time-jalebi/index.html"),
        "sessions/clay-human-history-mud-1/index": resolve(__dirname, "src/sessions/clay-human-history-mud-1/index.html"),
        "sessions/clay-human-history-mud-2/index": resolve(__dirname, "src/sessions/clay-human-history-mud-2/index.html"),
        "sessions/curiosity-game-changer-civilization/index": resolve(__dirname, "src/sessions/curiosity-game-changer-civilization/index.html"),
        "sessions/death-of-hyder-chais-in-the-capital/index": resolve(__dirname, "src/sessions/death-of-hyder-chais-in-the-capital/index.html"),
        "sessions/invisible-inflict-cybercrime/index": resolve(__dirname, "src/sessions/invisible-inflict-cybercrime/index.html"),
        "sessions/origins-beauty-imperfection-wabi-sabi/index": resolve(__dirname, "src/sessions/origins-beauty-imperfection-wabi-sabi/index.html"),
        "sessions/paintings-palanquins-british-women-19-india/index": resolve(__dirname, "src/sessions/paintings-palanquins-british-women-19-india/index.html"),
        "sessions/persia-an-enchanting-history/index": resolve(__dirname, "src/sessions/persia-an-enchanting-history/index.html"),
        "sessions/story-water-bodies-heritage-mysore/index": resolve(__dirname, "src/sessions/story-water-bodies-heritage-mysore/index.html"),
        "sessions/the-magnificent-root-of-history-potato/index": resolve(__dirname, "src/sessions/the-magnificent-root-of-history-potato/index.html"),
        "sessions/time-history-measuring-invisible/index": resolve(__dirname, "src/sessions/time-history-measuring-invisible/index.html"),
        "sessions/unearthing-history-restoring-heritage/index": resolve(__dirname, "src/sessions/unearthing-history-restoring-heritage/index.html"),
        "sessions/yadavagiri-gateway-to-mysore-kingdom/index": resolve(__dirname, "src/sessions/yadavagiri-gateway-to-mysore-kingdom/index.html"),
      }
    }
  }
})

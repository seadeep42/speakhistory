import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePluginRadar } from 'vite-plugin-radar';

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
        "about-us": resolve(__dirname, 'src/about-us/index.html'),
        "member-blog": resolve(__dirname, './src/member-blog/index.html'),

        "sessions/01-01-death-of-hyder-chais-in-the-capital/index": resolve(__dirname, "src/sessions/01-01-death-of-hyder-chais-in-the-capital/index.html"),
        "sessions/01-02-yadavagiri-gateway-to-mysore-kingdom/index": resolve(__dirname, "src/sessions/01-02-yadavagiri-gateway-to-mysore-kingdom/index.html"),
        "sessions/01-03-big-hunger-death-at-the-doorsteps/index": resolve(__dirname, "src/sessions/01-03-big-hunger-death-at-the-doorsteps/index.html"),
        "sessions/01-04-persia-an-enchanting-history/index": resolve(__dirname, "src/sessions/01-04-persia-an-enchanting-history/index.html"),
        "sessions/01-05-chequered-history-of-a-promised-land/index": resolve(__dirname, "src/sessions/01-05-chequered-history-of-a-promised-land/index.html"),
        "sessions/01-06-1979-a-revolution-of-our-times/index": resolve(__dirname, "src/sessions/01-06-1979-a-revolution-of-our-times/index.html"),
        "sessions/01-07-the-magnificent-root-of-history-potato/index": resolve(__dirname, "src/sessions/01-07-the-magnificent-root-of-history-potato/index.html"),
        "sessions/01-08-paintings-palanquins-british-women-19-india/index": resolve(__dirname, "src/sessions/01-08-paintings-palanquins-british-women-19-india/index.html"),
        "sessions/01-09-origins-beauty-imperfection-wabi-sabi/index": resolve(__dirname, "src/sessions/01-09-origins-beauty-imperfection-wabi-sabi/index.html"),
        "sessions/01-10-ancient-body-medicine-story/index": resolve(__dirname, "src/sessions/01-10-ancient-body-medicine-story/index.html"),
        "sessions/01-11-circle-of-sweet-time-jalebi/index": resolve(__dirname, "src/sessions/01-11-circle-of-sweet-time-jalebi/index.html"),
        "sessions/01-12-unearthing-history-restoring-heritage/index": resolve(__dirname, "src/sessions/01-12-unearthing-history-restoring-heritage/index.html"),
        "sessions/01-13-story-water-bodies-heritage-mysore/index": resolve(__dirname, "src/sessions/01-13-story-water-bodies-heritage-mysore/index.html"),
        "sessions/01-14-ahom-arunachal-story-tribes-mountain/index": resolve(__dirname, "src/sessions/01-14-ahom-arunachal-story-tribes-mountain/index.html"),
        "sessions/01-15-invisible-inflict-cybercrime/index": resolve(__dirname, "src/sessions/01-15-invisible-inflict-cybercrime/index.html"),
        "sessions/01-16-clay-human-history-mud-1/index": resolve(__dirname, "src/sessions/01-16-clay-human-history-mud-1/index.html"),
        "sessions/01-17-clay-human-history-mud-2/index": resolve(__dirname, "src/sessions/01-17-clay-human-history-mud-2/index.html"),
        "sessions/01-18-curiosity-game-changer-civilization/index": resolve(__dirname, "src/sessions/01-18-curiosity-game-changer-civilization/index.html"),
        "sessions/01-19-1492-greed-luck-world-shrank/index": resolve(__dirname, "src/sessions/01-19-1492-greed-luck-world-shrank/index.html"),
        "sessions/01-20-time-history-measuring-invisible/index": resolve(__dirname, "src/sessions/01-20-time-history-measuring-invisible/index.html"),

        "sessions/02-02-footsteps-planet-history-human-migration/index": resolve(__dirname, "src/sessions/02-02-footsteps-planet-history-human-migration/index.html"),
        "sessions/02-03-mysore-city-history-lens-of-art/index": resolve(__dirname, "src/sessions/02-03-mysore-city-history-lens-of-art/index.html"),
        "sessions/02-04-mysore-palace-iconic-landmark/index": resolve(__dirname, "src/sessions/02-04-mysore-palace-iconic-landmark/index.html"),
        "sessions/02-05-journey-open-surgery-technology-driven-robotic-surgery/index": resolve(__dirname, "src/sessions/02-05-journey-open-surgery-technology-driven-robotic-surgery/index.html"),
        "sessions/02-06-cartography-history-of-cartography/index": resolve(__dirname, "src/sessions/02-06-cartography-history-of-cartography/index.html"),
        "sessions/02-07-history-of-nuclear-weapons/index": resolve(__dirname, "src/sessions/02-07-history-of-nuclear-weapons/index.html"),
        "sessions/02-08-phoenicians-trading-with-india-first-ever-scientific-proof/index": resolve(__dirname, "src/sessions/02-08-phoenicians-trading-with-india-first-ever-scientific-proof/index.html"),
      }
    }
  },
  plugins: [
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-VGEMZ929RP',
      },
    }),
  ]
})

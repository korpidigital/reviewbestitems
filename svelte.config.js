import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "development";
const prod = "production";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false
          }),
      
          prerender: {
            // This can be false if you're using a fallback (i.e. SPA mode)
            default: true
          },
        paths: {
            // change below to your repo name
           base: dev ? 'localhost:3000' : '',
           base: prod ? '' : '/reviewbestitems',
        }

    }
};

export default config;

//base: dev ? '' : '/reviewbestitems/',
//localhost:3000/




import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "development";
const prod = "production";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
           base: dev ? 'localhost:3000' : '',
           base: prod ? '' : 'github.com/korpidigital/reviewbestitems',
        }

    }
};

export default config;

//base: dev ? '' : '/reviewbestitems/',
//localhost:3000/




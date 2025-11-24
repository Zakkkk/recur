
shadow.cljs.devtools.client.env.module_loaded('main');

try { recur.frontend.app.init(); } catch (e) { console.error("An error occurred when calling (recur.frontend.app/init)"); console.error(e); }
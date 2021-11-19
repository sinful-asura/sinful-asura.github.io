 # Angular

 App optimization can be realized in different ways, but each of those ways comes with a certain downside: *it introduces the need to learn new concepts*.

 To some, this is not a problem and is even a source of joy, but to some it is also a nightmare **although it shouldn't be**.

 Now then, let's start.

 ## Lazy Loading

 Angular provides a way to lazy-load the modules (load them only when needed, *by default*).
 This default behavior can be changed with **preloading strategies*, but that's a topic for itself.

 Lazy loading is implemented by using a following syntax in routing module: ` loadChildren: () => import('path-to-module/module-name.module').then(m => m.exportedClassName) `

 It is recommended to split code into several modules, but for even better UX, we can set ` preloadingStrategy: PreloadAllModules `.
 This may seem pointless, as we've split our code into multiple parts but we're still loading them all - but that's a pitfall.

 While this is, certainly, true; we're actually simulating asynchronous app loading. The first 'page' gets loaded much faster than if all the code was in one bundle,
 while all other code continues loading in the background while the user already uses the loaded 'page'.

 ## AoT vs JiT Compilation

 AoT Compilation reduces processing burden for the client machine by compiling *Angular* code to *Javascript* code **Ahead of Time**.

 The default Angular behavior is to use JiT compiler, where the entire compiler gets loaded with the app and compiles Angular to Javascript as needed (Just in Time).
 Production should be built with **--prod** flag in order to utilize AoT compiler.


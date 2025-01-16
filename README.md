1) **Shimmer UI Requiments**
   Tailwind css
**Draft**
 <Body/> - here make a fetch call to render the data and pass it to Card
 <CardComponent/> - build card UI 
 <Shimmer/> - shimmer UI  - render conditionally(if data -> load card component->if not shimmer)

https://meme-api.com/gimme/20



2) **Protected Routes**
      - react-router-dom
      - routes
          - Home
          - About(access only when isAuthentication is true)
          - Login
      -  ProtectedRoute(Wrapper Component)

      <Header>   <Nav> Home About Login
            Route page(each page renders here when when it is called)
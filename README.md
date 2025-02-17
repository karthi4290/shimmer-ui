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

3) **Multi-Lang**
    - create a select element with options
    - create constants to pull the data according to the language selected.
4) **Accordion**
    - create a seperate route
    - use data locally (parent component)
    - create component to render no fo accordions. 
    - write  a logic to open a specific accordion and close all others(use index)
       - scenario 1 default it is set to openindex1    when clicked on already open accordion it sets the openIndex to NULL than isOpen will be set  as   false which closes the current accordion
       - scenario 2 when clicked on 2nd  then default openIndex changes to 2nd index  
       - scenario 3 when clicked on 3rd then 2nd openIndex changes to 3
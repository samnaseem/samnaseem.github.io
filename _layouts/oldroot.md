---
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{% include pageheadtitle.html %}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link href="{{site.baseurl}}/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mansalva&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,600;0,700;0,900;1,100;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@300;400;700&family=Titillium+Web:wght@200;600&display=swap" rel="stylesheet">
  </head>
  <body class="bg-dark text-light">

    <nav class="navbar navbar-dark navbar-expand-lg bg-none ms-2 fs-3 py-3">
        <div class="container">
          <a class="navbar-brand" href="#"><img src="/images/profile-pic.jpeg" class="rounded-circle" style="width: 36px;"
  alt="Avatar" /><span>Sam Naseem</span></a>
          <button class="navbar-toggler border border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark w-75" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body fs-5">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>




      



<h1 class="mt-n3">Welcome to SamNaseem.ai</h1>


<!--url(https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80)-->
<div class="container-fluid bg-image-default g-0" style="background-image:url({{page.splash}});">
    <div class="container d-flex text-light hero-3">
        <div class="container mb-3 mb-sm-5 mt-auto fs-3 hero-content-3">
            <h2 class="fs-h3 fw-h1" data-highlight="My Mission"><a class="text-light text-decoration-none" href="#">AI: Empowering Humanity, Forging Sustainable Futures</a></h1>
            <p>
                <a class="text-light text-decoration-none" href="#">
                    Aligning a vision with AI empowered innovators of tomorrow
                </a>
            </p>
            <p>
                <a class="btn btn-outline-light" href="#" role="button">Read more</a>
            </p>
        </div>    
    </div>
    <div class="container-fluid bg-overlay-gradient-bottom-dark g-0 p-5">
        <p class="m-0 p-5"></p>
    </div>
</div>



<div class="container mt-n6 fs-6 p-4">
    <div class="container text-light p-4 px-sm-5 rounded-4 bg-frost splash-follower">
        <h2 class="fs-6 text-uppercase text-white-50">What's trending now? <a class="d-none d-sm-block float-end text-light text-decoration-none fw-lighter" href="#">View More</a></h2>
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
            <div class="col my-2">
                <div class="row">
                    <div class="col col-4 d-flex">
                        <p>
                            <a href="#">
                                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="w-100 h-100 image-default rounded-4" alt="...">
                            </a>
                        </p>
                    </div>
                    <div class="col col-8">
                        <h3><a class="text-light" href="#">Blazor WASM C# JWT auth flow tutorial</a></h3>
                        <p>
                            <a class="text-light text-decoration-none" href="#">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </a>
                        </p>
                    </div>
                </div>                
            </div>
            <div class="col my-2">
                <div class="row">
                    <div class="col col-4 d-flex">
                        <p>
                            <a href="#">
                                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="w-100 h-100 image-default rounded-4" alt="...">
                            </a>
                        </p>
                    </div>
                    <div class="col col-8">
                        <h3><a class="text-light" href="#">Blazor WASM C# JWT auth flow tutorial</a></h3>
                        <p>
                            <a class="text-light text-decoration-none" href="#">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </a>
                        </p>
                    </div>
                </div>                
            </div>
            <div class="col my-2 d-none d-xl-block d-xxl-block">
                <div class="row">
                    <div class="col col-4 d-flex">
                        <p>
                            <a href="#">
                                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="w-100 h-100 image-default rounded-4" alt="...">
                            </a>
                        </p>
                    </div>
                    <div class="col col-8">
                        <h3><a class="text-light" href="#">Blazor WASM C# JWT auth flow tutorial</a></h3>
                        <p>
                            <a class="text-light text-decoration-none" href="#">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </a>
                        </p>
                    </div>
                </div>                
            </div>
        </div>       
        <p class="d-sm-none d-block">
            <a class="btn btn-outline-light w-100" href="#" role="button">Show more...</a>
        </p> 
    </div>
</div>


<div class="container p-4">
    <h2 class="text-uppercase text-white-50">DevOps and Orchestration <a class="d-none d-sm-inline-block float-end btn btn-outline-light btn-sm" href="#">Show More</a></h2>
    <div class="row py-2 gx-5 fs-5">
        <div class="col-md-8">
            <div class="col mt-3 mb-5">
                <p>
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="w-100 h-100 image-default rounded-4 aspect-ratio-2-1" alt="...">
                    </a>
                </p>
                <h3>Blazor WASM C# JWT auth flow tutorial</h3>
                <p>
                    <a class="text-light text-decoration-none" href="#">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </a>
                </p>
            </div>
            <div class="col mt-3 mb-5">
                <p>
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="w-100 h-100 image-default rounded-4 aspect-ratio-2-1" alt="...">
                    </a>
                </p>
                <h3>Blazor WASM C# JWT auth flow tutorial</h3>
                <p>
                    <a class="text-light text-decoration-none" href="#">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </a>
                </p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="col mt-3 mb-5">
                <p>
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="w-100 h-100 image-default rounded-4 aspect-ratio-2-1" alt="...">
                    </a>
                </p>
                <h3>Blazor WASM C# JWT auth flow tutorial</h3>
                <p>
                    <a class="text-light text-decoration-none" href="#">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </a>
                </p>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-12 mt-3 mb-5 fs-sm-s fs-md-r">
                    <div class="row">
                        <p class="col-5 col-xl-12">
                            <a href="#">
                                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="w-100 h-100 image-default rounded-4 aspect-ratio-2-1" alt="...">
                            </a>
                        </p>
                        <h3 class="col-7 col-xl-12">Blazor WASM C# JWT auth flow tutorial</h3>
                        <p class="col">
                            <a class="text-light text-decoration-none" href="#">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </a>
                        </p>
                    </div>                
                </div>
                <div class="col-12 col-sm-6 col-md-12 mt-3 mb-5 fs-sm-s fs-md-r row">
                    <p class="col-5 col-xl-12">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="w-100 h-100 image-default rounded-4 aspect-ratio-2-1" alt="...">
                        </a>
                    </p>
                    <h3 class="col-7 col-xl-12">Blazor WASM C# JWT auth flow tutorial</h3>
                    <p class="float-start">
                        <a class="text-light text-decoration-none" href="#">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </a>
                    </p>             
                </div>
                <!--<div class="col-12 col-sm-6 col-md-12 mt-3 mb-5 fs-sm-s fs-md-r d-flex flex-wrap align-content-start">
                    <h3 class="order-2 w-75">
                        <a class="text-light" href="#">
                            Blazor WASM C# JWT auth flow tutorial
                        </a>
                    </h3>
                    <p class="order-1 w-25">
                        <a class="text-light text-decoration-none" href="#">
                            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" class="w-100 image-default rounded-4 aspect-ratio-2-1" alt="...">
                        </a>
                    </p>             
                    <p class="order-3 w-75">
                        <a class="text-light text-decoration-none" href="#">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </a>
                    </p>             
                </div>-->
            </div>            
        </div>
    </div>
    <p class="d-sm-none d-block">
        <a class="btn btn-outline-light w-100" href="#" role="button">Show more...</a>
    </p>
    <hr class="my-5" />
</div>






    {{content}}


    <div class="content fs-4">
        {{content}}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    
  </body>
</html>
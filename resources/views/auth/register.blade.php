<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('assets/style.css')}}">
    <title>login</title>
</head>
<body>
    <section class="h-100 gradient-form" style="background-color: #eee;">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
            <div class="card rounded-3 text-black">
            <div class="row g-0">
                <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">

                    <div class="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style="width: 185px;" alt="logo">
                    <h4 class="mt-1 mb-5 pb-1">LOGIN</h4>
                    </div>

                    <form method="POST" action="{{ route('register') }}">
                    @csrf
                    
                    <div class="form-outline mb-4">
                        <label class="form-label" for="name">Nombre: </label>
                        <input type="text" id="name" name="name" class="form-control" placeholder="Ingresa tu nombre" />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="email">Correo: </label>
                        <input type="email" id="email" name="email" class="form-control" placeholder="Ingresa tu correo" />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="password">Contraseña: </label>
                        <input type="password" id="password" name="password" class="form-control" />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="password_confirmation">Confirmar Contraseña: </label>
                        <input type="password" id="password_confirmation" name="password_confirmation" class="form-control" />
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Registrarse</button>
                    </div>
                </form>


                </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">We are more than just a company</h4>
                    <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</html>

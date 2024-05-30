<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('/css/styleLogin.css') }}">
    <title>login</title>
</head>

<body>
    <div class="wrapper">
        <div class="form-wrapper sign-in">
            <form method="post" action="{{ route('login') }}">
                @csrf
                <h2>Iniciar sesion</h2>
                <div class="input-group">
                    <input type="text" name="email" required>
                    <label for="">Email: </label>
                </div>
                <div class="input-group">
                    <input type="password" name="password" required>
                    <label>contraseña</label>
                </div>
                <div class="remember">
                <label><input type="checkbox">Recordarme</label>
            </div>
                <button type="submit">iniciar sesion</button>
                <div class="signUp-link">
                    <p>No tengo una cuenta? <a href="#" class="signUpBtn-link">Registrarse</a></p>
                </div>
            </form>
        </div>


        <div class="form-wrapper sign-up">
            <form method="POST" action="{{ route('register') }}" id="registrationForm">
            @csrf
                <h2>Registrarse</h2>
                <div class="input-group">
                    <input type="text" id="name" name="name" required>
                    <label for="">Nombre: </label>
                </div>
                <div class="input-group">
                    <input type="email"  id="email" name="email" required>
                    <label for="">Email</label>
                </div>
                <div class="input-group">
                    <input type="password" id="password" name="password" required>
                    <label>contraseña</label>
                </div>
                <div class="input-group">
                    <input type="password" id="password_confirmation" name="password_confirmation" required>
                    <label>Confirmar contraseña</label>
                </div>
                <div id="errorMessage" class="error"></div>
                <div class="remember">
                <label><input type="checkbox">Acepto los terminos y condiciones</label>
            </div>
                <button type="submit">Registrarse</button>
                <div class="signUp-link">
                    <p>Ya tengo una cuenta? <a href="#" class="signInBtn-link">Iniciar sesion</a></p>
                </div>
            </form>
        </div>
    </div>

    <script src="{{ asset('/js/scriptLogin.js') }}"></script>

</body>
</html>
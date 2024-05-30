<link rel="stylesheet" href="{{ asset('/css/style2.css') }}">

<!-- resources/views/navbar.blade.php -->


@if (auth()->check())
    <!-- Usuario autenticado -->
    <form action="{{ route('logout') }}" method="POST">
        @csrf
        <button type="submit" class="btn btn-link luckiest-guy-regular botonLobby">Logout</button>
    </form>
@else
    <!-- Usuario no autenticado -->
    <button onclick="window.location.href='{{ route('login') }}'" class="btn btn-link luckiest-guy-regular botonLobby">
        Login
    </button>

@endif

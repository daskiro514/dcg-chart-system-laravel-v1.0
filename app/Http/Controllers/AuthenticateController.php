<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class AuthenticateController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $isAuthenticated = session('isAuthenticated');

        if ($isAuthenticated) {
          return redirect('/dashboard');
        }

        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');

        $response = Http::post('https://dcgonboarding.com/api/auth', [
            'username' => $username,
            'password' => $password,
        ]);

        $errors = $response->json('errors');
        $msg = $errors[0]['msg'];

        if ($msg !== null) {
          session(['msg' => $msg]);
          return redirect('/login');
        } 

        $token = $response->json('token');

        session(['token' => $token]);

        $response1 = Http::withHeaders([
            'x-auth-token' => $token
        ])->get('https://dcgonboarding.com/api/auth');

        $user = $response1->json();
        $product = $user['purchasedProductID'];
        $price = $product['price'];

        if ($price == 49700) {
            session(['isAuthenticated' => true]);
            session(['product' => $product]);
            session(['user' => $user]);
        }

        return redirect('/dashboard');
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}

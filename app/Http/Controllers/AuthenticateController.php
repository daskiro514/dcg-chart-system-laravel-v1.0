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

        if ($errors !== null) {
            $msg = $errors[0]['msg'];
            session(['msg' => $msg]);
            return redirect('/login');
        }

        $token = $response->json('token');

        session(['token' => $token]);

        $response1 = Http::withHeaders([
            'x-auth-token' => $token
        ])->get('https://dcgonboarding.com/api/auth');

        $user = $response1->json();
        session(['user' => $user]);
        session(['avatar' => $user['avatar']]);
        $type = $user['type'];

        if ($type == 'admin' || $type == 'hidden admin') {
            session(['isAuthenticated' => true]);
            session(['type' => 'admin']);
        } elseif ($type == 'customer') {
            $product = $user['purchasedProductID'];
            $price = $product['price'];

            if ($price == 49700) {
                session(['isAuthenticated' => true]);
                session(['product' => $product]);
                session(['type' => 'customer']);
            }
        } else {
            session(['msg' => "Partners can't see this website dashboard. Sorry.."]);
            return redirect('/login');
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

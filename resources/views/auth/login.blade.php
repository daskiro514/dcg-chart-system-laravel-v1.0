@extends('initialLayout')

@section('content')
    <div class="flex login-form">
        <div class="col-lg-4 col-md-6 col-sm-6 col-8 mx-auto">
            <div class="card-body">
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="form-group mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                                fill="black" fill-opacity="0.25" />
                            <path
                                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                                fill="black" fill-opacity="0.25" />
                        </svg>

                        <input type="text" placeholder="Email" id="username" class="form-control" name="username" required
                            autofocus>
                        @if ($errors->has('username'))
                            <span class="text-danger">{{ $errors->first('username') }}</span>
                        @endif
                    </div>

                    <div class="form-group mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7 7V10H6C4.93165 10 4 10.7764 4 11.8333V20.1667C4 21.2236 4.93165 22 6 22H18C19.0684 22 20 21.2236 20 20.1667V11.8333C20 10.7764 19.0684 10 18 10H17V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7ZM15 7V10H9V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM6 20V12H18V20H6ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
                                fill="black" fill-opacity="0.5" />
                        </svg>

                        <input type="password" placeholder="Password" id="password" class="form-control" name="password"
                            required>
                        @if ($errors->has('password'))
                            <span class="text-danger">{{ $errors->first('password') }}</span>
                        @endif
                    </div>

                    <div class="d-grid">
                        <button type="submit" class="form-control">Login</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
@endsection

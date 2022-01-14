<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>GraphIQ</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">

  <script src="https://kit.fontawesome.com/577845f6a5.js" crossorigin="anonymous"></script>

  <!-- Optional JavaScript -->
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

  <style>
    html,
    body {
      height: 100vh;
      overflow: hidden;
    }

    input {
      outline: none !important;
    }
  </style>
  @yield('links')
</head>

<body>
  <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">
  <div class="body">
    <div class="side-bar">
      <div class="side-bar-content flex flex-col">
        <div class="side-bar-item logo flex" id="logo">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H42V8.4H33.6V16.8H37.8V25.2H33.6V33.6H42V42H0V0Z" fill="#9158FF" />
          </svg>
        </div>
        <div class="side-bar-ideapanel flex flex-col">
          <div class="side-bar-item news flex flex-col" id="news">
            <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_9:105)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33329 20V2.66667H23.3333V20C23.3333 20.4675 23.4135 20.9163 23.5609 21.3333H8.66663C7.93025 21.3333 7.33329 20.7364 7.33329 20ZM27.3333 24H8.66663C6.45749 24 4.66663 22.2091 4.66663 20V0H23.3333H24.6666H26L26 6.66667H31.3333L31.3333 8V20C31.3333 22.2091 29.5424 24 27.3333 24ZM26 9.33333H28.6666V20C28.6666 20.7364 28.0697 21.3333 27.3333 21.3333C26.5969 21.3333 26 20.7364 26 20L26 9.33333ZM15.3333 5.33333V10.6667H9.99996V5.33333H15.3333ZM20.6666 9.33333V6.66667H16.6666V9.33333H20.6666ZM20.6666 12V14.6667H9.99996V12H20.6666ZM20.6666 18.6667V16H9.99996V18.6667H20.6666Z" fill="white" />
              </g>
              <defs>
                <filter id="filter0_d_9:105" x="0.666626" y="0" width="34.6667" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9:105" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9:105" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="side-bar-item algo flex flex-col" id="human-idea">
            <svg width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_5:611)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 2.91666C11.8708 2.91666 7.29163 7.49582 7.29163 13.125C7.29163 16.5958 9.02704 19.6437 11.6666 21.4958V24.7917C11.6666 25.5937 12.3229 26.25 13.125 26.25H21.875C22.677 26.25 23.3333 25.5937 23.3333 24.7917V21.4958C25.9729 19.6437 27.7083 16.5958 27.7083 13.125C27.7083 7.49582 23.1291 2.91666 17.5 2.91666ZM13.125 30.625C13.125 31.4271 13.7812 32.0833 14.5833 32.0833H20.4166C21.2187 32.0833 21.875 31.4271 21.875 30.625V29.1667H13.125V30.625ZM20.4166 19.9792L21.6562 19.1042C23.625 17.7333 24.7916 15.5021 24.7916 13.125C24.7916 9.09999 21.525 5.83332 17.5 5.83332C13.475 5.83332 10.2083 9.09999 10.2083 13.125C10.2083 15.5021 11.375 17.7333 13.3437 19.1042L14.5833 19.9792V23.3333H20.4166V19.9792Z" fill="white" />
              </g>
              <defs>
                <filter id="filter0_d_5:611" x="3.29163" y="2.91666" width="28.4167" height="37.1667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5:611" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5:611" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="side-bar-item algo flex flex-col" id="bot-idea">
            <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_5:133)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3333 6.125C25.5208 6.125 27.7083 7 29.4583 8.60417L30.625 7.4375C28.5833 5.39583 25.9583 4.375 23.3333 4.375C20.7083 4.375 18.0833 5.39583 16.0417 7.4375L17.2083 8.60417C18.9583 7 21.1458 6.125 23.3333 6.125ZM18.5208 9.77083L19.6875 10.9375C20.7083 9.91667 22.0208 9.47917 23.3333 9.47917C24.6458 9.47917 25.9583 9.91667 26.9791 10.9375L28.1458 9.77083C26.8333 8.45833 25.0833 7.72917 23.3333 7.72917C21.5833 7.72917 19.8333 8.45833 18.5208 9.77083ZM24.7917 18.9583H27.7083C29.3125 18.9583 30.625 20.2708 30.625 21.875V27.7083C30.625 29.3125 29.3125 30.625 27.7083 30.625H7.29167C5.6875 30.625 4.375 29.3125 4.375 27.7083V21.875C4.375 20.2708 5.6875 18.9583 7.29167 18.9583H21.875V13.125H24.7917V18.9583ZM27.7083 27.7083H7.29167V21.875H27.7083V27.7083ZM11.6667 23.3333H8.75V26.25H11.6667V23.3333ZM13.8542 23.3333H16.7708V26.25H13.8542V23.3333ZM21.875 23.3333H18.9583V26.25H21.875V23.3333Z" fill="white" />
              </g>
              <defs>
                <filter id="filter0_d_5:133" x="0.375" y="4.375" width="34.25" height="34.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5:133" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5:133" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div class="side-bar-mainpanel flex flex-col">
          @foreach($markets as $symbol)
          @if ($symbol->favorite == 1)
          <div class="side-bar-item flex flex-col" id="FXCM:{{$symbol->title}}:M5">
            <img src="./assets/{{$symbol->imguri}}" title="{{$symbol->title}}" />
            </a>
          </div>
          @endif
          @endforeach
        </div>
        <div class="side-bar-userinfopanel flex flex-col">
          <a href="{{url('/market')}}">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5022 10C17.5022 10.34 17.4722 10.66 17.4322 10.98L19.5422 12.63C19.7322 12.78 19.7822 13.05 19.6622 13.27L17.6622 16.73C17.5722 16.89 17.4022 16.98 17.2322 16.98C17.1722 16.98 17.1122 16.97 17.0522 16.95L14.5622 15.95C14.0422 16.34 13.4822 16.68 12.8722 16.93L12.4922 19.58C12.4622 19.82 12.2522 20 12.0022 20H8.00216C7.75216 20 7.54216 19.82 7.51216 19.58L7.13216 16.93C6.52216 16.68 5.96216 16.35 5.44216 15.95L2.95216 16.95C2.90216 16.97 2.84216 16.98 2.78216 16.98C2.60216 16.98 2.43216 16.89 2.34216 16.73L0.342159 13.27C0.222159 13.05 0.272159 12.78 0.462159 12.63L2.57216 10.98C2.53216 10.66 2.50216 10.33 2.50216 10C2.50216 9.67 2.53216 9.34 2.57216 9.02L0.462159 7.37C0.272159 7.22 0.212159 6.95 0.342159 6.73L2.34216 3.27C2.43216 3.11 2.60216 3.02 2.77216 3.02C2.83216 3.02 2.89216 3.03 2.95216 3.05L5.44216 4.05C5.96216 3.66 6.52216 3.32 7.13216 3.07L7.51216 0.42C7.54216 0.18 7.75216 0 8.00216 0H12.0022C12.2522 0 12.4622 0.18 12.4922 0.42L12.8722 3.07C13.4822 3.32 14.0422 3.65 14.5622 4.05L17.0522 3.05C17.1022 3.03 17.1622 3.02 17.2222 3.02C17.4022 3.02 17.5722 3.11 17.6622 3.27L19.6622 6.73C19.7822 6.95 19.7322 7.22 19.5422 7.37L17.4322 9.02C17.4722 9.34 17.5022 9.66 17.5022 10ZM15.5022 10C15.5022 9.79 15.4922 9.58 15.4522 9.27L15.3122 8.14L16.2022 7.44L17.2722 6.59L16.5722 5.38L15.3022 5.89L14.2422 6.32L13.3322 5.62C12.9322 5.32 12.5322 5.09 12.1022 4.91L11.0422 4.48L10.8822 3.35L10.6922 2H9.30216L9.10216 3.35L8.94216 4.48L7.88216 4.91C7.47216 5.08 7.06216 5.32 6.63216 5.64L5.73216 6.32L4.69216 5.9L3.42216 5.39L2.72216 6.6L3.80216 7.44L4.69216 8.14L4.55216 9.27C4.52216 9.57 4.50216 9.8 4.50216 10C4.50216 10.2 4.52216 10.43 4.55216 10.74L4.69216 11.87L3.80216 12.57L2.72216 13.41L3.42216 14.62L4.69216 14.11L5.75216 13.68L6.66216 14.38C7.06216 14.68 7.46216 14.91 7.89216 15.09L8.95216 15.52L9.11216 16.65L9.30216 18H10.7022L10.9022 16.65L11.0622 15.52L12.1222 15.09C12.5322 14.92 12.9422 14.68 13.3722 14.36L14.2722 13.68L15.3122 14.1L16.5822 14.61L17.2822 13.4L16.2022 12.56L15.3122 11.86L15.4522 10.73C15.4822 10.43 15.5022 10.21 15.5022 10ZM10.0022 6C7.79216 6 6.00216 7.79 6.00216 10C6.00216 12.21 7.79216 14 10.0022 14C12.2122 14 14.0022 12.21 14.0022 10C14.0022 7.79 12.2122 6 10.0022 6ZM8.00216 10C8.00216 11.1 8.90216 12 10.0022 12C11.1022 12 12.0022 11.1 12.0022 10C12.0022 8.9 11.1022 8 10.0022 8C8.90216 8 8.00216 8.9 8.00216 10Z" fill="white" />
            </svg>

          </a>
          <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13 16V18H11V16H13ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM8 10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10C16 11.2829 15.21 11.9733 14.4408 12.6455C13.711 13.2833 13 13.9046 13 15H11C11 13.1787 11.9421 12.4566 12.7704 11.8217C13.4202 11.3236 14 10.8792 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10H8Z" fill="white" />
            </svg>

          </a>
          <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.75C10.5 1.92 11.17 1.25 12 1.25C12.83 1.25 13.5 1.92 13.5 2.75V3.92C16.64 4.6 19 7.4 19 10.75V16.75L21 18.75V19.75H3V18.75L5 16.75V10.75C5 7.4 7.36 4.6 10.5 3.92V2.75ZM12 5.75C14.76 5.75 17 7.99 17 10.75V17.75H7V10.75C7 7.99 9.24 5.75 12 5.75ZM10.01 20.76C10.01 21.86 10.9 22.75 12 22.75C13.1 22.75 13.99 21.86 13.99 20.76H10.01ZM13 7.75V11.75H11V7.75H13ZM13 15.75V13.75H11V15.75H13Z" fill="white" />
            </svg>

          </a>
          <div class="btn-group dropright">
            <a type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img class="avatar-icon" src="assets/avatar.png" />
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="{{route('mng-signals')}}">New Signal</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="{{url('/')}}">Logout</a>
              <!-- <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <a class="dropdown-item" href="#">Separated link</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="side-bar-visiblebtn">
      <div class="toggle-btn"><i class="fas fa-angle-left"></i></div>
    </div> -->
    <div class="content">
      <div class="content-body">
        <span id="user_id" style="display:none">123</span>
        <span id="pattern_type" style="display:none"></span>
        <span id="project" style="display:none">page</span>
        @yield('content')
      </div>
    </div>
  </div>
</body>
{{-- script  --}}

<!-- Latest compiled and minified JavaScript -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="{{asset('js/sidebar.js')}}"></script>

@yield('script')
<script>
  $(document).ready(function() {
    $('.side-bar-visiblebtn').click(function() {

      $(".side-bar").animate({
        width: "toggle"
      });
      if ($('.toggle-btn').hasClass('active')) {
        $('.toggle-btn').html('<i class="fas fa-angle-left"></i>');
        $('.toggle-btn').removeClass('active');
      } else {
        $('.toggle-btn').html('<i class="fas fa-angle-right"></i>');
        $('.toggle-btn').addClass('active');
      }

    })

    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    }
    window.addEventListener('resize', appHeight);
    appHeight();

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

  });
</script>

</html>
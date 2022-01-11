 <nav class="navbar navbar-expand-lg navbar-dark bg-purple" id="navbarCostumer">
     <div class="container-sm">
         <a class="navbar-brand m-0" href="/">
             <img src="/images/content/logo-putih.png" class="d-inline-block img-brand">
         </a>

         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse justify-content-around align-items-center" id="navbarNav">
             <ul class="navbar-nav m-auto">
                 <li class="nav-item">
                     <a class="nav-link {{ Request::is('/') ? 'active' : ' ' }}" aria-current="page" href="/">Home</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link {{ Request::is('product*') ? 'active' : ' ' }}" href="/product">Produk</a>
                 </li>
                 <li class="nav-item ">
                     <a class="nav-link {{ Request::is('categories') ? 'active' : ' ' }}" href="/categories"
                         id="category">
                         Category
                     </a>
                 </li>

                 <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" id="explore" role="button" data-toggle="dropdown"
                         aria-expanded="false">
                         Explore
                     </a>
                     <ul class="dropdown-menu dropdown-menu-start  animate slideIn" aria-labelledby="explore">
                         <li><a class="dropdown-item" href="#">About Us</a></li>
                         <li><a class="dropdown-item" href="#">Contact</a></li>
                         <li><a class="dropdown-item" href="#">Testimoni</a></li>
                     </ul>
                 </li>
             </ul>

             @auth
                 @include('costumers.components.navbarAuth')
             @else
                 <div class="login-signup">
                     <div class="button-wrapper">
                         <a href="/login" class="btn radius btn-white-outline login mr-2">Masuk</a>
                         <a href="/signup" class="btn radius btn-white signup">Daftar</a>
                     </div>
                 </div>
             @endauth

         </div>
     </div>
 </nav>

 
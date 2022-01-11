 <div class="icons">
     <button class='navbar-icons btn btn-transparent fs-5 p-1 me-2  shadow-none wistlist position-relative'>
         <i class="bi bi-heart-fill text-white"></i>

         @if (isset($user->wishlist->first()->product_id))
             <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger px-2 py-1 mt-1"
                 id="wishlist-counter">

                 {{ $user->wishlist->count() }}

             </span>
         @else
             <span
                 class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger px-2 py-1 mt-1  d-none"
                 id="wishlist-counter">
             </span>

         @endif
     </button>



     <button type="button" class="navbar-icons btn btn-transparent fs-5 p-1  me-2 shadow-none cart position-relative">
         <i class="bi bi-cart-fill text-white"></i>
         @if (isset($user->cart->first()->product_id))
             <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger px-2 py-1 mt-1"
                 id="cart-counter">
                 {{ $user->cart->sum('qty') }}
             </span>
         @else
             <span
                 class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger px-2 py-1 mt-1  d-none"
                 id="cart-counter">

             </span>

         @endif

     </button>

     <button class='navbar-icons btn btn-transparent fs-5 p-1  me-3 shadow-none search'>
         <i class="bi bi-search text-white"></i>
     </button>
 </div>
 <div class="user-dropdown">

     <div class="button-wrapper">
         <div class="dropdown">
             <button class="btn dropdown-toggle p-0 border-0 text-white shadow-none" type="button" id="user-dropdown"
                 data-bs-toggle="dropdown" aria-expanded="false">
                 <img src="{{ Auth::user()->profile_picture != null ? Auth::user()->profile_picture : 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' }}"
                     alt="profile-picture" class="img-thumbnail rounded-circle border-0 bg-transparent">
             </button>

             <ul class="dropdown-menu  dropdown-menu-start animate slideIn" aria-labelledby="dropdownMenuButton1"
                 style="left:-120px">
                 <li><a class="dropdown-item" href="#">
                         <i class="icon bi bi-person-fill pe-3"></i>
                         My Profile</a></li>
                 <li><a class="dropdown-item" href="#"><i class="bi bi-gear-fill pe-3"></i>Setting</a></li>
                 <hr class="dropdown-divider">
                 @if (auth()->user()->is_admin == 1)
                     <li><a class="dropdown-item" href="{{ Route('adminHome') }}"><i
                                 class="bi bi-person-workspace pe-3 icon"></i></i>Dashboard Admin</a></li>
                     <hr class="dropdown-divider">
                 @endif
                 </li>
                 <li><a class="dropdown-item" href="/logout"><i class="bi bi-box-arrow-right pe-3 icon"></i>Keluar</a>
                 </li>
             </ul>
         </div>
     </div>
 </div>

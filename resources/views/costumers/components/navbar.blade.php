@php
$links = [
    [
        'href' => '/',
        'text' => 'Home',
        'is_multi' => false,
    ],
    [
        'href' => '/product',
        'text' => 'Produk',
        'is_multi' => false,
    ],
    [
        'href' => '/categories',
        'text' => 'Kategori',
        'is_multi' => false,
    ],
    [
        'href' => [
            [
                'section_text' => 'Explore',
                'section_list' => [
                    [
                        'href' => '#',
                        'text' => 'About Us',
                    ],
                    [
                        'href' => '#',
                        'text' => 'Contact',
                    ],
                    [
                        'href' => '#',
                        'text' => 'Testimoni',
                    ],
                ],
            ],
        ],
        'text' => 'Explore',
        'is_multi' => true,
    ],
];
$navigation_links = array_to_object($links);
@endphp
<nav class="navbar navbar-expand-lg navbar-dark bg-purple" id="navbarCostumer">
    <div class="container-sm">
        <a class="navbar-brand m-0" href="/">
            <img src="/images/content/toko-inez-white.png" class="d-inline-block img-brand">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-around align-items-center" id="navbarNav">
            <ul class="navbar-nav m-auto">
                @foreach ($navigation_links as $link)
                    @if (!$link->is_multi)
                        <li class="nav-item">
                            <a class="nav-link {{ Request::is($link->href) ? 'active' : ' ' }}" aria-current="page"
                                href="{{ $link->href }}">{{ $link->text }}</a>
                        </li>
                    @else
                        @foreach ($link->href as $section)
                            @php
                                $routes = collect($section->section_list)
                                    ->map(function ($child) {
                                        return Request::is($child->href);
                                    })
                                    ->toArray();
                                
                                $is_active = in_array(true, $routes);
                            @endphp

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="explore" role="button"
                                    data-toggle="dropdown" aria-expanded="false">
                                    {{ $section->section_text }}
                                </a>

                                <ul class="dropdown-menu dropdown-menu-start  animate slideIn">
                                    @foreach ($section->section_list as $child)
                                        <li class="{{ Request::is($child->href) ? 'active' : '' }}"><a
                                                class="dropdown-item"
                                                href="{{ $child->href }}">{{ $child->text }}</a></li>
                                    @endforeach
                                </ul>
                            </li>

                        @endforeach
                    @endif
                @endforeach

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

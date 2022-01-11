<x-app-layout>
    <x-slot name="title"> Home </x-slot>

    <x-slot name="header_content">
        <h1>Dashboard</h1>
        <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
            <div class="breadcrumb-item"><a href="#">Layout</a></div>
            <div class="breadcrumb-item">Default Layout</div>
        </div>
    </x-slot>

    <div class=" overflow-hidden container-sm " id="hero-page">
        <section class=" hero row align-items-center justify-content-around">
            <div class="col-lg-5">
                <h1 class="heading-hero">Kenyamanan Yang Mendekatkan..</h1>
                <p class="text-hero">Kami memastikan produk dari kualitas terbaik, sehingga menambah kekhusyukan
                    ketika
                    menghadap Sang pemberi
                    ampunan</p>
                <a href="/product" class="btn btn-purple radius mt-3">Lihat Produk</a>
            </div>
            <div class="col-lg-5 d-flex ">
                <img src="/images/content/hero.png" alt="hero" class="img-fluid ml-auto" loading="lazy">
            </div>
        </section>

        @include('components.carousel')

        @include('components.category-minimal')

        @include('components.product-minimal')
    </div>

    @if (session()->has('loginAdminError'))
        <script>
            Swal.fire({
                title: 'Akses Ditolak',
                icon: 'error',
                text: 'Akses admin tidak terdeteksi, silahkan login dengan akun admin',
            })
        </script>
    @endif
</x-app-layout>

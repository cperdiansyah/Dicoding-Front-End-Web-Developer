<section class="category">
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="section-title">Kategori Pilihan Kami</h3>
            <a href="/categories" class="btn btn-purple radius">Lihat Semua</a>
        </div>
        <div class="row">

            @foreach ($categories as $category)
                <div class="col-lg-2">
                    <div class="category-item">
                        <a href="categories/{{ $category->slug }}">
                            <img src="{{ $category->image != null ? asset('storage/' . $category->image) : asset('storage/' . 'images/no_image_available.jpg') }}"
                                alt="category" loading="lazy">
                        </a>
                        <div class="category-item-content">
                            <h3 class="category-item-title text-center"><a
                                    href="categories/{{ $category->slug }}">{{ $category->name }}</a></h3>
                        </div>
                    </div>
                </div>
            @endforeach

</section>

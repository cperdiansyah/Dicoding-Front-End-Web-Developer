<section class="recomended-product product">
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="section-title">Produk Rekomendasi Kami</h3>
            <a href="#" class="btn btn-purple radius">Lihat Semua</a>
        </div>

        <div class=" product-minimal-wrapper d-grid">
            @foreach ($recomendedProducts as $product)
                <div class="product-minimal-item">
                    <a href="product/{{ $product->slug }}">
                        <div class="card">
                            <div class="image-section">
                                <img src="{{ isset($product->gallery->image) ? asset('storage/' . $product->gallery->first()->image) : asset('storage/' . 'images/no_image_available.jpg') }}"
                                    alt="{{ $product->name }} image" loading="lazy" class="card-img-top">

                                <div class="rating col p-0 ">
                                    <span class="d-flex ml-auto p-2"><i class="fas fa-star "></i> 4.6</span>
                                </div>
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">{{ $product->name }}</h5>

                                <div class="price-wrapper d-flex p-0 justify-content-between align-items-end mt-2">
                                    <div class="price mt-1 p-0">
                                        @if ($product->is_discount)
                                            <div class="old-price text-decoration-line-through text-danger ">
                                                <span>Rp.
                                                    {{ number_format($product->price, 0, ',', '.') }}</span>
                                            </div>
                                            <div class="new-price pt-1 pr-0"><span>Rp. 150.000</span></div>
                                        @else
                                            <div class="new-price pt-1 pr-0"><span>Rp.
                                                    {{ number_format($product->price, 0, ',', '.') }}</span>
                                            </div>

                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            @endforeach


</section>

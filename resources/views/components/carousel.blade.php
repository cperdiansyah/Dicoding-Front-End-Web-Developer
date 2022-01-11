  <section id="carousel-banner" class="carousel slide  carousel-fade" data-ride="carousel" data-interval="2500"
      data-pause="false">
      {{-- TODO Next carousel ambil dari database --}}

      <ol class="carousel-indicators">
          <li data-target="#carousel-banner" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-banner" data-slide-to="1"></li>
          <li data-target="#carousel-banner" data-slide-to="2"></li>
      </ol>

      {{-- Carousel Item --}}
      <div class="carousel-inner">
          <div class="carousel-item active">
              <a href="#">
                  <img src="{{ asset('storage/' . 'images/slideshow/1f7a25fc6b.jpg') }}" class="d-block w-100"
                      alt="..." loading="lazy">
              </a>
          </div>
          <div class="carousel-item">
              <a href="#">
                  <img src="{{ asset('storage/' . 'images/slideshow/6f0e76fff2.jpg') }}" class="d-block w-100"
                      alt="..." loading="lazy">
              </a>
          </div>
          <div class="carousel-item">
              <a href="#">
                  <img src="{{ asset('storage/' . 'images/slideshow/c5ac493441.jpg') }}" class="d-block w-100"
                      alt="..." loading="lazy">
              </a>
          </div>
      </div>

      {{-- Carousel Control --}}

      <button class="carousel-control-prev" type="button" data-target="#carousel-banner" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-target="#carousel-banner" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
      </button>
  </section>

---
layout: layouts/default/base.njk
title: Blogs
permalink: blogs.html
---

<section class="wrapper bg-soft-primary">
  <div class="container pt-6 pb-6 pt-md-10 pb-md-10 text-center">
    <div class="row">
        <div class="col-md-7 col-lg-6 col-xl-5 mx-auto">
            <h1 class="display-1 mb-3">Blogs</h1>
            <p class="lead px-lg-5 px-xxl-8">Welcome to our journal. Here you can find the latest company news and business articles.</p>
        </div>
    </div>
  </div>
</section>

<section class="wrapper bg-light">
      <div class="container pt-5 pb-14 pb-md-16">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="blog grid grid-view">
              <div class="row isotope gx-md-8 gy-8 mb-8" style="position: relative; height: 1352.7px;">
              {% for blog in blogs %}
                <article class="item post col-md-6">
                  <div class="card">
                    <figure class="card-img-top overlay overlay-1 hover-scale">
                      <img src="{{blog.thumbnailSrc}}" alt="{{blog.title}}">
                    </figure>
                    <div class="card-body">
                      <div class="post-header">
                        <div class="post-category text-line">
                          {% for category in blog.categories %}
                          <a href="#" class="hover ms-2" rel="category">{{category.category}}</a>
                          {% endfor %}
                        </div>
                        <h2 class="post-title h3 mt-1 mb-3">
                          <a class="link-dark" onclick="location.href='blogs/{{ blog.key }}.html';">{{blog.title}}</a>
                        </h2>
                      </div>
                    </div>
                    <div class="card-footer">
                      <ul class="post-meta d-flex mb-0">
                        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{{blog.publishedOn}}</span></li>
                        <!-- <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>4</a></li>
                        <li class="post-likes ms-auto"><a href="#"><i class="uil uil-heart-alt"></i>5</a></li> -->
                      </ul>
                    </div>
                  </div>
                </article>
                {% endfor %}
              </div>
            </div>
            <!-- <nav class="d-flex" aria-label="pagination">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true"><i class="uil uil-arrow-left"></i></span>
                  </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true"><i class="uil uil-arrow-right"></i></span>
                  </a>
                </li>
              </ul>
            </nav> -->
      </div>
    </div>
  </div>
</section>
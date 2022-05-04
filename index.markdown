---
layout: home
lang: de
---

<section class="" id="ueberuns">
    <div class="container">
        <h2 class="section-heading">Über uns</h2>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                 <p class="text-justify">
                 
                </p>
            </div>
        </div>
    </div>
</section>

<section class="" id="news">
    <div class="container">
        <h2>News</h2>
        {% if site.posts.size > 0 %}
        <div class="row">
            <div class="col-lg-12 col-md-12">
                {% for post in site.posts limit:1 %}
                    {% include post_preview.html %}
                {% endfor %}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-right">
                <a href="/blog" class="btn btn-xl btn-slim-primary blog-button">Mehr von unserem Blog</a>
            </div>
        </div>
        {% else %}
        <div class="row"><div class="col-lg-12"><h4>Tut uns Leid, im Moment stehen keine Newsbeiträge zur Verfügung.</h4></div></div>
        {% endif %}
    </div>
</section>

<section class="" id="leistungen">
    <div class="container">
        <h2 class="section-heading">Leistungen</h2>
    </div>
</section>

<section class="" id="referenzen">
    <div class="container">
        <h2 class="section-heading">Referenzen</h2>
    </div>
</section>

<section class="" id="kontakt">
    <div class="container text-justify">
        <h2 class="section-heading">Kontakt</h2>
    </div>
</section>

<!-- <section class="map-section">
    <div id="map"></div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
      defer
    ></script>
</section> -->
---
layout: page
title: Transporte Alternativo
permalink: /br/rio-de-janeiro/transporte-alternativo/
tag: [citybrrj]
category: São Paulo
image: http://placehold.it/300x300
---

<div class="home">

  <h1 class="page-heading">{{ page.category }} / {{ page.title }}</h1>
  <hr><br>

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'transporte-alternativo' %}
      <li>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>
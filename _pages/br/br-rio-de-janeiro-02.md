---
layout: page
title: Transporte Alternativo
permalink: /br/rio-de-janeiro/transporte-alternativo/
tag: [citybrrj]
category: Rio de janeiro
image: http://placehold.it/175x175
---

<div class="home">

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'transporte-alternativo' and post.tag contains 'citybrrj' %}
      <li>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">+ {{ post.title }}</a>
        </h2>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>

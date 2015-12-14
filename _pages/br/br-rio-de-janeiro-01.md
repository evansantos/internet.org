---
layout: page
title: Transporte Público
permalink: /br/rio-de-janeiro/transporte-publico/
tag: [citybrrj]
category: Rio de Janeiro
image: http://placehold.it/175x175
---

<div class="home">

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'transporte-publico' and post.tag contains 'citybrrj' %}
      <li>
        <h2>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">+ {{ post.title }}</a>
        </h2>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>

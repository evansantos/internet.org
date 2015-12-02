---
layout: page
title: Transporte Público
permalink: /br/sao-paulo/transporte-publico/
tag: [citybrsp]
category: São Paulo
image: http://placehold.it/175x175
---

<div class="home">

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'transporte-publico' %}
      <li>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">+ {{ post.title }}</a>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>

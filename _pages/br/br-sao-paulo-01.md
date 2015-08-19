---
layout: page
title: Transporte Público
permalink: /br/sao-paulo/transporte-publico/
tag: [citybrsp]
category: São Paulo
image: /images/br/
---

<div class="home">

  <h1 class="page-heading">{{ page.category }} / {{ page.title }}</h1>
  <hr><br>

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'transporte-publico' %}
      <li>
        <h2>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">+ {{ post.title }}</a>
        </h2>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>


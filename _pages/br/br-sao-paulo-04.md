---
layout: page
title: Fique Ligado
permalink: /br/sao-paulo/fique-ligado/
tag: [citybrsp]
category: São Paulo
image: http://placehold.it/300x300
---

<div class="home">

  <h1 class="page-heading">{{ page.category }} / {{ page.title }}</h1>
  <hr><br>

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'fique-ligado' %}
      <li>

        <h2>
          <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
        </h2>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>
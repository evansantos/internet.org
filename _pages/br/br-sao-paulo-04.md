---
layout: page
title: Fique Ligado
permalink: /br/sao-paulo/fique-ligado/
tag: [citybrsp]
category: São Paulo
image:  http://placehold.it/175x175
---

<div class="home">

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'fique-ligado' %}
      <li>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>

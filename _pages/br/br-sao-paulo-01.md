---
layout:     page
permalink:  /br/sao-paulo/transporte-publico/
title:      Transporte Público
category:   São Paulo
tag:        [br-sp]
image:      /images/thumb-transporte-publico.jpg
---

<div class="home">
  <ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains 'transporte-publico' and post.tag contains 'br-sp' %}
    <li><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">+ {{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
---
layout:     page
permalink:  /br/sao-paulo/transporte-alternativo/
title:      Transporte Alternativo
category:   São Paulo
tag:        [br-sp]
image:      /images/thumb-transporte-alternativo.jpg
---

<div class="home">
  <ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains 'transporte-alternativo' and post.tag contains 'br-sp' %}
      <li><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">+ {{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
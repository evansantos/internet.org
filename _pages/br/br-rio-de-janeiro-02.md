---
layout:     page
permalink:  /br/rio-de-janeiro/transporte-alternativo/
title:      Transporte Alternativo
category:   Rio de janeiro
tag:        [br-rj]
image:      /images/thumb-transporte-alternativo.jpg
---

<div class="home">
  <ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains 'transporte-alternativo' and post.tag contains 'br-rj' %}
    <li>
      <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">+ {{ post.title }}</a></h2>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
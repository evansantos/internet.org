---
layout:     page
permalink:  /br/rio-de-janeiro/transporte-publico/
title:      Transporte Público
category:   Rio de Janeiro
tag:        [br-rj]
image:      /images/thumb-transporte-alternativo.jpg
---
<div class="home">
  <ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains 'transporte-publico' and post.tag contains 'br-rj' %}
    <li>
      <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">+ {{ post.title }}</a></h2>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
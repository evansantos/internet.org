---
layout:     page
permalink:  /br/rio-de-janeiro/fique-ligado/
title:      Fique Ligado
category:   Rio de Janeiro
tag:        [br-rj]
image:      /images/thumb-fique-ligado.jpg
---

<div class="home">
  <ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains 'fique-ligado' and post.tag contains 'br-rj' %}
    <li>
      <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">+ {{ post.title }}</a></h2>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
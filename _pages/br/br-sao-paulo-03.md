---
layout: page
title: Lazer
permalink: /br/sao-paulo/lazer/
tag: [citybrsp]
category: São Paulo
image:  http://placehold.it/175x175
---

<div class="home">

  <ul class="post-list">
    {% for post in site.posts %}
      {% if post.categories contains 'lazer' %}
      <li>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>

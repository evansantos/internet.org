---
layout:     page
permalink:  /br/sao-paulo/lazer/
title:      Lazer
category:   São Paulo
tag:        [br-sp]
image:      /images/thumb-lazer.jpg
---

<div class="home">
  <ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains 'lazer' and post.tag contains 'br-sp' %}
    <li><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">+ {{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
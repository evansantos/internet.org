---
layout: page
title: Transporte Público
permalink: /br/sao-paulo/transporte-publico/
tag: [citybrsp]
image: http://placehold.it/300x300
---

<div class="home">

  <h1 class="page-heading">{{ page.title }}</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
</div>
---
layout: page
title: São Paulo
permalink: /br/sao-paulo/
tag: [br-city]
---

<div class="home">
  <ul class="list">
  {% for page in site.pages %}
    {% if page.tag contains 'br-sp' %}
    <li>
      <h2>
        <span>{{ page.title }}</span>
        <a class="post-link" href="{{ page.url | prepend: site.baseurl }}"><img src="{{ page.image }}"></a>
      </h2>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
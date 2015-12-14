---
layout: page
title: São Paulo
permalink: /br/sao-paulo/
tag: [citybr]
---
<div class="home">

  <ul class="list">
    {% for page in site.pages %}
      {% if page.tag contains 'citybrsp' %}
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

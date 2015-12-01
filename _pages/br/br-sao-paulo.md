---
layout: page
title: São Paulo
permalink: /br/sao-paulo/
tag: [citybr]
---

<style type="text/css">
  ul{
    display: inline-block;
    margin: 0 auto;
  }
  ul li{
    display: inline-block;
    margin: 5px;
  }
  h2{
    position: relative;
    color: #fff;
    font-size: 16px;
    text-align: center;
  }
  h2 span{
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
</style>

<div class="home">

  <ul class="post-list">
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

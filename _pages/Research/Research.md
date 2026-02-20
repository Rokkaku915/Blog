---
title: "연구"
layout: archive
permalink: "/research"
author_profile: true
sidebar_list: true
classes: wide
---

<h3 class="archive__subtitle">연구</h3>

{% for post in site.posts %}
    {% if post.categories contains '학부연구생' %}
        {% include archive-single.html type=page.entries_layout %}
    {% endif %}
{% endfor %}
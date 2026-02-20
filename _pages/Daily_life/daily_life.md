---
title: "일상"
layout: archive
permalink: "/daily_life"
author_profile: true
sidebar_list: true
classes: wide
---

<h3 class="archive__subtitle">일상</h3>

{% for post in site.posts %}
    {% if post.categories contains '여행' or post.categories contains '군대' %}
        {% include archive-single.html type=page.entries_layout %}
    {% endif %}
{% endfor %}

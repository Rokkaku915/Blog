---
title: "여행"
layout: archive
permalink: "/daily_life/travel"
author_profile: true
sidebar_list: true
classes: wide
---

<h3 class="archive__subtitle">여행</h3>

{% assign posts = site.categories['여행'] %}
{% for post in posts %}
    {% include archive-single.html type=page.entries_layout %}
{% endfor %}
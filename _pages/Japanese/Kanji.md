---
title: "한자"
layout: archive
permalink: "/japanese/kanji"
author_profile: true
sidebar_list: true
classes: wide
---

<h3 class="archive__subtitle">한자</h3>

{% assign posts = site.categories['한자'] %}
{% for post in posts %}
    {% include archive-single.html type=page.entries_layout %}
{% endfor %}

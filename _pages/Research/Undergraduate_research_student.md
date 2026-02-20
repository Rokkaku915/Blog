---
title: "학부연구생"
layout: archive
permalink: "/research/undergraduate_research_student"
author_profile: true
sidebar_list: true
classes: wide
---

<h3 class="archive__subtitle">학부연구생</h3>

{% assign posts = site.categories['학부연구생'] %}
{% for post in posts %}
    {% include archive-single.html type=page.entries_layout %}
{% endfor %}
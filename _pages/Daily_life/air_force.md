---
title: "군대"
layout: archive
permalink: "/daily_life/air_force"
author_profile: true
sidebar_list: true
classes: wide
---

<h3 class="archive__subtitle">군대</h3>

{% assign posts = site.categories['군대'] %}
{% for post in posts %}
    {% include archive-single.html type=page.entries_layout %}
{% endfor %}
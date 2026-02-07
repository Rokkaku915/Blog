---
title: "한자"
layout: archive
permalink: "/nihongo/kanji"
author_profile: true
sidebar_list: true
---

{% assign posts = site.categories['kanji'] %}
{% for post in posts %}
    {% include archive-single.html type=page.entries_layout %}
{% endfor %}

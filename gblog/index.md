---
layout: home
title: Gabriel Jones blog
description: Power Your Immaginatin!
lang: it
ref: Gabriel Jones Blog
permalink: /gblog/
order: 1
---

---
layout: default
title: "Tutti i Post"
---

<div class="post-grid">
  {% for post in site.posts %}
    <div class="post-item">
      <a href="{{ post.url }}">
        <div class="post-content">
          <h2>{{ post.title }}</h2>
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
          <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<style>
/* Griglia */
.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

/* Ogni elemento della griglia */
.post-item {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
  border: 1px solid #f0f0f0;
}

.post-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

/* Header - Titolo */
.post-header h2 {
  font-size: 1.6em;
  color: #333;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.post-header h2:hover {
  color: #007bff; /* Colore accentato al passaggio del mouse */
}

/* Corpo - Estratto del post */
.post-body {
  margin: 10px 0;
}

.post-excerpt {
  font-size: 1.1em;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* Footer - Data */
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-date {
  font-size: 0.9em;
  color: #aaa;
  transition: color 0.3s ease;
}

.post-date:hover {
  color: #007bff; /* Colore accentato al passaggio del mouse */
}

</style>
</div>

</main>

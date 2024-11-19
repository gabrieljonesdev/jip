---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

---
layout: default
title: "Tutti i Post"
---

<div class="post-grid">
  {% for post in site.posts %}
    <div class="post-item">
      <a href="{{ post.url }}">
        <div class="post-thumbnail">
          {% if post.featured_image %}
            <img src="{{ post.featured_image }}" alt="{{ post.title }}">
          {% else %}
            <img src="https://via.placeholder.com/300" alt="{{ post.title }}">
          {% endif %}
        </div>
        <div class="post-title">
          <h2>{{ post.title }}</h2>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<style>
  .post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.post-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.post-item:hover {
  transform: translateY(-5px);
}

.post-thumbnail img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-title {
  padding: 15px;
  text-align: center;
}

.post-title h2 {
  font-size: 1.2em;
  margin: 0;
}

</style>

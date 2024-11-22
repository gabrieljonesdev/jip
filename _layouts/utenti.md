---
layout: default
---

<div class="profile-container">
  <div class="profile-header">
    <div class="profile-image">
      <img src="{{ page.profile_picture | default: '/assets/images/default-profile.jpg' }}" alt="Foto di {{ page.name | default: 'Utente' }}">
    </div>
    <div class="profile-info">
      <h1>{{ page.name | default: 'Nome Utente' }}</h1>
      <p class="bio">{{ page.bio | default: 'Questa è una biografia di esempio.' }}</p>
      <p class="email"><strong>Email:</strong> <a href="mailto:{{ page.email | default: 'email@example.com' }}">{{ page.email | default: 'email@example.com' }}</a></p>
      <p class="website"><strong>Sito web:</strong> <a href="{{ page.website | default: 'https://example.com' }}" target="_blank">{{ page.website | default: 'example.com' }}</a></p>
    </div>
  </div>

  <div class="profile-social">
    <h2>Social Media</h2>
    <ul>
      <li><a href="{{ page.twitter | default: '#' }}" target="_blank">Twitter</a></li>
      <li><a href="{{ page.github | default: '#' }}" target="_blank">GitHub</a></li>
      <li><a href="{{ page.linkedin | default: '#' }}" target="_blank">LinkedIn</a></li>
    </ul>
  </div>

  <!-- Sezione Uffici -->
  <div class="offices">
    <h2>Uffici</h2>
    <div class="offices-list">
      {% for office in page.offices %}
        <div class="office-card">
          <h3>{{ office.name }}</h3>
          <p>{{ office.description }}</p>
          {% if office.link %}
            <a href="{{ office.link }}" class="office-link" target="_blank">Maggiore Dettaglio</a>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<style>
  .profile-container {
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }

  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  .profile-image img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #ddd;
    margin-right: 30px;
  }

  .profile-info {
    flex: 1;
  }

  .profile-info h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .profile-info .bio {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 15px;
  }

  .profile-info p {
    font-size: 1.1rem;
    color: #444;
    margin-bottom: 10px;
  }

  .profile-info a {
    color: #007bff;
    text-decoration: none;
  }

  .profile-info a:hover {
    text-decoration: underline;
  }

  .profile-social h2 {
    margin-top: 30px;
    font-size: 1.8rem;
    color: #333;
  }

  .profile-social ul {
    list-style: none;
    padding-left: 0;
  }

  .profile-social ul li {
    margin: 10px 0;
  }

  .profile-social ul li a {
    color: #007bff;
    text-decoration: none;
    font-size: 1.1rem;
  }

  .profile-social ul li a:hover {
    text-decoration: underline;
  }

  /* Sezione Uffici */
  .offices {
    margin-top: 40px;
  }

  .offices h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }

  .offices-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .office-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .office-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .office-card h3 {
    font-size: 1.6rem;
    color: #333;
  }

  .office-card p {
    font-size: 1.1rem;
    color: #555;
    margin: 15px 0;
  }

  .office-link {
    font-size: 1rem;
    color: #007bff;
    text-decoration: none;
  }

  .office-link:hover {
    text-decoration: underline;
  }
</style>

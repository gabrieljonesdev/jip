<!-- Questo script può essere incluso in ogni sito -->
<script>
  // Funzione per caricare la configurazione del widget
  function loadAlertConfig() {
    fetch('https://admin.allert.interno.gjdev.it/allerta-config.json')
      .then(response => response.json())
      .then(config => {
        // Verifica se il widget è attivo
        if (config.widgetActive) {
          showAlertWidget(config.message);
        } else {
          hideAlertWidget();
        }
      })
      .catch(error => console.error('Errore nel caricamento della configurazione:', error));
  }

  // Funzione per mostrare il widget
  function showAlertWidget(message) {
    const widget = document.getElementById('alertWidget');
    if (widget) {
      widget.textContent = message;
      widget.style.display = 'block'; // Mostra il widget
    }
  }

  // Funzione per nascondere il widget
  function hideAlertWidget() {
    const widget = document.getElementById('alertWidget');
    if (widget) {
      widget.style.display = 'none'; // Nasconde il widget
    }
  }

  // Carica la configurazione all'avvio della pagina
  document.addEventListener('DOMContentLoaded', loadAlertConfig);
</script>

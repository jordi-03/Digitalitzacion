document.getElementById('subscription-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailField = this.elements['email'];
    if (!emailField.value.includes('@')) {
      alert('Por favor ingresa un email válido.');
      return;
    }
    
    // Aquí se enviaría el formulario a HubSpot (lo veremos en el paso 2)
    
    document.getElementById('confirmation-message').style.display = 'block';
    this.reset();
  });
  
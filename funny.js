setTimeout(function() {
  const urls = [
    'https://youtu.be/0hilvfWb4Bo',
    'https://youtu.be/D9rG-qMahpE',
    'https://youtu.be/4ricQRaEmP4'
 
  ];

  const randomUrl = urls[Math.floor(Math.random() * urls.length)];

  // Redir
  window.location.href = randomUrl;

}, 60000); 

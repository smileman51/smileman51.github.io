const script = document.createElement('script');
script.setAttribute('type', 'application/ld+json');
script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": 'Co-Browsing',
    "address": 'Ð¿Ñ€Ð¾ÑÐ¿ÐµÐºÑ‚ Ð’Ð°Ð»ÐµÑ€Ñ–Ñ Ð›Ð¾Ð±Ð°Ð½Ð¾Ð²ÑÑŒÐºÐ¾Ð³Ð¾, 6Ð, ÐšÐ¸Ñ—Ð², 03037',
    "telephone": '+380665737232',
    "description": 'Co-Browsing is the tool to share web browser screen online. With our standalone co-browsing solution, you can assist your friends or surf the web together. Cobrowsing is ideal for any sales and support team. Help your clients in real time.',
    "url": 'https://co-browsing.net/',
    "logo": 'https://co-browsing.net/images/logo.svg'
}).toString();
document.head.appendChild(script);

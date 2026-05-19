export default function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const accept = (req.headers['accept'] || '').toLowerCase();

  const botRegex = /bot|crawler|spider|facebookexternalhit|linkedinbot|twitterbot|slackbot|telegrambot/;
  const isBot = botRegex.test(ua) || accept.includes('text/html') && /facebookexternalhit|twitterbot|linkedinbot/.test(ua);

  const pdfUrl = 'resume.pdf';
  const host = 'rishabhaggarwal.in';
  const fullUrl = `https://${host}/resume`;

  if (isBot) {
    const title = 'Rishabh Aggarwal — Resume';
    const description = 'Resume of Rishabh Aggarwal — Software developer and designer with 5+ years of experience.';
    const image = `https://${host}/r_logo.ico`;

    const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:image" content="${image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
  <meta name="robots" content="index,follow">
</head>
<body>
  <p>Opening resume…</p>
  <script>window.location.replace('${pdfUrl}');</script>
  <noscript><a href="${pdfUrl}">Open resume (PDF)</a></noscript>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.end(html);
    return;
  }

  // Browser: redirect to the static PDF file
  res.writeHead(302, { Location: pdfUrl });
  res.end();
}

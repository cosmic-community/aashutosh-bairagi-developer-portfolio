const fs = require('fs');
const path = require('path');

const outputDir = path.join(process.cwd(), '.next/static');
const scriptPath = path.join(process.cwd(), 'public/dashboard-console-capture.js');

function injectScript(htmlPath) {
  if (!fs.existsSync(htmlPath)) return;
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  if (html.includes('dashboard-console-capture.js')) return;
  
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${scriptTag}</head>`);
  } else if (html.includes('<body>')) {
    html = html.replace('<body>', `<body>${scriptTag}`);
  }
  
  fs.writeFileSync(htmlPath, html);
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

walkDir(outputDir);
console.log('Console capture script injection complete');
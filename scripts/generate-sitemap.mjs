// // ./scripts/generate-sitemap.mjs
// import { writeFileSync } from 'fs';
// const { globby } = await import('globby');
// import prettier from 'prettier';

// async function generate() {
//   const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
//   const pages = await globby([
//     'pages/*.js',
//     'data/**/*.mdx',
//     '!data/*.mdx',
//     '!pages/_*.js',
//     '!pages/api',
//     '!pages/404.js',
//   ]);

//   const sitemap = `
//     <?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//         ${pages
//           .map((page) => {
//             const path = page
//               .replace('pages', '')
//               .replace('data', '')
//               .replace('.js', '')
//               .replace('.mdx', '');
//             const route = path === '/index' ? '' : path;

//             return `
//               <url>
//                   <loc>${`https://elormslearningjourney.tech${route}`}</loc>
//               </url>
//             `;
//           })
//           .join('')}
//     </urlset>
//     `;

//   const formatted = prettier.format(sitemap, {
//     ...prettierConfig,
//     parser: 'html',
//   });

//   writeFileSync('public/sitemap.xml', formatted);
// }

// generate();


// // ./scripts/generate-sitemap.mjs
// import { writeFileSync } from 'fs';
// import globby from 'globby';



// // Use dynamic import with CommonJS syntax for 'prettier'
// const prettier = (await import('prettier')).default;

// async function generate() {
//   const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
//   const pages = await globby([
//     'pages/*.js',
//     'data/**/*.mdx',
//     '!data/*.mdx',
//     '!pages/_*.js',
//     '!pages/api',
//     '!pages/404.js',
//   ]);

//   const sitemap = `
//     <?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//         ${pages
//           .map((page) => {
//             const path = page
//               .replace('pages', '')
//               .replace('data', '')
//               .replace('.js', '')
//               .replace('.mdx', '');
//             const route = path === '/index' ? '' : path;

//             return `
//               <url>
//                   <loc>${`https://elormslearningjourney.tech${route}`}</loc>
//               </url>
//             `;
//           })
//           .join('')}
//     </urlset>
//     `;

//   const formatted = prettier.format(sitemap, {
//     ...prettierConfig,
//     parser: 'html',
//   });

//   writeFileSync('public/sitemap.xml', formatted);
// }

// generate();

// // ./scripts/generate-sitemap.mjs
// import { writeFileSync } from 'fs';
// import globby from 'globby';

// const prettier = (await import('prettier')).default;

// async function generate() {
//   const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

//   // Await the resolution of the globby Promise to get the file paths
//   const pages = await globby([
//     'pages/*.js',
//     'data/**/*.mdx',
//     '!data/*.mdx',
//     '!pages/_*.js',
//     '!pages/api',
//     '!pages/404.js',
//   ]);

//   const sitemap = `
//     <?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//         ${pages
//           .map((page) => {
//             const path = page
//               .replace('pages', '')
//               .replace('data', '')
//               .replace('.js', '')
//               .replace('.mdx', '');
//             const route = path === '/index' ? '' : path;

//             return `
//               <url>
//                   <loc>${`https://elormslearningjourney.tech${route}`}</loc>
//               </url>
//             `;
//           })
//           .join('')}
//     </urlset>
//     `;

//   const formatted = prettier.format(sitemap, {
//     ...prettierConfig,
//     parser: 'html',
//   });

//   // Convert the formatted sitemap to a Buffer before writing to file
//   const buffer = Buffer.from(formatted, 'utf8');
//   writeFileSync('public/sitemap.xml', buffer);
// }

// generate();


// ./scripts/generate-sitemap.mjs
import { writeFileSync } from 'fs';
import globby from 'globby';

const prettier = (await import('prettier')).default;

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  // Await the resolution of the globby Promise to get the file paths
  const pages = await globby([
    'pages/*.js',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.js',
    '!pages/api',
    '!pages/404.js',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('data', '')
              .replace('.js', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;

            return `
              <url>
                  <loc>${`https://elormslearningjourney.tech${route}`}</loc>
              </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // Convert the formatted sitemap to a Buffer before writing to file
  const encoder = new TextEncoder();
  const buffer = encoder.encode(formatted);
  writeFileSync('public/sitemap.xml', buffer);
}

generate();

# Stageblog (Vite + React + TypeScript + Tailwind)

Een eenvoudige website met 3 pagina's:
- `Landingspagina` (`/`)
- `Over-pagina` (`/over`)
- `Blogpagina` (`/blog`)

De blogposts zijn volledig JSON-gedreven via `src/data/posts.json`.

## Starten

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Blogposts toevoegen

Bewerk `src/data/posts.json`.

Voorbeeld structuur:

```json
{
  "id": "2026-02-12",
  "title": "Titel van je post",
  "date": "12 februari 2026",
  "excerpt": "Korte samenvatting",
  "content": [
    "Paragraaf 1",
    "Paragraaf 2"
  ],
  "images": ["/images/posts/dag-3.jpg"],
  "tags": ["react", "stage"]
}
```

## Afbeeldingen

- Profielfoto: vervang `public/images/profile-placeholder.svg`
- Blogafbeeldingen: voeg toe in `public/images/posts/`
- Gebruik daarna het pad in JSON, bv. `/images/posts/mijn-foto.jpg`

## Aanpassen

- Navigatie en layout: `src/components/`
- Pagina's: `src/pages/`
- Kleuren en stijl: `tailwind.config.js` en `src/index.css`

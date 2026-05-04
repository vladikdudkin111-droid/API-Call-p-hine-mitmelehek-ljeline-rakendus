# API-Call-põhine mitmeleheküljeline rakendus

## Projekti kirjeldus

**BookFinder** on kaasaegne React rakendus, mis võimaldab otsida ja hallata raamatuid Google Books API kaudu. Kasutaja saab raamatuid otsida, filtreerida, sorteerida, vaadata detailvaadet ja lisada raamatuid oma lemmikute loetellu. Rakendus kasutab localStorage-i andmete säilitamiseks seadmes.

## Kasutatud tehnoloogiad

- **React 19.2.5** - komponendipõhine UI raamistik
- **React Router DOM 7.14.2** - mitmeleheküljelise navigeerimise jaoks
- **Bootstrap 5.3.8** - responsive UI kujunduseks
- **Vite 8.0.10** - kiire development server ja build tool
- **Google Books API** - raamatute andmete allikas

## Kasutatud API

Rakendus kasutab Google Books API-t:

**API endpoint:**
```
https://www.googleapis.com/books/v1/volumes?q={search_query}
```

**Näide päringust:**
```
https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=24&printType=books
```

**API dokumentatsioon:**
https://developers.google.com/books/docs/v1/using

## Projekti struktuur

```
src/
├── components/        # React komponendid
│   └── Navbar.jsx    # Navigeerimine menu
├── pages/            # Lehekülg komponendid
│   ├── Home.jsx      # Avaleht
│   ├── Books.jsx     # Raamatute otsing ja kuvamine
│   ├── BookDetails.jsx # Raamatu detailvaade
│   └── Favorites.jsx # Lemmikud raamatud
├── services/         # API teenused
│   └── bookApi.js    # Google Books API kutsed
├── styles/           # CSS failid
│   └── style.css     # Globaalsed stiilid
├── App.jsx          # Peakomponent
├── main.jsx         # React entry point
└── index.css        # Base stiilid
```

## Funktsionaalsus

    **Otsing** - Raamatute otsing Google Books API-st  
    **API päringud** - Asünkroonsed fetch päringud vigade käsitlusega  
    **Loading state** - Spinner kuvamatakse andmete laadimisel  
    **Error handling** - Vead kuvatakse kasutajale sõbralikult  
    **Raamatute loetelu** - Kaardikujuline kuva 24 raamatuga  
    **Filtreerimine** - E-raamatud eraldi saab filtreerida  
    **Sorteerimine** - Raamatud sorteeritakse pealkirja järgi  
    **Detailvaade** - Klõps "Detailid" nupule avab täisinfo raamatu kohta  
    **Lemmikute süsteem** - localStorage abil raamatuid saab lisada/eemaldada  
    **Navigeerimine** - React Router abil 4 lehte: Avaleht, Raamatud, Detailid, Lemmikud  
    **Responsive UI** - Bootstrap ja media queries abil mobiilile optimeeritud  

## Kasutamine

### 1. Avaleht (Home)
Rakenduse sisseastumispunkt koos welcome teadetega ja nupp "Alusta otsimist"

### 2. Raamatute otsing (Books)
- Sisesta otsingusõna (nt "Harry Potter", "React", "JavaScript")
- Vajuta nuppu **"Otsi"**
- Tulemused kuvatakse kaardikujulisel 3-veerust paigutuses
- Saab filtreerida ainult e-raamatuid
- Saab sorteerida pealkirja järgi

### 3. Detailvaade (BookDetails)
- Klõps "Detailid" nupule avab raamatu täisinformatsiooni
- Nähtavad: pealkiri, autorid, kirjastaja, kuupäev, kirjeldus
- Raamatu kaane pilt koos alternatiivse ikooni näitamisega

### 4. Lemmikud (Favorites)
- Klõps "Lemmik" salvestab raamatu localStorage-i
- Lemmikute lehel kuvatakse kõik salvestatud raamatud
- "Eemalda" nuppu saab raamatut eemaldada

## Käivitamine

### Eeldused
- Node.js 18+ installitud

### Paigaldus ja käivitamine

```bash
# 1. Kloneeri repositoorium
git clone https://github.com/vladikdudkin111-droid/API-Call-p-hine-mitmelehek-ljeline-rakendus

# 2. Mine kausta
cd API-Call-p-hine-mitmelehek-ljeline-rakendus

# 3. Paigalda sõltuvused
npm install

# 4. Käivita development server
npm run dev

# 5. Ava brauseris
# Siidale kuvatakse URL (tavaliselt http://localhost:5173/)
```

### Build ja Deploy

```bash
# Production build
npm run build

# Eelvaade ehitatud versionile
npm run preview

# Lintimise kontroll
npm run lint
```
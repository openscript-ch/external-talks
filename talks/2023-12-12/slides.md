---
theme: "@openscript-ch/slidev-theme"
title: "Digitale Büroinfrastruktur"
colorSchema: light
lineNumbers: true
routerMode: 'hash'
layout: cover
---

# Digitale Büroinfrastruktur

E-Mail, Office Programme, Kommunikation

<img src="/cover.jpg" style="width: 250px; border-radius: 1rem">

---
layout: two-cols-header
---

# Aktuelle Situation

::left::

Wir benutzen aktuell:

- **E-Mail** via gandi.net
- **Gruppenchat** via Threema
- **Dokumentenablage** via Hetzner Nextcloud
  - Verschlüsselter Bereich via Cryptomator
  - Markdown-Dokumente
  - Office-Dokumente via OnlyOffice

::right::

Wir bezahlen dafür:

<div style="font-size: 0.8rem">

| Produkt | Preis | Summe |
| ------- | ----- | ----- |
| E-Mail  | CHF 3.59 pro Mailbox und Monat | CHF 129.24 |
| Chat    | - | - |
| Ablage  | ~ CHF 5.00 pro Monat | CHF 60.00 |
| | **Total pro Jahr**: | CHF 189.24 |

</div>

---
layout: two-cols-header
---

# Gewünschte Situation

::left::

Wir wünschen uns:

- Geteilte **Kalender**
- Besser funktionierender **Gruppenchat**
  - Unabhängige Weboberfläche; Gastzugänge; Bots; Channels
- Gleichzeitiges Bearbeiten von **Dokumenten**
- Einfache **Videokonferenzlösung**
- Teilbare **Datenablage**
- 2FA; Branding

::right::

Wir möchten weiterhin:

- Wenig Aufwand für den Betrieb
- Unabhängigkeit von Grosskonzernen
- Zuverlässigkeit
- Synchronisierungsmöglichkeiten
  - Webdav, Caldav, ...
- Wenig speicher (5 GB Mailbox; 100GB Datenablage)

---
layout: two-cols-header
---

# Varianten

::left::

Folgende Varianten werden angeschaut:

1. Self-Hosting **Extern**: NextCloud / Migadu / ...
1. Self-Hosting **NAS**: Synology / Migadu / ...
1. SaaS **Infomaniak**: kSuite
1. SaaS **Kreativmedia**: Kreativmedia kmSuite

::right::

<img src="/musli.jpg" style="width: 300px; margin: 0 auto" />

---
layout: two-cols-header
---

# Variante: Self-Hosting **Extern**

::left::

- Weiterentwicklung der aktuellen Lösung
- Grössere Herausforderung:
  - Verwaltung
  - Aufwand
- Fehlende Tools:
  - Chat
  - Teamverwaltung für Kalender, ...
  - Videokonferenzlösung
- Fehlende Dienste müssten noch ergänzt werden

::right::


<img src="/migadu.png" style="width: 300px; margin: 0 auto" />

---
layout: two-cols-header
---

# Variante: Self-Hosting **NAS**

::left::

- Möglichst viele Dienste eines NAS von Synology nutzen
- Server-Infrastruktur in einem Büro ist eher unprofessionell
- Hohe Anschaffungskosten, Günstiger Betrieb
- Postausgangsserver (SMTP) via Migadu
- Flexibilität
- Fehlende Tools:
  - Videokonferenzlösung

::right::

<img src="/synology.avif" style="width: 300px; margin: 0 auto" />

---
layout: two-cols-header
---

# Variante: SaaS **Infomaniak**

::left::

- Einzelner Anbieter aus der Schweiz
- Umfasst alles was wir brauchen und wünschen
- Grosszügiger Speicherplatz (3 TB pro Benutzer)

::right::

<img src="/ksuite.png" style="width: 300px; margin: 0 auto" />

---
layout: two-cols-header
---

# Variante: SaaS **Kreativmedia**

::left::

- Einzelner Anbieter aus der Schweiz
- Etwas weniger Funktionen als Infomaniak:
  - keine Bots
- Schlechtere Leistungen ggü. Infomaniak:
  - Weniger Speicher
  - 1 Postfach pro Benutzer

::right::

<img src="/kmsuite.png" style="width: 300px; margin: 0 auto" />


---

# Variantenvergleich

Grausam: 🔴, Aushaltbar: 🟠, Wohltat: 🟢


<div style="font-size: 0.8rem">

| | Extern | NAS | Infomaniak | Kreativmedia | Aktuell |
|-| ------ | --- | ---------- | ------------ | ------- |
| Office Suite | 🟠 | 🟢 | 🟢 | 🟢 | 🟠 |
| Groupware | 🔴 | 🟠 | 🟢 | 🟢 | 🔴 |
| Aufwand | 🔴 | 🟠 | 🟢 | 🟢 | 🟠 |
| Abhängigkeit | 🟠 | 🟢 | 🔴 | 🔴 | 🟠 |
| Speicherplatz | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 |

</div>

---

# Preisvergleich (CHF./inkl. MwSt.)

<div style="font-size: 0.8rem">

| | Extern | NAS | Infomaniak | Kreativmedia | Aktuell |
|-| ------ | --- | ---------- | ------------ | ------- |
| Initialkosten | 0.00 | 1000.00 | 0.00 | 0.00 | 0.00 |
| Betriebskosten pro Benutzer und Monat | 0.00 | 0.00 | 7.90 | 4.90 | 3.59 |
| Betriebskosten pro Jahr | 250.00 <sup>1</sup> | 166.28 <sup>2</sup> | 60.60 <sup>3</sup> | 0.00 | 60.00 |
| Preis pro Jahr für 3 Benutzer über 5 Jahre | 1250.00 | 1031.40 | 1725.00 | 882.00 | 946.20 |
| Preis pro Jahr für 5 Benutzer über 5 Jahre | 1250.00 | 1031.40 | 2673.00 | 1470.00 | 1377.00 |
| Preis pro Jahr für 5 Benutzer über 10 Jahre | 2500.00 | 2662.80 | 5346.00 | 2940.00 | 2754.00 |

*1 SMTP-Server, Nextcloud, unbekannte (100 CHF)
*2 SMTP-Server, Strom, unbekannte (50 CHF)
*3 Branding, Domain

</div>

---

# Nächste Schritte

- Offene Fragen:


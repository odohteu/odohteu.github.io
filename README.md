# ODOHTEU

**Open Data on Human Trafficking in the European Union**

Data collection, legal and ethical analysis and web visualizations of open data on human trafficking, built with Python and JavaScript (Chart.js, D3.js, Leaflet).

**Website:** [odohteu.github.io](http://odohteu.github.io/)

## About

This project was developed as the final exam of the course [Open Access and Digital Ethics](https://www.unibo.it/en/teaching/course-unit-catalogue/course-unit/2020/424645), part of the master's degree in [Digital Humanities and Digital Knowledge](https://corsi.unibo.it/2cycle/DigitalHumanitiesKnowledge) at the [University of Bologna](https://www.unibo.it/en/homepage), taught by professor [Monica Palmirani](https://www.unibo.it/sitoweb/monica.palmirani/en).

The aim was to build effective visualizations by reusing open datasets in a way that is fair, legally valid, consistent, accurate and free from cognitive bias.

Our starting question: is human trafficking related to the well-being of a country? We looked at the member states of the European Union, focusing on the victims (age, sex, citizenship, forms of exploitation) and on indicators such as education, migration, poverty and GDP.

## How we worked

We started from large CSV, XLSX and PDF files published by the European Commission, UNODC, CTDC, the World Bank and the OECD.

1. **Analysis.** We evaluated each dataset from a quality, legal, ethical and technical point of view, following the European Data Portal guidelines.
2. **Data processing.** With Python (`csv`, `Camelot`) we extracted the data we needed, converted PDF tables into CSV and merged everything into new datasets, including a final mash-up dataset.
3. **Open data.** We published every dataset in CSV, JSON and XML, with DCAT-AP metadata in RDF (Turtle), under a CC BY-SA 4.0 license.
4. **Visualizations.** We built the website with bar, line and pie charts (Chart.js, AnyChart), an animated bar chart race (D3.js) and an interactive map of the EU (Leaflet).

The full process is described in the [documentation](http://odohteu.github.io/documentation.html).

## Authors

Gemma Centrone ([GitHub](https://github.com/Gemmacentr), [LinkedIn](https://www.linkedin.com/in/gemma-centrone-831376174/)) 
Sara Coppini ([GitHub](https://github.com/saroppini), [LinkedIn](https://www.linkedin.com/in/sara-coppini/)).

## License

[Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/)

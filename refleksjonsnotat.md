# Refleksjonsrapport - Programmering med KI

## 1. Gruppeinformasjon

**Gruppenavn:** 243

**Gruppemedlemmer:**
- Sanosh Senthilkumar - sanosh.senthilkumar@himolde.no
- Jarle Kjelsvik Wallem - jawal2625@himolde.no
- Rikke Gundersen - rikke.gundersen@himolde.no

**Dato:** 03.12.2025

---

## 2. Utviklingsprosessen

### 2.1 Oversikt over prosjektet

Vi i gruppe 243 har utviklet et konsept for "AI CV & Job Application Assistant" – en webapplikasjon designet for å hjelpe studenter og nyutdannede med å generere skreddersydde jobbsøknader, forbedre CV-er, identifisere ferdighetsgap og optimalisere for ATS (Applicant Tracking Systems). Hovedmålet vårt var å løse utfordringen med å tilpasse søknader til spesifikke stillingsutlysninger på en effektiv og presis måte.

### 2.2 Arbeidsmetodikk

- **Hvordan fordelte dere oppgaver?**
  Arbeidet har vært preget av tett samarbeid i gruppen. Vi fordelte oppgavene dynamisk, der gruppen satte overordnede mål og retning, mens KI-agenten, operert av gruppemedlemene, utførte detaljerte software engineering-oppgaver. Dette inkluderte å kjøre predefinerte BMad Method-arbeidsflyter for markedsundersøkelser, opprette og validere PRD (Product Requirements Document), og håndtere Git-operasjoner. Vi sørget for at all input og beslutninger ble tatt i fellesskap.

- **Hvilke verktøy brukte dere for samarbeid og hvordan det fungerte?**
  **Git:** Vi brukte Git aktivt for versjonskontroll og grenhåndtering. Vi strukturerte arbeidet i spesifikke grener: `fase1` for planlegging, `fase2` for PRD-utvikling, og `fase3` for foredling, i tillegg til `main` og `test-branch-Rikke`. En sjekk av commit-loggen viser at flertallet av commitene ble utført fra én maskin av et gruppemedlem. Dette er et resultat av at vi samlet trådene for å unngå unødvendige merge-konflikter i den hektiske sluttfasen, og reflekterer gruppens felles innsats der alle bidro med innhold og vurderinger. Vi møtte likevel på utfordringer som push-konflikter når remote var foran lokal gren, samt håndtering av filer som `refleksjonsnotat.md` på tvers av grener, noe vi løste ved hjelp av stashing og nøye merging.
  **Gemini CLI:** Dette var det primære verktøyet som ble brukt for å instruere og samarbeide med KI-agenten om komplekse oppgaver.

- **Hvordan brukte dere KI-verktøy i prosessen?**
  KI-agenten ble brukt til å:
  - Utføre BMad Method-arbeidsflyter (markedsundersøkelse, PRD-validering) ved å la den innta roller som Business Analyst og Product Manager.
  - Generere innhold for prosjektdokumenter (markedsundersøkelsesrapport, PRD-dokument, `epics.md`, `refleksjonsnotat.md`).
  - Analysere prosjektdokumenter og gruppeinput for å identifisere behov og klassifisere prosjekttype/domene.
  - Utføre Git-operasjoner for å administrere kodebasen og dokumentene våre.
  - **Begrensninger:** Det ble oppdaget at KI-agenten hadde begrensninger knyttet til sanntids websøk, noe som krevde manuell bistand med spesifikke estimater og data fra gruppemedlemmene.

### 2.3 Teknologi og verktøy

- **Frontend:** React med TypeScript og Tailwind CSS
- **Backend:** Node.js med Express.js og TypeScript
- **Database:** MongoDB
- **KI-verktøy:** Gemini CLI (som interaksjonsassistent), intern LLM for innholdsgenerering/analyse.
- **Andre verktøy:** Git (versjonskontroll), BMad Method workflows (strukturert prosess), VS Code (redigeringsmiljø).

### 2.4 Utviklingsfaser

**Fase 1: Planlegging (Markedsundersøkelse) – Branch: `fase1`**

- **Hva gjorde dere i denne fasen?**
  På grenen `fase1` gjennomførte vi en omfattende markedsundersøkelse for "AI CV & Job Application Assistant" rettet mot det norske studentmarkedet. Arbeidet bestod av:
  - Definering av markedets omfang og målgruppe.
  - Identifisering av kundens "Jobs-to-be-Done".
  - Konkurrentanalyse og bruk av Porter's Five Forces.
  - Identifisering av trender og utarbeidelse av GTM-strategi og risikoanalyse.
- **Hvordan brukte dere KI her?**
  Vi instruerte KI-agenten til å utføre `research`-arbeidsflyten i rollen som Analyst. Agenten syntetiserte informasjonen fra våre eksisterende dokumenter (`proposal.md`, `docs/analysis/*`) og manuelle input fra gruppen (markedsstørrelser) for å produsere en fullverdig rapport. Siden agenten ikke kunne søke på nettet i sanntid, bidro gruppemedlemmer med nødvendig informasjon der det trengtes.

**Fase 2: Utvikling (PRD & Epics) – Branch: `fase2`**

- **Hva gjorde dere i denne fasen?**
  På `fase2`-grenen fokuserte vi på å strukturere kravene våre. Vi:
  - Validerte et eksisterende `PRD.md` (hentet fra `test-branch-Rikke`).
  - Opprettet et `epics.md`-dokument for å bryte ned funksjonelle krav i håndterbare brukerhistorier.
  - Identifiserte mangler i den opprinnelige dokumentasjonen gjennom KI-drevet validering.
- **Hvordan brukte dere KI her?**
  Vi brukte KI-agenten i en Product Manager-rolle for å kjøre `create-prd` og `validate-prd` arbeidsflytene. Agenten analyserte `PRD.md` mot en sjekkliste, påpekte feil, og hjalp oss med å generere den første versjonen av `epics.md`.

**Fase 3: Foredling og Kvalitetssikring – Branch: `fase3`**

- **Hva gjorde dere i denne fasen?**
  På `fase3`-grenen jobbet vi med å heve quality of dokumentasjonen basert på funnene i fase 2. Vi:
  - Gjorde omfattende oppdateringer i `PRD.md`, inkludert prosjektklassifisering, innovasjonsseksjon, og bedre strukturering av krav.
  - Gjennomførte en ny validering som resulterte i status "GOD".
- **Hvordan brukte dere KI her?**
  Vi brukte agenten til å iterativt forbedre dokumentene. Agenten foreslo tekstendringer og hjalp til med å håndtere Git-operasjonene som krevdes for å flette endringer og holde grenene ryddige.

---

## 3. Utfordringer og løsninger

### 3.1 Tekniske utfordringer

**Utfordring 1: Git-konflikter og grenadministrasjon**

- **Problem:** Vi opplevde hyppige push-konflikter og utfordringer med å bytte mellom grenene `fase2`, `fase3` og `main`, spesielt med filer som `refleksjonsnotat.md` som ble endret parallelt.
- **Løsning:** Gruppen måtte benytte kommandoer som `git pull` for synkronisering og `git stash` for å lagre arbeid midlertidig.
- **KI sin rolle:** Agenten utførte kommandoene på instruksjon fra et gruppemedlem, men det krevdes menneskelig forståelse for å veilede den riktig når konflikter oppstod.

**Utfordring 2: Manglende verktøy for sanntids websøk**

- **Problem:** I Fase 1 ble det klart at agenten ikke kunne hente ferske markedsdata fra nettet.
- **Løsning:** Dette ble løst ved at gruppemedlemmer ga agenten estimater basert på deres kunnskap, som den så brukte i analysene.
- **KI sin rolle:** Agenten var flink til å si ifra om begrensningen, slik at vi raskt kunne tilpasse arbeidsmetodikken.

### 3.2 Samarbeidsutfordringer

- **Utfordringer knyttet til klarhet i instruksjoner:** Av og til var instruksjonene til agenten litt for vage, noe som førte til stopp i prosessen.
- **Løsning:** Agenten stilte oppklarende spørsmål, noe som hjalp oss med å være mer presise.
- **KI sin rolle:** Agentens evne til å be om bekreftelse reddet oss fra potensielle feil.

### 3.3 KI-spesifikke utfordringer

- **Problem:** Gruppen forventet kanskje litt for mye autonomi fra agenten i starten (f.eks. websøk).
- **Løsning:** Vi lærte raskt agentens begrensninger gjennom dialog.
- **KI sin rolle:** Agenten var transparent om hva den kunne og ikke kunne gjøre.

---

## 4. Kritisk vurdering av KI sin påvirkning

### 4.1 Fordeler med KI-assistanse

**Effektivitet og produktivitet:**

- KI-en økte arbeidshastigheten vår drastisk. Dokumenter som markedsanalyse og PRD ble generert og validert på minutter i stedet for dager.

**Læring og forståelse:**

- Gjennom BMad-metodikken ble vi tvunget til å følge en strukturert prosess, noe som ga oss bedre innsikt i "best practices" for software engineering.
- Agentens klassifisering av prosjektet ga oss nye perspektiver på domenet.

**Kvalitet på koden (og dokumenter):**

- Agenten fungerte som en streng kvalitetskontrollør. Ved å bruke sjekklistene i valideringsfasen, sikret vi at PRD-et vårt var robust og komplett før vi gikk videre.

### 4.2 Begrensninger og ulemper

**Kvalitet og pålitelighet:**

- Siden agenten ikke kunne faktasjekke eksterne data selv, ble quality of markedsanalysen direkte avhengig av våre input. Dette krevde at vi var ekstra påpasselig.

**Avhengighet og forståelse:**

- Det er lett å bli "passasjer" når agenten gjør jobben. Det var viktig å passe på at gruppen faktisk forstod endringene agenten gjorde, spesielt under komplekse Git-operasjoner.

**Kreativitet og problemløsning:**

- Agenten er god på struktur, men den "kreative gnisten" måtte komme fra gruppen. Agenten kunne foreslå løsninger basert på mønstre, men de unike ideene for applikasjonen måtte gruppen stå for.

### 4.3 Sammenligning: Med og uten KI

- **Hva ville vært annerledes?** Uten KI ville Fase 1 og 2 tatt mye lengre tid. Vi ville brukt dager på å skrive og formatere dokumenter som agenten fikset på kort tid.
  
- **Hvilke deler av prosjektet ville vært vanskeligere/lettere?** Informasjonsinnhenting ville kanskje vært mer naturlig manuelt og krevende (med Google), men syntesen og struktureringen var mye lettere med KI.
  
- **Ville sluttresultatet vært bedre eller dårligere?** Sluttresultatet er nok mer teknisk korrekt og strukturert med KI, selv om det kanskje mangler noen "menneskelige" nyanser i språket her og der. Resultatet er nok bedre ved hjelp av KI, da bare 1 av gruppemedlemmene hadde god kunnskap om programmering før vi startet prosjektet, og dermed har KI vært stor hjelp til å faktisk skrive kode, men med menneskelig overvåkning, kreativitet og input. 

### 4.4 Samlet vurdering

- KI var en stor ressurs for oss. Den effektiviserte de tunge, administrative delene av utviklingen, slik at gruppen kunne fokusere på overordnet strategi. Lærdommen er at KI er en super assistent og verktøy, men ingen erstatning for en kompetent utvikler, godt sammarbeid og god kommunikasjon i en gruppe.  

---

## 5. Etiske implikasjoner

### 5.1 Ansvar og eierskap

- **Hvem er ansvarlig for koden når KI har bidratt?**
  Når man bruker KI som verktøy i produksjon av ting, enten det er kode eller andre ting er man som menneske alltid ansvarlig for å gå igjennom resultatet. KI mangler kritisk tenkning og har dårligere forståelse av lover og regler, samt dårlig dømmekraft, og skal kun brukes som et verktøy og hjelpemiddel, og regnes ikke som en juridisk eller faglig aktør.  Dermed er det utvikleren, i dette scenarioet oss, som er ansvarlig for at koden som blir generert er korrekt, funksjonell og i tråd med prosjektets krav og gjeldende regelverk.
  
- **Hvordan sikrer man kvalitet når KI genererer kode?**
  For å kvalitet sikre koden som KI har skapt er det viktig å ha en full gjennomgang av den ferdige koden, slik at man forstår den, samt at den fungerer som den skal. Her må hver linje sjekkes for logikk, og at det som står er konkret, lettleslig og rett. Det er også lurt å stoppe flere ganger gjennom utviklingsprosessen og sjekke at alt ser bra og riktig ut, da dette vil gjøre det lettere når hele koden skal leses igjennom. Under kvalitetssikringen er det viktig å sjekke at koden følger alle faglige retningslinjer, samt lover og regler. KI er god på å følge spesifikke krav og å tenke raskt, men et menneskelig kritisk blikk er nødvendig for å sikre kvalitet, nøyaktighet og pålitelighet.
  
- **Diskuter spørsmål om opphavsrett og intellektuell eiendom**
  Ifølge KI har KI per i dag ikke noe juridisk opphavsrett, dermed er det den som bruker verktøyet som har opphavsretten, med mindre noe annet er sagt i bruksretningslinjene. Derimot kan KI hente informasjon og kode som ligner på allerede opphavsrett beskyttet materiale, og da er det viktig at bruker leser over og kritisk vurderer koden, og gjør eventuelle endringer for å sikre at resultatet ikke krenker andres rettigheter.  

### 5.2 Transparens

- **Bør det være transparent at KI er brukt?**
  Ja, det bør være transparent at KI er brukt under utviklingen av et prosjekt, da dette er viktig både faglig og etisk. Åpenhet om bruk av KI er vesentlig for å opprettholde troverdighet rundt akademiske og profesjonelle prosjekter, samt at det gir muligheten til en rettferdig vurdering og viser integritet. Ved å ikke opplyse om bruken av KI gir man inntrykket av at alt er egenprodusert, noe som gjør det vanskelig å skille mellom menneskelig og KI utviklet arbeid. Noe som fører til vanskeligheter ved vurderinger, svekket troverdighet og rettferdighet.
  
- **Hvordan dokumenterer man KI sin bidrag?**
  Ved dokumentering av KI sitt bidrag er det viktig å legge inn alle prompts som ble brukt, og hvordan resultatene ble redigert, beskrivelse av metode og reflektere over bruken av KI. Det er dermed også viktig å dokumentere hva som er egenprodusert og egen bearbeiding av kode. Det trengs ikke dokumenteres ned til hver minste detalj, men at det er en rettferdig fremstilling av hvordan KI har blitt brukt under utviklingsprosessen. Denne rapporten er et eksempel på det.
  
- **Hva er konsekvensene av å ikke være åpen om KI-bruk?**
  Ved å ikke være åpen om bruken av KI vil man skape et profesjonelt og akademisk miljø hvor man mangler tillit til hverandre og hverandres arbeid. Det vil øke risiko for anklagelser for plagiat og juks, og man mister læringsutbytte da man har mindre forståelse for prosessen og arbeidet som har blitt gjort av KI, og man blir usikker på hva man egentlig har forstått selv. Hvis dette blir et stort problem, vil det føre til at befolkningen mister evnen til kritisk tenking, kreativitet og evnen til å fundere litt uten å få svar med en gang. Det vil også føre til at det blir vanskelig å vurdere arbeid, da man ikke vet hva som er menneskelig og hva som er maskinprodusert.

### 5.3 Påvirkning på læring og kompetanse

- **Hvordan påvirker KI-avhengighet fremtidig kompetanse?**
  KI har både positive og negative sider. KI kan hjelpe brukere med å forstå kode, gi eksempler og forklaringer, samt alternative løsninger. Derimot kan for mye bruk og avhengighet av KI føre til mindre læringsutbytte og at man mister viktige læringsprosesser og grunnleggende forståelse av konsepter.
  
  - **Hvilke ferdigheter risikerer man å ikke utvikle?**
 Ved feil og mye bruk av KI kan man miste ferdigheter som evnen til å faktisk lese koder, problemløsning, kreativitet, forståelsen av koder og hvordan de utvikles, og debugging ferdigheter. Alle disse ferdighetene er essensielle når det kommer til programmering, og derfor er det viktig å ikke misbruke KI, men bruke det som et hjelpemiddel under utvikling av kode.

  - **Balanse mellom effektivitet og læring?**
    Det er viktig med en god balanse mellom effektivitet og læring: Læringsutbytte skal ikke gå på bekostning av effektiviteten, men det KI kan brukes som en måte å få raskere svar på spørsmål og alternative løsninger til problemer man ikke forstår. Nøkkelen er bevisst bruk av KI og som støtte og ikke erstatning. Det er viktig å først prøve selv, så kan man ty til KI etterpå for veiledning og/eller sammenligne svar. Det er også viktig å opprettholde kritisk tenkning og refleksjon gjennom prosessen og bruke KI til å forklare konsepter og ikke bare generere ferdig kode. Hvis man er usikker på noe, få heller KI til å forklare enn å bare hoppe over steget ved å la KI gjøre all jobben. Læring skal være hovedålet, mens KI kan bidra til effektivitet uten å undertrykke egen utvikling.

### 5.4 Arbeidsmarkedet

- **Hvordan kan utbredt KI-bruk påvirke fremtidige jobber i IT?**
  KI vil nok ta over dagligdagse rutine jobber, men da vil de fremtidige IT jobbene skifte over til å ha mere fokus på kvalitetssikring, sikkerhet og systemforståelse. Da KI vil ha fokus på utvikling, generering av kode, testing og dokumentasjon, vil IT jobber skifte over til å gjøre det menneskelige som KI ikke kan gjøre.
  
- **Hvilke roller vil bli viktigere/mindre viktige?**
  Roller hvor man primært skriver koder, tester kode manuelt, og stillinger med rutine oppgaver rundt utvikling vil bli mindre viktige og endre seg. Roller som sikkerhetsspesialister, ingeniører, produkt og interaksjons designere, og roller som krever dyp systemforståelse, strategisk tenkning, kreativ problemløsning, etisk vurdering og evnen til å effektivt veilede KI vil bli viktigere (f.eks. AI prompt engineers, AI ethicists, solution architects).
  
- **Deres refleksjoner om fremtidig karriere i en KI-drevet verden**
  Fremtidig karrierer vil nok ikke bare kreve at man kan programmeringsspråk, men at man kan bruke KI som et verktøy som kan skape konkurransefortrinn og kontinuerlig læring, da dette er et felt i konstant utvikling. Ferdigheter som kritisk tenkning og domeneekspertise vil bli like viktige som tekniske ferdigheter. Dermed er det viktig og ikke bare kunne “pensum” men faktisk å kunne utøve analytiske refleksjoner og utvikle unike menneskelige ferdigheter.
  
### 5.5 Datasikkerhet og personvern

- **Hvilke data delte dere med KI-verktøy?**
  Vi delte prosjektdokumentasjon, men ingen sensitiv persondata.
  
- **Potensielle risikoer ved å dele kode og data med KI**
  Lekkasje av forretningshemmeligheter er en risiko.
  
- **Hvordan skal man tenke på sikkerhet når man bruker KI?**
  Vær restriktiv med hva du deler. Anonymiser data der det er mulig.

---

## 6. Teknologiske implikasjoner

### 6.1 Kodekvalitet og vedlikehold

- **Hvordan påvirker KI-generert kode langsiktig vedlikehold?**
  Hvis vi ikke forstår koden agenten skriver, blir den umulig å vedlikeholde og eventuelt forbedre ved en senere annledning. Dokumentasjon av prosessen og utviklingen er nøkkelen slik at man kan gå tilbake å se og forstå koden, og se eventuelle forbedringspotensialer.

### 6.2 Standarder og beste praksis

- **Følger KI alltid beste praksis og industristandarder?**
  Som regel, men den kan foreslå utdaterte ting. Vi må alltid dobbeltsjekke og kvalitetsikre.

### 6.3 Fremtidig utvikling

- **Hvordan tror dere KI vil påvirke programvareutvikling fremover?**
  Det vil gå raskere, og vi vil kunne bygge mer komplekse systemer med færre folk.
  
- **Hvilke ferdigheter blir viktigere for utviklere?**
  Systemforståelse, logikk, kreativitet og etikk.

---

## 7. Konklusjon og læring

### 7.1 Viktigste lærdommer

1.  **KI er en kraftfull akselerator:** Den sparer oss for mye tid på dokumentasjon.
2.  **Struktur er viktig:** BMad-metodikken hjalp gruppen å holde orden.
3.  **Menneskelig kontroll er nødvendig:** Vi må alltid kvalitetssikre arbeidet til agenten.
4.  **Git er essensielt:** Selv med KI må man kunne versjonskontroll.

### 7.2 Hva ville dere gjort annerledes?

- Vært tydeligere med instruksjonene til agenten fra start som gruppe.
- Avklart agentens begrensninger tidligere for å unngå bortkastet tid på ting den ikke kan (som websøk).

### 7.3 Anbefalinger

- Bruk KI, men ikke bli lat og baser hele koden på KI. Bruk kritisk tenkning og overvåk alt KI svarer. 

### 7.4 Personlig refleksjon (individuelt)

**[Sanosh Senthilkumar]:**
Gjennom dette prosjektet har jeg dypere forstått verdien av strukturerte arbeidsflyter og KI som en akselerator i planleggingsfasen. Min rolle som operatør for KI har gitt innsikt i viktigheten av presise instruksjoner og kritisk vurdering av KI-generert output. Utfordringene med Git og KI's begrensninger lærte meg verdien av menneskelig overvåking og problemløsning. Å sjonglere arbeid over grenene `fase1`, `fase2` og `fase3` var utfordrende, men lærerikt for å forstå en ryddig utviklingsprosess.

**[Jarle Kjelsvik Wallem]:**
Ikke ha macbook. Ikke stol blindt på Gemini.

**[Rikke Gundersen]:**
Da jeg startet dette faget hadde jeg minimal til ingen forkunnskap om programmering og koding, men gjennom prosjektet og samarbeidet i gruppen har jeg fått en grunnleggende forståelse. Jeg har fått mye ut av samarbeidet i gruppen, da vi manglet pensumbok, og at det var et generelt komplekst og vanskelig fag. Det har vært litt krevende å jobbe gjennom github, vscode og teams, da det var mye nytt for meg å sette meg inn i, men jeg har fått gode forklaringer fra både gruppemedlemmene og KI. Det å jobbe på tvers av grener i Github har også vært en utfordring, men med godt samarbeid og god kommunikasjon så fant vi gode løsninger. 

KI er noe jeg har brukt før, men gjennom det siste halvåret har jeg fått en dypere forståelse av hvordan det kan brukes som et faktisk verktøy og ikke bare noe som spytter ut svar. Jeg har alltid vært kritisk til KI da jeg er redd for plagiat, og feilinformasjon, og jeg er skeptisk til all ny teknologi, men dette prosjektet har gjort meg tryggere på bruken av KI og hvordan bruke det smart. Det har også vist meg verdien av kritisk tenkning og at KI kan faktisk aldri erstatte oss mennesker da man er avhengig av en menneskelig kontroll og debugging. 

Programmering er nok ikke noe jeg skal spesialisere meg i, da jeg fortsatt syntes det er litt mye og vanskelig, men det har vært veldig lærerikt å få en grunnleggende kompetanse, da dette vil bare bli mere og mere relevant framover med tanke på jobb og karriere. 

---

## 8. Vedlegg (valgfritt)

- Lenke til GitHub repository: [https://github.com/IBE160/SG-Gruppe-243]
- Andre relevante dokumenter, se relevant fase+1:
  - Markedsundersøkelsesrapport: `docs/bmm-research-market-2025-12-03.md`
  - Produksjonskravdokument (PRD): `docs/PRD.md`
  - Epics-dokument: `docs/epics.md`
  - PRD Valideringsrapport: `docs/prd-validation-report-2025-12-03.md`

---

**Ordantall:** [ca.3100 ord]

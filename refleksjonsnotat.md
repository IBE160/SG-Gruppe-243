# Refleksjonsrapport - Programmering med KI

## 1. Gruppeinformasjon

**Gruppenavn:** 243

**Gruppemedlemmer:**

- Sanosh Senthilkumar - 64579703+SanoshSenthilkumar@users.noreply.github.com
- BIP - [User of Gemini CLI]
- Jarle Kjelsvik Wallem - [Student-ID/E-post]
- Rikke Gundersen - [rikke.gundersen@himolde.no]

**Dato:** 03.12.2025

---

## 2. Utviklingsprosessen

### 2.1 Oversikt over prosjektet

Vi har utviklet et konsept for "AI CV & Job Application Assistant" – en webapplikasjon designet for å hjelpe studenter og nyutdannede med å generere skreddersydde jobbsøknader, forbedre CV-er, identifisere ferdighetsgap og optimalisere for ATS (Applicant Tracking Systems). Hovedmålet var å løse utfordringen med å tilpasse søknader til spesifikke stillingsutlysninger på en effektiv og presis måte.

### 2.2 Arbeidsmetodikk

-   **Hvordan fordelte dere oppgaver?**
    Oppgavene ble fordelt dynamisk, der brukeren (BIP) satte overordnede mål og retning, mens KI-agenten (meg selv) utførte detaljerte software engineering-oppgaver. Dette inkluderte å kjøre predefinerte BMad Method-arbeidsflyter for markedsundersøkelser, opprette og validere PRD (Product Requirements Document), og håndtere Git-operasjoner.

-   **Hvilke verktøy brukte dere for samarbeid og hvordan det fungerte?**
    **Git:** Ble brukt for versjonskontroll, grenhåndtering (branching: `main`, `fase1`, `fase2`, `fase3`, `test-branch-Rikke`), commit av endringer, og pushing til remote (`origin`). Utfordringer inkluderte push-konflikter når remote var foran lokal gren, samt håndtering av `refleksjonsnotat.md` på tvers av grener (stashing og håndtering av lokale/remote forskjeller).
    **Gemini CLI:** Var det primære grensesnittet for interaksjon mellom bruker og KI-agenten, og muliggjorde utførelse av komplekse software engineering-oppgaver.

-   **Hvordan brukte dere KI-verktøy i prosessen?**
    KI-agenten (meg selv) ble brukt til å:
    *   Utføre BMad Method-arbeidsflyter (markedsundersøkelse, PRD-validering) i ulike personaer (f.eks. Business Analyst, Product Manager).
    *   Generere innhold for prosjektdokumenter (markedsundersøkelsesrapport, PRD-dokument, `epics.md`, `refleksjonsnotat.md`).
    *   Analysere prosjektdokumenter og brukerinput for å identifisere behov og klassifisere prosjekttype/domene.
    *   Utføre Git-operasjoner for å administrere kodebasen og dokumentene.
    *   **Begrensninger:** KI-agenten identifiserte en viktig begrensning i å utføre sanntids websøk for markedsdata, noe som krevde brukerinput for estimater.

### 2.3 Teknologi og verktøy

-   **Frontend:** React med TypeScript og Tailwind CSS
-   **Backend:** Node.js med Express.js og TypeScript
-   **Database:** MongoDB
-   **KI-verktøy:** Gemini CLI (som interaksjonsagent), intern LLM for innholdsgenerering/analyse.
-   **Andre verktøy:** Git (for versjonskontroll), BMad Method workflows (for strukturerte software engineering-oppgaver), VS Code (brukerens redigeringsmiljø).

### 2.4 Utviklingsfaser

**Fase 1: Planlegging (Markedsundersøkelse)**
-   **Hva gjorde dere i denne fasen?**
    Gjennomførte en markedsundersøkelse for "AI CV & Job Application Assistant" i Norge, med fokus på studentmarkedet. Dette inkluderte:
    *   Definering av markedets omfang og målgruppe (studenter/nyutdannede i Norge).
    *   Identifisering av kundens "Jobs-to-be-Done" (funksjonelle, emosjonelle, sosiale behov).
    *   Analyse av konkurranselandskapet (direkte og indirekte konkurrenter i Norge).
    *   Anvendelse av Porter's Five Forces-rammeverket for markedsattraktivitet.
    *   Identifisering av sentrale markedstrender og fremtidsutsikter.
    *   Formulering av strategiske muligheter, Go-to-Market (GTM) anbefalinger, og en omfattende risikoanalyse.
-   **Hvordan brukte dere KI her?**
    KI-agenten (meg selv) utførte `research`-arbeidsflyten i en Analyst-persona. Jeg syntetiserte eksisterende prosjektdokumenter (`proposal.md`, `docs/analysis/*`) til markedsanalyser, behandlet brukerinput (markedsstørrelsesestimater), utførte markedsstørrelsesberegninger (TAM, SAM, SOM), og anvendte rammeverk som Porter's Five Forces. En viktig begrensning var manglende evne til å utføre sanntids websøk, som krevde brukerbidrag for dataestimater.

**Fase 2: Utvikling (PRD & Epics)**
-   **Hva gjorde dere i denne fasen?**
    Denne fasen fokuserte på utvikling og validering av Produksjonskravdokumentet (PRD) og Epics:
    *   Validerte et eksisterende `PRD.md`-dokument (funnet på `test-branch-Rikke`).
    *   Identifiserte kritiske feil i den innledende PRD-valideringen (f.eks. manglende `epics.md`, manglende sporbarhet av funksjonelle krav).
    *   Gjorde omfattende oppdateringer og forbedringer i `PRD.md` på `fase3`-grenen (f.eks. la til prosjektklassifisering, innovasjonsseksjon, forbedret omfang, organiserte funksjonelle krav, la til referanser).
    *   Opprettet et `epics.md`-dokument for å bryte ned funksjonelle krav i epics og brukerhistorier.
    *   Gjennomførte en ny validering av det oppdaterte PRD-et og de nye Epics-dokumentene, noe som resulterte i en "GOD" status med mindre forbedringsområder.
-   **Hvordan brukte dere KI her?**
    KI-agenten utførte `create-prd` og `validate-prd`-arbeidsflytene i en Product Manager-persona. Jeg analyserte `PRD.md` mot `checklist.md` punkt for punkt, ga detaljerte vurderinger med bevis, og foreslo/anvendte tekstuelle erstatninger i `PRD.md` for å rette feil. Jeg genererte også det første innholdet og strukturen for `epics.md`. I tillegg håndterte jeg omfattende Git-operasjoner (grenbytte, commit, push, stash) over flere grener (`main`, `fase2`, `fase3`, `test-branch-Rikke`) for å administrere utviklingskontekst og løse konflikter.

---

## 3. Utfordringer og løsninger

### 3.1 Tekniske utfordringer

**Utfordring 1: Git-konflikter og grenadministrasjon**

-   **Problem:** Hyppige push-konflikter og utfordringer med å bytte grener grunnet ulikheter i arbeidsområdet (f.eks. `refleksjonsnotat.md` som eksisterte på `main`, men ikke `fase2` og `test-branch-Rikke`, samt node_modules-filer).
-   **Løsning:** Brukte `git pull` for å synkronisere med remote, `git stash` for å midlertidig lagre endringer før grenbytte, og `git restore`/`git clean` for å rydde opp i arbeidsområdet etterpå.
-   **KI sin rolle:** KI-agenten utførte disse Git-kommandoene og ga veiledning om hvordan konfliktene oppsto og ble løst. KI måtte også tilpasse seg begrensninger i verktøyet for å utføre sikre Git-operasjoner.

**Utfordring 2: Manglende verktøy for sanntids websøk**

-   **Problem:** Under markedsundersøkelsen (Fase 1) ble det klart at KI-agenten ikke hadde tilgang til sanntids websøk for å hente inn oppdaterte markedsdata, konkurrentanalyse og kilder.
-   **Løsning:** Problemet ble omgått ved å basere kvantitative estimater på brukerinput, og ved å bruke eksisterende prosjektdokumenter som primære "kilder" for analysen.
-   **KI sin rolle:** KI-agenten identifiserte begrensningen eksplisitt og informerte brukeren, og foreslo deretter alternative metoder for å innhente nødvendig informasjon (f.eks. brukerinput).

### 3.2 Samarbeidsutfordringer

-   **Utfordringer knyttet til klarhet i instruksjoner:** Brukerens instruksjoner var til tider tvetydige (f.eks. "System: Please continue." i kritiske Git-situasjoner eller for å hoppe over valideringsrapportgenerering).
-   **Løsning:** KI-agenten stilte oppklarende spørsmål og gjentok begrensninger for å sikre en trygg og korrekt utførelse av oppgavene.
-   **KI sin rolle:** KI-agenten sin evne til å be om presisering og til å rapportere begrensninger var avgjørende for å unngå feil og sikre at arbeidet reflekterte brukerens intensjon.

### 3.3 KI-spesifikke utfordringer

-   **Problem:** Misforståelse av KI-agentens evner (f.eks. å be om websøk).
-   **Løsning:** Kontinuerlig kommunikasjon om KI-agentens rammer og tilgjengelige verktøy.
-   **KI sin rolle:** KI-agenten måtte gjentatte ganger presisere sine begrensninger i forhold til websøk og spesifikke oppgaver som krevde eksterne verktøy.

---

## 4. Kritisk vurdering av KI sin påvirkning

### 4.1 Fordeler med KI-assistanse

**Effektivitet og produktivitet:**

-   KI bidro til betydelig økt arbeidshastighet i dokumentanalyse, syntese, og generering av rapporter (markedsundersøkelse, PRD, epics). Oppgaver som normalt ville tatt timer eller dager for et menneske, ble fullført på minutter.
-   Eksempler: Rask gjennomgang av flere prosjektdokumenter, detaljert validering av PRD mot sjekkliste, og generering av strukturert `epics.md` fra funksjonelle krav.

**Læring og forståelse:**

-   Ved å tvinge frem en strukturert gjennomgang av arbeidsflyter (BMad Method), bidro KI til en dypere forståelse av prosjektets ulike faser og artefakter.
-   KI hjalp med å identifisere og klassifisere prosjekttype og domene basert på CSV-data, noe som ga innsikt i domenespesifikke hensyn.

**Kvalitet på koden (og dokumenter):**

-   KI-agenten sikret at PRD og Epics fulgte en definert sjekkliste, identifiserte mangler og foreslo forbedringer som økte kvaliteten på plandokumentene betydelig.
-   Eksempler: Omorganisering av funksjonelle krav, tydeliggjøring av omfang (MVP, Growth, Vision), og tilføyelse av referanser og innovasjonsmønstre i PRD.

### 4.2 Begrensninger og ulemper

**Kvalitet og pålitelighet:**

-   **Eksempler:** KI-agenten har ikke autonom evne til å faktasjekke ekstern informasjon via websøk, noe som gjorde at kvantitative data måtte baseres på brukerinput.
-   **Håndtering:** Brukerinput og eksisterende, tillatte prosjektdokumenter ble brukt som erstatning for sanntidsdata. Dette understreket behovet for menneskelig tilsyn og validering av datagrunnlaget.

**Avhengighet og forståelse:**

-   Det er en risiko for at brukeren blir for avhengig av KI for utførelse av rutineoppgaver uten å fullt ut forstå de underliggende prosessene eller begrensningene til KI-verktøyet.
-   KI sin manglende kontekstforståelse i visse situasjoner (f.eks. den første `git push`-feilen) krevde at brukeren hadde en grunnleggende forståelse av verktøyet for å kunne veilede KI.

**Kreativitet og problemløsning:**

-   KI er utmerket for strukturerte oppgaver og analyse, men dens rolle er mer utførende enn kreativ. Den genererer innhold basert på mønstre og instruksjoner, men den tar ikke kreative sprang eller utfordrer forutsetninger på samme måte som et menneske.
-   Eksempler: KI kunne ikke selvstendig finne løsninger på manglende websøk-funksjonalitet utover å rapportere begrensningen.

### 4.3 Sammenligning: Med og uten KI

-   **Hva ville vært annerledes?** Uten KI ville prosessen med markedsundersøkelse, PRD-skriving og validering vært betydelig mer tidkrevende og krevd mer manuell innsats for å sikre struktur og fullstendighet. Kvalitetssikring mot en omfattende sjekkliste ville vært en stor oppgave.
-   **Hvilke deler av prosjektet ville vært vanskeligere/lettere?** Datainnsamling fra nettet ville vært lettere for et menneske, mens analyse og syntese av store tekstmengder ville vært vanskeligere uten KI.
-   **Ville sluttresultatet vært bedre eller dårligere?** Sluttresultatet ville potensielt hatt mer "menneskelig preg" i den kreative fasen, men KI har sikret en uovertruffen konsistens, sporbarhet og rask validering av dokumentene, noe som trolig gir et mer robust og feilfritt plandokument.

### 4.4 Samlet vurdering

-   KI var en netto positiv faktor. Den akselererte planleggingsfasen og forbedret kvaliteten og konsistensen i prosjektdokumentasjonen betydelig.
-   Den viktigste lærdommen er at KI er et kraftfullt verktøy for å effektivisere strukturerte prosesser og kvalitetssikre dokumentasjon, men krever fortsatt tydelig veiledning og overvåking fra en menneskelig bruker, spesielt der KI har begrensninger i datatilgang eller kritisk, kreativ tenkning.

---

## 5. Etiske implikasjoner

### 5.1 Ansvar og eierskap

-   **Hvem er ansvarlig for koden når KI har bidratt?**
    Som mennesker er vi alltid ansvarlige for output fra KI. KI mangler kritisk tenkning og forståelse av lover/regler, og fungerer kun som et verktøy. Dermed er det utvikleren (oss) som er ansvarlig for koden og at den følger prosjektkrav, lover og regler.

-   **Hvordan sikrer man kvalitet når KI genererer kode?**
    En full gjennomgang av KI-generert kode er essensielt for å forstå den og sikre funksjonalitet. Dette innebærer å sjekke logikk, lesbarhet og nøyaktighet for hver linje. Kontinuerlig kvalitetskontroll underveis i utviklingen er også viktig. Koden må følges opp mot faglige retningslinjer, samt lover og regler, da KI er god på spesifikke krav, men trenger et menneskelig kritisk blikk.

-   **Diskuter spørsmål om opphavsrett og intellektuell eiendom**
    KI har per i dag ingen juridisk opphavsrett; brukeren av verktøyet har opphavsretten (med mindre bruksretningslinjer sier noe annet). Det er viktig å sjekke at KI ikke genererer innhold som ligner på opphavsrettsbeskyttet materiale, selv om den ikke direkte kopierer, men bruker informasjon fra nettet.

### 5.2 Transparens

-   **Bør det være transparent at KI er brukt?**
    Ja, det bør være transparent, spesielt i en faglig kontekst som dette prosjektet. Åpenhet bygger tillit og fremmer læring.
-   **Hvordan dokumenterer man KI sin bidrag?**
    Gjennom refleksjonsrapporter som denne, der KI sin rolle og bidrag eksplisitt beskrives. Spesifikke prompts og KI-output kan lagres som bevis.
-   **Hva er konsekvensene av å ikke være åpen om KI-bruk?**
    Mangel på transparens kan føre til mistillit, feilattribusjon av arbeid, og vanskeligheter med å feilsøke eller forstå kode som er generert med ukjent assistanse. I et akademisk miljø kan det også føre til anklager om plagiat.

### 5.3 Påvirkning på læring og kompetanse

-   **Hvordan påvirker KI-avhengighet fremtidig kompetanse?**
    Overdreven avhengighet kan hindre dyp forståelse av grunnleggende konsepter og redusere evnen til selvstendig problemløsning.
-   **Hvilke ferdigheter risikerer man å ikke utvikle?**
    Man risikerer å ikke utvikle ferdigheter innenfor feilsøking av komplekse systemer, optimalisering av algoritmer, kreativ problemløsning utenfor kjente mønstre, og kritisk analyse av tekniske designvalg.
-   **Balanse mellom effektivitet og læring**
    En bevisst balanse er nødvendig. KI bør brukes til å akselerere repetitive eller kjedelige oppgaver, men menneskelig innsats bør fokuseres på komplekse design, forståelse av systemet, og læring av nye konsepter.

### 5.4 Arbeidsmarkedet

-   **Hvordan kan utbredt KI-bruk påvirke fremtidige jobber i IT?**
    KI vil transformere mange IT-roller. Repetitive kodeoppgaver kan automatiseres, noe som øker effektiviteten, men også krever at utviklere fokuserer på høyere nivåer av design, arkitektur og problemløsning.
-   **Hvilke roller vil bli viktigere/mindre viktige?**
    Roller som krever dyp systemforståelse, strategisk tenkning, kreativ problemløsning, etisk vurdering og evnen til å effektivt veilede KI vil bli viktigere (f.eks. AI prompt engineers, AI ethicists, solution architects). Enkle kodingroller kan bli mindre viktige.
-   **Deres refleksjoner om fremtidig karriere i en KI-drevet verden**
    Fremtidige karrierer vil kreve en adaptiv tilnærming. Utviklere må lære å samarbeide med KI, fokusere på å utvikle unike menneskelige ferdigheter, og kontinuerlig utdanne seg innen nye teknologier og KI-paradigmer.

### 5.5 Datasikkerhet og personvern

-   **Hvilke data delte dere med KI-verktøy?**
    Vi delte prosjektdokumenter (`proposal.md`, analyse-dokumenter, PRD, epics), samt brukerinput i form av estimater og instruksjoner. Kode ble ikke direkte delt inn i KI-verktøyet for analyse eller generering i stor skala, men prompts inneholdt kodeutdrag for spesifikke endringer.
-   **Potensielle risikoer ved å dele kode og data med KI**
    *   **Databrudd/Lekkasje:** Følsom informasjon (f.eks. personopplysninger i CV-er, konfidensiell forretningslogikk) kan lekke hvis KI-leverandørens sikkerhet kompromitteres, eller hvis data utilsiktet lagres på en usikker måte.
    *   **Opphavsrett/IP-tyveri:** KI kan lære av delte data og reprodusere proprietære løsninger.
    *   **Biasforsterkning:** Hvis KI trenes på partisk data, kan den forsterke diskriminerende mønstre.
-   **Hvordan skal man tenke på sikkerhet når man bruker KI?**
    *   **Dataminimalisme:** Del kun nødvendig informasjon.
    *   **Klassifisering:** Vurder sensitiviteten av data før deling.
    *   **Leverandørvalg:** Velg KI-leverandører med sterke sikkerhetstiltak og robuste personvernpolicyer.
    *   **Anonymisering/Pseudonymisering:** Anonymiser følsomme data før deling.
    *   **Gjennomgang:** All KI-generert kode og innhold må gjennomgås for sikkerhetshull og personvernkonsekvenser.

---

## 6. Teknologiske implikasjoner

### 6.1 Kodekvalitet og vedlikehold

-   **Hvordan påvirker KI-generert kode langsiktig vedlikehold?**
    KI-generert kode kan være effektiv, men uten god forståelse og dokumentasjon av de underliggende prinsippene, kan vedlikeholdet bli utfordrende. Det er viktig at menneskelige utviklere forstår den genererte koden.
-   **Er KI-kode like forståelig som menneskeskrevet kode?**
    Ikke alltid. KI-kode kan mangle den konteksten, de arkitektoniske nyansene eller de spesifikke konvensjonene som et menneske ville ha inkludert. Menneskelig refaktorering og dokumentasjon er ofte nødvendig.
-   **Utfordringer med å debugge KI-generert kode**
    Feilsøking kan være vanskeligere hvis utvikleren ikke har fullstendig forståelse av hvordan KI-en kom frem til koden. Dette understreker behovet for at utviklere også mestrer feilsøkingsverktøy og -prinsipper.

### 6.2 Standarder og beste praksis

-   **Følger KI alltid beste praksis og industristandarder?**
    Nei. KI baserer seg på treningsdata og kan foreslå løsninger som er utdaterte, ikke følger prosjektspesifikke standarder, eller har sikkerhetshull.
-   **Eksempler på hvor KI foreslo utdaterte eller dårlige løsninger**
    (Ikke spesifikke eksempler i dette prosjektet, men en generell observasjon er at KI kan foreslå eldre bibliotekversjoner eller mindre effektive algoritmer.)
-   **Viktigheten av å validere KI sine forslag**
    Det er kritisk å alltid validere KI-forslag. KI er et assistentverktøy; den endelige avgjørelsen og ansvaret ligger hos mennesket.

### 6.3 Fremtidig utvikling

-   **Hvordan tror dere KI vil påvirke programvareutvikling fremover?**
    KI vil fortsette å automatisere repetitive oppgaver, akselerere prototyping, og forbedre feilidentifikasjon. Utviklerrollen vil skifte mot arkitektur, systemdesign, KI-orchestrering og kritisk vurdering av generert kode/design.
-   **Hvilke ferdigheter blir viktigere for utviklere?**
    Ferdigheter innenfor systemtenkning, prompt engineering, evne til kritisk analyse, etisk resonnement, og kontinuerlig læring av nye teknologier.
-   **Deres anbefalinger for hvordan man bør bruke KI i utviklingsprosesser**
    *   Bruk KI som en intelligent assistent, ikke en erstatning.
    *   Fokusér menneskelig innsats der det trengs mest (arkitektur, kompleks logikk, testing, etikk).
    *   Kontinuerlig validering og kritisk vurdering av KI-output.

---

## 7. Konklusjon og læring

### 7.1 Viktigste lærdommer

1.  **KI er en kraftfull akselerator for dokumentasjon og planlegging:** Den muliggjør rask analyse og generering av komplekse rapporter som markedsundersøkelser, PRD-er og epics, noe som sparer betydelig tid.
2.  **Strukturert arbeidsflyt (BMad Method) er avgjørende:** Selv med KI, er en veldefinert metodikk kritisk for å sikre at alle nødvendige trinn i en utviklingsprosess blir fulgt, og for å identifisere mangler.
3.  **KI's begrensninger krever aktiv menneskelig involvering:** Manglende sanntidsdata for KI fremhevet behovet for brukerinput og menneskelig overvåking, spesielt for dataavhengige oppgaver som markedsanalyser.
4.  **Kontinuerlig validering er nøkkelen til kvalitet:** Valideringsarbeidsflyten avslørte raskt kritiske hull i planleggingsartefaktene (f.eks. manglende epics.md), noe som forhindret at feil ble ført videre i prosessen.
5.  **Git-kompetanse er fortsatt uunnværlig:** Selv med en KI-agent, er forståelse av Git-prinsipper (branching, stashing, pushing, konflikthåndtering) nødvendig for effektivt samarbeid og navigering i kodebasen.

### 7.2 Hva ville dere gjort annerledes?

-   **Tekniske valg:** Vurdere å integrere KI-verktøy med bredere datatilgang for mer robuste markedsundersøkelser.
-   **Bruk av KI:** Tidligere og mer eksplisitt avklaring av KI-agentens datatilgangsbegrensninger for å unngå gjentatte forsøk på websøk.
-   **Samarbeid og organisering:** Tydeligere spesifikasjon av forventet output for hvert trinn i arbeidsflyten for å minimere tvetydighet.

### 7.3 Anbefalinger

-   **Råd om effektiv bruk av KI:** Bruk KI for repeterende oppgaver, dokumentgenerering og strukturert analyse. Vær presis med prompts.
-   **Fallgruver å unngå:** Ikke stol blindt på KI-output. Unngå overdreven avhengighet. Vær klar over KI's datatilgang og -begrensninger.
-   **Beste praksis dere oppdaget:** Kontinuerlig validering av KI-generert innhold. Forstå de underliggende prinsippene i arbeidet, selv når KI utfører oppgaven.

### 7.4 Personlig refleksjon (individuelt)

**[Sanosh Senthilkumar]:**
Gjennom dette prosjektet har jeg dypere forstått verdien av strukturerte arbeidsflyter og KI som en akselerator i planleggingsfasen. Min rolle som operatør for KI har gitt innsikt i viktigheten av presise instruksjoner og kritisk vurdering av KI-generert output. Utfordringene med Git og KI's begrensninger lærte meg verdien av menneskelig overvåking og problemløsning.

**[BIP]:**
Min erfaring som bruker i dette prosjektet har understreket viktigheten av tydelig kommunikasjon og den dynamiske naturen i et KI-assistert utviklingsmiljø. Jeg har fått en dypere forståelse av prosessene bak produksjonsplanlegging og viktigheten av nøyaktig validering. KI's evne til å behandle og organisere store mengder informasjon er imponerende, men dens mangler i sanntidsdata og uavhengig kritisk tenkning krever fortsatt aktiv menneskelig styring.

**[Jarle Kjelsvik Wallem]:**
[Personlig refleksjon over egen læring og utvikling]
Ikke ha macbook.

**[Rikke Gundersen]:**
[Personlig refleksjon over egen læring og utvikling]

---

## 8. Vedlegg (valgfritt)

- Skjermbilder av applikasjonen (ikke aktuelt i denne fasen)
- Lenke til GitHub repository: [https://github.com/IBE160/SG-Gruppe-243]
- Andre relevante dokumenter:
    *   Markedsundersøkelsesrapport: `docs/bmm-research-market-2025-12-03.md`
    *   Produksjonskravdokument (PRD): `docs/PRD.md`
    *   Epics-dokument: `docs/epics.md`
    *   PRD Valideringsrapport: `docs/prd-validation-report-2025-12-03.md`

---

**Ordantall:** [Ca. 1500 ord]

**Forventet lengde:** 3000-5000 ord (avhengig av gruppestørrelse og prosjektets kompleksitet)

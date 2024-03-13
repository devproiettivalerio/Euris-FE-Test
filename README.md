# Euris-FE-Test

Backoffice dedicato ad impiegati di un e-commerce. 
    
## Guida 

Il portale riporta nella barra in alto dove si potrà cambiare tema, e cambiare impiegato.

Viene richiesto di selezionare un'impiegato per visualizzare i prodotti.

Se impiegato selezionato è possibile:
* Visualizzare l'elenco dei prodotti.
* Modificare visualizzazione da griglia a lista.
* Visualizzare statistica in formato polarArea.
* Eliminare prodotto dopo aver confermato finestra modale.
* Aggiungere un prodotto nuovo, riportando l'utente selezionato in precedenza.


Si è scelto di utilizzare Angular per lo sviluppo del Portale Front End richiesto.

E' stato preferito un approccio modulare per la soluzione.
Nel modulo site-layout.module.ts, vengono inclusi i moduli che comporranno il portale, in modalità lazy load.
Nel modulo online-shop.module.ts, vengono definiti tutti i contenuti requisiti indicati dal test, riporta una struttura vuole espremere al meglio i concetti di separazione delle responsabilità.

L'applicazione è accessibile dopo l'avvio all'indirizzo: http://localhost:4500/shop/employee


## Struttura delle cartelle

All'interno della cartella .\src\appFE troviamo:

    .\src   ->  Contiene i sorgenti prodotti
        \app
            \core -> Modulo Core, referenziato 
            \modules
                \online-shop    ->  modulo che contiene le richieste specifiche del test
                    \components ->  componenti 
                    \containers ->  pagine che espongono i componenti di dominio
                    \dialogs    ->  componenti utilizzati come dialog
                    \forms      ->  componenti utilizzati come form
                    \guards     ->  Intercettori 
                    \models     ->  Strutture dati 
                    \services   ->  Servizi
                \site-layout    ->  Modulo wrapper del sito, contenitore degli altri moduli  
            \shared ->  Modulo di utility utilizzabile da tutti i moduli
        \assets ->  risorse 
        \environments   ->  settaggi

## Enviroments
    Angular CLI: 17.2.2
    Node: 20.11.1
    Package Manager: npm 10.2.4
    OS: win32 x64


## Packages
Themes

    @angular/material 17.2.2

Layout
    
    @angular/flex-layout 15.0.0-beta.42

## Start

    cd src\appFE
    ng serve --open --port 4500
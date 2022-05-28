import React from "react"
import { Svg } from "../components/Svg"

const GitHubLink = (props: { children : Element | string, link : string }) => {
    return <a href={"https://github.com/" + props.link} title={"GitHub: " + props.link}>
        {props.children}
    </a>
}

const SummaryIcon = (props: { icon:string, children : any, index : number }) => {
    return <li><Svg style={{ display : "inline-block", fill: "white", transform: "translate(0,25%)", fontSize: "100%" }} className="" icon={props.icon}></Svg>{props.children}</li>
}

const Locals = {
    home : {
        "home_p_1": {
            "en-US" : () => {
                return <> A world wide network allowing the connection and communication between local networks and data banks, allowing users to access media as images, movies, hypertext and music; among the services offered by Internet the electronic mail (email) </>
            },

            "it-IT" : () => {
                return <> Rete di collegamenti informatici a livello planetario che permette la connessione e la comunicazione tra loro di reti locali di computer e banche dati, rendendone disponibili agli utenti le informazioni nella forma di immagini, filmati, ipertesti, musica; tra i principali servizi offerti da Internet, la posta elettronica. </>
            }
        },

        "home_content" : {
            "en-US" : () => {
                return <> &gt; IStory.net is a website made from us 4: Filippo Lissandrin, Fabio Venturini, Alessandro Monni ed Enrico Angelon.
                In this website you can find the story of internet:
                - How the web is born
                - Che cosa sono il Crypting e il Coding
                - Un po’ di Hardware dei noi PC e addirittura alcune nozioni sul Web Market. </>
            },

            "it-IT": () => {
                return <> &gt; IStory.net è un sito web ideato da noi 4: Filippo Lissandrin, Fabio Venturini, Alessandro Monni ed Enrico Angelon.
                In questo sito troverai la storia di internet:
                Come è nato il Web
                Che cosa sono il Crypting e il Coding
                Un po’ di Hardware dei noi PC e addirittura alcune nozioni sul Web Market. </>
            }
        },

        "home_intro" : {
            "en-US" : () => { return <>
                IStory.net (Internet Story) is a website that briefly tells about the Internet and computers' Story. Made by <GitHubLink link={"MrFreex"} >Filippo Lissandrin</GitHubLink>, <GitHubLink link="monniale">Alessandro Monni</GitHubLink>, <GitHubLink link="f3yor">Fabio Venturini</GitHubLink> and <GitHubLink link="HerryYT">Enrico Angelon</GitHubLink> for
                a school project, the website aims to provide a brief summary about the notable facts which led to the platform that you are ( even without knowing it ) using right now. This website is indeed built on a modern framework
                for the object oriented making of websites: <a rel="noreferrer" target="_blank" href="https://it.reactjs.org/">React.js</a>. <br></br>
                At the right of the page you can find a list describing the content of the website, page by page.
            </> },

            "it-IT" : () => { return <>
                IStory.net (Internet Story) è un sito web che racconta in breve la storia dell'internet e dei computer. Realizzato da <GitHubLink link={"MrFreex"} >Filippo Lissandrin</GitHubLink>, <GitHubLink link="monniale">Alessandro Monni</GitHubLink>, <GitHubLink link="f3yor">Fabio Venturini</GitHubLink> ed <GitHubLink link="HerryYT">Enrico Angelon</GitHubLink> per
                un progetto scolastico, mira a fare un breve sunto dei fatti notevoli con i quali si è arrivato alla piattaforma che tutt'ora (senza saperlo) stai usando. Il sito è infatti costruito su un framework
                moderno per la realizzazione object oriented di siti web: <a rel="noreferrer" target="_blank" href="https://it.reactjs.org/">React.js</a>. <br></br>
                Qui a destra puoi trovare una lista dei contenuti del sito web, pagina per pagina.
            </> }
        },

        "home_intro_c" : {
            "en-US" : () => { 
                const List = [
                    { icon : "HouseBlank", text: <>Home (this page)</> },
                    { icon : "FirstWebsite", text: <>The first website</> },
                    { icon : "Crypting", giveMargin: "0.8vh", text: <>&nbsp;&nbsp;&nbsp;&nbsp;Crypting</> },
                    { icon : "Coding", giveMargin: true, text: <>&nbsp;&nbsp;&nbsp;&nbsp;Coding</> },
                    { icon : "Market", giveMargin: true, text: <>&nbsp;&nbsp;&nbsp;&nbsp;Ecommerce</> },
                    { icon : "Hardware", giveMargin: true, text: <>&nbsp;&nbsp;&nbsp;&nbsp;Hardware</> }
                ]

                return <>
                    <ul>
                        { List.map((item, index) => {
                            return <>
                                <SummaryIcon key={index} index={index} icon={item.icon}>{item.text}</SummaryIcon>
                                { item.giveMargin ? <div style={{ marginBottom : (typeof item.giveMargin == "boolean") ? "0.4vh" : item.giveMargin }}></div> : <></> }
                            </> 
                        })}
                    </ul>
                </>
            },
            "it-IT" : () => { 

                const List = [
                    { icon : "HouseBlank", text: <>Home (questa pagina)</> },
                    { icon : "FirstWebsite", text: <>Il primo sito web</> },
                    { icon : "Crypting", giveMargin: "0.8vh", text: <>&nbsp;&nbsp;&nbsp;&nbsp;La criptazione</> },
                    { icon : "Coding", giveMargin: true, text: <>&nbsp;&nbsp;&nbsp;&nbsp;La programmazione</> },
                    { icon : "Market", giveMargin: true, text: <>&nbsp;&nbsp;&nbsp;&nbsp;L'Ecommerce</> },
                    { icon : "Hardware", giveMargin: true, text: <>&nbsp;&nbsp;&nbsp;&nbsp;L'Hardware</> }
                ]

                return <>
                    <ul>
                        { List.map((item, index) => {
                            return <>
                                <SummaryIcon key={index} index={index} icon={item.icon}>{item.text}</SummaryIcon>
                                { item.giveMargin ? <div style={{ marginBottom : (typeof item.giveMargin == "boolean") ? "0.4vh" : item.giveMargin }}></div> : <></> }
                            </> 
                        })}
                    </ul>
            </> }
        }
    },

    web : {
        "web_p_1": {
            "en-US": () => {
                return <> World wide web is one of the main internet services which allows the user to browse and make use of lots of content </>
            },

            "it-IT" : () => {
                return <> Il World Wide Web è  uno dei principali servizi di Internet che permette di navigare e usufruire di miliardi di contenuti </>
            }
        },

        "web_p_2": {
            "en-US": () => {
                return <> How did WEB begin? <br/> It was 1991 when CERN had published the first website of the whole history, realized by Tim Berners-Lee. </>
            },

            "it-IT" : () => {
                return <> Come è iniziato il WEB ? <br></br> Correva l’anno 1991, il CERN pubblicava il primo sito Web della storia, realizzato da Tim Berners-Lee. </>
            }
        },

        "web_p_3": {
            "en-US": () => {
                return <> This is the born of the &nbsp;</>
            },

            "it-IT" : () => {
                return <> Nacque così il &nbsp; </>
            }
        },

        "web_p_4": {
            "en-US": () => {
                return <> On the World Wide Web (WWW), available resources
                are organized according to a system of libraries,
                 or pages, which can be accessed using appropriate pages
                 programs called browsers with which it is possible to navigate
                 viewing files, texts, hypertext, sounds, images,
                 animations, movies.
                <br></br>
                <br></br>
                The ease of use connected with HTTP and browsers,
                coinciding with the widespread diffusion of the Personal Computer,
                have opened the use of the Internet to a mass of millions of people,
                even outside the strictly IT field,
                with an exponential growth.</>
            },

            "it-IT" : () => {
                return <> Nel World Wide Web (WWW), le risorse disponibili 
                sono organizzate secondo un sistema di librerie,
                 o pagine, a cui si può accedere utilizzando appositi 
                 programmi detti browser con cui è possibile navigare 
                 visualizzando file, testi, ipertesti, suoni, immagini, 
                 animazioni, filmati.
                <br></br>
                <br></br>
                La facilità d'utilizzo connessa con l'HTTP e i browser,
                in coincidenza con una vasta diffusione del Personal Computer,
                hanno aperto l'uso di Internet ad una massa di milioni persone,
                anche al di fuori dell'ambito strettamente informatico, 
                con una crescita in progressione esponenziale.</>
            }
        },

        "web_p_5": {
            "en-US": () => {
                return <> This ease in finding information is made possible
                both by network protocols and by the presence, diffusion,
                ease of use and efficiency of search engines and webs
                browser.</>
            },

            "it-IT" : () => {
                return <> Questa facilità nel reperire le informazioni è resa possibile
                sia dai protocolli di rete, sia dalla presenza, diffusione,
                facilità d’uso ed efficienza dei motori di ricerca e dei web
                browser. </>
            }
        }
    },
    crypting : {
        "crypting_p_1": {
            "en-US" : () => {
                return <> What is it?</>
            },

            "it-IT" : () => {
                return <> Cosa è?</>
            }
        },
        "crypting_p_2": {
            "en-US" : () => {
                return <> It is a method of encoding messages,
                information, and data, from a format
                readable (plaintext) to a format
                unreadable by a human (ciphertext).
                This is the best way to keep data at
                safe from spies, thieves or accidental disclosures.</>
            },

            "it-IT" : () => {
                return <> E’ un metodo di codificare i messaggi,
                informazioni, e dati,  da un formato
                leggibile(plaintext) ad un formato
                illeggibile da un umano(ciphertext) .
                Si tratta del modo migliore per tenere i dati al
                sicuro da spie, ladri o divulgazioni accidentali.</>
            }
        },
        "crypting_p_3": {
            "en-US" : () => {
                return <> When you encrypt your data it is as if
                put your money in the safe. For 
                open it and get your money back
                need a key.</>
            },

            "it-IT" : () => {
                return <> Quando criptate i vostri dati è come se
                metteste i vostri soldi in cassaforte. Per
                aprirla e riavere il vostro denaro avrete
                bisogno di una chiave.</>
            }
        },

        "crypting_p_4": {
            "en-US" : () => {
                return <> The most common algorithm used in a symmetric key is AES (Advanced Encryption Standard).
                 It consists of three block cipher algorithms, AES-128, AES-192 and AES-256, each of which is considered 
                 sufficient to protect government information classified up to the "secret" level, the so-called "top secret"
                  information is called keys with length 192 or 256 bits.</>
            },

            "it-IT" : () => {
                return <>  L’algoritmo più diffuso utilizzato in crittografia a chiave simmetrica è AES (Advanced Encryption Standard). 
                Si compone di tre algoritmi di cifrature a blocchi, AES-128, AES-192 e AES-256, ognuno dei quali è ritenuto sufficiente 
                a proteggere informazioni governative classificate fino al livello “secret”, mentre le informazioni cosiddette “top secret”
                 richiedono chiavi con lunghezza 192 o 256 bit.
                </>
            }
        },
        "crypting_p_5": {
            "en-US" : () => {
                return <> RSA (Rivest, Shamir and Adleman) is another example of a widely used asymmetric cryptographic algorithm: 
                it is often used in e-commerce protocols such as SSL and is considered secure due to sufficiently long keys
                and the use of up-to-date implementations.</>
            },

            "it-IT" : () => {
                return <>  L’RSA (Rivest, Shamir e Adleman) è un altro esempio di algoritmo a crittografia asimmetrica 
                ampiamente utilizzato: è spesso usato nei protocolli del commercio elettronico come SSL ed è ritenuto
                 sicuro per via delle chiavi sufficientemente lunghe e dell’uso di implementazioni aggiornate. 
                </>
            }
        },

        "crypting_cryptomath": {
            "en-US": () => {
                return <>
                    RSA encryption sample
                </>
            },

            "it-IT": () => {
                return <>
                    Esempio di criptazione RSA
                </>
            }
        }
    },

    coding : {
        "coding_title": {
            "en-US" : () => {
                return <> Coding </>
            },
            "it-IT" : () => {
                    return <> Programmazione</>
                }
            },
        "coding_p_1": {
            "en-US" : () => {
                return <> Coding is a discipline based on computational
                thinking, that is all those mental processes that aim at
                "problem solving, systems design, understanding human
                behavior through those typical concepts usually attributable
                to the field of computer science problem solving </>
            },

            "it-IT" : () => {
                return <> Il coding è una disciplina che ha come base
                il pensiero computazionale, cioè tutti quei
                processi mentali che mirano alla
                «risoluzione di problemi, la progettazione di
                sistemi, la comprensione del
                comportamento umano attraverso quei
                concetti tipici solitamente attribuibili al
                campo della computer science risoluzione
                di problemi </>
            }
        },
        "coding_p_2": {
            "en-US" : () => {
                return <> Coding is used for a ton of different things.
                Can be used to creates websites, video games, and apps.
                It is essential for the artificial intelligence ( AI ),
                and for the machine learning.
                Coding is the way to create programs for computers
                that have istruction sequences that computer can execute</>
            },

            "it-IT" : () => {
                return <> Il coding è usato per fare un'infinità di cose differenti tra di loro.
                Può essere usato per creare siti web, videogiochi e applicazioni.
                É essenziale anche per le intelligenze artificiali ( IA ) e per il machine learning.
                Il coding è il modo per creare programmi per il computer che hanno delle sequenze di
                istruzioni che il computer può eseguire.</>
            }
        },
        "coding_p_3": {
            "en-US" : () => {
                return <> Who is the smartest programmer in the world? <br></br>
                Who is the number 1 ?</>
            },

            "it-IT" : () => {
                return <> Chi è il programmatore più intelligente al mondo?<br></br>
                Chi è invece il numero 1?</>
            }
        },
        "coding_p_4": {
            "en-US" : () => {
                return <> Obviously wi can’t talk about coding, without
                talking about the smartest programmer ever, and the best
                programmer ever.
                They are respectively Terry A. Davis (the creator of TempleOS) and Gennady Korotkevich <br />
                TempleOS (known as "J Operating System" from 2004 to 2005, "LoseThos" from 2006 to early 2012, and "SparrowOS" in late 2012)
                 is an operating system similar to the Commodore 64, DESQview and other early DOS-based interfaces.
                  It was conceived by Davis in the early 2000s and developed alone over the course of a decade. 
                  This included the design of its original programming language, editor, compiler and kernel. It 
                  was ultimately composed of over 100,000 lines of code.</>
            },

            "it-IT" : () => {
                return <> Ovviamente non possiamo parlare di programmazione,
                senza citare il programmatore più intelligente e quello
                più bravo. Infatti essi sono rispettivamente Terry A.
                Davis (il creatore di TempleOS) e Gennady Korotkevich <br />
                TempleOS (conosciuto come "J Operating System" dal 2004 al 2005, "LoseThos" dal 2006 all'inizio del 2012,
                 e "SparrowOS" verso la fine del 2012) è un sistema operativo simile a quello del Commodore 64, DESQview 
                 assieme ad altre interfacce basate su DOS. Fu concepito da Davis all'inizio degli anni 2000, che lo 
                 sviluppò esclusivamente da solo in circa 10 anni. Ciò includeva la progettazione del: linguaggio di programmazione, editor, 
                 compilatore ed il kernel. Il suo codice sorgente vantava oltre 100,000 righe.</>
            }
        },
        "coding_p_5": {
            "en-US" : () => {
                return <> Coding womens</>
            },

            "it-IT" : () => {
                return <> Le donne nella programmazione</>
            }
        },
        "coding_p_6": {
            "en-US" : () => {
                return <> According to a global software developer survey
                in 2021, the vast majority of developers are males,
                accounting for 91.7 percent of all respondents. Female
                developers amounted to only five percent of all respondents, 
                demonstrating the male-dominating reality of software
                development jobs.</>
            },

            "it-IT" : () => {
                return <> Secondo il ‘global software developer survey’,
                nel 2021, la grande maggioranza degli sviluppatori è di
                sesso maschile, con una percentuale pari al 91.7%.
                Le donne sviluppatrici ammontano al solo 5% di tutti gli
                intervistati, tesi che va a dimostrare la reale dominanza
                maschile nei lavori di sviluppo software.</>
            }
        },
        "coding_p_7": {
            "en-US" : () => {
                return <> Top 10 Programming Languages to Learn in 2022</>
            },

            "it-IT" : () => {
                return <> I migliori 10 linguaggi di programmazione per imparare nel 2022</>
            }
        },
        "coding_p_8": {
            "en-US" : () => {
                return <> How many programming languages exists?</>
            },

            "it-IT" : () => {
                return <> Quanti sono i linguaggi di programmazione?</>
            }
        },
        "coding_p_9": {
            "en-US" : () => {
                return <> In general there are about 2500 programming
                languages more or less known and widespread.</>
            },

            "it-IT" : () => {
                return <> In generale esistono circa 2500 linguaggi
                di programmazione più o meno noti e diffusi.</>
            }
        }
    },

    market : {
        "market_title": {
            "en-US" : () => {
                return <> Web Market </>
            },
            "it-IT" : () => {
                    return <> Mercato Web</>
                }
            },
        "market_p_1": {
            "en-US" : () => {
                return <>  Web marketing is one of the most used practices in recent years, 
                also thanks to the support of social networks and the increasing volume of people using the internet,
                 for work and in their free time. But what did we start from? What were the first forms of web marketing?
                  How was it done before social media? Let's see the general evolution of online advertising processes and
                   what path has been taken over time.</>
            },

            "it-IT" : () => {
                return <> Il Web marketing è una delle pratiche più usate negli ultimi anni, 
                anche grazie al supporto dei social network e il volume sempre più alto delle
                 persone che utilizzano internet, per lavoro e nel tempo libero. Ma da cosa siamo partiti? 
                 Quali sono state le prima forme di web marketing? Come si effettuava prima dei social? 
                 Andiamo a vedere l'evoluzione generale dei processi di pubblicità online e che strada è 
                 stata intrapresa nel tempo. </>
            }
        },
        "market_p_2": {
            "en-US" : () => {
                return <> What was the web market like in the past?</>
            },

            "it-IT" : () => {
                return <> Come era in passato il mercato web? </>
            }
        },
        "market_p_3": {
            "en-US" : () => {
                return <> Let's take a tour in the 90s in a chronological way, when the first forms of digital marketing
                they had a major impact on the world market. In 1993 we saw the first online banner, from there
                 onwards a new window has opened in the world of digital marketing. Shortly after (one year to be exact)
                  in 1994 the first online search platform was launched; now known as Search Engines or Search Engine,
                   the first was "Yahoo!" achieving enormous success, due to both the obvious lack of competition, and the
                    novelty of the time: a site capable of finding other sites of our interest in the immense internet was not
                    never seen before, making it as useful as it is comfortable. <br />
                And in fact, within a year, the record quota of 1 million interactions succeeded.
                 In 1996 there were other now little known or forgotten search engines like Alexa,
                  Hotbots and the like. In those days all of these search engines had algorithms in common
                   very rudimentary, often showing irrelevant content in the search results either
                    useless for our purpose. To see the birth of Google we have to wait for 1998, like
                     you will well know starting from that year the numbers did nothing but go up during the period
                      next there were other smaller search engines too, but we know the way
                      that Google has undertaken and how far Google has come so far.</>
            },

            "it-IT" : () => {
                return <> Facciamo un giro negli anni '90 in modo cronologico, quando le prime forme di digital marketing 
                ebbero un impatto notevole sul mercato mondiale. Nel 1993 abbiamo assistito al primo banner online, da lì
                 in poi si è aperta una nuova finestra nel mondo del digital marketing. Poco dopo (per l'esattezza un anno)
                  nel 1994 fu lanciata la prima piattaforma di ricerca online; ora noti come Motori di Ricerca o Search Engine,
                   il primo fu “Yahoo!” raggiungendo un successo enorme, dovuta sia alla ovvia mancanza di concorrenza, sia alla
                    novità dell'epoca: un sito capace di trovare altri siti di nostro interesse nell'immenso di internet non si era 
                    mai visto, risultando tanto utile quanto comodo. <br />
                E infatti nel giro di un anno riuscì la quota record di 1 milione di interazioni.
                 Nel 1996 ci sono stati altri motori di ricerca ora poco noti o dimenticati come Alexa,
                  Hotbot e simili. A quei tempi tutti questi motori di ricerca avevano in comune algoritmi
                   molto rudimentali, spesso mostrando tra i risultati di ricerca contenuti non pertinenti o
                    inutili al nostro scopo. Per vedere la nascita di Google dobbiamo aspettare il 1998, come
                     ben saprete a partire da quell'anno i numeri non hanno fatto altro che salire, nel periodo
                      successivo ci sono stati anche altri motori di ricerca più piccoli, ma sappiamo la strada 
                      che ha intrapreso e a che punto è arrivata Google finora.</>
            }
        },
        "market_p_4": {
            "en-US" : () => {
                return <> This chart shows the number of fixed broadband subscriptions per 100 people. <br />
                This refers to fixed subscriptions to high-speed access to the public Internet (a TCP/IP connection), at downstream speeds equal to, or greater than, 256 kbit/s. <br />
                Means of connection include cable modem, DSL, fiber-to-the-home, other fixed (wired)-broadband subscriptions, 
                satellite broadband and terrestrial fixed wireless broadband. Excluded are subscriptions via mobile-cellular networks.</>
            },

            "it-IT" : () => {
                return <> Questo grafico mostra il numero di abbonamenti fissi a banda larga ogni 100 persone. <br />
                Si tratta di abbonamenti fissi per l'accesso ad alta velocità alla rete Internet pubblica (una connessione TCP/IP), a velocità di downstream pari o superiori a 256 kbit/s. <br />
                I mezzi di connessione includono modem via cavo, DSL, fibra a casa, altri abbonamenti a banda larga (cablati) fissi,
                banda larga satellitare e banda larga fissa senza fili terrestre. Sono esclusi gli abbonamenti tramite reti mobili-cellulari.</>
            }
        }
    },

    hardware : {
        "hardware_title": {
            "en-US" : () => {
                return <> Hardware </>
            },
            "it-IT" : () => {
                    return <> Hardware </>
                }
            },
        "hardware_p_1": {
            "en-US" : () => {
                return <> Computer - First Generation </>
            },

            "it-IT" : () => {
                return <> Computer - Prima Generazione </>
            }
        },
        "hardware_p_2": {
            "en-US" : () => {
                return <> The period of first generation was from 1946-1959. The computers of first generation used
                vacuum tubes as the basic components for memory and circuitry for CPU (Central Processing
                Unit). These tubes, like electric bulbs, produced a lot of heat and the installations used to fuse
                frequently. Therefore, they were very expensive and only large organizations were able to
                afford it. 
                <br />
                <br />
                The main features of the first generation are:<br />
                • Vacuum tube technology<br />
                • Unreliable<br />
                • Supported machine language only<br />
                • Very costly<br />
                • Generated a lot of heat<br />
                • Slow input and output devices<br />
                • Huge size<br />
                • Need of AC<br />
                • Non-portable<br />
                • Consumed a lot of electricity<br />
                <br />
                
                Some computers of this generation were: <br /> <br />

                • ENIAC<br />
                • EDVAC<br />
                • UNIVAC<br />
                • IBM-701<br />
                • IBM-650<br />
                <br />
                </>
            },

            "it-IT" : () => {
                return <> Il periodo della prima generazione va dal 1946 al 1959. I computer della prima generazione utilizzavano
                tubi a vuoto come componenti di base per memoria e circuiti per CPU (Unità di Processo Centrale). Questi tubi, come le
                lampadine elettriche, producevano molto calore e gli impianti si fondevano frequentemente. Pertanto, erano molto costosi
                e solo le grandi organizzazioni potevano permetterselo. 
                <br />
                <br />
                Le caratteristiche generali della prima generazione sono:<br />
                • Tecnologia del tubo a vuoto <br />
                • Inaffidabilità <br />
                • Supportato solo il linguaggio macchina<br />
                • Molto costoso <br />
                • Genera molto calore <br />
                • Lentezza dei dspositivi di input e output <br />
                • Dimensioni enormi <br />
                • Necessità di CA ( Corrente Alternata ) <br />
                • Non portatile <br />
                • Eccessivo consumo di elettricità <br /><br />
                
                Alcuni dei computer di questa generazione erano: <br /> <br />

                • ENIAC<br />
                • EDVAC<br />
                • UNIVAC<br />
                • IBM-701<br />
                • IBM-650<br />
                <br /></>
            }
        },
        "hardware_p_3": {
            "en-US" : () => {
                return <> Computer - Types</>
            },

            "it-IT" : () => {
                return <> Computer - Tipi</>
            }
        },
        "hardware_p_4": {
            "en-US" : () => {
                return <> 
                1. PC (Personal Computer)  <br /> &nbsp; It is a single user computer system having moderately powerful microprocessor <br />
                2. Workstation  <br /> &nbsp; It is also a single user computer system, similar to personal computer however has a more powerful microprocessors. <br />
                3. Mini computer <br /> &nbsp; It is a multi-user computer system, capable of supporting hundreds of users simultaneously. <br />
                4. Main frame <br /> &nbsp; It is a multi-user computer system, capable of supporting hundreds of users simultaneously. Software technology is different from minicomputer. <br /> 
                5. Supercomputer <br /> &nbsp; It is an extremely fast computer, which can execute hundreds of millions of instructions per second.<br />
                <br /></>
            },

            "it-IT" : () => {
                return <> 
                1. PC (Computer Personale)  <br /> É un computer con un sistema a utente singolo avente una microprocessore a potenza moderata <br />
                2. Workstation  <br /> É anch'esso un computer con un sistema a utente singolo, simile al personal computer, però ha un microprocessore a potenziale elevato. <br />
                3. Mini computer <br /> É un computer con un sistema a multi-utenza, capace di supportare centinaia di utenti simultaneamente. <br />
                4. Main frame <br /> É un computer con un sistema a multi-utenza, capace di supportare centinaia di utenti simultaneamente. La tecnologia del software è differente da quella dei minicomputer. <br /> 
                5. Supercomputer <br /> É un computer estremamente veloce, che riesce ad eseguire centinaia di milioni di istruzioni al secondo.<br />
                <br /> </>
            }
        },
        "hardware_p_5": {
            "en-US" : () => {
                return <> Computer - Components<br /><br /></>
            },

            "it-IT" : () => {
                return <> Computer - Componenti <br /><br /></>
            }
        },
        "hardware_p_6": {
            "en-US" : () => {
                return <> All types of computers follow the same basic logical structure and perform the following five basic operations for converting raw input data into information useful to their users.
                <br /><br />
                1. Take Input <br /> &nbsp; The process of entering data and instructions into the computer system. <br />
                2. Store Data <br /> &nbsp; Saving data and instructions so that they are available for processing as and when required. <br />
                3. Processing Data <br /> &nbsp; Performing arithmetic, and logical operations on data in order to convert them into useful information. <br />
                4. Output Information <br /> &nbsp; The process of producing useful information or results for the user, such as a printed report or visual display. <br />
                5. Control the workflow <br /> &nbsp; Directs the manner and sequence in which all of the above operations are performed.</>
            },

            "it-IT" : () => {
                return <> Tutti i tipi di computer seguono la stessa struttura logica basica ed eseguono le seguenti cinque basiche operazioni per convertire un dato in input grezzo, in un informazione utile per i loro utenti.
                <br /><br />
                1. Riceve un input <br /> &nbsp; Il processo di ricezione dei dati e delle istruzioni all'interno del sistema del computer. <br />
                2. Salva i dati <br /> &nbsp; Il salvataggio dei dati e delle istruzioni cosicchè siano disponibili per essere processate come e quando richieste. <br />
                3. Li processa <br /> &nbsp; Aritmetica performante, e logica operativa dei dati in modo da convertirli in informazioni utili. <br />
                4. Manda le informazioni in output <br /> &nbsp; Il processo di produzione di informazioni utili o risultati per l'utente come un report scritto o visivo. <br />
                5. Controlla il flusso di lavoro <br /> &nbsp; Dirige e gestisce e sequenzia in che modo le operazioni sono performate.</>
            }
        },
        "hardware_p_7": {
            "en-US" : () => {
                return <> Computer - Hardware</>
            },

            "it-IT" : () => {
                return <> Computer - Hardware</>
            }
        },
        "hardware_p_8": {
            "en-US" : () => {
                return <> Hardware represents the physical and tangible components of a computer, i.e. the components that can be seen and touched. <br /> <br />

                Examples of Hardware are the following: <br /> <br />
                
                • Input devices : keyboard, mouse, etc. <br />
                • Output devices : printer, monitor, etc. <br />
                • Secondary storage devices : Hard disk, CD, DVD, etc. <br />
                • Internal components : CPU, motherboard, RAM, etc. <br /> </>
            },

            "it-IT" : () => {
                return <> L'hardware rappresenta la componente fisica e tangibile di un computer, ovvero i componenti che possono essere visti e toccati. <br /> <br />

                Degli esempi di hardware sono i seguenti: <br /> <br />
                
                • Dispositici di input : tastiera, mouse, etc. <br />
                • Dispositivi di output : stampante, monitor, etc. <br />
                • Dispositivi di memoria secondaria : Hard disk, CD, DVD, etc. <br />
                • Componenti interni : CPU, schedamadre, RAM, etc. <br /> </>
            }
        },
        "hardware_p_9": {
            "en-US" : () => {
                return <> The Hard-Drive <br /><br /></>
            },

            "it-IT" : () => {
                return <> Il disco rigido <br /><br /></>
            }
        },
        "hardware_p_10": {
            "en-US" : () => {
                return <> The hard drive is where the computer stores data for long-term use. Hard drives have a hard, disk-shaped platter
                made of a magnetic material, and use magnets to store data on the platter. The magnetic material allows the computer to
                easily erase and rewrite the data whenever it needs to.
                <br /><br />
                Hard drives store data as files. The data might be codes for the characters of a text file, the color of a pixel in an
                image file, or even a part of a song. The capacity of the hard drive is determined by how many bytes it can hold.
                For example, a 40 gigabyte (abbreviated GB) hard drive can hold 40 billion bytes.</>
            },

            "it-IT" : () => {
                return <> Il disco rigido è il luogo dove il computer salva tutti i dati per un uso a lungo termine. I dischi rigidi hanno un piatto a forma di disco rigido
                fatto di materiali magnetici, e usa un magnete per salvare i dati sul piatto. I materiali magnetici consentono al computer di
                cancellare e riscrivere facilmente i dati in caso di necessità.
                <br /><br />
                Il disco rigido salva i dati sottoforma di file. I dati potrebbero essere codici per i caratteri di un file di testo, i colori di un pixel in una
                immagine, oppure anche una parte di una canzone. La capacità di un disco rigido è determinata dalla quantità di byte che esso può contenere.
                Per esempio, un disco rigido da 40 gigabyte (abbreviazione GB) può contenere 40 miliardi di byte.</>
            }
        },
        "hardware_p_11": {
            "en-US" : () => {
                return <> Problems with hard drives can occur if they get physically damaged, overheated or wear out. Hard drive problems
                can also be caused by malware. You may get error messages about a hard drive failure or your computer simply gets stuck
                trying to access a certain file. If your hard drive is damaged, there’s very little you can do to save it. You can use data
                recovery tools to try and retrieve some of the data on it, but most of the time the hardware will need to be replaced.
                <br /><br />
                Even if you protect your hard drive from physical damage and keep malware off your machine, your hard drive will eventually
                wear out, so backup your data regularly just in case. It's also a good idea to defragment your hard drive regularly to keep
                it running as fast as possible. </>
            },

            "it-IT" : () => {
                return <> I problemi con i dischi rigidi possono presentarsi quando essi incorrono in danni fisici, surriscaldamento o logoramento.
                I problemi dei dischi rigidi possono essere causati anche da malfunzionamenti. È possibile che vengano visualizzati messaggi di errore
                relativi a un guasto del disco rigido o che il computer si blocchi semplicemente cercando di accedere a un determinato file.
                Se il tuo disco rigido è danneggiato, ci sono poche cose che puoi fare per provare a salvarlo. Puoi usare strumenti di recupero dati
                per provare a recuperare alcuni dei dati in esso contenuti, ma la maggior parte delle volte l'hardware necessita di essere rimpiazzato.
                <br /><br />
                Anche se proteggi il tuo disco rigido da danni fisici, e tieni malfunzionamenti lontani dalla tua macchina, il tuo disco rigido si logorerà,
                quindi esegui il backup dei tuoi dati per prevenire certe situazioni. É una buona idea anche eseguire regolarmente la deframmentazione del
                disco rigido regolarmente per farlo lavorare il più velocemente possibile. </>
            }
        },
        "hardware_p_12": {
            "en-US" : () => {
                return <> The Motherboard</>
            },

            "it-IT" : () => {
                return <> La schedamadre</>
            }
        },
        "hardware_p_13": {
            "en-US" : () => {
                return <> The motherboard, also called the logic board or mainboard, is a board with electrical circuits printed on it that holds many of
                the computer's essential components. The electrical circuits on the board allow the components to receive power and communicate with each
                other.
                <br /><br />
                A desktop computer motherboard usually contains the CPU and the main memory, and you can attach graphics and sound cards, memory,
                and other peripherals to them with cards or cables. It's also very common for manufacturers to integrate some of these components
                directly onto the motherboard itself.</>
            },

            "it-IT" : () => {
                return <> La schedamadre, chiamata anche scheda logica o scheda principale, è una scheda con circuiti elettrici stampati su di
                essa, e che contiene i componenti essenziali per il computer. I circuiti elettrici situati sulla scheda consentono ai componenti
                di ricevere energia e comunicare tra di loro.
                <br /><br />
                La schedamadre di un computer fisso contiene solitamente la CPU e la memoria principale, e ci puoi attaccare la scheda grafica e
                la scheda audio, la memoria, e le altre periferiche collegate ad essa tramite carte e cavi. É anche molto comune per i manifatturieri
                integrare alcuni componenti direttamente sulla schedamadre.</>
            }
        },
        "hardware_p_14": {
            "en-US" : () => {
                return <> Integrated boards are usually less expensive and easier to manage since they come in a nice, tidy package.
                But they don’t offer the best performance, you can’t upgrade the components, and if something breaks on an integrated board,
                you have to replace the whole board.</>
            },

            "it-IT" : () => {
                return <> Le schede integrate solitamente sono meno costose e più facili da gestire dal momento che vengono ordinati in un bel
                pacchetto. Però non offrono le migliori performance, non puoi fare un miglioramento dei componenti, e se qualcosa si rompe
                sull'integrato, devi rimpiazzare l'intera scheda.</>
            }
        },
        "hardware_p_15": {
            "en-US" : () => {
                return <> The CPU</>
            },

            "it-IT" : () => {
                return <> La CPU</>
            }
        },
        "hardware_p_16": {
            "en-US" : () => {
                return <> The CPU, or Central Processing Unit, is the brain of the computer. CPUs do two major things: performing mathmatical
                and logical operations (in other words, making the computer do stuff), and retrieving and carrying out instructions from the
                computer's memory.
                <br /><br />
                In personal computers, the CPU is a small, square chip with many little metallic pins sticking out of it called a microprocessor,
                and is attached directly to the motherboard. Since they create a lot of heat, modern CPUs have a heat sink and small fan attached
                to keep them cool.
                <br /><br />
                If something goes wrong with your CPU, it can be replaced but it's a good idea to let a professional.</>
            },

            "it-IT" : () => {
                return <> Le CPU, o Unità di Processo Centrali, sono il cervello del computer. Le CPU fanno principalmente due cose:
                eseguono operazioni matematiche e logiche (in altre parole, fanno fare cose al computer), e recuperano e svolgono le istruzioni
                assegnate dalla memoria del computer.
                <br /><br />
                Nei PC, la CPU è un piccolo chip quadrato, con molti piccoli pin metallici che sporgono fuori, chiamati microprocessori, e sono
                direttamente collegati alla schedamadre. Dal momento che creano molto calore, le CPU moderne hanno un dissipatore di calore e una
                piccola ventola attaccata per mantenerle fresche.
                <br /><br />
                Se qualcosa va storto con la tua CPU, può essere rimpiazzata, ma sarebbe meglio se lo facesse un professionista.</>
            }
        },
        "hardware_p_17": {
            "en-US" : () => {
                return <> RAM</>
            },

            "it-IT" : () => {
                return <> RAM</>
            }
        },
        "hardware_p_18": {
            "en-US" : () => {
                return <> RAM, or Random Access Memory, is a type of computer memory used for short-term data storage. It is usually an integrated
                circuit board installed in the motherboard.
                <br /><br />
                How much RAM your computer has can affect its performance? Some tasks like playing games or editing videos will use a lot more
                RAM than others. If it seems like your computer is taking forever to complete tasks, you may need to add more RAM. Fortunately,
                it's very easy to upgrade RAM. You simply install more boards or replace the ones already installed. But, before you buy any, be
                sure to figure out exactly how much you need and how much can fit in your computer, and get a trusted adult to help you.</>
            },

            "it-IT" : () => {
                return <> La RAM, o Memoria ad Accesso Randomico, è un tipo di memoria che il computer usa come memoria a breve termine.
                Solitamente è una scheda con un circuito integrato installato sulla schedamadre.
                <br /><br />
                Quanta RAM ha il tuo computer può influenzare le tue performance? Alcuni compiti come giocare ai videogiochi o editare un video
                usano molto di più la memoria RAM rispetto agli altri compiti. Se sembra che il tuo computer impiegi un'eternità a completare i
                compiti, avresti bisogno di aggiungere della RAM. Fortunatamente, è veramnte semplice migliorare la RAM. Devi solamente installare
                più schede o rimpiazzare quelle già installate. Ma, prima di comprare qualcosa, assicuratidi sapere quanta di quanta RAM necessiti,
                è quanta ne può supportare il tuo computer, e trova un adulto fidato che ti possa aiutare.</>
            }
        },
        "hardware_p_19": {
            "en-US" : () => {
                return <> The Graphic Card</>
            },

            "it-IT" : () => {
                return <> La scheda grafica</>
            }
        },
        "hardware_p_20": {
            "en-US" : () => {
                return <> A graphics card, or video card, processes and outputs images to the computer's monitor. Less expensive graphics card
                are integrated directly into the motherboard, but more powerful cards come as a separate component that you can replace without
                having to change the entire motherboard.
                <br /><br />
                The graphics card receives information from the CPU about what to display, decides how to use the pixels on the screen to display
                that image, and sends that information to the monitor. For 3-D images, the graphics card first creates everything out of straight
                lines, called a "wireframe," and then fills in all the lighting, texture and color. In a fast-paced game, it has to do this around
                sixty times per second.</>
            },

            "it-IT" : () => {
                return <> Una scheda grafica, o scheda video, processa e mostra immagini sullo schermo del tuo computer.
                Le schede grafiche più costose sono intehgrate direttamente sulla schedamadre, ma le schede più potenti vengono vendute
                separatamente, in modo che tu le possa rimpiazzare senza cambiare l'intera schedamadre.
                <br /><br />
                Le schede hrafiche ricevono dalla CPU le informazioni su cosa devono mostrare a video, decisono come usare i pixel dello schermo
                per mostrare quelle immagini a video, e mandano le informazioni al monitor. Per le immagini 3D, la scheda grafica prima crea tutta
                una serie di linee rette, chiamata "wireframe", e dopo riempie tutta l'illuminazione, le texture (trame, struttura) e i colori.
                In un gioco frenetico, deve eseguire tutto questo processo per ben 60 volte al secondo.</>
            }
        },
        "hardware_p_21": {
            "en-US" : () => {
                return <> Many people think that graphics cards are just used for playing computer games, but they are also useful for graphic
                designers, video editors, and 3-D animators, who usually need the best display possible.
                <br /><br />
                If your graphics card is not integrated into the motherboard, it's very simple to replace. Before you buy a new one though, make
                sure you know what you need and what your system can support. Some monitors can't display the highest resolution that an expensive
                graphics card can produce, and some graphics cards use the computer's memory rather than their own to produce their display.</>
            },

            "it-IT" : () => {
                return <> Molte persone pensano che queste schede grafiche sonousate solamente per giocare ai videogiochi, ma esse sono utili anche
                per i graphic designer, i video editor, e gli animatori 3D, che solitamente necessitano dei migliori monitor possibili.
                <br /><br />
                Se la tua scheda grafica non è integrata con la tua schedamadre, p veramente semplice da rimpiazzare. Prima di comprarne una nuova,
                assicurati di sapere di cosaaa hai bisogno e cosa il tuo SO (Sistema Operativo) può supportare. Alcuni monitor non possono mostrare
                la migliore risoluzione che le schee grafiche più costose possono produrre, e alcune schede grafiche usano la memoria del computer
                piuttosto che la propria per produrre la loro esposizione.</>
            }
        },
        "hardware_p_22": {
            "en-US" : () => {
                return <> The Network Interface Card</>
            },

            "it-IT" : () => {
                return <> La scheda di interfaccia di rete, o scheda di rete</>
            }
        },
        "hardware_p_23": {
            "en-US" : () => {
                return <> A network interface card lets you connect your computer to a network. It can be a local one, like a LAN, or the Internet
                if the computer connects to a modem.
                <br /><br />
                The most common network interface cards are ethernet cards that use a cable to connect the computer to a network hub like a
                router, but there are also wireless network cards that have an antennae instead of a cable port. Many newer computers have a
                network card built in to the motherboard.
                <br /><br />
                Each network card has a unique address that identifies the computer on the network, called a Media Access Control, or MAC address.
                The address is usually assigned by the manufacturer and is part of the hardware.</>
            },

            "it-IT" : () => {
                return <> Una scheda di rete fa in modo che il tuo computer si colleghi alla rete. Potrebbe essere locale, come una LAN (Local 
                Access Network ={">"} Rete di Accesso Locale), oppure Internet se il computer è connesso a un modem.
                <br /><br />
                Le schede di rete più comuni che usano un cavo per connettere un computer ad un hub come un ruoter, ma ci sono anche schede di
                rete wireless (senza fili) che hanno un'antenna al posto di una porta cablata. Molti dei computer più nuovi hanno una scheda di
                rete montata direttamente sulla schedamadre.
                <br /><br />
                Ogni scheda di rete ha un indirizzo unico che indentifica il computer sulla rete, chiamato Controllo dell'Accesso ai Media, o
                indirizzo MAC. L'indirizzo è solitamente assegnato dai produttori e fa parte dell'hardware.
                </>
            }
        },
        "hardware_p_24": {
            "en-US" : () => {
                return <> The Sound Card</>
            },

            "it-IT" : () => {
                return <> La scheda audio</>
            }
        },
        "hardware_p_25": {
            "en-US" : () => {
                return <> A sound card processes and plays sound files. It can work with both the internal and external speakers to provide sound.
                Of course, the better the sound card and speakers are, the better the sound quality.
                <br /><br />
                In addition to speaker ports, a sound card will usually have a microphone port as well so you can record your own sounds.</>
            },

            "it-IT" : () => {
                return <> Una scheda audio processa e riproduce i file audio. Per produrre il suono può funzionare sia con gli autoparlanti
                interni, sia con quelli esterni. Naturalmente, migliori sono la scheda audio e gli autoparlanti, migliore è la qualità del suono.
                <br /><br />
                Oltre alle porte per gli autoparlanti, una scheda audio di solito ha anche una porta per microfono in modo da poter registrare
                i propri suoni.</>
            }
        }
    },

    evolution : {
        "evolutio_title": {
            "en-US" : () => {
                return <> Evolution</>
            },
            "it-IT" : () => {
                    return <> Evoluzione</>
                }
            },
        "evolution_p_1": {
            "en-US" : () => {
                return <>  </>
            },

            "it-IT" : () => {
                return <> </>
            }
        },
    },


    spinner: {
        randomSentences: [
            {
                "en-US": () => {
                    return <>Changing Multiverse</>
                },

                "it-IT": () => {
                    return <>Cambiando Multiverso</>
                }
            },

            {
                "en-US": () => {
                    return <>Initiating Jump Drive</>
                },

                "it-IT": () => {
                    return <>Avviando il motore a iperluce</>
                }
            },

            {
                "en-US": () => {
                    return <>Getting back to the future</>
                },

                "it-IT": () => {
                    return <>Ritornando al futuro</>
                }
            },

            {
                "en-US": () => {
                    return <>Checking Flux capacitor</>
                },

                "it-IT": () => {
                    return <>Controllando il flusso canalizzatore</>
                }
            },

            {
                "en-US": () => {
                    return <>Persuading Rick to open that portal</>
                },

                "it-IT": () => {
                    return <>Convincendo Rick ad aprire il portale</>
                }
            },

            {
                "en-US": () => {
                    return <>Naming a bug as a feature</>
                },

                "it-IT": () => {
                    return <>Fingendo che un bug sia una feature</>
                }
            },

            {
                "en-US": () => {
                    return <>Pushing to git</>
                },

                "it-IT": () => {
                    return <>Facendo il push su git</>
                }
            },

            {
                "en-US": () => {
                    return <>Hating <span style={{ fontFamily: "Arial, Sans Serif" }}>Arial and Sans Serif font</span></>
                },

                "it-IT": () => {
                    return <>Odiando <span style={{ fontFamily: "Arial, Sans Serif" }}>Arial e Sans Serif</span></>
                }
            },

            {
                "en-US": () => {
                    return <>Deleting <span style={{ fontFamily: "initial" }}>default HTML font</span></>
                },

                "it-IT": () => {
                    return <>Eliminando <span style={{ fontFamily: "initial" }}>il font default HTML</span></>
                }
            },

            {
                "en-US": () => {
                    return <>Creating <i>personaggi.html</i></>
                },

                "it-IT": () => {
                    return <>Scrivendo <i>personaggi.html</i></>
                }
            }
        ]
    }

}

export default Locals;
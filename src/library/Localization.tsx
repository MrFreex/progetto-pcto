import React from "react"

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
                return <> Page content </>
            },

            "it-IT": () => {
                return <> Contenuto </>
            }
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
        }
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
                    return <>Hating <span style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive" }}>Comic Sans</span></>
                },

                "it-IT": () => {
                    return <>Odiando <span style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive" }}>Comic Sans</span></>
                }
            },

            {
                "en-US": () => {
                    return <>Deleting <span style={{ fontFamily: "initial" }}>default HTML font</span></>
                },

                "it-IT": () => {
                    return <>Eliminando <span style={{ fontFamily: "initial" }}>il font default HTML</span></>
                }
            }
        ]
    }

}

export default Locals
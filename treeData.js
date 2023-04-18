let data = {
  Division: [{
    name: 'Streptophyta',
    Subdivision: [
      {
        name: 'Chlorokybophytina',
        Class: [{
          name: 'Mesostigmatophyceae',
          Order: [{ name: 'Mesostigmatales' }]
        }],
        Class: [{
          name: 'Chlorokybophyceae',
          Order: [{ name: 'Chlorokybales' }]
        }],
      },
      {
        name: 'Klebsormidiophyinta',
        Class: [{
          name: 'Klebsormidiophyceae',
          Order: [{ name: 'Klebsormidiales' }]
        }],
      },
      {
        name: 'Charophytina',
        Class: [{
          name: 'Charophyceae',
          Order: [{ name: '†Sycidiales' },
          { name: '†Chovanellales' },
          { name: '†Moellerinales' },
          { name: '†Moellerinales' }]
        }],
      },
      {
        name: 'Coleochaetophytina',
        Class: [{
          name: 'Coleochaetophyceae',
          Order: [{ name: 'Coleochaetales' }]
        }],
      },
      {
        name: 'Zygnematophytina',
        Class: [{
          name: 'Zygnematophyceae',
          Order: [{ name: 'Spirogloeales' },
          { name: 'Zygnematales' },
          { name: 'Mesotaeniales' },
          { name: 'Mesotaeniales' }]
        }],
      },
      {
        name: 'Anthocerotophytina[7]',
        Class: [{
          name: 'Leiosporocerotopsida',
          Order: [{ name: 'Leiosporocerotales' }]
        }],
        Class: [{
          name: 'Anthocerotopsida',
          Order: [{ name: 'Anthocerotales' },
          { name: 'Notothyladales' },
          { name: 'Phymatocerotales' },
          { name: 'Phymatocerotales' }]
        }],
      },
      {
        name: 'Marchantiophytina[7]',
        Class: [{
          name: 'Haplomitriopsida',
          Order: [{ name: 'Treubiales' },
          { name: 'Treubiales' }]
        }],
        Class: [{
          name: 'Marchantiopsida',
          Subclass: [{
            name: 'Blasiidae',
            Order: [{ name: 'Blasiales' }]
          }],
          Subclass: [{
            name: 'Marchantiidae (Complex thalloid liverworts)',
            Order: [{ name: 'Neohodgsoniales' },
            { name: 'Sphaerocarpales' },
            { name: 'Lunulariales (crescent-cup liverwort)' },
            { name: 'Lunulariales (crescent-cup liverwort)' }]
          }],
        }],
        Class: [{
          name: 'Jungermanniopsida',
          Subclass: [{
            name: 'Pelliidae',
            Order: [{ name: 'Pelliales' },
            { name: 'Pallaviciniales' },
            { name: 'Pallaviciniales' }]
          }],
          Subclass: [{
            name: 'Metzgeriidae',
            Order: [{ name: 'Pleuroziales' },
            { name: 'Pleuroziales' }]
          }],
          Subclass: [{
            name: 'Jungermanniidae (leafy liverworts)',
            Order: [{ name: 'Porellales' },
            { name: 'Ptilidiales' },
            { name: 'Ptilidiales' }]
          }],
        }]
      },
      {
        name: 'Bryophytina[8]',
        Class: [{
          name: 'Takakiopsida',
          Order: [{ name: 'Takakiales' }]
        }],
        Class: [{
          name: 'Sphagnopsida',
          Order: [{ name: '†Protosphagnales' },
          { name: 'Ambuchananiales' },
          { name: 'Ambuchananiales' }]
        }],
        Class: [{
          name: 'Andreaeobryopsida',
          Order: [{ name: 'Andreaeobryales' }]
        }],
        Class: [{
          name: 'Andreaeopsida',
          Order: [{ name: 'Andreaeales (Granite/lantern mosses)' }]
        }],
        Class: [{
          name: 'Oedipodiopsida',
          Order: [{ name: 'Oedipodiales' }]
        }],
        Class: [{
          name: 'Tetraphidopsida',
          Order: [{ name: 'Tetraphidales' }]
        }],
        Class: [{
          name: 'Polytrichopsida',
          Order: [{ name: 'Polytrichales (Hair-cap mosses)' }]
        }],
        Class: [{
          name: 'Bryopsida',
          Subclass: [{
            name: 'Buxbaumiidae',
            Order: [{ name: 'Buxbaumiales' }]
          }],
          Subclass: [{
            name: 'Diphysciidae',
            Order: [{ name: 'Diphysciales' }]
          }],
          Subclass: [{
            name: 'Gigaspermidae',
            Order: [{ name: 'Gigaspermales' }]
          }],
          Subclass: [{
            name: 'Funariidae',
            Order: [{ name: 'Disceliales' },
            { name: 'Encalyptales' },
            { name: 'Encalyptales' }]
          }],
          Subclass: [{
            name: 'Timmiidae',
            Order: [{ name: 'Timmiales' }]
          }],
          Subclass: [{
            name: 'Dicranidae (Haplolepideous mosses)',
            Order: [{ name: 'Archidiales' },
            { name: 'Pseudoditrichales' },
            { name: 'Catoscopiales' },
            { name: 'Scouleriales' },
            { name: 'Bryoxiphiales' },
            { name: 'Grimmiales' },
            { name: 'Pottiales' },
            { name: 'Pottiales' }]
          }],
          Subclass: [{
            name: 'Bryidae (Diplolepideous-alternate mosses)',
            Superorder: [{
              name: 'Bryanae',
              Order: [{ name: 'Splachnales' },
              { name: 'Hedwigiales' },
              { name: 'Bartramiales' },
              { name: 'Bryales' },
              { name: 'Rhizogoniales' },
              { name: 'Orthotrichales' },
              { name: 'Orthodontiales' },
              { name: 'Orthodontiales' }]
            }],
            Superorder: [{
              name: 'Hypnanae',
              Order: [{ name: 'Hypnodendrales' },
              { name: 'Ptychomniales' },
              { name: 'Hypopterygiales' },
              { name: 'Hookeriales' },
              { name: 'Hookeriales' }]
            }],
          }]
        }],
        Clade: [{
          name: '†Horneophytina',
          Class: [{
            name: '†Horneophytopsida',
            Order: [{ name: '†Horneophytales' }]
          }],
        }]
      },
      {
        name: 'Tracheophytina[9]',
        Class: [{
          name: '†Cooksoniopsida',
          Order: [{ name: '†Cooksoniales' }]
        }],
        Class: [{
          name: '†Rhyniopsida',
          Order: [{ name: '?†Yarraviales' },
          { name: '?†Taeniocradales' },
          { name: '?†Taeniocradales' }]
        }],
        Clade: [{
          name: '†Zosterophyllophyta',
          Class: [{
            name: '†Barinophytopsida[10]',
            Order: [{ name: '†Barinophytales' }]
          }],
          Class: [{
            name: '†Zosterophyllopsida',
            Order: [{ name: '†Sawdoniales' },
            { name: '†Sawdoniales' }]
          }]
        }],
        Class: [{
          name: 'Lycopodiopsida',
          Order: [{ name: '†Drepanophycales' }],
          Subclass: [{
            name: '†Asteroxylidae',
            Order: [{ name: '?†Thursophytales' },
            { name: '?†Thursophytales' }]
          }],
          Subclass: [{
            name: 'Lycopodiidae',
            Order: [{ name: 'Lycopodiales (Clubmosses, groundpines, groundcedars)' }]
          }],
          Subclass: [{
            name: '†Prolepidodendridae',
            Order: [{ name: '†Protolepidodendrales' }]
          }],
          Subclass: [{
            name: 'Selaginellidae (Spikemosses; rose of Jericho; resurrection plant; Engels moss)',
            Order: [{ name: 'Selaginellales' },
            { name: '†Lepidodendrales' },
            { name: '†Pleuromeiales' },
            { name: '†Pleuromeiales' }]
          }],
        }],
        Class: [{
          name: '†Eophyllophytopsida',
          Order: [{ name: '†Eophyllophytales' }]
        }],
        Class: [{
          name: '†Trimerophytopsida',
          Order: [{ name: '†Trimerophytales' }]
        }],
        Clade: [{
          name: 'Pteridophyta',
          Order: [{ name: '†Ibykales' }]
        }],
        Class: [{
          name: '†Cladoxylopsida',
          Order: [{ name: '†Hyeniales' },
          { name: '†Iridopteridales' },
          { name: '†Steloxylales' },
          { name: '†Pseudosporochnales' },
          { name: '†Pseudosporochnales' }]
        }],
        Class: [{
          name: 'Polypodiopsida (Ferns)',
          Order: [{ name: '†Stauropteridales' }]
        }],
        Subclass: [{
          name: '†Zygopterididae',
          Order: [{ name: '†Rhacophytales' },
          { name: '†Rhacophytales' }]
        }],
        Subclass: [{
          name: 'Equisetidae',
          Order: [{ name: '†Pseudoborniales' },
          { name: '†Sphenophyllales' },
          { name: '†Sphenophyllales' }]
        }],
        Subclass: [{
          name: 'Ophioglossidae',
          Order: [{ name: 'Psilotales (Whisk ferns)' },
          { name: 'Psilotales (Whisk ferns)' }]
        }],
        Subclass: [{
          name: 'Marattiopsida',
          Order: [{ name: 'Marattiales' }]
        }],
        Subclass: [{
          name: 'Polypodiidae',
          Order: [{ name: '†Urnatopteridales' },
          { name: '†Senftenbergiales' },
          { name: '†Botryopteridiales' },
          { name: '†Anachoropteridales' },
          { name: 'Osmundales (Royal ferns)' },
          { name: 'Hymenophyllales (Filmy ferns)' },
          { name: 'Gleicheniales' },
          { name: 'Schizaeales' },
          { name: 'Salviniales' },
          { name: 'Cyatheales' },
          { name: 'Cyatheales' }]
        }],
        Class: [{
          name: '†Noeggerathiopsida',
          Order: [{ name: '†Discinitiales' },
          { name: '†Noeggerathiales' },
          { name: '†Noeggerathiales' }]
        }],
        Class: [{
          name: '†Aneurophytopsida',
          Order: [{ name: '†Scougonophytales' },
          { name: '†Scougonophytales' }]
        }],
        Class: [{
          name: '†Archaeopteridopsida',
          Order: [{ name: '†Cecropsidales' },
          { name: '†Cecropsidales' }]
        }],
        Incertae: [{
          name: 'sedis',
          Order: [{ name: '†Protopityales' },
          { name: '†Protopityales' }]
        }],
        Clade: [{
          name: 'Spermatophyta',
          Order: [{ name: '†Calamopityales' },
          { name: '†Callistophytales' },
          { name: '†Erdtmanithecales' },
          { name: '†Hlatimbiales' },
          { name: '†Hlatimbiales' }],
          Class: [{
            name: '†Arberiopsida',
            Order: [{ name: '†Aberiales' },
            { name: '†Aberiales' }]
          }],
          Class: [{
            name: '†Moresnetiopsida',
            Order: [{ name: '†Moresnetiales' },
            { name: '†Pullarithecales' },
            { name: '†Pullarithecales' }]
          }],
          Class: [{
            name: '†Lyginopteridopsida',
            Order: [{ name: '†Hexapterospermales' },
            { name: '†Hexapterospermales' }]
          }],
          Class: [{
            name: '†Pachytestopsida',
            Order: [{ name: '†Codonospermales' },
            { name: '†Codonospermales' }]
          }],
          Class: [{
            name: '†Peltaspermopsida',
            Order: [{ name: '†Peltaspermales' },
            { name: '†Sporophyllitales' },
            { name: '†Sporophyllitales' }]
          }],
          Class: [{
            name: '†Phasmatocycadopsida',
            Order: [{ name: '†Gigantopteridales' },
            { name: '†Gigantopteridales' }]
          }],
          Class: [{
            name: '†Pentoxylopsida',
            Order: [{ name: '†Pentoxylales' }]
          }],
          Class: [{
            name: '†Dictyopteridiopsida',
            Order: [{ name: '†Dictyopteridiales' },
            { name: '†Lidgettoniales' },
            { name: '†Lidgettoniales' }]
          }],
          Class: [{
            name: '†Cycadeoideopsida',
            Order: [{ name: '†Fredlindiales' },
            { name: '†Fredlindiales' }]
          }],
          Class: [{
            name: '†Caytoniopsida',
            Order: [{ name: '†Caytoniales' }]
          }],
          Class: [{
            name: '†Axelrodiopsida',
            Order: [{ name: '†Axelrodiales' }]
          }],
          Class: [{
            name: 'Pinopsida',
            // †Subclass: [{
            //   name: 'Pityidae',
            // †Order: [{
            //     name: 'Pityales',
            Subclass: [{
              name: 'Cycadidae',
              Order: [{ name: '?†Noeggerathiopsidales' },
              { name: '†Podozamitales' },
              { name: '†Podozamitales' }]
            }],
            Subclass: [{
              name: 'Ginkgoidae',
              Order: [{ name: '†Hamshawviales' },
              { name: '†Vladimariales' },
              { name: '†Matatiellales' },
              { name: '†Petriellales' },
              { name: '†Czekanowskiales' },
              { name: '†Czekanowskiales' }]
            }],
            Subclass: [{
              name: 'Pinidae',
              Order: [{ name: '†Cordaitales' },
              { name: '†Dordrechtitales' },
              { name: '†Vojnovskyales' },
              { name: '†Buriadiales' },
              { name: '†Ferugliocladales' },
              { name: '†Ullmanniales' },
              { name: '†Walchiales' },
              { name: '†Voltziales' },
              { name: '†Bernettiales' },
              { name: '†Eoanthales' },
              { name: '†Fraxinopsiales' },
              { name: 'Gnetales (incl. Ephedrales & Welwitschiales)' },
              { name: 'Pinales (Pines and allies)' },
              { name: 'Araucariales' },
              { name: 'Araucariales' }]
            }],
          }],
          Class: [{
            name: 'Magnoliopsida[11]',
            Subclass: [{
              name: '†Archaemagnoliidae',
              Order: [{ name: '†Archaefructales' }]
            }],
            Superorder: [{
              name: 'Amborellanae',
              Order: [{ name: 'Amborellales' }]
            }],
            Subclass: [{
              name: 'Nymphaeidae',
              Order: [{ name: 'Nymphaeales' }]
            }],
            Subclass: [{
              name: 'Illiciidae',
              Order: [{ name: 'Austrobaileyales' }]
            }],
            Subclass: [{
              name: 'Chloranthidae',
              Order: [{ name: 'Chloranthales' }]
            }],
            Subclass: [{
              name: 'Magnoliidae',
              Order: [{ name: 'Canellales' },
              { name: 'Piperales' },
              { name: 'Laurales' },
              { name: 'Laurales' }]
            }],
            Subclass: [{
              name: 'Liliidae',
              Superorder: [{
                name: 'Acoranae',
                Order: [{ name: 'Acorales' }]
              }],
              Superorder: [{
                name: 'Alismatanae',
                Order: [{ name: 'Alismatales' }]
              }],
              Superorder: [{
                name: 'Petrosavianae',
                Order: [{ name: 'Petrosaviales' }]
              }],
              Superorder: [{
                name: 'Pandananae',
                Order: [{ name: 'Dioscoreales' },
                { name: 'Dioscoreales' }]
              }],
              Superorder: [{
                name: 'Lilianae',
                Order: [{ name: 'Liliales' }]
              }],
              Superorder: [{
                name: 'Orchidanae',
                Order: [{ name: 'Asparagales' }]
              }],
              Superorder: [{
                name: 'Commelinids',
                Order: [{ name: 'Arecales' },
                { name: 'Commelinales' },
                { name: 'Zingiberales' },
                { name: 'Zingiberales' }]
              }],
            }],
            Subclass: [{
              name: 'Ceratophyllidae',
              Order: [{ name: 'Ceratophyllales' }]
            }],
            Clade: [{
              name: 'Eudicots',
              Order: [{ name: '?†Sarbaicarpales' }]
              ,
              Subclass: [{
                name: 'Ranunculidae',
                Order: [{ name: 'Ranunculales' }]
              }],
              Subclass: [{
                name: 'Nelumbonidae',
                Order: [{ name: 'Proteales' }]
              }],
              Subclass: [{
                name: 'Trochodendridae',
                Order: [{ name: 'Trochodendrales' }]
              }],
              Superorder: [{
                name: 'Buxanae',
                Order: [{ name: 'Buxales' }]
              }],
              Superorder: [{
                name: 'Myrothamnanae',
                Order: [{ name: 'Gunnerales' }]
              }],
              Clade: [{
                name: 'Pentapetalae',
                Subclass: [{
                  name: 'Dilleniidae',
                  Order: [{ name: 'Dilleniales' }]
                }],
                Subclass: [{
                  name: 'Asteridae',
                  Superorder: [{
                    name: 'Berberidopsidanae',
                    Order: [{ name: 'Berberidopsidales' }]
                  }],
                  Superorder: [{
                    name: 'Santalanae',
                    Order: [{ name: 'Santalales' }]
                  }],
                  Superorder: [{
                    name: 'Caryophyllanae',
                    Order: [{ name: 'Caryophyllales' }]
                  }],
                  Superorder: [{
                    name: 'Cornanae',
                    Order: [{ name: 'Cornales' }]
                  }],
                  Superorder: [{
                    name: 'Ericanae',
                    Order: [{ name: 'Ericales' }]
                  }],
                  Superorder: [{
                    name: 'Asteranae',
                    Order: [{ name: 'Apiales' },
                    { name: 'Aquifoliales' },
                    { name: 'Asterales' },
                    { name: 'Bruniales' },
                    { name: 'Dipsacales' },
                    { name: 'Escalloniales' },
                    { name: 'Escalloniales' }]
                  }],
                  Superorder: [{
                    name: 'Lamianae',
                    Order: [{ name: 'Boraginales' },
                    { name: 'Garryales' },
                    { name: 'Gentianales' },
                    { name: 'Icacinales' },
                    { name: 'Lamiales' },
                    { name: 'Metteniusales' },
                    { name: 'Solanales' },
                    { name: 'Solanales' }]
                  }],
                }],
                Subclass: [{
                  name: 'Rosidae',
                  Superorder: [{
                    name: 'Saxifraganae',
                    Order: [{ name: 'Saxifragales' }]
                  }],
                  Superorder: [{
                    name: 'Vitanae',
                    Order: [{ name: 'Vitales' }]
                  }],
                  Superorder: [{
                    name: 'Rosanae',
                    Order: [{ name: 'Zygophyllales' },
                    { name: 'Celastrales' },
                    { name: 'Malpighiales' },
                    { name: 'Oxalidales' },
                    { name: 'Fabales' },
                    { name: 'Cucurbitales' },
                    { name: 'Fagales' },
                    { name: 'Fagales' }]
                  }],
                  Superorder: [{
                    name: 'Myrtanae',
                    Order: [{ name: 'Geraniales' },
                    { name: 'Myrtales' },
                    { name: 'Crossosomatales' },
                    { name: 'Picramniales' },
                    { name: 'Sapindales' },
                    { name: 'Huerteales' },
                    { name: 'Malvales' },
                    { name: 'Malvales' }]
                  }],
                }],



              }]
            }]
          }]
        }]
      }]
  }]
}
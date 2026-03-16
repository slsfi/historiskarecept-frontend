type Config = { [key: string]: any }

export const config: Config = {
  app: {
    siteURLOrigin: "https://granska-historiskarecept.sls.fi",
    projectNameDB: "historiskarecept",
    projectId: 11,
    backendBaseURL: "https://granska-api.sls.fi/digitaledition",
    i18n: {
      languages: [
        { code: "sv", label: "Svenska", region: "FI" }
      ],
      defaultLanguage: "sv"
    },
    enableRouterLoadingBar: true,
    auth: {
      enabled: false
    },
    openGraphMetaTags: {
      enabled: true,
      image: {
        sv: {
          altText: "Fotografi av ett fat med råa grönsaker och en hel fisk med en kniv instucken vertikalt. Foto: Katja Hagelstam.",
          URL: "assets/images/open-graph/historiska-recept-stilleben-Katja-Hagelstam.jpg"
        }
      }
    },
    prebuild: {
      sitemap: true,
      staticCollectionMenus: true,
      featureBasedRoutes: true
    },
    ssr: {
      trustProxyHops: 2,
      collectionSideMenu: false
    }
  },
  articles: [
    {
      id: "04-01",
      language: "sv",
      routeName: "brod-och-bot",
      title: "Bröd och bot. Hushållsböcker och receptsamlingar under det långa 1700-talet",
      coverURL: "assets/images/covers/cover_norrback-brod-och-bot_epub.jpg",
      enableTOC: true,
      downloadOptions: [
        {
          url: "https://urn.fi/URN:ISBN:978-951-583-582-6",
          label: ""
        }
      ]
    }
  ],
  collections: {
    addTEIClassNames: false,
    replaceImageAssetsPaths: false,
    enableLegacyIDs: false,
    enableMathJax: false,
    frontMatterPages: {
      cover: false,
      title: false,
      foreword: false,
      introduction: true
    },
    frontMatterPageDisabled: {
      cover: [],
      title: [],
      foreword: [],
      introduction: []
    },
    highlightSearchMatches: true,
    order: [
      [
        2560, 2573, 2566, 2563, 1089, 1367,
        2562, 2571, 2569, 2564, 2561, 812,
        2581, 2565, 2568, 2567, 2572, 2582,
        541, 1088
      ],
      [2570]
    ]
  },
  ebooks: [],
  page: {
    about: {
      initialPageNode: "01"
    },
    article: {
      showTextDownloadButton: true,
      showURNButton: true
    },
    elasticSearch: {
      enableFilters: true,
      enableSortOptions: false,
      filterGroupsOpenByDefault: ["Type", "Collection"],
      hitsPerPage: 15,
      indices: ["historiskarecept"],
      openReadingTextWithComments: false,
      textHighlightFragmentSize: 150,
      textHighlightType: "fvh",
      textTitleHighlightType: "fvh",
      typeFilterGroupOptions: ["est", "ms", "inl"],
      fixedFilters: [
        {
          terms: {
            deleted: ["0"]
          }
        },
        {
          terms: {
            published: ["1", "2"]
          }
        }
      ],
      additionalSourceFields: [],
      aggregations: {
        Type: {
          terms: {
            field: "text_type",
            size: 40,
            order: {_key: "asc"}
          }
        },
        Collection: {
          terms: {
            field: "publication_data.collection_name.keyword",
            size: 40,
            order: {_key: "asc"}
          }
        }
      }
    },
    home: {
      bannerImage: {
        altTexts: {
          sv: "Fotografi av ett fat med råa grönsaker och en hel fisk med en kniv instucken vertikalt. Bakom tallriken finns en guldramad målning av en äldre man framför ett fat med fisk. Allt är arrangerat på ett träbord framför en mörk bakgrund. Foto: Katja Hagelstam."
        },
        intrinsicSize: {
          height: 1304,
          width: 1056
        },
        orientationPortrait: true,
        alternateSources: [
          {
            srcset: "assets/images/home-page-banner-portrait_396w.avif 396w, assets/images/home-page-banner-portrait_528w.avif 528w, assets/images/home-page-banner-portrait_704w.avif 704w, assets/images/home-page-banner-portrait_900w.avif 900w, assets/images/home-page-banner-portrait.avif 1056w",
            sizes: "(max-width: 900px) 100vw, 27.5vw",
            type: "image/avif"
          },
          {
            srcset: "assets/images/home-page-banner-portrait_396w.jpg 396w, assets/images/home-page-banner-portrait_528w.jpg 528w, assets/images/home-page-banner-portrait_704w.jpg 704w, assets/images/home-page-banner-portrait_900w.jpg 900w, assets/images/home-page-banner-portrait.jpg 1056w",
            sizes: "(max-width: 900px) 100vw, 27.5vw",
            type: "image/jpeg"
          }
        ],
        URL: "assets/images/home-page-banner-portrait.jpg"
      },
      portraitOrientationSettings: {
        imagePlacement: {
          onRight: false,
          squareCroppedVerticalOffset: "27%"
        },
        siteTitleOnImageOnSmallScreens: true
      },
      showContentGrid: true,
      showFooter: true,
      showSearchbar: true
    },
    index: {
      keywords: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      }
    },
    introduction: {
      hasSeparateTOC: false,
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        personInfo: false,
        placeInfo: false,
        workInfo: false,
        paragraphNumbering: true,
        pageBreakEdition: false
      }
    },
    text: {
      defaultViews: ["readingtext", "legend", "facsimiles", "manuscripts"],
      defaultViewOptions: [],
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        comments: false,
        personInfo: false,
        placeInfo: false,
        emendations: false,
        normalisations: false,
        workInfo: false,
        abbreviations: false,
        paragraphNumbering: true,
        pageBreakOriginal: true,
        pageBreakEdition: false
      },
      variantViewOptions: {
        showVariationTypeOption: false,
        defaultVariationType: "all"
      },
      viewTypes: {
        showAll: true,
        readingtext: true,
        comments: false,
        facsimiles: true,
        manuscripts: true,
        variants: false,
        illustrations: false,
        legend: true,
        metadata: false
      },
      viewTypeDisabledCollections: {
        readingtext: [],
        comments: [],
        facsimiles: [],
        manuscripts: [],
        variants: [],
        illustrations: [],
        legend: [],
        metadata: []
      }
    }
  },
  component: {
    contentGrid: {
      includeArticles: true,
      includeEbooks: false,
      includeMediaCollection: false,
      showTitles: true
    },
    facsimiles: {
      imageQuality: 4,
      showTitle: true
    },
    mainSideMenu: {
      items: {
        about: true,
        articles: true,
        ebooks: false,
        collections: true,
        mediaCollections: false,
        indexKeywords: true,
        indexPersons: false,
        indexPlaces: false,
        indexWorks: false,
        search: true,
        cookiePolicy: true,
        termsOfUse: false,
        privacyPolicy: false,
        accessibilityStatement: false,
      },
      defaultExpanded: false,
      ungroupArticles: true
    },
    manuscripts: {
      showTitle: false,
      showNormalizedToggle: false,
      showOpenLegendButton: false
    },
    topMenu: {
      showAboutButton: true,
      showContentButton: true,
      showElasticSearchButton: true,
      showLanguageButton: true
    },
    variants: {
      showOpenLegendButton: true
    }
  },
  modal: {
    downloadTexts: {
      introductionFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      readingTextFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      commentsFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: false
      },
      manuscriptsFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      }
    },
    fullscreenImageViewer: {
      imageQuality: 4
    },
    referenceData: {
      URNResolverURL: "https://urn.fi/",
    }
  }
}

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
      staticCollectionMenus: true
    },
    ssr: {
      collectionSideMenu: false
    }
  },
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
    highlightSearchMatches: true,
    order: [
      [541, 2560, 1088, 812, 1089, 1367, 2561, 2562, 2563, 2564, 2565]
    ]
  },
  ebooks: [
    {
      title: "Om hushållsböcker och receptsamlingar under 1700-talet",
      filename: "norrback-brod-och-bot.epub",
      externalFileURL: "",
      coverURL: "assets/images/covers/cover_norrback-brod-och-bot_epub.jpg",
      downloadOptions: [
        {
          url: "https://urn.fi/URN:ISBN:978-951-583-582-6",
          label: ""
        }
      ]
    }
  ],
  page: {
    about: {
      initialPageNode: "01"
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
            published: ["2"]
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
          height: null,
          width: null
        },
        orientationPortrait: true,
        alternateSources: [],
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
      showSearchbar: false
    },
    index: {
      keywords: {
        maxFetchSize: 500,
        showFilter: false,
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
      }
    }
  },
  component: {
    contentGrid: {
      includeEbooks: true,
      includeMediaCollection: false,
      showTitles: true
    },
    epub: {
      showTOCButton: true,
      showURNButton: true,
      showViewOptionsButton: true
    },
    facsimiles: {
      imageQuality: 4,
      showTitle: true
    },
    mainSideMenu: {
      items: {
        home: false,
        about: true,
        ebooks: true,
        collections: true,
        mediaCollections: false,
        indexKeywords: true,
        indexPersons: false,
        indexPlaces: false,
        indexWorks: false
      }
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
      showURNButton: false,
      showLanguageButton: false,
      showSiteLogo: true,
      siteLogoDefaultImageURL: "assets/images/logo/SLS_logo_full_white_346x112.png",
      siteLogoMobileImageURL: "assets/images/logo/SLS_logo_symbol_white_112x112.png",
      siteLogoLinkURL: "https://www.sls.fi/",
      siteLogoDimensions: {
        default: {
          height: 56,
          width: 173
        },
        mobile: {
          height: 56,
          width: 56
        }
      }
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

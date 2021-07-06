// const { googleBook } = require('../models');

// const bookData = [
//       {
//         kind: "books#volume",
//         id: "aGquDwAAQBAJ",
//         etag: "6FSIERVCwe8",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/aGquDwAAQBAJ",
//         title: "The Joy of Search",
//         subtitle: "A Google Insider's Guide to Going Beyond the Basics",
//         authors: [
//             "Daniel M. Russell"
//           ],
//         publisher: "MIT Press",
//         publishedDate: "2019-10-01",
//         description: "How to be a great online searcher, demonstrated with step-by-step searches for answers to a series of intriguing questions (for example, “Is that plant poisonous?”). We all know how to look up something online by typing words into a search engine. We do this so often that we have made the most famous search engine a verb: we Google it—“Japan population” or “Nobel Peace Prize” or “poison ivy” or whatever we want to know. But knowing how to Google something doesn't make us search experts; there's much more we can do to access the massive collective knowledge available online. In The Joy of Search, Daniel Russell shows us how to be great online researchers. We don't have to be computer geeks or a scholar searching out obscure facts; we just need to know some basic methods. Russell demonstrates these methods with step-by-step searches for answers to a series of intriguing questions—from “what is the wrong side of a towel?” to “what is the most likely way you will die?” Along the way, readers will discover essential tools for effective online searches—and learn some fascinating facts and interesting stories. Russell explains how to frame search queries so they will yield information and describes the best ways to use such resources as Google Earth, Google Scholar, Wikipedia, and Wikimedia. He shows when to put search terms in double quotes, how to use the operator (*), why metadata is important, and how to triangulate information from multiple sources. By the end of this engaging journey of discovering, readers will have the definitive answer to why the best online searches involve more than typing a few words into Google."
//         },
//       {
//         kind: "books#volume",
//         id: "rYIhAAAAMAAJ",
//         etag: "P7nP2FKtzTs",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/rYIhAAAAMAAJ",
//         title: "Books and Culture",
//         authors: [
//             "Hamilton Wright Mabie"
//           ],
//         publishedDate: "1900",
//       },
//       {
//         kind: "books#volume",
//         id: "-ThDDwAAQBAJ",
//         etag: "ZuHmbR9g0Ug",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/-ThDDwAAQBAJ",
//         title: "Algorithms of Oppression",
//         subtitle: "How Search Engines Reinforce Racism",
//         authors: [
//             "Safiya Umoja Noble"
//           ],
//         publisher: "NYU Press",
//         publishedDate: "2018-02-20",
//         description: "A revealing look at how negative biases against women of color are embedded in search engine results and algorithms Run a Google search for “black girls”—what will you find? “Big Booty” and other sexually explicit terms are likely to come up as top search terms. But, if you type in “white girls,” the results are radically different. The suggested porn sites and un-moderated discussions about “why black women are so sassy” or “why black women are so angry” presents a disturbing portrait of black womanhood in modern society. In Algorithms of Oppression, Safiya Umoja Noble challenges the idea that search engines like Google offer an equal playing field for all forms of ideas, identities, and activities. Data discrimination is a real social problem; Noble argues that the combination of private interests in promoting certain sites, along with the monopoly status of a relatively small number of Internet search engines, leads to a biased set of search algorithms that privilege whiteness and discriminate against people of color, specifically women of color. Through an analysis of textual and media searches as well as extensive research on paid online advertising, Noble exposes a culture of racism and sexism in the way discoverability is created online. As search engines and their related companies grow in importance—operating as a source for email, a major vehicle for primary and secondary school learning, and beyond—understanding and reversing these disquieting trends and discriminatory practices is of utmost importance. An original, surprising and, at times, disturbing account of bias on the internet, Algorithms of Oppression contributes to our understanding of how racism is created, maintained, and disseminated in the 21st century."
//       },
//       {
//         kind: "books#volume",
//         id: "Y8yAswEACAAJ",
//         etag: "RD4RKFjKxns",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/Y8yAswEACAAJ",
//         title: "Deep Learning for Search",
//         authors: [
//             "Tommaso Teofili"
//           ],
//         publishedDate: "2018-07-28",
//         description: "Deep Learning for Search teaches readers how to leverage neural networks, NLP, and deep learning techniques to improve search performance. Deep Learning for Search teaches readers how to improve the effectiveness of your search by implementing neural network-based techniques. By the time their finished, they'll be ready to build amazing search engines that deliver the results your users need and get better as time goes on! Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.",
//       },
//       {
//         kind: "books#volume",
//         id: "UjG8qXVRSSQC",
//         etag: "UUpuB8PUEn4",
//         selfLin: "https://www.googleapis.com/books/v1/volumes/UjG8qXVRSSQC",
//         title: "Google Power Search",
//         authors: [
//             "Stephan Spencer"
//           ],
//         publisher: "\"O'Reilly Media, Inc.\"",
//         publishedDate: "2011-07-23",
//         description: "Behind Google's deceptively simple interface is immense power for both market and competitive research—if you know how to use it well. Sure, basic searches are easy, but complex searches require specialized skills. This concise book takes you through the full range of Google's powerful search-refinement features, so you can quickly find the specific information you need. Learn techniques ranging from simple Boolean logic to URL parameters and other advanced tools, and see how they're applied to real-world market research examples. Incorporate advanced search operators such as filetype:, intitle:, daterange:, and others into your queries Use Google filtering tools, including Search Within Results, Similar Pages, and SafeSearch, among others Explore the breadth of Google through auxiliary search services like Google News, Google Books, Google Blog Search, and Google Scholar Acquire advanced Google skills that result in more effective search engine optimization (SEO)",
//       },
//       {
//         kind: "books#volume",
//         id: "n3N0swEACAAJ",
//         etag: "VCLR/rhcV+I",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/n3N0swEACAAJ",
//         "volumeInfo": {
//           "title": "The Great Escape",
//           "subtitle": "A Super Seek-and-Find Pop-Up Book!",
//           "authors": [
//             "Loic Mehee"
//           ],
//           "publisher": "Twirl",
//           "publishedDate": "2018-10-02",
//           "description": "This is a seek-and-find book like no other! With huge pop-ups on every spread, intricate illustrations, and an exciting story, children will spend hours looking at every nook and cranny of this book to help find the bad guys! There's chaos in the big city of Criminopolis, as X-Unit plot to take over, and turn it upside down with their evil schemes. They must be stopped immediately! Young readers have to help Irix, the superhero with super sight, find the five members of the gang, plus hundreds of objects that are hidden all over the city . . . before it's too late!",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_10",
//               "identifier": "2408004535"
//             },
//             {
//               "type": "ISBN_13",
//               "identifier": "9782408004538"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": false
//           },
//           "pageCount": 18,
//           "printType": "BOOK",
//           "categories": [
//             "Juvenile Fiction"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "preview-1.0.0",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=n3N0swEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=n3N0swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.com/books?id=n3N0swEACAAJ&dq=search&hl=&as_pt=ALLTYPES&cd=6&source=gbs_api",
//           "infoLink": "http://books.google.com/books?id=n3N0swEACAAJ&dq=search&hl=&as_pt=ALLTYPES&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/The_Great_Escape.html?hl=&id=n3N0swEACAAJ"
//         },
//         "saleInfo": {
//           "country": "US",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "US",
//           "viewability": "NO_PAGES",
//           "embeddable": false,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": false
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=n3N0swEACAAJ&hl=&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
//           "accessViewStatus": "NONE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "This is a seek-and-find book like no other! With huge pop-ups on every spread, intricate illustrations, and an exciting story, children will spend hours looking at every nook and cranny of this book to help find the bad guys!"
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": "nopJzzYeNREC",
//         "etag": "7n0f9adEHGo",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/nopJzzYeNREC",
//         "volumeInfo": {
//           "title": "Web Search",
//           "subtitle": "Multidisciplinary Perspectives",
//           "authors": [
//             "Amanda Spink",
//             "Michael Zimmer"
//           ],
//           "publisher": "Springer Science & Business Media",
//           "publishedDate": "2008-09-16",
//           "description": "Web search engines are not just indispensable tools for finding and accessing information online, but have become a defining component of the human condition and can be conceptualized as a complex behavior embedded within an individual's everyday social, cultural, political, and information-seeking activities. This book investigates Web search from the non-technical perspective, bringing together chapters that represent a range of multidisciplinary theories, models, and ideas.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_13",
//               "identifier": "9783540758297"
//             },
//             {
//               "type": "ISBN_10",
//               "identifier": "3540758291"
//             }
//           ],
//           "readingModes": {
//             "text": true,
//             "image": true
//           },
//           "pageCount": 352,
//           "printType": "BOOK",
//           "categories": [
//             "Computers"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "1.1.2.0.preview.3",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=nopJzzYeNREC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=nopJzzYeNREC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "un",
//           "previewLink": "http://books.google.com/books?id=nopJzzYeNREC&printsec=frontcover&dq=search&hl=&as_pt=ALLTYPES&cd=7&source=gbs_api",
//           "infoLink": "https://play.google.com/store/books/details?id=nopJzzYeNREC&source=gbs_api",
//           "canonicalVolumeLink": "https://play.google.com/store/books/details?id=nopJzzYeNREC"
//         },
//         "saleInfo": {
//           "country": "US",
//           "saleability": "FOR_SALE_AND_RENTAL",
//           "isEbook": true,
//           "listPrice": {
//             "amount": 169,
//             "currencyCode": "USD"
//           },
//           "retailPrice": {
//             "amount": 135.2,
//             "currencyCode": "USD"
//           },
//           "buyLink": "https://play.google.com/store/books/details?id=nopJzzYeNREC&rdid=book-nopJzzYeNREC&rdot=1&source=gbs_api",
//           "offers": [
//             {
//               "finskyOfferType": 1,
//               "listPrice": {
//                 "amountInMicros": 169000000,
//                 "currencyCode": "USD"
//               },
//               "retailPrice": {
//                 "amountInMicros": 135200000,
//                 "currencyCode": "USD"
//               },
//               "giftable": true
//             },
//             {
//               "finskyOfferType": 3,
//               "listPrice": {
//                 "amountInMicros": 59150000,
//                 "currencyCode": "USD"
//               },
//               "retailPrice": {
//                 "amountInMicros": 51460000,
//                 "currencyCode": "USD"
//               },
//               "rentalDuration": {
//                 "unit": "DAY",
//                 "count": 90
//               }
//             }
//           ]
//         },
//         "accessInfo": {
//           "country": "US",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
//           "epub": {
//             "isAvailable": true,
//             "acsTokenLink": "http://books.google.com/books/download/Web_Search-sample-epub.acsm?id=nopJzzYeNREC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//           },
//           "pdf": {
//             "isAvailable": true,
//             "acsTokenLink": "http://books.google.com/books/download/Web_Search-sample-pdf.acsm?id=nopJzzYeNREC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=nopJzzYeNREC&hl=&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "This book investigates Web search from the non-technical perspective, bringing together chapters that represent a range of multidisciplinary theories, models, and ideas."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": "5X0zDwAAQBAJ",
//         "etag": "HlUCimoxYY0",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/5X0zDwAAQBAJ",
//         "volumeInfo": {
//           "title": "SPARK Amazing America! Word Search",
//           "authors": [
//             "John Kurtz"
//           ],
//           "publisher": "Courier Dover Publications",
//           "publishedDate": "2017-11-06",
//           "description": "Forty-six fun-filled word search challenges feature such themes as the 13 colonies, football and baseball teams, authors, landmarks, classic rock songs, astronauts, country music singers, and many other subjects.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_13",
//               "identifier": "9780486816098"
//             },
//             {
//               "type": "ISBN_10",
//               "identifier": "0486816095"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": true
//           },
//           "pageCount": 64,
//           "printType": "BOOK",
//           "categories": [
//             "Games & Activities"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "1.1.0.0.preview.1",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=5X0zDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=5X0zDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "un",
//           "previewLink": "http://books.google.com/books?id=5X0zDwAAQBAJ&printsec=frontcover&dq=search&hl=&as_pt=ALLTYPES&cd=8&source=gbs_api",
//           "infoLink": "http://books.google.com/books?id=5X0zDwAAQBAJ&dq=search&hl=&as_pt=ALLTYPES&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/SPARK_Amazing_America_Word_Search.html?hl=&id=5X0zDwAAQBAJ"
//         },
//         "saleInfo": {
//           "country": "US",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "US",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": false
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=5X0zDwAAQBAJ&hl=&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "Forty-six fun-filled word search challenges feature such themes as the 13 colonies, football and baseball teams, authors, landmarks, classic rock songs, astronauts, country music singers, and many other subjects."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": "0ArDOdcWNQcC",
//         "etag": "K2O2jVKdF3U",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/0ArDOdcWNQcC",
//         "volumeInfo": {
//           "title": "Combinatorial Algorithms",
//           "subtitle": "Generation, Enumeration, and Search",
//           "authors": [
//             "Donald L. Kreher",
//             "Douglas R. Stinson"
//           ],
//           "publisher": "CRC Press",
//           "publishedDate": "1998-12-18",
//           "description": "This textbook thoroughly outlines combinatorial algorithms for generation, enumeration, and search. Topics include backtracking and heuristic search methods applied to various combinatorial structures, such as: Combinations Permutations Graphs Designs Many classical areas are covered as well as new research topics not included in most existing texts, such as: Group algorithms Graph isomorphism Hill-climbing Heuristic search algorithms This work serves as an exceptional textbook for a modern course in combinatorial algorithms, providing a unified and focused collection of recent topics of interest in the area. The authors, synthesizing material that can only be found scattered through many different sources, introduce the most important combinatorial algorithmic techniques - thus creating an accessible, comprehensive text that students of mathematics, electrical engineering, and computer science can understand without needing a prior course on combinatorics.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_10",
//               "identifier": "084933988X"
//             },
//             {
//               "type": "ISBN_13",
//               "identifier": "9780849339882"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": true
//           },
//           "pageCount": 344,
//           "printType": "BOOK",
//           "categories": [
//             "Mathematics"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "0.0.2.0.preview.1",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=0ArDOdcWNQcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=0ArDOdcWNQcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "un",
//           "previewLink": "http://books.google.com/books?id=0ArDOdcWNQcC&printsec=frontcover&dq=search&hl=&as_pt=ALLTYPES&cd=9&source=gbs_api",
//           "infoLink": "http://books.google.com/books?id=0ArDOdcWNQcC&dq=search&hl=&as_pt=ALLTYPES&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/Combinatorial_Algorithms.html?hl=&id=0ArDOdcWNQcC"
//         },
//         "saleInfo": {
//           "country": "US",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "US",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": false
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=0ArDOdcWNQcC&hl=&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "Topics include backtracking and heuristic search methods applied to various combinatorial structures, such as: Combinations Permutations Graphs Designs Many classical areas are covered as well as new research topics not included in most ..."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": "5PbUDAAAQBAJ",
//         "etag": "cqb2Rl25vOQ",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/5PbUDAAAQBAJ",
//         "volumeInfo": {
//           "title": "Adnan's Story",
//           "subtitle": "The Search for Truth and Justice After Serial",
//           "authors": [
//             "Rabia Chaudry"
//           ],
//           "publisher": "Macmillan",
//           "publishedDate": "2016-08-09",
//           "description": "\"In early 2000, Adnan Syed was convicted and sentenced to life plus thirty years for the murder of his ex-girlfriend Hae Min Lee, a high school senior in Baltimore, Maryland. Syed has maintained his innocence, and Rabia Chaudry, a family friend, has always believed him ... In this ... narrative, ... Chaudry presents new key evidence that she maintains dismantles the State's case: a potential new suspect, forensics indicating Hae was killed and kept somewhere for almost half a day, and documentation withheld by the State that destroys the cell phone evidence\"--Amazon.com.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_13",
//               "identifier": "9781250087102"
//             },
//             {
//               "type": "ISBN_10",
//               "identifier": "1250087104"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": false
//           },
//           "pageCount": 416,
//           "printType": "BOOK",
//           "categories": [
//             "Biography & Autobiography"
//           ],
//           "averageRating": 4,
//           "ratingsCount": 3,
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "preview-1.0.0",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=5PbUDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=5PbUDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "un",
//           "previewLink": "http://books.google.com/books?id=5PbUDAAAQBAJ&printsec=frontcover&dq=search&hl=&as_pt=ALLTYPES&cd=10&source=gbs_api",
//           "infoLink": "http://books.google.com/books?id=5PbUDAAAQBAJ&dq=search&hl=&as_pt=ALLTYPES&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/Adnan_s_Story.html?hl=&id=5PbUDAAAQBAJ"
//         },
//         "saleInfo": {
//           "country": "US",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "US",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": false
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=5PbUDAAAQBAJ&hl=&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "With intimate details and newly-uncovered evidence Adnan&#39;s Story goes beyond what the hit podcast Serial covered in it&#39;s investigation of Adnan Syed&#39;s case."
//         }
//       }
//     ]
  
//     const seedGoogleBook = () => Comment.bulkCreate(bookData);

//     module.exports = seedGoogleBook;
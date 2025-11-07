├── backend
    ├── .gitattributes
    ├── .gitignore
    ├── .mvn
    │   └── wrapper
    │   │   └── maven-wrapper.properties
    ├── Procfile
    ├── data
    │   └── edupath_db.mv.db
    ├── mvnw
    ├── mvnw.cmd
    ├── pom.xml
    └── src
    │   ├── main
    │       ├── java
    │       │   └── com
    │       │   │   └── example
    │       │   │       └── plrepa
    │       │   │           ├── PlrepaApplication.java
    │       │   │           ├── controller
    │       │   │               ├── AuthController.java
    │       │   │               ├── ExamController.java
    │       │   │               └── ProgressController.java
    │       │   │           ├── model
    │       │   │               ├── Exam.java
    │       │   │               ├── Progress.java
    │       │   │               ├── Subject.java
    │       │   │               └── User.java
    │       │   │           ├── repository
    │       │   │               ├── ExamRepository.java
    │       │   │               ├── ProgressRepository.java
    │       │   │               ├── SubjectRepository.java
    │       │   │               └── UserRepository.java
    │       │   │           └── service
    │       │   │               └── StudyPlanService.java
    │       └── resources
    │       │   ├── application.properties
    │       │   └── data_backup.sql
    │   └── test
    │       └── java
    │           └── com
    │               └── example
    │                   └── plrepa
    │                       └── PlrepaApplicationTests.java
└── frontend
    ├── .vscode
        └── settings.json
    ├── dashboard.css
    ├── dashboard.html
    ├── dashboard.js
    ├── node_modules
        ├── .package-lock.json
        ├── @google
        │   └── generative-ai
        │   │   ├── LICENSE
        │   │   ├── README.md
        │   │   ├── dist
        │   │       ├── generative-ai.d.ts
        │   │       ├── index.js
        │   │       ├── index.js.map
        │   │       ├── index.mjs
        │   │       ├── index.mjs.map
        │   │       ├── scripts
        │   │       │   ├── check-format.d.ts
        │   │       │   ├── format-patterns.d.ts
        │   │       │   ├── license.d.ts
        │   │       │   └── run-format.d.ts
        │   │       ├── server
        │   │       │   ├── index.js
        │   │       │   ├── index.js.map
        │   │       │   ├── index.mjs
        │   │       │   ├── index.mjs.map
        │   │       │   ├── scripts
        │   │       │   │   ├── check-format.d.ts
        │   │       │   │   ├── format-patterns.d.ts
        │   │       │   │   ├── license.d.ts
        │   │       │   │   └── run-format.d.ts
        │   │       │   ├── server.d.ts
        │   │       │   ├── src
        │   │       │   │   ├── errors.d.ts
        │   │       │   │   ├── gen-ai.d.ts
        │   │       │   │   ├── index.d.ts
        │   │       │   │   ├── methods
        │   │       │   │   │   ├── chat-session-helpers.d.ts
        │   │       │   │   │   ├── chat-session.d.ts
        │   │       │   │   │   ├── count-tokens.d.ts
        │   │       │   │   │   ├── embed-content.d.ts
        │   │       │   │   │   └── generate-content.d.ts
        │   │       │   │   ├── models
        │   │       │   │   │   └── generative-model.d.ts
        │   │       │   │   ├── requests
        │   │       │   │   │   ├── request-helpers.d.ts
        │   │       │   │   │   ├── request.d.ts
        │   │       │   │   │   ├── response-helpers.d.ts
        │   │       │   │   │   └── stream-reader.d.ts
        │   │       │   │   └── server
        │   │       │   │   │   ├── cache-manager.d.ts
        │   │       │   │   │   ├── constants.d.ts
        │   │       │   │   │   ├── file-manager.d.ts
        │   │       │   │   │   ├── index.d.ts
        │   │       │   │   │   └── request.d.ts
        │   │       │   └── types
        │   │       │   │   ├── content.d.ts
        │   │       │   │   ├── enums.d.ts
        │   │       │   │   ├── function-calling.d.ts
        │   │       │   │   ├── index.d.ts
        │   │       │   │   ├── requests.d.ts
        │   │       │   │   ├── responses.d.ts
        │   │       │   │   ├── search-grounding.d.ts
        │   │       │   │   └── server
        │   │       │   │       ├── caching.d.ts
        │   │       │   │       ├── files.d.ts
        │   │       │   │       ├── index.d.ts
        │   │       │   │       └── shared.d.ts
        │   │       ├── src
        │   │       │   ├── errors.d.ts
        │   │       │   ├── gen-ai.d.ts
        │   │       │   ├── index.d.ts
        │   │       │   ├── methods
        │   │       │   │   ├── chat-session-helpers.d.ts
        │   │       │   │   ├── chat-session.d.ts
        │   │       │   │   ├── count-tokens.d.ts
        │   │       │   │   ├── embed-content.d.ts
        │   │       │   │   └── generate-content.d.ts
        │   │       │   ├── models
        │   │       │   │   └── generative-model.d.ts
        │   │       │   ├── requests
        │   │       │   │   ├── request-helpers.d.ts
        │   │       │   │   ├── request.d.ts
        │   │       │   │   ├── response-helpers.d.ts
        │   │       │   │   └── stream-reader.d.ts
        │   │       │   └── server
        │   │       │   │   ├── cache-manager.d.ts
        │   │       │   │   ├── constants.d.ts
        │   │       │   │   ├── file-manager.d.ts
        │   │       │   │   ├── index.d.ts
        │   │       │   │   └── request.d.ts
        │   │       ├── tsdoc-metadata.json
        │   │       └── types
        │   │       │   ├── content.d.ts
        │   │       │   ├── enums.d.ts
        │   │       │   ├── function-calling.d.ts
        │   │       │   ├── index.d.ts
        │   │       │   ├── requests.d.ts
        │   │       │   ├── responses.d.ts
        │   │       │   ├── search-grounding.d.ts
        │   │       │   └── server
        │   │       │       ├── caching.d.ts
        │   │       │       ├── files.d.ts
        │   │       │       ├── index.d.ts
        │   │       │       └── shared.d.ts
        │   │   ├── package.json
        │   │   └── server
        │   │       └── package.json
        ├── accepts
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── body-parser
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   ├── lib
        │   │   ├── read.js
        │   │   ├── types
        │   │   │   ├── json.js
        │   │   │   ├── raw.js
        │   │   │   ├── text.js
        │   │   │   └── urlencoded.js
        │   │   └── utils.js
        │   └── package.json
        ├── bytes
        │   ├── History.md
        │   ├── LICENSE
        │   ├── Readme.md
        │   ├── index.js
        │   └── package.json
        ├── call-bind-apply-helpers
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── actualApply.d.ts
        │   ├── actualApply.js
        │   ├── applyBind.d.ts
        │   ├── applyBind.js
        │   ├── functionApply.d.ts
        │   ├── functionApply.js
        │   ├── functionCall.d.ts
        │   ├── functionCall.js
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   ├── reflectApply.d.ts
        │   ├── reflectApply.js
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── call-bound
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── content-disposition
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── content-type
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── cookie-signature
        │   ├── History.md
        │   ├── LICENSE
        │   ├── Readme.md
        │   ├── index.js
        │   └── package.json
        ├── cookie
        │   ├── LICENSE
        │   ├── README.md
        │   ├── SECURITY.md
        │   ├── index.js
        │   └── package.json
        ├── cors
        │   ├── CONTRIBUTING.md
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── lib
        │   │   └── index.js
        │   └── package.json
        ├── debug
        │   ├── LICENSE
        │   ├── README.md
        │   ├── package.json
        │   └── src
        │   │   ├── browser.js
        │   │   ├── common.js
        │   │   ├── index.js
        │   │   └── node.js
        ├── depd
        │   ├── History.md
        │   ├── LICENSE
        │   ├── Readme.md
        │   ├── index.js
        │   ├── lib
        │   │   └── browser
        │   │   │   └── index.js
        │   └── package.json
        ├── dunder-proto
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── get.d.ts
        │   ├── get.js
        │   ├── package.json
        │   ├── set.d.ts
        │   ├── set.js
        │   ├── test
        │   │   ├── get.js
        │   │   ├── index.js
        │   │   └── set.js
        │   └── tsconfig.json
        ├── ee-first
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── encodeurl
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── es-define-property
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── es-errors
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── eval.d.ts
        │   ├── eval.js
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   ├── range.d.ts
        │   ├── range.js
        │   ├── ref.d.ts
        │   ├── ref.js
        │   ├── syntax.d.ts
        │   ├── syntax.js
        │   ├── test
        │   │   └── index.js
        │   ├── tsconfig.json
        │   ├── type.d.ts
        │   ├── type.js
        │   ├── uri.d.ts
        │   └── uri.js
        ├── es-object-atoms
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── RequireObjectCoercible.d.ts
        │   ├── RequireObjectCoercible.js
        │   ├── ToObject.d.ts
        │   ├── ToObject.js
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── isObject.d.ts
        │   ├── isObject.js
        │   ├── package.json
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── escape-html
        │   ├── LICENSE
        │   ├── Readme.md
        │   ├── index.js
        │   └── package.json
        ├── etag
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── express
        │   ├── History.md
        │   ├── LICENSE
        │   ├── Readme.md
        │   ├── index.js
        │   ├── lib
        │   │   ├── application.js
        │   │   ├── express.js
        │   │   ├── request.js
        │   │   ├── response.js
        │   │   ├── utils.js
        │   │   └── view.js
        │   └── package.json
        ├── finalhandler
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── forwarded
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── fresh
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── function-bind
        │   ├── .eslintrc
        │   ├── .github
        │   │   ├── FUNDING.yml
        │   │   └── SECURITY.md
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── implementation.js
        │   ├── index.js
        │   ├── package.json
        │   └── test
        │   │   ├── .eslintrc
        │   │   └── index.js
        ├── get-intrinsic
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   ├── package.json
        │   └── test
        │   │   └── GetIntrinsic.js
        ├── get-proto
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── Object.getPrototypeOf.d.ts
        │   ├── Object.getPrototypeOf.js
        │   ├── README.md
        │   ├── Reflect.getPrototypeOf.d.ts
        │   ├── Reflect.getPrototypeOf.js
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── gopd
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── gOPD.d.ts
        │   ├── gOPD.js
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── has-symbols
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   ├── shams.d.ts
        │   ├── shams.js
        │   ├── test
        │   │   ├── index.js
        │   │   ├── shams
        │   │   │   ├── core-js.js
        │   │   │   └── get-own-property-symbols.js
        │   │   └── tests.js
        │   └── tsconfig.json
        ├── hasown
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   └── tsconfig.json
        ├── http-errors
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   ├── node_modules
        │   │   └── statuses
        │   │   │   ├── HISTORY.md
        │   │   │   ├── LICENSE
        │   │   │   ├── README.md
        │   │   │   ├── codes.json
        │   │   │   ├── index.js
        │   │   │   └── package.json
        │   └── package.json
        ├── iconv-lite
        │   ├── .github
        │   │   └── dependabot.yml
        │   ├── .idea
        │   │   ├── codeStyles
        │   │   │   ├── Project.xml
        │   │   │   └── codeStyleConfig.xml
        │   │   ├── iconv-lite.iml
        │   │   ├── inspectionProfiles
        │   │   │   └── Project_Default.xml
        │   │   ├── modules.xml
        │   │   └── vcs.xml
        │   ├── Changelog.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── encodings
        │   │   ├── dbcs-codec.js
        │   │   ├── dbcs-data.js
        │   │   ├── index.js
        │   │   ├── internal.js
        │   │   ├── sbcs-codec.js
        │   │   ├── sbcs-data-generated.js
        │   │   ├── sbcs-data.js
        │   │   ├── tables
        │   │   │   ├── big5-added.json
        │   │   │   ├── cp936.json
        │   │   │   ├── cp949.json
        │   │   │   ├── cp950.json
        │   │   │   ├── eucjp.json
        │   │   │   ├── gb18030-ranges.json
        │   │   │   ├── gbk-added.json
        │   │   │   └── shiftjis.json
        │   │   ├── utf16.js
        │   │   ├── utf32.js
        │   │   └── utf7.js
        │   ├── lib
        │   │   ├── bom-handling.js
        │   │   ├── index.d.ts
        │   │   ├── index.js
        │   │   └── streams.js
        │   └── package.json
        ├── inherits
        │   ├── LICENSE
        │   ├── README.md
        │   ├── inherits.js
        │   ├── inherits_browser.js
        │   └── package.json
        ├── ipaddr.js
        │   ├── LICENSE
        │   ├── README.md
        │   ├── ipaddr.min.js
        │   ├── lib
        │   │   ├── ipaddr.js
        │   │   └── ipaddr.js.d.ts
        │   └── package.json
        ├── is-promise
        │   ├── LICENSE
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── index.mjs
        │   ├── package.json
        │   └── readme.md
        ├── math-intrinsics
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── abs.d.ts
        │   ├── abs.js
        │   ├── constants
        │   │   ├── maxArrayLength.d.ts
        │   │   ├── maxArrayLength.js
        │   │   ├── maxSafeInteger.d.ts
        │   │   ├── maxSafeInteger.js
        │   │   ├── maxValue.d.ts
        │   │   └── maxValue.js
        │   ├── floor.d.ts
        │   ├── floor.js
        │   ├── isFinite.d.ts
        │   ├── isFinite.js
        │   ├── isInteger.d.ts
        │   ├── isInteger.js
        │   ├── isNaN.d.ts
        │   ├── isNaN.js
        │   ├── isNegativeZero.d.ts
        │   ├── isNegativeZero.js
        │   ├── max.d.ts
        │   ├── max.js
        │   ├── min.d.ts
        │   ├── min.js
        │   ├── mod.d.ts
        │   ├── mod.js
        │   ├── package.json
        │   ├── pow.d.ts
        │   ├── pow.js
        │   ├── round.d.ts
        │   ├── round.js
        │   ├── sign.d.ts
        │   ├── sign.js
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── media-typer
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── merge-descriptors
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── license
        │   ├── package.json
        │   └── readme.md
        ├── mime-db
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── db.json
        │   ├── index.js
        │   └── package.json
        ├── mime-types
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   ├── mimeScore.js
        │   └── package.json
        ├── ms
        │   ├── index.js
        │   ├── license.md
        │   ├── package.json
        │   └── readme.md
        ├── negotiator
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   ├── lib
        │   │   ├── charset.js
        │   │   ├── encoding.js
        │   │   ├── language.js
        │   │   └── mediaType.js
        │   └── package.json
        ├── object-assign
        │   ├── index.js
        │   ├── license
        │   ├── package.json
        │   └── readme.md
        ├── object-inspect
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── example
        │   │   ├── all.js
        │   │   ├── circular.js
        │   │   ├── fn.js
        │   │   └── inspect.js
        │   ├── index.js
        │   ├── package-support.json
        │   ├── package.json
        │   ├── readme.markdown
        │   ├── test-core-js.js
        │   ├── test
        │   │   ├── bigint.js
        │   │   ├── browser
        │   │   │   └── dom.js
        │   │   ├── circular.js
        │   │   ├── deep.js
        │   │   ├── element.js
        │   │   ├── err.js
        │   │   ├── fakes.js
        │   │   ├── fn.js
        │   │   ├── global.js
        │   │   ├── has.js
        │   │   ├── holes.js
        │   │   ├── indent-option.js
        │   │   ├── inspect.js
        │   │   ├── lowbyte.js
        │   │   ├── number.js
        │   │   ├── quoteStyle.js
        │   │   ├── toStringTag.js
        │   │   ├── undef.js
        │   │   └── values.js
        │   └── util.inspect.js
        ├── on-finished
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── once
        │   ├── LICENSE
        │   ├── README.md
        │   ├── once.js
        │   └── package.json
        ├── parseurl
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── path-to-regexp
        │   ├── LICENSE
        │   ├── Readme.md
        │   ├── dist
        │   │   ├── index.d.ts
        │   │   ├── index.js
        │   │   └── index.js.map
        │   └── package.json
        ├── proxy-addr
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── qs
        │   ├── .editorconfig
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE.md
        │   ├── README.md
        │   ├── dist
        │   │   └── qs.js
        │   ├── lib
        │   │   ├── formats.js
        │   │   ├── index.js
        │   │   ├── parse.js
        │   │   ├── stringify.js
        │   │   └── utils.js
        │   ├── package.json
        │   └── test
        │   │   ├── empty-keys-cases.js
        │   │   ├── parse.js
        │   │   ├── stringify.js
        │   │   └── utils.js
        ├── range-parser
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── raw-body
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── SECURITY.md
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── node_modules
        │   │   └── iconv-lite
        │   │   │   ├── Changelog.md
        │   │   │   ├── LICENSE
        │   │   │   ├── README.md
        │   │   │   ├── encodings
        │   │   │       ├── dbcs-codec.js
        │   │   │       ├── dbcs-data.js
        │   │   │       ├── index.js
        │   │   │       ├── internal.js
        │   │   │       ├── sbcs-codec.js
        │   │   │       ├── sbcs-data-generated.js
        │   │   │       ├── sbcs-data.js
        │   │   │       ├── tables
        │   │   │       │   ├── big5-added.json
        │   │   │       │   ├── cp936.json
        │   │   │       │   ├── cp949.json
        │   │   │       │   ├── cp950.json
        │   │   │       │   ├── eucjp.json
        │   │   │       │   ├── gb18030-ranges.json
        │   │   │       │   ├── gbk-added.json
        │   │   │       │   └── shiftjis.json
        │   │   │       ├── utf16.js
        │   │   │       ├── utf32.js
        │   │   │       └── utf7.js
        │   │   │   ├── lib
        │   │   │       ├── bom-handling.js
        │   │   │       ├── helpers
        │   │   │       │   └── merge-exports.js
        │   │   │       ├── index.d.ts
        │   │   │       ├── index.js
        │   │   │       └── streams.js
        │   │   │   └── package.json
        │   └── package.json
        ├── router
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   ├── lib
        │   │   ├── layer.js
        │   │   └── route.js
        │   └── package.json
        ├── safe-buffer
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.d.ts
        │   ├── index.js
        │   └── package.json
        ├── safer-buffer
        │   ├── LICENSE
        │   ├── Porting-Buffer.md
        │   ├── Readme.md
        │   ├── dangerous.js
        │   ├── package.json
        │   ├── safer.js
        │   └── tests.js
        ├── send
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── serve-static
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── setprototypeof
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   └── test
        │   │   └── index.js
        ├── side-channel-list
        │   ├── .editorconfig
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── list.d.ts
        │   ├── package.json
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── side-channel-map
        │   ├── .editorconfig
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── side-channel-weakmap
        │   ├── .editorconfig
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── side-channel
        │   ├── .editorconfig
        │   ├── .eslintrc
        │   ├── .github
        │   │   └── FUNDING.yml
        │   ├── .nycrc
        │   ├── CHANGELOG.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.d.ts
        │   ├── index.js
        │   ├── package.json
        │   ├── test
        │   │   └── index.js
        │   └── tsconfig.json
        ├── statuses
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── codes.json
        │   ├── index.js
        │   └── package.json
        ├── toidentifier
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── type-is
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── unpipe
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        ├── vary
        │   ├── HISTORY.md
        │   ├── LICENSE
        │   ├── README.md
        │   ├── index.js
        │   └── package.json
        └── wrappy
        │   ├── LICENSE
        │   ├── README.md
        │   ├── package.json
        │   └── wrappy.js
    ├── package copy.json
    ├── package-lock.json
    ├── package.json
    ├── register.css
    ├── register.html
    ├── register.jpg
    ├── register.js
    ├── server.js
    ├── signin.css
    ├── signin.html
    ├── signin.js
    └── signin_image.png


/backend/.gitattributes:
--------------------------------------------------------------------------------
1 | /mvnw text eol=lf
2 | *.cmd text eol=crlf
3 | 


--------------------------------------------------------------------------------
/backend/.gitignore:
--------------------------------------------------------------------------------
 1 | HELP.md
 2 | target/
 3 | .mvn/wrapper/maven-wrapper.jar
 4 | !**/src/main/**/target/
 5 | !**/src/test/**/target/
 6 | 
 7 | ### STS ###
 8 | .apt_generated
 9 | .classpath
10 | .factorypath
11 | .project
12 | .settings
13 | .springBeans
14 | .sts4-cache
15 | 
16 | ### IntelliJ IDEA ###
17 | .idea
18 | *.iws
19 | *.iml
20 | *.ipr
21 | 
22 | ### NetBeans ###
23 | /nbproject/private/
24 | /nbbuild/
25 | /dist/
26 | /nbdist/
27 | /.nb-gradle/
28 | build/
29 | !**/src/main/**/build/
30 | !**/src/test/**/build/
31 | 
32 | ### VS Code ###
33 | .vscode/
34 | 


--------------------------------------------------------------------------------
/backend/.mvn/wrapper/maven-wrapper.properties:
--------------------------------------------------------------------------------
1 | wrapperVersion=3.3.4
2 | distributionType=only-script
3 | distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.11/apache-maven-3.9.11-bin.zip
4 | 


--------------------------------------------------------------------------------
/backend/Procfile:
--------------------------------------------------------------------------------
1 | web: java -jar target/*.jar
2 | 


--------------------------------------------------------------------------------
/backend/data/edupath_db.mv.db:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/sumitanand713/TeamCse_sjbit/main/backend/data/edupath_db.mv.db


--------------------------------------------------------------------------------
/backend/src/main/java/com/example/plrepa/PlrepaApplication.java:
--------------------------------------------------------------------------------
 1 | package com.example.plrepa;
 2 | 
 3 | import org.springframework.boot.SpringApplication;
 4 | import org.springframework.boot.autoconfigure.SpringBootApplication;
 5 | 
 6 | @SpringBootApplication
 7 | public class PlrepaApplication {
 8 | 
 9 | 	public static void main(String[] args) {
10 | 		SpringApplication.run(PlrepaApplication.class, args);
11 | 	}
12 | 
13 | }
14 | 


--------------------------------------------------------------------------------
/backend/src/main/java/com/example/plrepa/controller/AuthController.java:
--------------------------------------------------------------------------------
 1 | package com.example.plrepa.controller;
 2 | 
 3 | import com.example.plrepa.model.User;
 4 | import com.example.plrepa.repository.UserRepository;
 5 | import org.springframework.web.bind.annotation.*;
 6 | 
 7 | @RestController
 8 | @RequestMapping("/api/auth")
 9 | @CrossOrigin(origins = "*") // ALLOWS FRONTEND TO ACCESS BACKEND
10 | public class AuthController {
11 | 
12 |     private final UserRepository userRepository;
13 | 
14 |     public AuthController(UserRepository userRepository) {
15 |         this.userRepository = userRepository;
16 |     }
17 | 
18 |     @PostMapping("/register")
19 |     public User register(@RequestBody User user) {
20 |         return userRepository.save(user);
21 |     }
22 | 
23 |     @PostMapping("/login")
24 | public User login(@RequestBody User user) {
25 |     User u = userRepository.findByEmail(user.getEmail());
26 |     if (u != null && u.getPassword().equals(user.getPassword())) {
27 |         return u; // ✅ RETURN USER FULL OBJECT
28 |     } else {
29 |         return null;
30 |     }
31 | }
32 | 
33 | }


--------------------------------------------------------------------------------
/backend/src/main/java/com/example/plrepa/model/Exam.java:
--------------------------------------------------------------------------------
 1 | package com.example.plrepa.model;
 2 | 
 3 | import jakarta.persistence.*;
 4 | import lombok.Data;
 5 | import java.util.List;
 6 | 
 7 | @Data
 8 | @Entity
 9 | public class Exam {
10 | 
11 |     @Id
12 |     @GeneratedValue(strategy = GenerationType.IDENTITY)
13 |     private Long id;
14 | 
15 |     private String examName;
16 | 
17 |     @OneToMany(mappedBy = "exam", cascade = CascadeType.ALL)
18 |     private List<Subject> subjects;
19 | }
20 | 


--------------------------------------------------------------------------------
/backend/src/main/java/com/example/plrepa/model/Progress.java:
--------------------------------------------------------------------------------
 1 | package com.example.plrepa.model;
 2 | 
 3 | import jakarta.persistence.*;
 4 | import lombok.Getter;
 5 | import lombok.Setter;
 6 | 
 7 | @Entity
 8 | @Getter
 9 | @Setter
10 | public class Progress {
11 | 
12 |     @Id
13 |     @GeneratedValue(strategy = GenerationType.IDENTITY)
14 |     private Long id;
15 | 
16 |     private int progressPercent;   // Example: 42%
17 |     private int quizzesTaken;      // Example: 8 out of 10
18 |     private String studyPlanWeek;  // Example: Week 2
19 | 
20 |     @OneToOne
21 |     @JoinColumn(name = "user_id", unique = true) // One progress record per user
22 |     private User user;
23 | }
24 | 


--------------------------------------------------------------------------------
/backend/src/main/java/com/example/plrepa/model/Subject.java:
--------------------------------------------------------------------------------
 1 | package com.example.plrepa.model;
 2 | 
 3 | import jakarta.persistence.*;
 4 | import lombok.Data;
 5 | 
 6 | @Data
 7 | @Entity
 8 | public class Subject {
 9 | 
10 |     @Id
11 |     @GeneratedValue(strategy = GenerationType.IDENTITY)
12 |     private Long id;
13 | 
14 |     private String subjectName;
15 |     private int weightage;
16 | 
17 |     @ManyToOne
18 |     @JoinColumn(name = "exam_id")
19 |     private Exam exam;
20 | }
21 | 


--------------------------------------------------------------------------------
/backend/src/main/java/com/example/plrepa/repository/ExamRepository.java:
--------------------------------------------------------------------------------
1 | package com.example.plrepa.repository;
2 | 
3 | import com.example.plrepa.model.Exam;
4 | import org.springframework.data.jpa.repository.JpaRepository;
5 | 
6 | public interface ExamRepository extends JpaRepository<Exam, Long> {}
7 | 


--------------------------------------------------------------------------------
/backend/src/main/java/com/example/plrepa/repository/ProgressRepository.java:
--------------------------------------------------------------------------------
 1 | package com.example.plrepa.repository;
 2 | 
 3 | import com.example.plrepa.model.Progress;
 4 | import com.example.plrepa.model.User;
 5 | import org.springframework.data.jpa.repository.JpaRepository;
 6 | 
 7 | public interface ProgressRepository extends JpaRepository<Progress, Long> {
 8 |     Progress findByUser(User user);
 9 | }
10 | 


--------------------------------------------------------------------------------
/backend/src/main/java/com/example/plrepa/repository/SubjectRepository.java:
--------------------------------------------------------------------------------
 1 | package com.example.plrepa.repository;
 2 | 
 3 | import com.example.plrepa.model.Subject;
 4 | import org.springframework.data.jpa.repository.JpaRepository;
 5 | import java.util.List;
 6 | 
 7 | public interface SubjectRepository extends JpaRepository<Subject, Long> {
 8 |     List<Subject> findByExamId(Long examId);
 9 | }
10 | 


--------------------------------------------------------------------------------
/backend/src/main/java/com/example/plrepa/repository/UserRepository.java:
--------------------------------------------------------------------------------
1 | package com.example.plrepa.repository;
2 | 
3 | import com.example.plrepa.model.User;
4 | import org.springframework.data.jpa.repository.JpaRepository;
5 | 
6 | public interface UserRepository extends JpaRepository<User, Long> {
7 |     User findByEmail(String email);
8 | }
9 | 


--------------------------------------------------------------------------------
/backend/src/main/java/com/example/plrepa/service/StudyPlanService.java:
--------------------------------------------------------------------------------
 1 | package com.example.plrepa.service;
 2 | 
 3 | import com.example.plrepa.model.Subject;
 4 | import com.example.plrepa.repository.SubjectRepository;
 5 | import org.springframework.stereotype.Service;
 6 | import java.util.List;
 7 | 
 8 | @Service
 9 | public class StudyPlanService {
10 | 
11 |     private final SubjectRepository subjectRepository;
12 | 
13 |     public StudyPlanService(SubjectRepository subjectRepository) {
14 |         this.subjectRepository = subjectRepository;
15 |     }
16 | 
17 |     public List<Subject> getSubjectsByExam(Long examId) {
18 |         return subjectRepository.findByExamId(examId);
19 |     }
20 | }
21 | 


--------------------------------------------------------------------------------
/backend/src/main/resources/application.properties:
--------------------------------------------------------------------------------
 1 | # Use file-based H2 database (data will persist)
 2 | spring.datasource.url=jdbc:h2:file:./data/edupath_db
 3 | spring.datasource.driverClassName=org.h2.Driver
 4 | spring.datasource.username=sa
 5 | spring.datasource.password=
 6 | 
 7 | # Keep tables & data safe
 8 | spring.jpa.hibernate.ddl-auto=update
 9 | 
10 | # Show SQL logs (optional)
11 | spring.jpa.show-sql=true
12 | 
13 | # Enable H2 console
14 | spring.h2.console.enabled=true
15 | spring.h2.console.path=/h2-console
16 | 


--------------------------------------------------------------------------------
/backend/src/main/resources/data_backup.sql:
--------------------------------------------------------------------------------
 1 | INSERT INTO exam (id, exam_name) VALUES 
 2 | (1, '10th Standard'),
 3 | (2, 'PUC'),
 4 | (3, 'CET'),
 5 | (4, 'JEE'),
 6 | (5, 'NEET'),
 7 | (6, 'VTU Sem 3'),
 8 | (7, 'VTU Sem 5');
 9 | 
10 | INSERT INTO subject (subject_name, weightage, exam_id) VALUES
11 | ('Math', 5, 1),
12 | ('Science', 5, 1),
13 | ('English', 3, 1),
14 | 
15 | ('Physics', 5, 2),
16 | ('Chemistry', 5, 2),
17 | ('Mathematics', 5, 2),
18 | ('Biology', 4, 2),
19 | 
20 | ('Mathematics', 5, 3),
21 | ('Physics', 4, 3),
22 | ('Chemistry', 4, 3),
23 | 
24 | ('Mathematics', 6, 4),
25 | ('Physics', 6, 4),
26 | ('Chemistry', 5, 4),
27 | 
28 | ('Biology', 6, 5),
29 | ('Chemistry', 5, 5),
30 | ('Physics', 4, 5),
31 | 
32 | ('Data Structures', 5, 6),
33 | ('Digital Electronics', 4, 6),
34 | ('OOP', 4, 6),
35 | ('Discrete Math', 3, 6),
36 | 
37 | ('Computer Networks', 5, 7),
38 | ('Operating Systems', 5, 7),
39 | ('DBMS', 4, 7),
40 | ('Microprocessors', 4, 7);
41 | 


--------------------------------------------------------------------------------
/backend/src/test/java/com/example/plrepa/PlrepaApplicationTests.java:
--------------------------------------------------------------------------------
 1 | package com.example.plrepa;
 2 | 
 3 | import org.junit.jupiter.api.Test;
 4 | import org.springframework.boot.test.context.SpringBootTest;
 5 | 
 6 | @SpringBootTest
 7 | class PlrepaApplicationTests {
 8 | 
 9 | 	@Test
10 | 	void contextLoads() {
11 | 	}
12 | 
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/.vscode/settings.json:
--------------------------------------------------------------------------------
1 | {
2 |     "liveServer.settings.port": 5501
3 | }


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/scripts/check-format.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2023 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export {};
18 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/scripts/format-patterns.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export declare const formatPatterns: string[];
18 | export declare function getFormatPatternsString(): string;
19 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/scripts/license.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2023 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export declare function doLicense(write: boolean): Promise<boolean>;
18 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/scripts/run-format.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2023 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export {};
18 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/index.js.map:
--------------------------------------------------------------------------------
1 | {"version":3,"file":"index.js","sources":[],"sourcesContent":[],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/index.mjs.map:
--------------------------------------------------------------------------------
1 | {"version":3,"file":"index.mjs","sources":[],"sourcesContent":[],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/scripts/check-format.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2023 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export {};
18 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/scripts/format-patterns.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export declare const formatPatterns: string[];
18 | export declare function getFormatPatternsString(): string;
19 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/scripts/license.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2023 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export declare function doLicense(write: boolean): Promise<boolean>;
18 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/scripts/run-format.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2023 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export {};
18 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/src/index.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export * from "../types";
18 | export * from "./gen-ai";
19 | export * from "./errors";
20 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/src/methods/chat-session-helpers.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | import { Content, GenerateContentResponse } from "../../types";
18 | export declare function validateChatHistory(history: Content[]): void;
19 | /**
20 |  * Returns true if the response is valid (could be appended to the history), flase otherwise.
21 |  */
22 | export declare function isValidResponse(response: GenerateContentResponse): boolean;
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/src/methods/count-tokens.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | import { CountTokensRequest, CountTokensResponse, SingleRequestOptions } from "../../types";
18 | export declare function countTokens(apiKey: string, model: string, params: CountTokensRequest, singleRequestOptions: SingleRequestOptions): Promise<CountTokensResponse>;
19 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/src/server/constants.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export declare enum RpcTask {
18 |     UPLOAD = "upload",
19 |     LIST = "list",
20 |     GET = "get",
21 |     DELETE = "delete",
22 |     UPDATE = "update",
23 |     CREATE = "create"
24 | }
25 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/src/server/index.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export { GoogleAIFileManager } from "./file-manager";
18 | export { GoogleAICacheManager } from "./cache-manager";
19 | export * from "../../types/server";
20 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/types/index.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export * from "./content";
18 | export * from "./enums";
19 | export * from "./requests";
20 | export * from "./responses";
21 | export * from "./search-grounding";
22 | export { CachedContent, CachedContentBase } from "./server/caching";
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/server/types/server/index.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export * from "./files";
18 | export * from "./caching";
19 | export * from "./shared";
20 | export { RequestOptions, Tool, CodeExecutionTool, SingleRequestOptions, } from "../requests";
21 | export * from "../content";
22 | export { FunctionCallingMode } from "../enums";
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/src/index.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export * from "../types";
18 | export * from "./gen-ai";
19 | export * from "./errors";
20 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/src/methods/chat-session-helpers.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | import { Content, GenerateContentResponse } from "../../types";
18 | export declare function validateChatHistory(history: Content[]): void;
19 | /**
20 |  * Returns true if the response is valid (could be appended to the history), flase otherwise.
21 |  */
22 | export declare function isValidResponse(response: GenerateContentResponse): boolean;
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/src/methods/count-tokens.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | import { CountTokensRequest, CountTokensResponse, SingleRequestOptions } from "../../types";
18 | export declare function countTokens(apiKey: string, model: string, params: CountTokensRequest, singleRequestOptions: SingleRequestOptions): Promise<CountTokensResponse>;
19 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/src/methods/embed-content.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | import { BatchEmbedContentsRequest, BatchEmbedContentsResponse, EmbedContentRequest, EmbedContentResponse, RequestOptions } from "../../types";
18 | export declare function embedContent(apiKey: string, model: string, params: EmbedContentRequest, requestOptions?: RequestOptions): Promise<EmbedContentResponse>;
19 | export declare function batchEmbedContents(apiKey: string, model: string, params: BatchEmbedContentsRequest, requestOptions?: RequestOptions): Promise<BatchEmbedContentsResponse>;
20 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/src/server/constants.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export declare enum RpcTask {
18 |     UPLOAD = "upload",
19 |     LIST = "list",
20 |     GET = "get",
21 |     DELETE = "delete",
22 |     UPDATE = "update",
23 |     CREATE = "create"
24 | }
25 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/src/server/index.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export { GoogleAIFileManager } from "./file-manager";
18 | export { GoogleAICacheManager } from "./cache-manager";
19 | export * from "../../types/server";
20 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/tsdoc-metadata.json:
--------------------------------------------------------------------------------
 1 | // This file is read by tools that parse documentation comments conforming to the TSDoc standard.
 2 | // It should be published with your NPM package.  It should not be tracked by Git.
 3 | {
 4 |   "tsdocVersion": "0.12",
 5 |   "toolPackages": [
 6 |     {
 7 |       "packageName": "@microsoft/api-extractor",
 8 |       "packageVersion": "7.50.0"
 9 |     }
10 |   ]
11 | }
12 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/types/index.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export * from "./content";
18 | export * from "./enums";
19 | export * from "./requests";
20 | export * from "./responses";
21 | export * from "./search-grounding";
22 | export { CachedContent, CachedContentBase } from "./server/caching";
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/dist/types/server/index.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * @license
 3 |  * Copyright 2024 Google LLC
 4 |  *
 5 |  * Licensed under the Apache License, Version 2.0 (the "License");
 6 |  * you may not use this file except in compliance with the License.
 7 |  * You may obtain a copy of the License at
 8 |  *
 9 |  *   http://www.apache.org/licenses/LICENSE-2.0
10 |  *
11 |  * Unless required by applicable law or agreed to in writing, software
12 |  * distributed under the License is distributed on an "AS IS" BASIS,
13 |  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
14 |  * See the License for the specific language governing permissions and
15 |  * limitations under the License.
16 |  */
17 | export * from "./files";
18 | export * from "./caching";
19 | export * from "./shared";
20 | export { RequestOptions, Tool, CodeExecutionTool, SingleRequestOptions, } from "../requests";
21 | export * from "../content";
22 | export { FunctionCallingMode } from "../enums";
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/@google/generative-ai/server/package.json:
--------------------------------------------------------------------------------
1 | {
2 |   "name": "@google/generative-ai-server",
3 |   "description": "GoogleAI JS server-environment-only features",
4 |   "main": "../dist/server/index.js",
5 |   "browser": "../dist/server/index.mjs",
6 |   "module": "../dist/server/index.mjs",
7 |   "typings": "../dist/server/server.d.ts"
8 | }
9 | 


--------------------------------------------------------------------------------
/frontend/node_modules/bytes/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "bytes",
 3 |   "description": "Utility to parse a string bytes to bytes and vice-versa",
 4 |   "version": "3.1.2",
 5 |   "author": "TJ Holowaychuk <tj@vision-media.ca> (http://tjholowaychuk.com)",
 6 |   "contributors": [
 7 |     "Jed Watson <jed.watson@me.com>",
 8 |     "Théo FIDRY <theo.fidry@gmail.com>"
 9 |   ],
10 |   "license": "MIT",
11 |   "keywords": [
12 |     "byte",
13 |     "bytes",
14 |     "utility",
15 |     "parse",
16 |     "parser",
17 |     "convert",
18 |     "converter"
19 |   ],
20 |   "repository": "visionmedia/bytes.js",
21 |   "devDependencies": {
22 |     "eslint": "7.32.0",
23 |     "eslint-plugin-markdown": "2.2.1",
24 |     "mocha": "9.2.0",
25 |     "nyc": "15.1.0"
26 |   },
27 |   "files": [
28 |     "History.md",
29 |     "LICENSE",
30 |     "Readme.md",
31 |     "index.js"
32 |   ],
33 |   "engines": {
34 |     "node": ">= 0.8"
35 |   },
36 |   "scripts": {
37 |     "lint": "eslint .",
38 |     "test": "mocha --check-leaks --reporter spec",
39 |     "test-ci": "nyc --reporter=lcov --reporter=text npm test",
40 |     "test-cov": "nyc --reporter=html --reporter=text npm test"
41 |   }
42 | }
43 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"func-name-matching": 0,
 8 | 		"id-length": 0,
 9 | 		"new-cap": [2, {
10 | 			"capIsNewExceptions": [
11 | 				"GetIntrinsic",
12 | 			],
13 | 		}],
14 | 		"no-extra-parens": 0,
15 | 		"no-magic-numbers": 0,
16 | 	},
17 | }
18 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/call-bind-apply-helpers
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"exclude": [
 6 | 		"coverage",
 7 | 		"test"
 8 | 	]
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/actualApply.d.ts:
--------------------------------------------------------------------------------
1 | export = Reflect.apply;


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/actualApply.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var bind = require('function-bind');
 4 | 
 5 | var $apply = require('./functionApply');
 6 | var $call = require('./functionCall');
 7 | var $reflectApply = require('./reflectApply');
 8 | 
 9 | /** @type {import('./actualApply')} */
10 | module.exports = $reflectApply || bind.call($call, $apply);
11 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/applyBind.d.ts:
--------------------------------------------------------------------------------
 1 | import actualApply from './actualApply';
 2 | 
 3 | type TupleSplitHead<T extends any[], N extends number> = T['length'] extends N
 4 |   ? T
 5 |   : T extends [...infer R, any]
 6 |   ? TupleSplitHead<R, N>
 7 |   : never
 8 | 
 9 | type TupleSplitTail<T, N extends number, O extends any[] = []> = O['length'] extends N
10 |   ? T
11 |   : T extends [infer F, ...infer R]
12 |   ? TupleSplitTail<[...R], N, [...O, F]>
13 |   : never
14 | 
15 | type TupleSplit<T extends any[], N extends number> = [TupleSplitHead<T, N>, TupleSplitTail<T, N>]
16 | 
17 | declare function applyBind(...args: TupleSplit<Parameters<typeof actualApply>, 2>[1]): ReturnType<typeof actualApply>;
18 | 
19 | export = applyBind;


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/applyBind.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var bind = require('function-bind');
 4 | var $apply = require('./functionApply');
 5 | var actualApply = require('./actualApply');
 6 | 
 7 | /** @type {import('./applyBind')} */
 8 | module.exports = function applyBind() {
 9 | 	return actualApply(bind, $apply, arguments);
10 | };
11 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/functionApply.d.ts:
--------------------------------------------------------------------------------
1 | export = Function.prototype.apply;


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/functionApply.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./functionApply')} */
4 | module.exports = Function.prototype.apply;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/functionCall.d.ts:
--------------------------------------------------------------------------------
1 | export = Function.prototype.call;


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/functionCall.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./functionCall')} */
4 | module.exports = Function.prototype.call;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var bind = require('function-bind');
 4 | var $TypeError = require('es-errors/type');
 5 | 
 6 | var $call = require('./functionCall');
 7 | var $actualApply = require('./actualApply');
 8 | 
 9 | /** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
10 | module.exports = function callBindBasic(args) {
11 | 	if (args.length < 1 || typeof args[0] !== 'function') {
12 | 		throw new $TypeError('a function is required');
13 | 	}
14 | 	return $actualApply(bind, $call, args);
15 | };
16 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/reflectApply.d.ts:
--------------------------------------------------------------------------------
1 | declare const reflectApply: false | typeof Reflect.apply;
2 | 
3 | export = reflectApply;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/reflectApply.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./reflectApply')} */
4 | module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bind-apply-helpers/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 | 	"extends": "@ljharb/tsconfig",
3 | 	"compilerOptions": {
4 | 		"target": "es2021",
5 | 	},
6 | 	"exclude": [
7 | 		"coverage",
8 | 	],
9 | }


--------------------------------------------------------------------------------
/frontend/node_modules/call-bound/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"new-cap": [2, {
 8 | 			"capIsNewExceptions": [
 9 | 				"GetIntrinsic",
10 | 			],
11 | 		}],
12 | 	},
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bound/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/call-bound
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bound/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"exclude": [
 6 | 		"coverage",
 7 | 		"test"
 8 | 	]
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bound/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bound/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var GetIntrinsic = require('get-intrinsic');
 4 | 
 5 | var callBindBasic = require('call-bind-apply-helpers');
 6 | 
 7 | /** @type {(thisArg: string, searchString: string, position?: number) => number} */
 8 | var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);
 9 | 
10 | /** @type {import('.')} */
11 | module.exports = function callBoundIntrinsic(name, allowMissing) {
12 | 	/* eslint no-extra-parens: 0 */
13 | 
14 | 	var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ (GetIntrinsic(name, !!allowMissing));
15 | 	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
16 | 		return callBindBasic(/** @type {const} */ ([intrinsic]));
17 | 	}
18 | 	return intrinsic;
19 | };
20 | 


--------------------------------------------------------------------------------
/frontend/node_modules/call-bound/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@ljharb/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		"target": "ESNext",
 5 | 		"lib": ["es2024"],
 6 | 	},
 7 | 	"exclude": [
 8 | 		"coverage",
 9 | 	],
10 | }
11 | 


--------------------------------------------------------------------------------
/frontend/node_modules/content-disposition/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2014-2017 Douglas Christopher Wilson
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/content-type/HISTORY.md:
--------------------------------------------------------------------------------
 1 | 1.0.5 / 2023-01-29
 2 | ==================
 3 | 
 4 |   * perf: skip value escaping when unnecessary
 5 | 
 6 | 1.0.4 / 2017-09-11
 7 | ==================
 8 | 
 9 |   * perf: skip parameter parsing when no parameters
10 | 
11 | 1.0.3 / 2017-09-10
12 | ==================
13 | 
14 |   * perf: remove argument reassignment
15 | 
16 | 1.0.2 / 2016-05-09
17 | ==================
18 | 
19 |   * perf: enable strict mode
20 | 
21 | 1.0.1 / 2015-02-13
22 | ==================
23 | 
24 |   * Improve missing `Content-Type` header error message
25 | 
26 | 1.0.0 / 2015-02-01
27 | ==================
28 | 
29 |   * Initial implementation, derived from `media-typer@0.3.0`
30 | 


--------------------------------------------------------------------------------
/frontend/node_modules/content-type/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2015 Douglas Christopher Wilson
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/cookie-signature/Readme.md:
--------------------------------------------------------------------------------
 1 | 
 2 | # cookie-signature
 3 | 
 4 |   Sign and unsign cookies.
 5 | 
 6 | ## Example
 7 | 
 8 | ```js
 9 | var cookie = require('cookie-signature');
10 | 
11 | var val = cookie.sign('hello', 'tobiiscool');
12 | val.should.equal('hello.DGDUkGlIkCzPz+C0B064FNgHdEjox7ch8tOBGslZ5QI');
13 | 
14 | var val = cookie.sign('hello', 'tobiiscool');
15 | cookie.unsign(val, 'tobiiscool').should.equal('hello');
16 | cookie.unsign(val, 'luna').should.be.false;
17 | ```
18 | 
19 | ## License
20 | 
21 | MIT.
22 | 
23 | See LICENSE file for details.
24 | 


--------------------------------------------------------------------------------
/frontend/node_modules/cookie-signature/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "cookie-signature",
 3 |   "version": "1.2.2",
 4 |   "main": "index.js",
 5 |   "description": "Sign and unsign cookies",
 6 |   "keywords": ["cookie", "sign", "unsign"],
 7 |   "author": "TJ Holowaychuk <tj@learnboost.com>",
 8 |   "license": "MIT",
 9 |   "repository": {
10 |     "type": "git",
11 |     "url": "https://github.com/visionmedia/node-cookie-signature.git"
12 |   },
13 |   "dependencies": {},
14 |   "engines": {
15 |     "node": ">=6.6.0"
16 |   },
17 |   "devDependencies": {
18 |     "mocha": "*",
19 |     "should": "*"
20 |   },
21 |   "scripts": {
22 |     "test": "mocha --require should --reporter spec"
23 |   }
24 | }
25 | 


--------------------------------------------------------------------------------
/frontend/node_modules/cors/CONTRIBUTING.md:
--------------------------------------------------------------------------------
 1 | # contributing to `cors`
 2 | 
 3 | CORS is a node.js package for providing a [connect](http://www.senchalabs.org/connect/)/[express](http://expressjs.com/) middleware that can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options. Learn more about the project in [the README](README.md).
 4 | 
 5 | ## The CORS Spec
 6 | 
 7 | [http://www.w3.org/TR/cors/](http://www.w3.org/TR/cors/)
 8 | 
 9 | ## Pull Requests Welcome
10 | 
11 | * Include `'use strict';` in every javascript file.
12 | * 2 space indentation.
13 | * Please run the testing steps below before submitting.
14 | 
15 | ## Testing
16 | 
17 | ```bash
18 | $ npm install
19 | $ npm test
20 | ```
21 | 
22 | ## Interactive Testing Harness
23 | 
24 | [http://node-cors-client.herokuapp.com](http://node-cors-client.herokuapp.com)
25 | 
26 | Related git repositories:
27 | 
28 | * [https://github.com/TroyGoode/node-cors-server](https://github.com/TroyGoode/node-cors-server)
29 | * [https://github.com/TroyGoode/node-cors-client](https://github.com/TroyGoode/node-cors-client)
30 | 
31 | ## License
32 | 
33 | [MIT License](http://www.opensource.org/licenses/mit-license.php)
34 | 


--------------------------------------------------------------------------------
/frontend/node_modules/cors/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2013 Troy Goode <troygoode@gmail.com>
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/cors/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "cors",
 3 |   "description": "Node.js CORS middleware",
 4 |   "version": "2.8.5",
 5 |   "author": "Troy Goode <troygoode@gmail.com> (https://github.com/troygoode/)",
 6 |   "license": "MIT",
 7 |   "keywords": [
 8 |     "cors",
 9 |     "express",
10 |     "connect",
11 |     "middleware"
12 |   ],
13 |   "repository": "expressjs/cors",
14 |   "main": "./lib/index.js",
15 |   "dependencies": {
16 |     "object-assign": "^4",
17 |     "vary": "^1"
18 |   },
19 |   "devDependencies": {
20 |     "after": "0.8.2",
21 |     "eslint": "2.13.1",
22 |     "express": "4.16.3",
23 |     "mocha": "5.2.0",
24 |     "nyc": "13.1.0",
25 |     "supertest": "3.3.0"
26 |   },
27 |   "files": [
28 |     "lib/index.js",
29 |     "CONTRIBUTING.md",
30 |     "HISTORY.md",
31 |     "LICENSE",
32 |     "README.md"
33 |   ],
34 |   "engines": {
35 |     "node": ">= 0.10"
36 |   },
37 |   "scripts": {
38 |     "test": "npm run lint && nyc --reporter=html --reporter=text mocha --require test/support/env",
39 |     "lint": "eslint lib test"
40 |   }
41 | }
42 | 


--------------------------------------------------------------------------------
/frontend/node_modules/debug/src/index.js:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Detect Electron renderer / nwjs process, which is node, but we should
 3 |  * treat as a browser.
 4 |  */
 5 | 
 6 | if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
 7 | 	module.exports = require('./browser.js');
 8 | } else {
 9 | 	module.exports = require('./node.js');
10 | }
11 | 


--------------------------------------------------------------------------------
/frontend/node_modules/depd/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2014-2018 Douglas Christopher Wilson
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/dunder-proto/.eslintrc:
--------------------------------------------------------------------------------
1 | {
2 | 	"root": true,
3 | 
4 | 	"extends": "@ljharb",
5 | }
6 | 


--------------------------------------------------------------------------------
/frontend/node_modules/dunder-proto/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/dunder-proto
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/dunder-proto/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"lines": 86,
 6 | 	"statements": 85.93,
 7 | 	"functions": 82.43,
 8 | 	"branches": 76.06,
 9 | 	"exclude": [
10 | 		"coverage",
11 | 		"test"
12 | 	]
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/dunder-proto/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 ECMAScript Shims
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/dunder-proto/get.d.ts:
--------------------------------------------------------------------------------
1 | declare function getDunderProto(target: {}): object | null;
2 | 
3 | declare const x: false | typeof getDunderProto;
4 | 
5 | export = x;


--------------------------------------------------------------------------------
/frontend/node_modules/dunder-proto/get.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var callBind = require('call-bind-apply-helpers');
 4 | var gOPD = require('gopd');
 5 | 
 6 | var hasProtoAccessor;
 7 | try {
 8 | 	// eslint-disable-next-line no-extra-parens, no-proto
 9 | 	hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
10 | } catch (e) {
11 | 	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
12 | 		throw e;
13 | 	}
14 | }
15 | 
16 | // eslint-disable-next-line no-extra-parens
17 | var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));
18 | 
19 | var $Object = Object;
20 | var $getPrototypeOf = $Object.getPrototypeOf;
21 | 
22 | /** @type {import('./get')} */
23 | module.exports = desc && typeof desc.get === 'function'
24 | 	? callBind([desc.get])
25 | 	: typeof $getPrototypeOf === 'function'
26 | 		? /** @type {import('./get')} */ function getDunder(value) {
27 | 			// eslint-disable-next-line eqeqeq
28 | 			return $getPrototypeOf(value == null ? value : $Object(value));
29 | 		}
30 | 		: false;
31 | 


--------------------------------------------------------------------------------
/frontend/node_modules/dunder-proto/set.d.ts:
--------------------------------------------------------------------------------
1 | declare function setDunderProto<P extends null | object>(target: {}, proto: P): P;
2 | 
3 | declare const x: false | typeof setDunderProto;
4 | 
5 | export = x;


--------------------------------------------------------------------------------
/frontend/node_modules/dunder-proto/test/index.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | require('./get');
4 | require('./set');
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/dunder-proto/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@ljharb/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		"target": "ES2021",
 5 | 	},
 6 | 	"exclude": [
 7 | 		"coverage",
 8 | 	],
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/ee-first/LICENSE:
--------------------------------------------------------------------------------
 1 | 
 2 | The MIT License (MIT)
 3 | 
 4 | Copyright (c) 2014 Jonathan Ong me@jongleberry.com
 5 | 
 6 | Permission is hereby granted, free of charge, to any person obtaining a copy
 7 | of this software and associated documentation files (the "Software"), to deal
 8 | in the Software without restriction, including without limitation the rights
 9 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
10 | copies of the Software, and to permit persons to whom the Software is
11 | furnished to do so, subject to the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be included in
14 | all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
17 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
18 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
19 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
20 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
21 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
22 | THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/ee-first/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "ee-first",
 3 |   "description": "return the first event in a set of ee/event pairs",
 4 |   "version": "1.1.1",
 5 |   "author": {
 6 |     "name": "Jonathan Ong",
 7 |     "email": "me@jongleberry.com",
 8 |     "url": "http://jongleberry.com",
 9 |     "twitter": "https://twitter.com/jongleberry"
10 |   },
11 |   "contributors": [
12 |     "Douglas Christopher Wilson <doug@somethingdoug.com>"
13 |   ],
14 |   "license": "MIT",
15 |   "repository": "jonathanong/ee-first",
16 |   "devDependencies": {
17 |     "istanbul": "0.3.9",
18 |     "mocha": "2.2.5"
19 |   },
20 |   "files": [
21 |     "index.js",
22 |     "LICENSE"
23 |   ],
24 |   "scripts": {
25 |     "test": "mocha --reporter spec --bail --check-leaks test/",
26 |     "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/",
27 |     "test-travis": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/"
28 |   }
29 | }
30 | 


--------------------------------------------------------------------------------
/frontend/node_modules/encodeurl/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2016 Douglas Christopher Wilson
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-define-property/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"new-cap": ["error", {
 8 | 			"capIsNewExceptions": [
 9 | 				"GetIntrinsic",
10 | 			],
11 | 		}],
12 | 	},
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-define-property/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/es-define-property
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with a single custom sponsorship URL
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-define-property/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"exclude": [
 6 | 		"coverage",
 7 | 		"test"
 8 | 	]
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-define-property/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-define-property/index.d.ts:
--------------------------------------------------------------------------------
1 | declare const defineProperty: false | typeof Object.defineProperty;
2 | 
3 | export = defineProperty;


--------------------------------------------------------------------------------
/frontend/node_modules/es-define-property/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | /** @type {import('.')} */
 4 | var $defineProperty = Object.defineProperty || false;
 5 | if ($defineProperty) {
 6 | 	try {
 7 | 		$defineProperty({}, 'a', { value: 1 });
 8 | 	} catch (e) {
 9 | 		// IE 8 has a broken defineProperty
10 | 		$defineProperty = false;
11 | 	}
12 | }
13 | 
14 | module.exports = $defineProperty;
15 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-define-property/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@ljharb/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		"target": "es2022",
 5 | 	},
 6 | 	"exclude": [
 7 | 		"coverage",
 8 | 		"test/list-exports"
 9 | 	],
10 | }
11 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/.eslintrc:
--------------------------------------------------------------------------------
1 | {
2 | 	"root": true,
3 | 
4 | 	"extends": "@ljharb",
5 | }
6 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/es-errors
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with a single custom sponsorship URL
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/eval.d.ts:
--------------------------------------------------------------------------------
1 | declare const EvalError: EvalErrorConstructor;
2 | 
3 | export = EvalError;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/eval.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./eval')} */
4 | module.exports = EvalError;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/index.d.ts:
--------------------------------------------------------------------------------
1 | declare const Error: ErrorConstructor;
2 | 
3 | export = Error;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/index.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('.')} */
4 | module.exports = Error;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/range.d.ts:
--------------------------------------------------------------------------------
1 | declare const RangeError: RangeErrorConstructor;
2 | 
3 | export = RangeError;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/range.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./range')} */
4 | module.exports = RangeError;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/ref.d.ts:
--------------------------------------------------------------------------------
1 | declare const ReferenceError: ReferenceErrorConstructor;
2 | 
3 | export = ReferenceError;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/ref.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./ref')} */
4 | module.exports = ReferenceError;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/syntax.d.ts:
--------------------------------------------------------------------------------
1 | declare const SyntaxError: SyntaxErrorConstructor;
2 | 
3 | export = SyntaxError;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/syntax.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./syntax')} */
4 | module.exports = SyntaxError;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/test/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var test = require('tape');
 4 | 
 5 | var E = require('../');
 6 | var R = require('../range');
 7 | var Ref = require('../ref');
 8 | var S = require('../syntax');
 9 | var T = require('../type');
10 | 
11 | test('errors', function (t) {
12 | 	t.equal(E, Error);
13 | 	t.equal(R, RangeError);
14 | 	t.equal(Ref, ReferenceError);
15 | 	t.equal(S, SyntaxError);
16 | 	t.equal(T, TypeError);
17 | 
18 | 	t.end();
19 | });
20 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/type.d.ts:
--------------------------------------------------------------------------------
1 | declare const TypeError: TypeErrorConstructor
2 | 
3 | export = TypeError;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/type.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./type')} */
4 | module.exports = TypeError;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/uri.d.ts:
--------------------------------------------------------------------------------
1 | declare const URIError: URIErrorConstructor;
2 | 
3 | export = URIError;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-errors/uri.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./uri')} */
4 | module.exports = URIError;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"eqeqeq": ["error", "allow-null"],
 8 | 		"id-length": "off",
 9 | 		"new-cap": ["error", {
10 | 			"capIsNewExceptions": [
11 | 				"RequireObjectCoercible",
12 | 				"ToObject",
13 | 			],
14 | 		}],
15 | 	},
16 | }
17 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/es-object
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with a single custom sponsorship URL
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/RequireObjectCoercible.d.ts:
--------------------------------------------------------------------------------
1 | declare function RequireObjectCoercible<T extends {}>(value: T, optMessage?: string): T;
2 | 
3 | export = RequireObjectCoercible;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/RequireObjectCoercible.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var $TypeError = require('es-errors/type');
 4 | 
 5 | /** @type {import('./RequireObjectCoercible')} */
 6 | module.exports = function RequireObjectCoercible(value) {
 7 | 	if (value == null) {
 8 | 		throw new $TypeError((arguments.length > 0 && arguments[1]) || ('Cannot call method on ' + value));
 9 | 	}
10 | 	return value;
11 | };
12 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/ToObject.d.ts:
--------------------------------------------------------------------------------
1 | declare function ToObject<T extends object>(value: number): Number;
2 | declare function ToObject<T extends object>(value: boolean): Boolean;
3 | declare function ToObject<T extends object>(value: string): String;
4 | declare function ToObject<T extends object>(value: bigint): BigInt;
5 | declare function ToObject<T extends object>(value: T): T;
6 | 
7 | export = ToObject;
8 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/ToObject.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var $Object = require('./');
 4 | var RequireObjectCoercible = require('./RequireObjectCoercible');
 5 | 
 6 | /** @type {import('./ToObject')} */
 7 | module.exports = function ToObject(value) {
 8 | 	RequireObjectCoercible(value);
 9 | 	return $Object(value);
10 | };
11 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/index.d.ts:
--------------------------------------------------------------------------------
1 | declare const Object: ObjectConstructor;
2 | 
3 | export = Object;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/index.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('.')} */
4 | module.exports = Object;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/isObject.d.ts:
--------------------------------------------------------------------------------
1 | declare function isObject(x: unknown): x is object;
2 | 
3 | export = isObject;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/isObject.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./isObject')} */
4 | module.exports = function isObject(x) {
5 | 	return !!x && (typeof x === 'function' || typeof x === 'object');
6 | };
7 | 


--------------------------------------------------------------------------------
/frontend/node_modules/es-object-atoms/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 | 	"extends": "@ljharb/tsconfig",
3 | 	"compilerOptions": {
4 | 		"target": "es5",
5 | 	},
6 | }
7 | 


--------------------------------------------------------------------------------
/frontend/node_modules/escape-html/Readme.md:
--------------------------------------------------------------------------------
 1 | 
 2 | # escape-html
 3 | 
 4 |   Escape string for use in HTML
 5 | 
 6 | ## Example
 7 | 
 8 | ```js
 9 | var escape = require('escape-html');
10 | var html = escape('foo & bar');
11 | // -> foo &amp; bar
12 | ```
13 | 
14 | ## Benchmark
15 | 
16 | ```
17 | $ npm run-script bench
18 | 
19 | > escape-html@1.0.3 bench nodejs-escape-html
20 | > node benchmark/index.js
21 | 
22 | 
23 |   http_parser@1.0
24 |   node@0.10.33
25 |   v8@3.14.5.9
26 |   ares@1.9.0-DEV
27 |   uv@0.10.29
28 |   zlib@1.2.3
29 |   modules@11
30 |   openssl@1.0.1j
31 | 
32 |   1 test completed.
33 |   2 tests completed.
34 |   3 tests completed.
35 | 
36 |   no special characters    x 19,435,271 ops/sec ±0.85% (187 runs sampled)
37 |   single special character x  6,132,421 ops/sec ±0.67% (194 runs sampled)
38 |   many special characters  x  3,175,826 ops/sec ±0.65% (193 runs sampled)
39 | ```
40 | 
41 | ## License
42 | 
43 |   MIT


--------------------------------------------------------------------------------
/frontend/node_modules/escape-html/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "escape-html",
 3 |   "description": "Escape string for use in HTML",
 4 |   "version": "1.0.3",
 5 |   "license": "MIT",
 6 |   "keywords": [
 7 |     "escape",
 8 |     "html",
 9 |     "utility"
10 |   ],
11 |   "repository": "component/escape-html",
12 |   "devDependencies": {
13 |     "benchmark": "1.0.0",
14 |     "beautify-benchmark": "0.2.4"
15 |   },
16 |   "files": [
17 |     "LICENSE",
18 |     "Readme.md",
19 |     "index.js"
20 |   ],
21 |   "scripts": {
22 |     "bench": "node benchmark/index.js"
23 |   }
24 | }
25 | 


--------------------------------------------------------------------------------
/frontend/node_modules/etag/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2014-2016 Douglas Christopher Wilson
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/express/index.js:
--------------------------------------------------------------------------------
 1 | /*!
 2 |  * express
 3 |  * Copyright(c) 2009-2013 TJ Holowaychuk
 4 |  * Copyright(c) 2013 Roman Shtylman
 5 |  * Copyright(c) 2014-2015 Douglas Christopher Wilson
 6 |  * MIT Licensed
 7 |  */
 8 | 
 9 | 'use strict';
10 | 
11 | module.exports = require('./lib/express');
12 | 


--------------------------------------------------------------------------------
/frontend/node_modules/forwarded/HISTORY.md:
--------------------------------------------------------------------------------
 1 | 0.2.0 / 2021-05-31
 2 | ==================
 3 | 
 4 |   * Use `req.socket` over deprecated `req.connection`
 5 | 
 6 | 0.1.2 / 2017-09-14
 7 | ==================
 8 | 
 9 |   * perf: improve header parsing
10 |   * perf: reduce overhead when no `X-Forwarded-For` header
11 | 
12 | 0.1.1 / 2017-09-10
13 | ==================
14 | 
15 |   * Fix trimming leading / trailing OWS
16 |   * perf: hoist regular expression
17 | 
18 | 0.1.0 / 2014-09-21
19 | ==================
20 | 
21 |   * Initial release
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/forwarded/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2014-2017 Douglas Christopher Wilson
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/function-bind/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"func-name-matching": 0,
 8 | 		"indent": [2, 4],
 9 | 		"no-new-func": [1],
10 | 	},
11 | 
12 | 	"overrides": [
13 | 		{
14 | 			"files": "test/**",
15 | 			"rules": {
16 | 				"max-lines-per-function": 0,
17 | 				"strict": [0]
18 | 			},
19 | 		},
20 | 	],
21 | }
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/function-bind/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/function-bind
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/function-bind/.github/SECURITY.md:
--------------------------------------------------------------------------------
1 | # Security
2 | 
3 | Please email [@ljharb](https://github.com/ljharb) or see https://tidelift.com/security if you have a potential security vulnerability to report.
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/function-bind/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"lines": 86,
 6 | 	"statements": 85.93,
 7 | 	"functions": 82.43,
 8 | 	"branches": 76.06,
 9 | 	"exclude": [
10 | 		"coverage",
11 | 		"test"
12 | 	]
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/function-bind/LICENSE:
--------------------------------------------------------------------------------
 1 | Copyright (c) 2013 Raynos.
 2 | 
 3 | Permission is hereby granted, free of charge, to any person obtaining a copy
 4 | of this software and associated documentation files (the "Software"), to deal
 5 | in the Software without restriction, including without limitation the rights
 6 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 7 | copies of the Software, and to permit persons to whom the Software is
 8 | furnished to do so, subject to the following conditions:
 9 | 
10 | The above copyright notice and this permission notice shall be included in
11 | all copies or substantial portions of the Software.
12 | 
13 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
14 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
15 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
16 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
17 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
18 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
19 | THE SOFTWARE.
20 | 
21 | 


--------------------------------------------------------------------------------
/frontend/node_modules/function-bind/index.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | var implementation = require('./implementation');
4 | 
5 | module.exports = Function.prototype.bind || implementation;
6 | 


--------------------------------------------------------------------------------
/frontend/node_modules/function-bind/test/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"rules": {
 3 | 		"array-bracket-newline": 0,
 4 | 		"array-element-newline": 0,
 5 | 		"max-statements-per-line": [2, { "max": 2 }],
 6 | 		"no-invalid-this": 0,
 7 | 		"no-magic-numbers": 0,
 8 | 	}
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-intrinsic/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"env": {
 7 | 		"es6": true,
 8 | 		"es2017": true,
 9 | 		"es2020": true,
10 | 		"es2021": true,
11 | 		"es2022": true,
12 | 	},
13 | 
14 | 	"globals": {
15 | 		"Float16Array": false,
16 | 	},
17 | 
18 | 	"rules": {
19 | 		"array-bracket-newline": 0,
20 | 		"complexity": 0,
21 | 		"eqeqeq": [2, "allow-null"],
22 | 		"func-name-matching": 0,
23 | 		"id-length": 0,
24 | 		"max-lines": 0,
25 | 		"max-lines-per-function": [2, 90],
26 | 		"max-params": [2, 4],
27 | 		"max-statements": 0,
28 | 		"max-statements-per-line": [2, { "max": 2 }],
29 | 		"multiline-comment-style": 0,
30 | 		"no-magic-numbers": 0,
31 | 		"sort-keys": 0,
32 | 	},
33 | 
34 | 	"overrides": [
35 | 		{
36 | 			"files": "test/**",
37 | 			"rules": {
38 | 				"new-cap": 0,
39 | 			},
40 | 		},
41 | 	],
42 | }
43 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-intrinsic/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/get-intrinsic
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-intrinsic/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"exclude": [
 6 | 		"coverage",
 7 | 		"test"
 8 | 	]
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-intrinsic/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2020 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"id-length": "off",
 8 | 		"sort-keys": "off",
 9 | 	},
10 | }
11 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/get-proto
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"exclude": [
 6 | 		"coverage",
 7 | 		"test"
 8 | 	]
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/CHANGELOG.md:
--------------------------------------------------------------------------------
 1 | # Changelog
 2 | 
 3 | All notable changes to this project will be documented in this file.
 4 | 
 5 | The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
 6 | and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
 7 | 
 8 | ## [v1.0.1](https://github.com/ljharb/get-proto/compare/v1.0.0...v1.0.1) - 2025-01-02
 9 | 
10 | ### Commits
11 | 
12 | - [Fix] for the `Object.getPrototypeOf` window, throw for non-objects [`7fe6508`](https://github.com/ljharb/get-proto/commit/7fe6508b71419ebe1976bedb86001d1feaeaa49a)
13 | 
14 | ## v1.0.0 - 2025-01-01
15 | 
16 | ### Commits
17 | 
18 | - Initial implementation, tests, readme, types [`5c70775`](https://github.com/ljharb/get-proto/commit/5c707751e81c3deeb2cf980d185fc7fd43611415)
19 | - Initial commit [`7c65c2a`](https://github.com/ljharb/get-proto/commit/7c65c2ad4e33d5dae2f219ebe1a046ae2256972c)
20 | - npm init [`0b8cf82`](https://github.com/ljharb/get-proto/commit/0b8cf824c9634e4a34ef7dd2a2cdc5be6ac79518)
21 | - Only apps should have lockfiles [`a6d1bff`](https://github.com/ljharb/get-proto/commit/a6d1bffc364f5828377cea7194558b2dbef7aea2)
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2025 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/Object.getPrototypeOf.d.ts:
--------------------------------------------------------------------------------
1 | declare function getProto<O extends object>(object: O): object | null;
2 | 
3 | declare const x: typeof getProto | null;
4 | 
5 | export = x;


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/Object.getPrototypeOf.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | var $Object = require('es-object-atoms');
4 | 
5 | /** @type {import('./Object.getPrototypeOf')} */
6 | module.exports = $Object.getPrototypeOf || null;
7 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/Reflect.getPrototypeOf.d.ts:
--------------------------------------------------------------------------------
1 | declare const x: typeof Reflect.getPrototypeOf | null;
2 | 
3 | export = x;


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/Reflect.getPrototypeOf.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./Reflect.getPrototypeOf')} */
4 | module.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/index.d.ts:
--------------------------------------------------------------------------------
1 | declare function getProto<O extends object>(object: O): object | null;
2 | 
3 | declare const x: typeof getProto | null;
4 | 
5 | export = x;
6 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var reflectGetProto = require('./Reflect.getPrototypeOf');
 4 | var originalGetProto = require('./Object.getPrototypeOf');
 5 | 
 6 | var getDunderProto = require('dunder-proto/get');
 7 | 
 8 | /** @type {import('.')} */
 9 | module.exports = reflectGetProto
10 | 	? function getProto(O) {
11 | 		// @ts-expect-error TS can't narrow inside a closure, for some reason
12 | 		return reflectGetProto(O);
13 | 	}
14 | 	: originalGetProto
15 | 		? function getProto(O) {
16 | 			if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
17 | 				throw new TypeError('getProto: not an object');
18 | 			}
19 | 			// @ts-expect-error TS can't narrow inside a closure, for some reason
20 | 			return originalGetProto(O);
21 | 		}
22 | 		: getDunderProto
23 | 			? function getProto(O) {
24 | 				// @ts-expect-error TS can't narrow inside a closure, for some reason
25 | 				return getDunderProto(O);
26 | 			}
27 | 			: null;
28 | 


--------------------------------------------------------------------------------
/frontend/node_modules/get-proto/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@ljharb/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		//"target": "es2021",
 5 | 	},
 6 | 	"exclude": [
 7 | 		"coverage",
 8 | 	],
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/gopd/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"func-style": [2, "declaration"],
 8 | 		"id-length": 0,
 9 | 		"multiline-comment-style": 0,
10 | 		"new-cap": [2, {
11 | 			"capIsNewExceptions": [
12 | 				"GetIntrinsic",
13 | 			],
14 | 		}],
15 | 	},
16 | }
17 | 


--------------------------------------------------------------------------------
/frontend/node_modules/gopd/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/gopd
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/gopd/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2022 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/gopd/gOPD.d.ts:
--------------------------------------------------------------------------------
1 | export = Object.getOwnPropertyDescriptor;
2 | 


--------------------------------------------------------------------------------
/frontend/node_modules/gopd/gOPD.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./gOPD')} */
4 | module.exports = Object.getOwnPropertyDescriptor;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/gopd/index.d.ts:
--------------------------------------------------------------------------------
1 | declare function gOPD<O extends object, K extends keyof O>(obj: O, prop: K): PropertyDescriptor | undefined;
2 | 
3 | declare const fn: typeof gOPD | undefined | null;
4 | 
5 | export = fn;


--------------------------------------------------------------------------------
/frontend/node_modules/gopd/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | /** @type {import('.')} */
 4 | var $gOPD = require('./gOPD');
 5 | 
 6 | if ($gOPD) {
 7 | 	try {
 8 | 		$gOPD([], 'length');
 9 | 	} catch (e) {
10 | 		// IE 8 has a broken gOPD
11 | 		$gOPD = null;
12 | 	}
13 | }
14 | 
15 | module.exports = $gOPD;
16 | 


--------------------------------------------------------------------------------
/frontend/node_modules/gopd/test/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var test = require('tape');
 4 | var gOPD = require('../');
 5 | 
 6 | test('gOPD', function (t) {
 7 | 	t.test('supported', { skip: !gOPD }, function (st) {
 8 | 		st.equal(typeof gOPD, 'function', 'is a function');
 9 | 
10 | 		var obj = { x: 1 };
11 | 		st.ok('x' in obj, 'property exists');
12 | 
13 | 		// @ts-expect-error TS can't figure out narrowing from `skip`
14 | 		var desc = gOPD(obj, 'x');
15 | 		st.deepEqual(
16 | 			desc,
17 | 			{
18 | 				configurable: true,
19 | 				enumerable: true,
20 | 				value: 1,
21 | 				writable: true
22 | 			},
23 | 			'descriptor is as expected'
24 | 		);
25 | 
26 | 		st.end();
27 | 	});
28 | 
29 | 	t.test('not supported', { skip: !!gOPD }, function (st) {
30 | 		st.notOk(gOPD, 'is falsy');
31 | 
32 | 		st.end();
33 | 	});
34 | 
35 | 	t.end();
36 | });
37 | 


--------------------------------------------------------------------------------
/frontend/node_modules/gopd/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@ljharb/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		"target": "es2021",
 5 | 	},
 6 | 	"exclude": [
 7 | 		"coverage",
 8 | 	],
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"max-statements-per-line": [2, { "max": 2 }],
 8 | 		"no-magic-numbers": 0,
 9 | 		"multiline-comment-style": 0,
10 | 	}
11 | }
12 | 


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/has-symbols
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"exclude": [
 6 | 		"coverage",
 7 | 		"test"
 8 | 	]
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2016 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/index.d.ts:
--------------------------------------------------------------------------------
1 | declare function hasNativeSymbols(): boolean;
2 | 
3 | export = hasNativeSymbols;


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var origSymbol = typeof Symbol !== 'undefined' && Symbol;
 4 | var hasSymbolSham = require('./shams');
 5 | 
 6 | /** @type {import('.')} */
 7 | module.exports = function hasNativeSymbols() {
 8 | 	if (typeof origSymbol !== 'function') { return false; }
 9 | 	if (typeof Symbol !== 'function') { return false; }
10 | 	if (typeof origSymbol('foo') !== 'symbol') { return false; }
11 | 	if (typeof Symbol('bar') !== 'symbol') { return false; }
12 | 
13 | 	return hasSymbolSham();
14 | };
15 | 


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/shams.d.ts:
--------------------------------------------------------------------------------
1 | declare function hasSymbolShams(): boolean;
2 | 
3 | export = hasSymbolShams;


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/test/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var test = require('tape');
 4 | var hasSymbols = require('../');
 5 | var runSymbolTests = require('./tests');
 6 | 
 7 | test('interface', function (t) {
 8 | 	t.equal(typeof hasSymbols, 'function', 'is a function');
 9 | 	t.equal(typeof hasSymbols(), 'boolean', 'returns a boolean');
10 | 	t.end();
11 | });
12 | 
13 | test('Symbols are supported', { skip: !hasSymbols() }, function (t) {
14 | 	runSymbolTests(t);
15 | 	t.end();
16 | });
17 | 
18 | test('Symbols are not supported', { skip: hasSymbols() }, function (t) {
19 | 	t.equal(typeof Symbol, 'undefined', 'global Symbol is undefined');
20 | 	t.equal(typeof Object.getOwnPropertySymbols, 'undefined', 'Object.getOwnPropertySymbols does not exist');
21 | 	t.end();
22 | });
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/test/shams/core-js.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var test = require('tape');
 4 | 
 5 | if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
 6 | 	test('has native Symbol support', function (t) {
 7 | 		t.equal(typeof Symbol, 'function');
 8 | 		t.equal(typeof Symbol(), 'symbol');
 9 | 		t.end();
10 | 	});
11 | 	// @ts-expect-error TS is stupid and doesn't know about top level return
12 | 	return;
13 | }
14 | 
15 | var hasSymbols = require('../../shams');
16 | 
17 | test('polyfilled Symbols', function (t) {
18 | 	/* eslint-disable global-require */
19 | 	t.equal(hasSymbols(), false, 'hasSymbols is false before polyfilling');
20 | 	require('core-js/fn/symbol');
21 | 	require('core-js/fn/symbol/to-string-tag');
22 | 
23 | 	require('../tests')(t);
24 | 
25 | 	var hasSymbolsAfter = hasSymbols();
26 | 	t.equal(hasSymbolsAfter, true, 'hasSymbols is true after polyfilling');
27 | 	/* eslint-enable global-require */
28 | 	t.end();
29 | });
30 | 


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/test/shams/get-own-property-symbols.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var test = require('tape');
 4 | 
 5 | if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
 6 | 	test('has native Symbol support', function (t) {
 7 | 		t.equal(typeof Symbol, 'function');
 8 | 		t.equal(typeof Symbol(), 'symbol');
 9 | 		t.end();
10 | 	});
11 | 	// @ts-expect-error TS is stupid and doesn't know about top level return
12 | 	return;
13 | }
14 | 
15 | var hasSymbols = require('../../shams');
16 | 
17 | test('polyfilled Symbols', function (t) {
18 | 	/* eslint-disable global-require */
19 | 	t.equal(hasSymbols(), false, 'hasSymbols is false before polyfilling');
20 | 
21 | 	require('get-own-property-symbols');
22 | 
23 | 	require('../tests')(t);
24 | 
25 | 	var hasSymbolsAfter = hasSymbols();
26 | 	t.equal(hasSymbolsAfter, true, 'hasSymbols is true after polyfilling');
27 | 	/* eslint-enable global-require */
28 | 	t.end();
29 | });
30 | 


--------------------------------------------------------------------------------
/frontend/node_modules/has-symbols/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@ljharb/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		"target": "ES2021",
 5 | 		"maxNodeModuleJsDepth": 0,
 6 | 	},
 7 | 	"exclude": [
 8 | 		"coverage"
 9 | 	]
10 | }
11 | 


--------------------------------------------------------------------------------
/frontend/node_modules/hasown/.eslintrc:
--------------------------------------------------------------------------------
1 | {
2 | 	"root": true,
3 | 
4 | 	"extends": "@ljharb",
5 | }
6 | 


--------------------------------------------------------------------------------
/frontend/node_modules/hasown/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/hasown
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with a single custom sponsorship URL
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/hasown/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"lines": 86,
 6 | 	"statements": 85.93,
 7 | 	"functions": 82.43,
 8 | 	"branches": 76.06,
 9 | 	"exclude": [
10 | 		"coverage",
11 | 		"test"
12 | 	]
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/hasown/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) Jordan Harband and contributors
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/hasown/index.d.ts:
--------------------------------------------------------------------------------
1 | declare function hasOwn<O, K extends PropertyKey, V = unknown>(o: O, p: K): o is O & Record<K, V>;
2 | 
3 | export = hasOwn;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/hasown/index.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | var call = Function.prototype.call;
4 | var $hasOwn = Object.prototype.hasOwnProperty;
5 | var bind = require('function-bind');
6 | 
7 | /** @type {import('.')} */
8 | module.exports = bind.call(call, $hasOwn);
9 | 


--------------------------------------------------------------------------------
/frontend/node_modules/hasown/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "@ljharb/tsconfig",
3 |   "exclude": [
4 |     "coverage",
5 |   ],
6 | }
7 | 


--------------------------------------------------------------------------------
/frontend/node_modules/iconv-lite/.github/dependabot.yml:
--------------------------------------------------------------------------------
 1 | # Please see the documentation for all configuration options:
 2 | # https://help.github.com/github/administering-a-repository/configuration-options-for-dependency-updates
 3 | 
 4 | version: 2
 5 | updates:
 6 |   - package-ecosystem: "npm"
 7 |     directory: "/"
 8 |     schedule:
 9 |       interval: "daily"
10 |     allow:
11 |       - dependency-type: production
12 | 


--------------------------------------------------------------------------------
/frontend/node_modules/iconv-lite/.idea/codeStyles/codeStyleConfig.xml:
--------------------------------------------------------------------------------
1 | <component name="ProjectCodeStyleConfiguration">
2 |   <state>
3 |     <option name="USE_PER_PROJECT_SETTINGS" value="true" />
4 |   </state>
5 | </component>


--------------------------------------------------------------------------------
/frontend/node_modules/iconv-lite/.idea/iconv-lite.iml:
--------------------------------------------------------------------------------
 1 | <?xml version="1.0" encoding="UTF-8"?>
 2 | <module type="WEB_MODULE" version="4">
 3 |   <component name="NewModuleRootManager">
 4 |     <content url="file://$MODULE_DIR
quot;>
 5 |       <excludeFolder url="file://$MODULE_DIR$/temp" />
 6 |       <excludeFolder url="file://$MODULE_DIR$/.tmp" />
 7 |       <excludeFolder url="file://$MODULE_DIR$/tmp" />
 8 |     </content>
 9 |     <orderEntry type="inheritedJdk" />
10 |     <orderEntry type="sourceFolder" forTests="false" />
11 |   </component>
12 | </module>


--------------------------------------------------------------------------------
/frontend/node_modules/iconv-lite/.idea/inspectionProfiles/Project_Default.xml:
--------------------------------------------------------------------------------
1 | <component name="InspectionProjectProfileManager">
2 |   <profile version="1.0">
3 |     <option name="myName" value="Project Default" />
4 |     <inspection_tool class="Eslint" enabled="true" level="WARNING" enabled_by_default="true" />
5 |   </profile>
6 | </component>


--------------------------------------------------------------------------------
/frontend/node_modules/iconv-lite/.idea/modules.xml:
--------------------------------------------------------------------------------
1 | <?xml version="1.0" encoding="UTF-8"?>
2 | <project version="4">
3 |   <component name="ProjectModuleManager">
4 |     <modules>
5 |       <module fileurl="file://$PROJECT_DIR$/.idea/iconv-lite.iml" filepath="$PROJECT_DIR$/.idea/iconv-lite.iml" />
6 |     </modules>
7 |   </component>
8 | </project>


--------------------------------------------------------------------------------
/frontend/node_modules/iconv-lite/.idea/vcs.xml:
--------------------------------------------------------------------------------
1 | <?xml version="1.0" encoding="UTF-8"?>
2 | <project version="4">
3 |   <component name="VcsDirectoryMappings">
4 |     <mapping directory="$PROJECT_DIR
quot; vcs="Git" />
5 |   </component>
6 | </project>


--------------------------------------------------------------------------------
/frontend/node_modules/iconv-lite/LICENSE:
--------------------------------------------------------------------------------
 1 | Copyright (c) 2011 Alexander Shtuchkin
 2 | 
 3 | Permission is hereby granted, free of charge, to any person obtaining
 4 | a copy of this software and associated documentation files (the
 5 | "Software"), to deal in the Software without restriction, including
 6 | without limitation the rights to use, copy, modify, merge, publish,
 7 | distribute, sublicense, and/or sell copies of the Software, and to
 8 | permit persons to whom the Software is furnished to do so, subject to
 9 | the following conditions:
10 | 
11 | The above copyright notice and this permission notice shall be
12 | included in all copies or substantial portions of the Software.
13 | 
14 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
15 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
16 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
17 | NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
18 | LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
19 | OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
20 | WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
21 | 
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/iconv-lite/encodings/index.js:
--------------------------------------------------------------------------------
 1 | "use strict";
 2 | 
 3 | // Update this array if you add/rename/remove files in this directory.
 4 | // We support Browserify by skipping automatic module discovery and requiring modules directly.
 5 | var modules = [
 6 |     require("./internal"),
 7 |     require("./utf32"),
 8 |     require("./utf16"),
 9 |     require("./utf7"),
10 |     require("./sbcs-codec"),
11 |     require("./sbcs-data"),
12 |     require("./sbcs-data-generated"),
13 |     require("./dbcs-codec"),
14 |     require("./dbcs-data"),
15 | ];
16 | 
17 | // Put all encoding/alias/codec definitions to single object and export it.
18 | for (var i = 0; i < modules.length; i++) {
19 |     var module = modules[i];
20 |     for (var enc in module)
21 |         if (Object.prototype.hasOwnProperty.call(module, enc))
22 |             exports[enc] = module[enc];
23 | }
24 | 


--------------------------------------------------------------------------------
/frontend/node_modules/inherits/LICENSE:
--------------------------------------------------------------------------------
 1 | The ISC License
 2 | 
 3 | Copyright (c) Isaac Z. Schlueter
 4 | 
 5 | Permission to use, copy, modify, and/or distribute this software for any
 6 | purpose with or without fee is hereby granted, provided that the above
 7 | copyright notice and this permission notice appear in all copies.
 8 | 
 9 | THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
10 | REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
11 | FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
12 | INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
13 | LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
14 | OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
15 | PERFORMANCE OF THIS SOFTWARE.
16 | 
17 | 


--------------------------------------------------------------------------------
/frontend/node_modules/inherits/inherits.js:
--------------------------------------------------------------------------------
 1 | try {
 2 |   var util = require('util');
 3 |   /* istanbul ignore next */
 4 |   if (typeof util.inherits !== 'function') throw '';
 5 |   module.exports = util.inherits;
 6 | } catch (e) {
 7 |   /* istanbul ignore next */
 8 |   module.exports = require('./inherits_browser.js');
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/inherits/inherits_browser.js:
--------------------------------------------------------------------------------
 1 | if (typeof Object.create === 'function') {
 2 |   // implementation from standard node.js 'util' module
 3 |   module.exports = function inherits(ctor, superCtor) {
 4 |     if (superCtor) {
 5 |       ctor.super_ = superCtor
 6 |       ctor.prototype = Object.create(superCtor.prototype, {
 7 |         constructor: {
 8 |           value: ctor,
 9 |           enumerable: false,
10 |           writable: true,
11 |           configurable: true
12 |         }
13 |       })
14 |     }
15 |   };
16 | } else {
17 |   // old school shim for old browsers
18 |   module.exports = function inherits(ctor, superCtor) {
19 |     if (superCtor) {
20 |       ctor.super_ = superCtor
21 |       var TempCtor = function () {}
22 |       TempCtor.prototype = superCtor.prototype
23 |       ctor.prototype = new TempCtor()
24 |       ctor.prototype.constructor = ctor
25 |     }
26 |   }
27 | }
28 | 


--------------------------------------------------------------------------------
/frontend/node_modules/inherits/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "inherits",
 3 |   "description": "Browser-friendly inheritance fully compatible with standard node.js inherits()",
 4 |   "version": "2.0.4",
 5 |   "keywords": [
 6 |     "inheritance",
 7 |     "class",
 8 |     "klass",
 9 |     "oop",
10 |     "object-oriented",
11 |     "inherits",
12 |     "browser",
13 |     "browserify"
14 |   ],
15 |   "main": "./inherits.js",
16 |   "browser": "./inherits_browser.js",
17 |   "repository": "git://github.com/isaacs/inherits",
18 |   "license": "ISC",
19 |   "scripts": {
20 |     "test": "tap"
21 |   },
22 |   "devDependencies": {
23 |     "tap": "^14.2.4"
24 |   },
25 |   "files": [
26 |     "inherits.js",
27 |     "inherits_browser.js"
28 |   ]
29 | }
30 | 


--------------------------------------------------------------------------------
/frontend/node_modules/ipaddr.js/LICENSE:
--------------------------------------------------------------------------------
 1 | Copyright (C) 2011-2017 whitequark <whitequark@whitequark.org>
 2 | 
 3 | Permission is hereby granted, free of charge, to any person obtaining a copy
 4 | of this software and associated documentation files (the "Software"), to deal
 5 | in the Software without restriction, including without limitation the rights
 6 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 7 | copies of the Software, and to permit persons to whom the Software is
 8 | furnished to do so, subject to the following conditions:
 9 | 
10 | The above copyright notice and this permission notice shall be included in
11 | all copies or substantial portions of the Software.
12 | 
13 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
14 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
15 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
16 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
17 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
18 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
19 | THE SOFTWARE.
20 | 


--------------------------------------------------------------------------------
/frontend/node_modules/ipaddr.js/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "ipaddr.js",
 3 |   "description": "A library for manipulating IPv4 and IPv6 addresses in JavaScript.",
 4 |   "version": "1.9.1",
 5 |   "author": "whitequark <whitequark@whitequark.org>",
 6 |   "directories": {
 7 |     "lib": "./lib"
 8 |   },
 9 |   "dependencies": {},
10 |   "devDependencies": {
11 |     "coffee-script": "~1.12.6",
12 |     "nodeunit": "^0.11.3",
13 |     "uglify-js": "~3.0.19"
14 |   },
15 |   "scripts": {
16 |     "test": "cake build test"
17 |   },
18 |   "files": [
19 |     "lib/",
20 |     "LICENSE",
21 |     "ipaddr.min.js"
22 |   ],
23 |   "keywords": [
24 |     "ip",
25 |     "ipv4",
26 |     "ipv6"
27 |   ],
28 |   "repository": "git://github.com/whitequark/ipaddr.js",
29 |   "main": "./lib/ipaddr.js",
30 |   "engines": {
31 |     "node": ">= 0.10"
32 |   },
33 |   "license": "MIT",
34 |   "types": "./lib/ipaddr.js.d.ts"
35 | }
36 | 


--------------------------------------------------------------------------------
/frontend/node_modules/is-promise/LICENSE:
--------------------------------------------------------------------------------
 1 | Copyright (c) 2014 Forbes Lindesay
 2 | 
 3 | Permission is hereby granted, free of charge, to any person obtaining a copy
 4 | of this software and associated documentation files (the "Software"), to deal
 5 | in the Software without restriction, including without limitation the rights
 6 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 7 | copies of the Software, and to permit persons to whom the Software is
 8 | furnished to do so, subject to the following conditions:
 9 | 
10 | The above copyright notice and this permission notice shall be included in
11 | all copies or substantial portions of the Software.
12 | 
13 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
14 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
15 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
16 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
17 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
18 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
19 | THE SOFTWARE.


--------------------------------------------------------------------------------
/frontend/node_modules/is-promise/index.d.ts:
--------------------------------------------------------------------------------
1 | declare function isPromise<T, S>(obj: PromiseLike<T> | S): obj is PromiseLike<T>;
2 | export default isPromise;
3 | 


--------------------------------------------------------------------------------
/frontend/node_modules/is-promise/index.js:
--------------------------------------------------------------------------------
1 | module.exports = isPromise;
2 | module.exports.default = isPromise;
3 | 
4 | function isPromise(obj) {
5 |   return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
6 | }
7 | 


--------------------------------------------------------------------------------
/frontend/node_modules/is-promise/index.mjs:
--------------------------------------------------------------------------------
1 | export default function isPromise(obj) {
2 |   return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
3 | }
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/is-promise/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "is-promise",
 3 |   "version": "4.0.0",
 4 |   "description": "Test whether an object looks like a promises-a+ promise",
 5 |   "main": "./index.js",
 6 |   "scripts": {
 7 |     "test": "node test"
 8 |   },
 9 |   "files": [
10 |     "index.js",
11 |     "index.mjs",
12 |     "index.d.ts"
13 |   ],
14 |   "exports": {
15 |     ".": [
16 |       {
17 |         "import": "./index.mjs",
18 |         "require": "./index.js",
19 |         "default": "./index.js"
20 |       },
21 |       "./index.js"
22 |     ]
23 |   },
24 |   "repository": {
25 |     "type": "git",
26 |     "url": "https://github.com/then/is-promise.git"
27 |   },
28 |   "author": "ForbesLindesay",
29 |   "license": "MIT"
30 | }
31 | 


--------------------------------------------------------------------------------
/frontend/node_modules/is-promise/readme.md:
--------------------------------------------------------------------------------
 1 | <a href="https://promisesaplus.com/"><img src="https://promisesaplus.com/assets/logo-small.png" align="right" /></a>
 2 | 
 3 | # is-promise
 4 | 
 5 |   Test whether an object looks like a promises-a+ promise
 6 | 
 7 |  [![Build Status](https://img.shields.io/travis/then/is-promise/master.svg)](https://travis-ci.org/then/is-promise)
 8 |  [![Dependency Status](https://img.shields.io/david/then/is-promise.svg)](https://david-dm.org/then/is-promise)
 9 |  [![NPM version](https://img.shields.io/npm/v/is-promise.svg)](https://www.npmjs.org/package/is-promise)
10 | 
11 | 
12 | 
13 | ## Installation
14 | 
15 |     $ npm install is-promise
16 | 
17 | You can also use it client side via npm.
18 | 
19 | ## API
20 | 
21 | ```typescript
22 | import isPromise from 'is-promise';
23 | 
24 | isPromise(Promise.resolve());//=>true
25 | isPromise({then:function () {...}});//=>true
26 | isPromise(null);//=>false
27 | isPromise({});//=>false
28 | isPromise({then: true})//=>false
29 | ```
30 | 
31 | ## License
32 | 
33 |   MIT
34 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"eqeqeq": ["error", "allow-null"],
 8 | 		"id-length": "off",
 9 | 		"new-cap": ["error", {
10 | 			"capIsNewExceptions": [
11 | 				"RequireObjectCoercible",
12 | 				"ToObject",
13 | 			],
14 | 		}],
15 | 	},
16 | }
17 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/math-intrinsics
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with a single custom sponsorship URL
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 ECMAScript Shims
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/abs.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.abs;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/abs.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./abs')} */
4 | module.exports = Math.abs;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/constants/maxArrayLength.d.ts:
--------------------------------------------------------------------------------
1 | declare const MAX_ARRAY_LENGTH: 4294967295;
2 | 
3 | export = MAX_ARRAY_LENGTH;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/constants/maxArrayLength.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./maxArrayLength')} */
4 | module.exports = 4294967295; // Math.pow(2, 32) - 1;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/constants/maxSafeInteger.d.ts:
--------------------------------------------------------------------------------
1 | declare const MAX_SAFE_INTEGER: 9007199254740991;
2 | 
3 | export = MAX_SAFE_INTEGER;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/constants/maxSafeInteger.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./maxSafeInteger')} */
4 | // eslint-disable-next-line no-extra-parens
5 | module.exports = /** @type {import('./maxSafeInteger')} */ (Number.MAX_SAFE_INTEGER) || 9007199254740991; // Math.pow(2, 53) - 1;
6 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/constants/maxValue.d.ts:
--------------------------------------------------------------------------------
1 | declare const MAX_VALUE: 1.7976931348623157e+308;
2 | 
3 | export = MAX_VALUE;
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/constants/maxValue.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./maxValue')}  */
4 | // eslint-disable-next-line no-extra-parens
5 | module.exports = /** @type {import('./maxValue')}  */ (Number.MAX_VALUE) || 1.7976931348623157e+308;
6 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/floor.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.floor;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/floor.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./floor')} */
4 | module.exports = Math.floor;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/isFinite.d.ts:
--------------------------------------------------------------------------------
1 | declare function isFinite(x: unknown): x is number | bigint;
2 | 
3 | export = isFinite;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/isFinite.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var $isNaN = require('./isNaN');
 4 | 
 5 | /** @type {import('./isFinite')} */
 6 | module.exports = function isFinite(x) {
 7 | 	return (typeof x === 'number' || typeof x === 'bigint')
 8 |         && !$isNaN(x)
 9 |         && x !== Infinity
10 |         && x !== -Infinity;
11 | };
12 | 
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/isInteger.d.ts:
--------------------------------------------------------------------------------
1 | declare function isInteger(argument: unknown): argument is number;
2 | 
3 | export = isInteger;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/isInteger.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var $abs = require('./abs');
 4 | var $floor = require('./floor');
 5 | 
 6 | var $isNaN = require('./isNaN');
 7 | var $isFinite = require('./isFinite');
 8 | 
 9 | /** @type {import('./isInteger')} */
10 | module.exports = function isInteger(argument) {
11 | 	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
12 | 		return false;
13 | 	}
14 | 	var absValue = $abs(argument);
15 | 	return $floor(absValue) === absValue;
16 | };
17 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/isNaN.d.ts:
--------------------------------------------------------------------------------
1 | export = Number.isNaN;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/isNaN.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./isNaN')} */
4 | module.exports = Number.isNaN || function isNaN(a) {
5 | 	return a !== a;
6 | };
7 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/isNegativeZero.d.ts:
--------------------------------------------------------------------------------
1 | declare function isNegativeZero(x: unknown): boolean;
2 | 
3 | export = isNegativeZero;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/isNegativeZero.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./isNegativeZero')} */
4 | module.exports = function isNegativeZero(x) {
5 | 	return x === 0 && 1 / x === 1 / -0;
6 | };
7 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/max.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.max;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/max.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./max')} */
4 | module.exports = Math.max;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/min.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.min;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/min.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./min')} */
4 | module.exports = Math.min;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/mod.d.ts:
--------------------------------------------------------------------------------
1 | declare function mod(number: number, modulo: number): number;
2 | 
3 | export = mod;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/mod.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var $floor = require('./floor');
 4 | 
 5 | /** @type {import('./mod')} */
 6 | module.exports = function mod(number, modulo) {
 7 | 	var remain = number % modulo;
 8 | 	return $floor(remain >= 0 ? remain : remain + modulo);
 9 | };
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/pow.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.pow;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/pow.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./pow')} */
4 | module.exports = Math.pow;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/round.d.ts:
--------------------------------------------------------------------------------
1 | export = Math.round;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/round.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | /** @type {import('./round')} */
4 | module.exports = Math.round;
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/sign.d.ts:
--------------------------------------------------------------------------------
1 | declare function sign(x: number): number;
2 | 
3 | export = sign;


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/sign.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var $isNaN = require('./isNaN');
 4 | 
 5 | /** @type {import('./sign')} */
 6 | module.exports = function sign(number) {
 7 | 	if ($isNaN(number) || number === 0) {
 8 | 		return number;
 9 | 	}
10 | 	return number < 0 ? -1 : +1;
11 | };
12 | 


--------------------------------------------------------------------------------
/frontend/node_modules/math-intrinsics/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 | 	"extends": "@ljharb/tsconfig",
3 | }
4 | 


--------------------------------------------------------------------------------
/frontend/node_modules/media-typer/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2014-2017 Douglas Christopher Wilson
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/media-typer/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "media-typer",
 3 |   "description": "Simple RFC 6838 media type parser and formatter",
 4 |   "version": "1.1.0",
 5 |   "author": "Douglas Christopher Wilson <doug@somethingdoug.com>",
 6 |   "license": "MIT",
 7 |   "repository": "jshttp/media-typer",
 8 |   "devDependencies": {
 9 |     "eslint": "5.16.0",
10 |     "eslint-config-standard": "12.0.0",
11 |     "eslint-plugin-import": "2.17.2",
12 |     "eslint-plugin-markdown": "1.0.0",
13 |     "eslint-plugin-node": "8.0.1",
14 |     "eslint-plugin-promise": "4.1.1",
15 |     "eslint-plugin-standard": "4.0.0",
16 |     "mocha": "6.1.4",
17 |     "nyc": "14.0.0"
18 |   },
19 |   "files": [
20 |     "LICENSE",
21 |     "HISTORY.md",
22 |     "index.js"
23 |   ],
24 |   "engines": {
25 |     "node": ">= 0.8"
26 |   },
27 |   "scripts": {
28 |     "lint": "eslint --plugin markdown --ext js,md .",
29 |     "test": "mocha --reporter spec --check-leaks --bail test/",
30 |     "test-cov": "nyc --reporter=html --reporter=text npm test",
31 |     "test-travis": "nyc --reporter=text npm test"
32 |   }
33 | }
34 | 


--------------------------------------------------------------------------------
/frontend/node_modules/merge-descriptors/index.d.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 | Merges "own" properties from a source to a destination object, including non-enumerable and accessor-defined properties. It retains original values and descriptors, ensuring the destination receives a complete and accurate copy of the source's properties.
 3 | 
 4 | @param destination - The object to receive properties.
 5 | @param source - The object providing properties.
 6 | @param overwrite - Optional boolean to control overwriting of existing properties. Defaults to true.
 7 | @returns The modified destination object.
 8 | */
 9 | declare function mergeDescriptors<T, U>(destination: T, source: U, overwrite?: boolean): T & U;
10 | 
11 | export = mergeDescriptors;
12 | 


--------------------------------------------------------------------------------
/frontend/node_modules/merge-descriptors/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | function mergeDescriptors(destination, source, overwrite = true) {
 4 | 	if (!destination) {
 5 | 		throw new TypeError('The `destination` argument is required.');
 6 | 	}
 7 | 
 8 | 	if (!source) {
 9 | 		throw new TypeError('The `source` argument is required.');
10 | 	}
11 | 
12 | 	for (const name of Object.getOwnPropertyNames(source)) {
13 | 		if (!overwrite && Object.hasOwn(destination, name)) {
14 | 			// Skip descriptor
15 | 			continue;
16 | 		}
17 | 
18 | 		// Copy descriptor
19 | 		const descriptor = Object.getOwnPropertyDescriptor(source, name);
20 | 		Object.defineProperty(destination, name, descriptor);
21 | 	}
22 | 
23 | 	return destination;
24 | }
25 | 
26 | module.exports = mergeDescriptors;
27 | 


--------------------------------------------------------------------------------
/frontend/node_modules/merge-descriptors/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"name": "merge-descriptors",
 3 | 	"version": "2.0.0",
 4 | 	"description": "Merge objects using their property descriptors",
 5 | 	"license": "MIT",
 6 | 	"repository": "sindresorhus/merge-descriptors",
 7 | 	"funding": "https://github.com/sponsors/sindresorhus",
 8 | 	"contributors": [
 9 | 		"Jonathan Ong <me@jongleberry.com>",
10 | 		"Douglas Christopher Wilson <doug@somethingdoug.com>",
11 | 		"Mike Grabowski <grabbou@gmail.com>",
12 | 		"Sindre Sorhus <sindresorhus@gmail.com>"
13 | 	],
14 | 	"exports": {
15 | 		"types": "./index.d.ts",
16 | 		"default": "./index.js"
17 | 	},
18 | 	"main": "./index.js",
19 | 	"types": "./index.d.ts",
20 | 	"sideEffects": false,
21 | 	"engines": {
22 | 		"node": ">=18"
23 | 	},
24 | 	"scripts": {
25 | 		"test": "xo && ava"
26 | 	},
27 | 	"files": [
28 | 		"index.js",
29 | 		"index.d.ts"
30 | 	],
31 | 	"keywords": [
32 | 		"merge",
33 | 		"descriptors",
34 | 		"object",
35 | 		"property",
36 | 		"properties",
37 | 		"merging",
38 | 		"getter",
39 | 		"setter"
40 | 	],
41 | 	"devDependencies": {
42 | 		"ava": "^5.3.1",
43 | 		"xo": "^0.56.0"
44 | 	},
45 | 	"xo": {
46 | 		"rules": {
47 | 			"unicorn/prefer-module": "off"
48 | 		}
49 | 	}
50 | }
51 | 


--------------------------------------------------------------------------------
/frontend/node_modules/merge-descriptors/readme.md:
--------------------------------------------------------------------------------
 1 | # merge-descriptors
 2 | 
 3 | > Merge objects using their property descriptors
 4 | 
 5 | ## Install
 6 | 
 7 | ```sh
 8 | npm install merge-descriptors
 9 | ```
10 | 
11 | ## Usage
12 | 
13 | ```js
14 | import mergeDescriptors from 'merge-descriptors';
15 | 
16 | const thing = {
17 | 	get name() {
18 | 		return 'John'
19 | 	}
20 | }
21 | 
22 | const animal = {};
23 | 
24 | mergeDescriptors(animal, thing);
25 | 
26 | console.log(animal.name);
27 | //=> 'John'
28 | ```
29 | 
30 | ## API
31 | 
32 | ### merge(destination, source, overwrite?)
33 | 
34 | Merges "own" properties from a source to a destination object, including non-enumerable and accessor-defined properties. It retains original values and descriptors, ensuring the destination receives a complete and accurate copy of the source's properties.
35 | 
36 | Returns the modified destination object.
37 | 
38 | #### destination
39 | 
40 | Type: `object`
41 | 
42 | The object to receive properties.
43 | 
44 | #### source
45 | 
46 | Type: `object`
47 | 
48 | The object providing properties.
49 | 
50 | #### overwrite
51 | 
52 | Type: `boolean`\
53 | Default: `true`
54 | 
55 | A boolean to control overwriting of existing properties.
56 | 


--------------------------------------------------------------------------------
/frontend/node_modules/mime-db/index.js:
--------------------------------------------------------------------------------
 1 | /*!
 2 |  * mime-db
 3 |  * Copyright(c) 2014 Jonathan Ong
 4 |  * Copyright(c) 2015-2022 Douglas Christopher Wilson
 5 |  * MIT Licensed
 6 |  */
 7 | 
 8 | /**
 9 |  * Module exports.
10 |  */
11 | 
12 | module.exports = require('./db.json')
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/ms/license.md:
--------------------------------------------------------------------------------
 1 | The MIT License (MIT)
 2 | 
 3 | Copyright (c) 2020 Vercel, Inc.
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/ms/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "ms",
 3 |   "version": "2.1.3",
 4 |   "description": "Tiny millisecond conversion utility",
 5 |   "repository": "vercel/ms",
 6 |   "main": "./index",
 7 |   "files": [
 8 |     "index.js"
 9 |   ],
10 |   "scripts": {
11 |     "precommit": "lint-staged",
12 |     "lint": "eslint lib/* bin/*",
13 |     "test": "mocha tests.js"
14 |   },
15 |   "eslintConfig": {
16 |     "extends": "eslint:recommended",
17 |     "env": {
18 |       "node": true,
19 |       "es6": true
20 |     }
21 |   },
22 |   "lint-staged": {
23 |     "*.js": [
24 |       "npm run lint",
25 |       "prettier --single-quote --write",
26 |       "git add"
27 |     ]
28 |   },
29 |   "license": "MIT",
30 |   "devDependencies": {
31 |     "eslint": "4.18.2",
32 |     "expect.js": "0.3.1",
33 |     "husky": "0.14.3",
34 |     "lint-staged": "5.0.0",
35 |     "mocha": "4.0.1",
36 |     "prettier": "2.0.5"
37 |   }
38 | }
39 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-assign/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "object-assign",
 3 |   "version": "4.1.1",
 4 |   "description": "ES2015 `Object.assign()` ponyfill",
 5 |   "license": "MIT",
 6 |   "repository": "sindresorhus/object-assign",
 7 |   "author": {
 8 |     "name": "Sindre Sorhus",
 9 |     "email": "sindresorhus@gmail.com",
10 |     "url": "sindresorhus.com"
11 |   },
12 |   "engines": {
13 |     "node": ">=0.10.0"
14 |   },
15 |   "scripts": {
16 |     "test": "xo && ava",
17 |     "bench": "matcha bench.js"
18 |   },
19 |   "files": [
20 |     "index.js"
21 |   ],
22 |   "keywords": [
23 |     "object",
24 |     "assign",
25 |     "extend",
26 |     "properties",
27 |     "es2015",
28 |     "ecmascript",
29 |     "harmony",
30 |     "ponyfill",
31 |     "prollyfill",
32 |     "polyfill",
33 |     "shim",
34 |     "browser"
35 |   ],
36 |   "devDependencies": {
37 |     "ava": "^0.16.0",
38 |     "lodash": "^4.16.4",
39 |     "matcha": "^0.7.0",
40 |     "xo": "^0.16.0"
41 |   }
42 | }
43 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/object-inspect
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 |   "all": true,
 3 |   "check-coverage": false,
 4 |   "instrumentation": false,
 5 |   "sourceMap": false,
 6 |   "reporter": ["text-summary", "text", "html", "json"],
 7 |   "exclude": [
 8 |     "coverage",
 9 |     "example",
10 |     "test",
11 |     "test-core-js.js"
12 |   ]
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2013 James Halliday
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/example/all.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var inspect = require('../');
 4 | var Buffer = require('safer-buffer').Buffer;
 5 | 
 6 | var holes = ['a', 'b'];
 7 | holes[4] = 'e';
 8 | holes[6] = 'g';
 9 | 
10 | var obj = {
11 |     a: 1,
12 |     b: [3, 4, undefined, null],
13 |     c: undefined,
14 |     d: null,
15 |     e: {
16 |         regex: /^x/i,
17 |         buf: Buffer.from('abc'),
18 |         holes: holes
19 |     },
20 |     now: new Date()
21 | };
22 | obj.self = obj;
23 | console.log(inspect(obj));
24 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/example/circular.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | var inspect = require('../');
4 | var obj = { a: 1, b: [3, 4] };
5 | obj.c = obj;
6 | console.log(inspect(obj));
7 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/example/fn.js:
--------------------------------------------------------------------------------
1 | 'use strict';
2 | 
3 | var inspect = require('../');
4 | var obj = [1, 2, function f(n) { return n + 5; }, 4];
5 | console.log(inspect(obj));
6 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/example/inspect.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | /* eslint-env browser */
 4 | var inspect = require('../');
 5 | 
 6 | var d = document.createElement('div');
 7 | d.setAttribute('id', 'beep');
 8 | d.innerHTML = '<b>wooo</b><i>iiiii</i>';
 9 | 
10 | console.log(inspect([d, { a: 3, b: 4, c: [5, 6, [7, [8, [9]]]] }]));
11 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/package-support.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "versions": [
 3 |     {
 4 |       "version": "*",
 5 |       "target": {
 6 |         "node": "all"
 7 |       },
 8 |       "response": {
 9 |         "type": "time-permitting"
10 |       },
11 |       "backing": {
12 |         "npm-funding": true,
13 |         "donations": [
14 |           "https://github.com/ljharb",
15 |           "https://tidelift.com/funding/github/npm/object-inspect"
16 |         ]
17 |       }
18 |     }
19 |   ]
20 | }
21 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/test-core-js.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | require('core-js');
 4 | 
 5 | var inspect = require('./');
 6 | var test = require('tape');
 7 | 
 8 | test('Maps', function (t) {
 9 |     t.equal(inspect(new Map([[1, 2]])), 'Map (1) {1 => 2}');
10 |     t.end();
11 | });
12 | 
13 | test('WeakMaps', function (t) {
14 |     t.equal(inspect(new WeakMap([[{}, 2]])), 'WeakMap { ? }');
15 |     t.end();
16 | });
17 | 
18 | test('Sets', function (t) {
19 |     t.equal(inspect(new Set([[1, 2]])), 'Set (1) {[ 1, 2 ]}');
20 |     t.end();
21 | });
22 | 
23 | test('WeakSets', function (t) {
24 |     t.equal(inspect(new WeakSet([[1, 2]])), 'WeakSet { ? }');
25 |     t.end();
26 | });
27 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/test/browser/dom.js:
--------------------------------------------------------------------------------
 1 | var inspect = require('../../');
 2 | var test = require('tape');
 3 | 
 4 | test('dom element', function (t) {
 5 |     t.plan(1);
 6 | 
 7 |     var d = document.createElement('div');
 8 |     d.setAttribute('id', 'beep');
 9 |     d.innerHTML = '<b>wooo</b><i>iiiii</i>';
10 | 
11 |     t.equal(
12 |         inspect([d, { a: 3, b: 4, c: [5, 6, [7, [8, [9]]]] }]),
13 |         '[ <div id="beep">...</div>, { a: 3, b: 4, c: [ 5, 6, [ 7, [ 8, [Object] ] ] ] } ]'
14 |     );
15 | });
16 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/test/circular.js:
--------------------------------------------------------------------------------
 1 | var inspect = require('../');
 2 | var test = require('tape');
 3 | 
 4 | test('circular', function (t) {
 5 |     t.plan(2);
 6 |     var obj = { a: 1, b: [3, 4] };
 7 |     obj.c = obj;
 8 |     t.equal(inspect(obj), '{ a: 1, b: [ 3, 4 ], c: [Circular] }');
 9 | 
10 |     var double = {};
11 |     double.a = [double];
12 |     double.b = {};
13 |     double.b.inner = double.b;
14 |     double.b.obj = double;
15 |     t.equal(inspect(double), '{ a: [ [Circular] ], b: { inner: [Circular], obj: [Circular] } }');
16 | });
17 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/test/deep.js:
--------------------------------------------------------------------------------
 1 | var inspect = require('../');
 2 | var test = require('tape');
 3 | 
 4 | test('deep', function (t) {
 5 |     t.plan(4);
 6 |     var obj = [[[[[[500]]]]]];
 7 |     t.equal(inspect(obj), '[ [ [ [ [ [Array] ] ] ] ] ]');
 8 |     t.equal(inspect(obj, { depth: 4 }), '[ [ [ [ [Array] ] ] ] ]');
 9 |     t.equal(inspect(obj, { depth: 2 }), '[ [ [Array] ] ]');
10 | 
11 |     t.equal(inspect([[[{ a: 1 }]]], { depth: 3 }), '[ [ [ [Object] ] ] ]');
12 | });
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/test/fakes.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var inspect = require('../');
 4 | var test = require('tape');
 5 | var hasToStringTag = require('has-tostringtag/shams')();
 6 | var forEach = require('for-each');
 7 | 
 8 | test('fakes', { skip: !hasToStringTag }, function (t) {
 9 |     forEach([
10 |         'Array',
11 |         'Boolean',
12 |         'Date',
13 |         'Error',
14 |         'Number',
15 |         'RegExp',
16 |         'String'
17 |     ], function (expected) {
18 |         var faker = {};
19 |         faker[Symbol.toStringTag] = expected;
20 | 
21 |         t.equal(
22 |             inspect(faker),
23 |             '{ [Symbol(Symbol.toStringTag)]: \'' + expected + '\' }',
24 |             'faker masquerading as ' + expected + ' is not shown as one'
25 |         );
26 |     });
27 | 
28 |     t.end();
29 | });
30 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/test/global.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var inspect = require('../');
 4 | 
 5 | var test = require('tape');
 6 | var globalThis = require('globalthis')();
 7 | 
 8 | test('global object', function (t) {
 9 |     /* eslint-env browser */
10 |     var expected = typeof window === 'undefined' ? 'globalThis' : 'Window';
11 |     t.equal(
12 |         inspect([globalThis]),
13 |         '[ { [object ' + expected + '] } ]'
14 |     );
15 | 
16 |     t.end();
17 | });
18 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/test/has.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var inspect = require('../');
 4 | var test = require('tape');
 5 | var mockProperty = require('mock-property');
 6 | 
 7 | test('when Object#hasOwnProperty is deleted', function (t) {
 8 |     t.plan(1);
 9 |     var arr = [1, , 3]; // eslint-disable-line no-sparse-arrays
10 | 
11 |     t.teardown(mockProperty(Array.prototype, 1, { value: 2 })); // this is needed to account for "in" vs "hasOwnProperty"
12 |     t.teardown(mockProperty(Object.prototype, 'hasOwnProperty', { 'delete': true }));
13 | 
14 |     t.equal(inspect(arr), '[ 1, , 3 ]');
15 | });
16 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/test/holes.js:
--------------------------------------------------------------------------------
 1 | var test = require('tape');
 2 | var inspect = require('../');
 3 | 
 4 | var xs = ['a', 'b'];
 5 | xs[5] = 'f';
 6 | xs[7] = 'j';
 7 | xs[8] = 'k';
 8 | 
 9 | test('holes', function (t) {
10 |     t.plan(1);
11 |     t.equal(
12 |         inspect(xs),
13 |         "[ 'a', 'b', , , , 'f', , 'j', 'k' ]"
14 |     );
15 | });
16 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/test/lowbyte.js:
--------------------------------------------------------------------------------
 1 | var test = require('tape');
 2 | var inspect = require('../');
 3 | 
 4 | var obj = { x: 'a\r\nb', y: '\x05! \x1f \x12' };
 5 | 
 6 | test('interpolate low bytes', function (t) {
 7 |     t.plan(1);
 8 |     t.equal(
 9 |         inspect(obj),
10 |         "{ x: 'a\\r\\nb', y: '\\x05! \\x1F \\x12' }"
11 |     );
12 | });
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/test/undef.js:
--------------------------------------------------------------------------------
 1 | var test = require('tape');
 2 | var inspect = require('../');
 3 | 
 4 | var obj = { a: 1, b: [3, 4, undefined, null], c: undefined, d: null };
 5 | 
 6 | test('undef and null', function (t) {
 7 |     t.plan(1);
 8 |     t.equal(
 9 |         inspect(obj),
10 |         '{ a: 1, b: [ 3, 4, undefined, null ], c: undefined, d: null }'
11 |     );
12 | });
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/object-inspect/util.inspect.js:
--------------------------------------------------------------------------------
1 | module.exports = require('util').inspect;
2 | 


--------------------------------------------------------------------------------
/frontend/node_modules/once/LICENSE:
--------------------------------------------------------------------------------
 1 | The ISC License
 2 | 
 3 | Copyright (c) Isaac Z. Schlueter and Contributors
 4 | 
 5 | Permission to use, copy, modify, and/or distribute this software for any
 6 | purpose with or without fee is hereby granted, provided that the above
 7 | copyright notice and this permission notice appear in all copies.
 8 | 
 9 | THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
10 | WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
11 | MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
12 | ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
13 | WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
14 | ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
15 | IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
16 | 


--------------------------------------------------------------------------------
/frontend/node_modules/once/once.js:
--------------------------------------------------------------------------------
 1 | var wrappy = require('wrappy')
 2 | module.exports = wrappy(once)
 3 | module.exports.strict = wrappy(onceStrict)
 4 | 
 5 | once.proto = once(function () {
 6 |   Object.defineProperty(Function.prototype, 'once', {
 7 |     value: function () {
 8 |       return once(this)
 9 |     },
10 |     configurable: true
11 |   })
12 | 
13 |   Object.defineProperty(Function.prototype, 'onceStrict', {
14 |     value: function () {
15 |       return onceStrict(this)
16 |     },
17 |     configurable: true
18 |   })
19 | })
20 | 
21 | function once (fn) {
22 |   var f = function () {
23 |     if (f.called) return f.value
24 |     f.called = true
25 |     return f.value = fn.apply(this, arguments)
26 |   }
27 |   f.called = false
28 |   return f
29 | }
30 | 
31 | function onceStrict (fn) {
32 |   var f = function () {
33 |     if (f.called)
34 |       throw new Error(f.onceError)
35 |     f.called = true
36 |     return f.value = fn.apply(this, arguments)
37 |   }
38 |   var name = fn.name || 'Function wrapped with `once`'
39 |   f.onceError = name + " shouldn't be called more than once"
40 |   f.called = false
41 |   return f
42 | }
43 | 


--------------------------------------------------------------------------------
/frontend/node_modules/once/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "once",
 3 |   "version": "1.4.0",
 4 |   "description": "Run a function exactly one time",
 5 |   "main": "once.js",
 6 |   "directories": {
 7 |     "test": "test"
 8 |   },
 9 |   "dependencies": {
10 |     "wrappy": "1"
11 |   },
12 |   "devDependencies": {
13 |     "tap": "^7.0.1"
14 |   },
15 |   "scripts": {
16 |     "test": "tap test/*.js"
17 |   },
18 |   "files": [
19 |     "once.js"
20 |   ],
21 |   "repository": {
22 |     "type": "git",
23 |     "url": "git://github.com/isaacs/once"
24 |   },
25 |   "keywords": [
26 |     "once",
27 |     "function",
28 |     "one",
29 |     "single"
30 |   ],
31 |   "author": "Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)",
32 |   "license": "ISC"
33 | }
34 | 


--------------------------------------------------------------------------------
/frontend/node_modules/path-to-regexp/LICENSE:
--------------------------------------------------------------------------------
 1 | The MIT License (MIT)
 2 | 
 3 | Copyright (c) 2014 Blake Embrey (hello@blakeembrey.com)
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in
13 | all copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
21 | THE SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/proxy-addr/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2014-2016 Douglas Christopher Wilson
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/qs/.editorconfig:
--------------------------------------------------------------------------------
 1 | root = true
 2 | 
 3 | [*]
 4 | indent_style = space
 5 | indent_size = 4
 6 | end_of_line = lf
 7 | charset = utf-8
 8 | trim_trailing_whitespace = true
 9 | insert_final_newline = true
10 | max_line_length = 160
11 | quote_type = single
12 | 
13 | [test/*]
14 | max_line_length = off
15 | 
16 | [LICENSE.md]
17 | indent_size = off
18 | 
19 | [*.md]
20 | max_line_length = off
21 | 
22 | [*.json]
23 | max_line_length = off
24 | 
25 | [Makefile]
26 | max_line_length = off
27 | 
28 | [CHANGELOG.md]
29 | indent_style = space
30 | indent_size = 2
31 | 
32 | [LICENSE]
33 | indent_size = 2
34 | max_line_length = off
35 | 
36 | [coverage/**/*]
37 | indent_size = off
38 | indent_style = off
39 | indent = off
40 | max_line_length = off
41 | 
42 | [.nycrc]
43 | indent_style = tab
44 | 
45 | [tea.yaml]
46 | indent_size = 2
47 | 


--------------------------------------------------------------------------------
/frontend/node_modules/qs/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/qs
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with a single custom sponsorship URL
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/qs/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"lines": 86,
 6 | 	"statements": 85.93,
 7 | 	"functions": 82.43,
 8 | 	"branches": 76.06,
 9 | 	"exclude": [
10 | 		"coverage",
11 | 		"dist"
12 | 	]
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/qs/lib/formats.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var replace = String.prototype.replace;
 4 | var percentTwenties = /%20/g;
 5 | 
 6 | var Format = {
 7 |     RFC1738: 'RFC1738',
 8 |     RFC3986: 'RFC3986'
 9 | };
10 | 
11 | module.exports = {
12 |     'default': Format.RFC3986,
13 |     formatters: {
14 |         RFC1738: function (value) {
15 |             return replace.call(value, percentTwenties, '+');
16 |         },
17 |         RFC3986: function (value) {
18 |             return String(value);
19 |         }
20 |     },
21 |     RFC1738: Format.RFC1738,
22 |     RFC3986: Format.RFC3986
23 | };
24 | 


--------------------------------------------------------------------------------
/frontend/node_modules/qs/lib/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict';
 2 | 
 3 | var stringify = require('./stringify');
 4 | var parse = require('./parse');
 5 | var formats = require('./formats');
 6 | 
 7 | module.exports = {
 8 |     formats: formats,
 9 |     parse: parse,
10 |     stringify: stringify
11 | };
12 | 


--------------------------------------------------------------------------------
/frontend/node_modules/range-parser/HISTORY.md:
--------------------------------------------------------------------------------
 1 | 1.2.1 / 2019-05-10
 2 | ==================
 3 | 
 4 |   * Improve error when `str` is not a string
 5 | 
 6 | 1.2.0 / 2016-06-01
 7 | ==================
 8 | 
 9 |   * Add `combine` option to combine overlapping ranges
10 | 
11 | 1.1.0 / 2016-05-13
12 | ==================
13 | 
14 |   * Fix incorrectly returning -1 when there is at least one valid range
15 |   * perf: remove internal function
16 | 
17 | 1.0.3 / 2015-10-29
18 | ==================
19 | 
20 |   * perf: enable strict mode
21 | 
22 | 1.0.2 / 2014-09-08
23 | ==================
24 | 
25 |   * Support Node.js 0.6
26 | 
27 | 1.0.1 / 2014-09-07
28 | ==================
29 | 
30 |   * Move repository to jshttp
31 | 
32 | 1.0.0 / 2013-12-11
33 | ==================
34 | 
35 |   * Add repository to package.json
36 |   * Add MIT license
37 | 
38 | 0.0.4 / 2012-06-17
39 | ==================
40 | 
41 |   * Change ret -1 for unsatisfiable and -2 when invalid
42 | 
43 | 0.0.3 / 2012-06-17
44 | ==================
45 | 
46 |   * Fix last-byte-pos default to len - 1
47 | 
48 | 0.0.2 / 2012-06-14
49 | ==================
50 | 
51 |   * Add `.type`
52 | 
53 | 0.0.1 / 2012-06-11
54 | ==================
55 | 
56 |   * Initial release
57 | 


--------------------------------------------------------------------------------
/frontend/node_modules/raw-body/node_modules/iconv-lite/LICENSE:
--------------------------------------------------------------------------------
 1 | Copyright (c) 2011 Alexander Shtuchkin
 2 | 
 3 | Permission is hereby granted, free of charge, to any person obtaining
 4 | a copy of this software and associated documentation files (the
 5 | "Software"), to deal in the Software without restriction, including
 6 | without limitation the rights to use, copy, modify, merge, publish,
 7 | distribute, sublicense, and/or sell copies of the Software, and to
 8 | permit persons to whom the Software is furnished to do so, subject to
 9 | the following conditions:
10 | 
11 | The above copyright notice and this permission notice shall be
12 | included in all copies or substantial portions of the Software.
13 | 
14 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
15 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
16 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
17 | NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
18 | LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
19 | OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
20 | WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
21 | 
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/raw-body/node_modules/iconv-lite/encodings/index.js:
--------------------------------------------------------------------------------
 1 | "use strict"
 2 | 
 3 | var mergeModules = require("../lib/helpers/merge-exports")
 4 | 
 5 | // Update this array if you add/rename/remove files in this directory.
 6 | // We support Browserify by skipping automatic module discovery and requiring modules directly.
 7 | var modules = [
 8 |   require("./internal"),
 9 |   require("./utf32"),
10 |   require("./utf16"),
11 |   require("./utf7"),
12 |   require("./sbcs-codec"),
13 |   require("./sbcs-data"),
14 |   require("./sbcs-data-generated"),
15 |   require("./dbcs-codec"),
16 |   require("./dbcs-data")
17 | ]
18 | 
19 | // Put all encoding/alias/codec definitions to single object and export it.
20 | for (var i = 0; i < modules.length; i++) {
21 |   var module = modules[i]
22 |   mergeModules(exports, module)
23 | }
24 | 


--------------------------------------------------------------------------------
/frontend/node_modules/raw-body/node_modules/iconv-lite/lib/helpers/merge-exports.js:
--------------------------------------------------------------------------------
 1 | "use strict"
 2 | 
 3 | var hasOwn = typeof Object.hasOwn === "undefined" ? Function.call.bind(Object.prototype.hasOwnProperty) : Object.hasOwn
 4 | 
 5 | function mergeModules (target, module) {
 6 |   for (var key in module) {
 7 |     if (hasOwn(module, key)) {
 8 |       target[key] = module[key]
 9 |     }
10 |   }
11 | }
12 | 
13 | module.exports = mergeModules
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/safe-buffer/LICENSE:
--------------------------------------------------------------------------------
 1 | The MIT License (MIT)
 2 | 
 3 | Copyright (c) Feross Aboukhadijeh
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in
13 | all copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
21 | THE SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/safer-buffer/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2018 Nikita Skovoroda <chalkerx@gmail.com>
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/safer-buffer/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "safer-buffer",
 3 |   "version": "2.1.2",
 4 |   "description": "Modern Buffer API polyfill without footguns",
 5 |   "main": "safer.js",
 6 |   "scripts": {
 7 |     "browserify-test": "browserify --external tape tests.js > browserify-tests.js && tape browserify-tests.js",
 8 |     "test": "standard && tape tests.js"
 9 |   },
10 |   "author": {
11 |     "name": "Nikita Skovoroda",
12 |     "email": "chalkerx@gmail.com",
13 |     "url": "https://github.com/ChALkeR"
14 |   },
15 |   "license": "MIT",
16 |   "repository": {
17 |     "type": "git",
18 |     "url": "git+https://github.com/ChALkeR/safer-buffer.git"
19 |   },
20 |   "bugs": {
21 |     "url": "https://github.com/ChALkeR/safer-buffer/issues"
22 |   },
23 |   "devDependencies": {
24 |     "standard": "^11.0.1",
25 |     "tape": "^4.9.0"
26 |   },
27 |   "files": [
28 |     "Porting-Buffer.md",
29 |     "Readme.md",
30 |     "tests.js",
31 |     "dangerous.js",
32 |     "safer.js"
33 |   ]
34 | }
35 | 


--------------------------------------------------------------------------------
/frontend/node_modules/setprototypeof/LICENSE:
--------------------------------------------------------------------------------
 1 | Copyright (c) 2015, Wes Todd
 2 | 
 3 | Permission to use, copy, modify, and/or distribute this software for any
 4 | purpose with or without fee is hereby granted, provided that the above
 5 | copyright notice and this permission notice appear in all copies.
 6 | 
 7 | THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 8 | WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 9 | MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
10 | SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
11 | WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
12 | OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
13 | CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/setprototypeof/README.md:
--------------------------------------------------------------------------------
 1 | # Polyfill for `Object.setPrototypeOf`
 2 | 
 3 | [![NPM Version](https://img.shields.io/npm/v/setprototypeof.svg)](https://npmjs.org/package/setprototypeof)
 4 | [![NPM Downloads](https://img.shields.io/npm/dm/setprototypeof.svg)](https://npmjs.org/package/setprototypeof)
 5 | [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)
 6 | 
 7 | A simple cross platform implementation to set the prototype of an instianted object.  Supports all modern browsers and at least back to IE8.
 8 | 
 9 | ## Usage:
10 | 
11 | ```
12 | $ npm install --save setprototypeof
13 | ```
14 | 
15 | ```javascript
16 | var setPrototypeOf = require('setprototypeof')
17 | 
18 | var obj = {}
19 | setPrototypeOf(obj, {
20 |   foo: function () {
21 |     return 'bar'
22 |   }
23 | })
24 | obj.foo() // bar
25 | ```
26 | 
27 | TypeScript is also supported:
28 | 
29 | ```typescript
30 | import setPrototypeOf from 'setprototypeof'
31 | ```
32 | 


--------------------------------------------------------------------------------
/frontend/node_modules/setprototypeof/index.d.ts:
--------------------------------------------------------------------------------
1 | declare function setPrototypeOf(o: any, proto: object | null): any;
2 | export = setPrototypeOf;
3 | 


--------------------------------------------------------------------------------
/frontend/node_modules/setprototypeof/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict'
 2 | /* eslint no-proto: 0 */
 3 | module.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties)
 4 | 
 5 | function setProtoOf (obj, proto) {
 6 |   obj.__proto__ = proto
 7 |   return obj
 8 | }
 9 | 
10 | function mixinProperties (obj, proto) {
11 |   for (var prop in proto) {
12 |     if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
13 |       obj[prop] = proto[prop]
14 |     }
15 |   }
16 |   return obj
17 | }
18 | 


--------------------------------------------------------------------------------
/frontend/node_modules/setprototypeof/test/index.js:
--------------------------------------------------------------------------------
 1 | 'use strict'
 2 | /* eslint-env mocha */
 3 | /* eslint no-proto: 0 */
 4 | var assert = require('assert')
 5 | var setPrototypeOf = require('..')
 6 | 
 7 | describe('setProtoOf(obj, proto)', function () {
 8 |   it('should merge objects', function () {
 9 |     var obj = { a: 1, b: 2 }
10 |     var proto = { b: 3, c: 4 }
11 |     var mergeObj = setPrototypeOf(obj, proto)
12 | 
13 |     if (Object.getPrototypeOf) {
14 |       assert.strictEqual(Object.getPrototypeOf(obj), proto)
15 |     } else if ({ __proto__: [] } instanceof Array) {
16 |       assert.strictEqual(obj.__proto__, proto)
17 |     } else {
18 |       assert.strictEqual(obj.a, 1)
19 |       assert.strictEqual(obj.b, 2)
20 |       assert.strictEqual(obj.c, 4)
21 |     }
22 |     assert.strictEqual(mergeObj, obj)
23 |   })
24 | })
25 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-list/.editorconfig:
--------------------------------------------------------------------------------
 1 | root = true
 2 | 
 3 | [*]
 4 | charset = utf-8
 5 | end_of_line = lf
 6 | insert_final_newline = true
 7 | indent_style = tab
 8 | indent_size = 2
 9 | trim_trailing_whitespace = true
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-list/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"max-lines-per-function": 0,
 8 | 		"multiline-comment-style": 1,
 9 | 		"new-cap": [2, { "capIsNewExceptions": ["GetIntrinsic"] }],
10 | 	},
11 | }
12 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-list/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/side-channel-list
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-list/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"lines": 86,
 6 | 	"statements": 85.93,
 7 | 	"functions": 82.43,
 8 | 	"branches": 76.06,
 9 | 	"exclude": [
10 | 		"coverage",
11 | 		"test"
12 | 	]
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-list/CHANGELOG.md:
--------------------------------------------------------------------------------
 1 | # Changelog
 2 | 
 3 | All notable changes to this project will be documented in this file.
 4 | 
 5 | The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
 6 | and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
 7 | 
 8 | ## v1.0.0 - 2024-12-10
 9 | 
10 | ### Commits
11 | 
12 | - Initial implementation, tests, readme, types [`5d6baee`](https://github.com/ljharb/side-channel-list/commit/5d6baee5c9054a1238007f5a1dfc109a7a816251)
13 | - Initial commit [`3ae784c`](https://github.com/ljharb/side-channel-list/commit/3ae784c63a47895fbaeed2a91ab54a8029a7a100)
14 | - npm init [`07055a4`](https://github.com/ljharb/side-channel-list/commit/07055a4d139895565b199dba5fe2479c1a1b9e28)
15 | - Only apps should have lockfiles [`9573058`](https://github.com/ljharb/side-channel-list/commit/9573058a47494e2d68f8c6c77b5d7fbe441949c1)
16 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-list/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-list/index.d.ts:
--------------------------------------------------------------------------------
 1 | declare namespace getSideChannelList {
 2 | 	type Channel<K, V> = {
 3 | 		assert: (key: K) => void;
 4 | 		has: (key: K) => boolean;
 5 | 		get: (key: K) => V | undefined;
 6 | 		set: (key: K, value: V) => void;
 7 | 		delete: (key: K) => boolean;
 8 | 	};
 9 | }
10 | 
11 | declare function getSideChannelList<V, K>(): getSideChannelList.Channel<K, V>;
12 | 
13 | export = getSideChannelList;
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-list/list.d.ts:
--------------------------------------------------------------------------------
 1 | type ListNode<T, K> = {
 2 | 	key: K;
 3 | 	next: undefined | ListNode<T, K>;
 4 | 	value: T;
 5 | };
 6 | type RootNode<T, K> = {
 7 | 	next: undefined | ListNode<T, K>;
 8 | };
 9 | 
10 | export function listGetNode<T, K>(list: RootNode<T, K>, key: ListNode<T, K>['key'], isDelete?: boolean): ListNode<T, K> | undefined;
11 | export function listGet<T, K>(objects: undefined | RootNode<T, K>, key: ListNode<T, K>['key']): T | undefined;
12 | export function listSet<T, K>(objects: RootNode<T, K>, key: ListNode<T, K>['key'], value: T): void;
13 | export function listHas<T, K>(objects: undefined | RootNode<T, K>, key: ListNode<T, K>['key']): boolean;
14 | export function listDelete<T, K>(objects: undefined | RootNode<T, K>, key: ListNode<T, K>['key']): ListNode<T, K> | undefined;
15 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-list/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@ljharb/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		"target": "es2021",
 5 | 	},
 6 | 	"exclude": [
 7 | 		"coverage",
 8 | 	],
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-map/.editorconfig:
--------------------------------------------------------------------------------
 1 | root = true
 2 | 
 3 | [*]
 4 | charset = utf-8
 5 | end_of_line = lf
 6 | insert_final_newline = true
 7 | indent_style = tab
 8 | indent_size = 2
 9 | trim_trailing_whitespace = true
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-map/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"max-lines-per-function": 0,
 8 | 		"multiline-comment-style": 1,
 9 | 		"new-cap": [2, { "capIsNewExceptions": ["GetIntrinsic"] }],
10 | 	},
11 | }
12 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-map/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/side-channel-map
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-map/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"lines": 86,
 6 | 	"statements": 85.93,
 7 | 	"functions": 82.43,
 8 | 	"branches": 76.06,
 9 | 	"exclude": [
10 | 		"coverage",
11 | 		"test"
12 | 	]
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-map/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-map/index.d.ts:
--------------------------------------------------------------------------------
 1 | declare namespace getSideChannelMap {
 2 | 	type Channel<K, V> = {
 3 | 		assert: (key: K) => void;
 4 | 		has: (key: K) => boolean;
 5 | 		get: (key: K) => V | undefined;
 6 | 		set: (key: K, value: V) => void;
 7 | 		delete: (key: K) => boolean;
 8 | 	};
 9 | }
10 | 
11 | declare function getSideChannelMap<K, V>(): getSideChannelMap.Channel<K, V>;
12 | 
13 | declare const x: false | typeof getSideChannelMap;
14 | 
15 | export = x;
16 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-map/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@ljharb/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		"target": "es2021",
 5 | 	},
 6 | 	"exclude": [
 7 | 		"coverage",
 8 | 	],
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-weakmap/.editorconfig:
--------------------------------------------------------------------------------
 1 | root = true
 2 | 
 3 | [*]
 4 | charset = utf-8
 5 | end_of_line = lf
 6 | insert_final_newline = true
 7 | indent_style = tab
 8 | indent_size = 2
 9 | trim_trailing_whitespace = true
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-weakmap/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"id-length": 0,
 8 | 		"max-lines-per-function": 0,
 9 | 		"multiline-comment-style": 1,
10 | 		"new-cap": [2, { "capIsNewExceptions": ["GetIntrinsic"] }],
11 | 	},
12 | }
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-weakmap/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/side-channel-weakmap
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-weakmap/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"lines": 86,
 6 | 	"statements": 85.93,
 7 | 	"functions": 82.43,
 8 | 	"branches": 76.06,
 9 | 	"exclude": [
10 | 		"coverage",
11 | 		"test"
12 | 	]
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-weakmap/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2019 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-weakmap/index.d.ts:
--------------------------------------------------------------------------------
 1 | declare namespace getSideChannelWeakMap {
 2 | 	type Channel<K, V> = {
 3 | 		assert: (key: K) => void;
 4 | 		has: (key: K) => boolean;
 5 | 		get: (key: K) => V | undefined;
 6 | 		set: (key: K, value: V) => void;
 7 | 		delete: (key: K) => boolean;
 8 | 	}
 9 | }
10 | 
11 | declare function getSideChannelWeakMap<K, V>(): getSideChannelWeakMap.Channel<K, V>;
12 | 
13 | declare const x: false | typeof getSideChannelWeakMap;
14 | 
15 | export = x;
16 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel-weakmap/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@ljharb/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		"target": "es2021",
 5 | 	},
 6 | 	"exclude": [
 7 | 		"coverage",
 8 | 	],
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel/.editorconfig:
--------------------------------------------------------------------------------
 1 | root = true
 2 | 
 3 | [*]
 4 | charset = utf-8
 5 | end_of_line = lf
 6 | insert_final_newline = true
 7 | indent_style = tab
 8 | indent_size = 2
 9 | trim_trailing_whitespace = true
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel/.eslintrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"root": true,
 3 | 
 4 | 	"extends": "@ljharb",
 5 | 
 6 | 	"rules": {
 7 | 		"id-length": 0,
 8 | 		"max-lines-per-function": 0,
 9 | 		"multiline-comment-style": 1,
10 | 		"new-cap": [2, { "capIsNewExceptions": ["GetIntrinsic"] }],
11 | 	},
12 | }
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel/.github/FUNDING.yml:
--------------------------------------------------------------------------------
 1 | # These are supported funding model platforms
 2 | 
 3 | github: [ljharb]
 4 | patreon: # Replace with a single Patreon username
 5 | open_collective: # Replace with a single Open Collective username
 6 | ko_fi: # Replace with a single Ko-fi username
 7 | tidelift: npm/side-channel
 8 | community_bridge: # Replace with a single Community Bridge project-name e.g., cloud-foundry
 9 | liberapay: # Replace with a single Liberapay username
10 | issuehunt: # Replace with a single IssueHunt username
11 | otechie: # Replace with a single Otechie username
12 | custom: # Replace with up to 4 custom sponsorship URLs e.g., ['link1', 'link2']
13 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel/.nycrc:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"all": true,
 3 | 	"check-coverage": false,
 4 | 	"reporter": ["text-summary", "text", "html", "json"],
 5 | 	"lines": 86,
 6 | 	"statements": 85.93,
 7 | 	"functions": 82.43,
 8 | 	"branches": 76.06,
 9 | 	"exclude": [
10 | 		"coverage",
11 | 		"test"
12 | 	]
13 | }
14 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2019 Jordan Harband
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel/index.d.ts:
--------------------------------------------------------------------------------
 1 | import getSideChannelList from 'side-channel-list';
 2 | import getSideChannelMap from 'side-channel-map';
 3 | import getSideChannelWeakMap from 'side-channel-weakmap';
 4 | 
 5 | declare namespace getSideChannel {
 6 | 	type Channel<K, V> =
 7 | 		| getSideChannelList.Channel<K, V>
 8 | 		| ReturnType<Exclude<typeof getSideChannelMap<K, V>, false>>
 9 | 		| ReturnType<Exclude<typeof getSideChannelWeakMap<K, V>, false>>;
10 | }
11 | 
12 | declare function getSideChannel<K, V>(): getSideChannel.Channel<K, V>;
13 | 
14 | export = getSideChannel;
15 | 


--------------------------------------------------------------------------------
/frontend/node_modules/side-channel/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"extends": "@ljharb/tsconfig",
 3 | 	"compilerOptions": {
 4 | 		"target": "es2021",
 5 | 	},
 6 | 	"exclude": [
 7 | 		"coverage",
 8 | 	],
 9 | }
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/toidentifier/HISTORY.md:
--------------------------------------------------------------------------------
 1 | 1.0.1 / 2021-11-14
 2 | ==================
 3 | 
 4 |   * pref: enable strict mode
 5 | 
 6 | 1.0.0 / 2018-07-09
 7 | ==================
 8 | 
 9 |   * Initial release
10 | 


--------------------------------------------------------------------------------
/frontend/node_modules/toidentifier/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2016 Douglas Christopher Wilson <doug@somethingdoug.com>
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/frontend/node_modules/toidentifier/index.js:
--------------------------------------------------------------------------------
 1 | /*!
 2 |  * toidentifier
 3 |  * Copyright(c) 2016 Douglas Christopher Wilson
 4 |  * MIT Licensed
 5 |  */
 6 | 
 7 | 'use strict'
 8 | 
 9 | /**
10 |  * Module exports.
11 |  * @public
12 |  */
13 | 
14 | module.exports = toIdentifier
15 | 
16 | /**
17 |  * Trasform the given string into a JavaScript identifier
18 |  *
19 |  * @param {string} str
20 |  * @returns {string}
21 |  * @public
22 |  */
23 | 
24 | function toIdentifier (str) {
25 |   return str
26 |     .split(' ')
27 |     .map(function (token) {
28 |       return token.slice(0, 1).toUpperCase() + token.slice(1)
29 |     })
30 |     .join('')
31 |     .replace(/[^ _0-9a-z]/gi, '')
32 | }
33 | 


--------------------------------------------------------------------------------
/frontend/node_modules/unpipe/HISTORY.md:
--------------------------------------------------------------------------------
1 | 1.0.0 / 2015-06-14
2 | ==================
3 | 
4 |   * Initial release
5 | 


--------------------------------------------------------------------------------
/frontend/node_modules/unpipe/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/unpipe/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "unpipe",
 3 |   "description": "Unpipe a stream from all destinations",
 4 |   "version": "1.0.0",
 5 |   "author": "Douglas Christopher Wilson <doug@somethingdoug.com>",
 6 |   "license": "MIT",
 7 |   "repository": "stream-utils/unpipe",
 8 |   "devDependencies": {
 9 |     "istanbul": "0.3.15",
10 |     "mocha": "2.2.5",
11 |     "readable-stream": "1.1.13"
12 |   },
13 |   "files": [
14 |     "HISTORY.md",
15 |     "LICENSE",
16 |     "README.md",
17 |     "index.js"
18 |   ],
19 |   "engines": {
20 |     "node": ">= 0.8"
21 |   },
22 |   "scripts": {
23 |     "test": "mocha --reporter spec --bail --check-leaks test/",
24 |     "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/",
25 |     "test-travis": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/"
26 |   }
27 | }
28 | 


--------------------------------------------------------------------------------
/frontend/node_modules/vary/HISTORY.md:
--------------------------------------------------------------------------------
 1 | 1.1.2 / 2017-09-23
 2 | ==================
 3 | 
 4 |   * perf: improve header token parsing speed
 5 | 
 6 | 1.1.1 / 2017-03-20
 7 | ==================
 8 | 
 9 |   * perf: hoist regular expression
10 | 
11 | 1.1.0 / 2015-09-29
12 | ==================
13 | 
14 |   * Only accept valid field names in the `field` argument
15 |     - Ensures the resulting string is a valid HTTP header value
16 | 
17 | 1.0.1 / 2015-07-08
18 | ==================
19 | 
20 |   * Fix setting empty header from empty `field`
21 |   * perf: enable strict mode
22 |   * perf: remove argument reassignments
23 | 
24 | 1.0.0 / 2014-08-10
25 | ==================
26 | 
27 |   * Accept valid `Vary` header string as `field`
28 |   * Add `vary.append` for low-level string manipulation
29 |   * Move to `jshttp` orgainzation
30 | 
31 | 0.1.0 / 2014-06-05
32 | ==================
33 | 
34 |   * Support array of fields to set
35 | 
36 | 0.0.0 / 2014-06-04
37 | ==================
38 | 
39 |   * Initial release
40 | 


--------------------------------------------------------------------------------
/frontend/node_modules/vary/LICENSE:
--------------------------------------------------------------------------------
 1 | (The MIT License)
 2 | 
 3 | Copyright (c) 2014-2017 Douglas Christopher Wilson
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining
 6 | a copy of this software and associated documentation files (the
 7 | 'Software'), to deal in the Software without restriction, including
 8 | without limitation the rights to use, copy, modify, merge, publish,
 9 | distribute, sublicense, and/or sell copies of the Software, and to
10 | permit persons to whom the Software is furnished to do so, subject to
11 | the following conditions:
12 | 
13 | The above copyright notice and this permission notice shall be
14 | included in all copies or substantial portions of the Software.
15 | 
16 | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
17 | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
18 | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
19 | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
20 | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
21 | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
22 | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
23 | 


--------------------------------------------------------------------------------
/frontend/node_modules/wrappy/LICENSE:
--------------------------------------------------------------------------------
 1 | The ISC License
 2 | 
 3 | Copyright (c) Isaac Z. Schlueter and Contributors
 4 | 
 5 | Permission to use, copy, modify, and/or distribute this software for any
 6 | purpose with or without fee is hereby granted, provided that the above
 7 | copyright notice and this permission notice appear in all copies.
 8 | 
 9 | THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
10 | WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
11 | MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
12 | ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
13 | WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
14 | ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
15 | IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
16 | 


--------------------------------------------------------------------------------
/frontend/node_modules/wrappy/README.md:
--------------------------------------------------------------------------------
 1 | # wrappy
 2 | 
 3 | Callback wrapping utility
 4 | 
 5 | ## USAGE
 6 | 
 7 | ```javascript
 8 | var wrappy = require("wrappy")
 9 | 
10 | // var wrapper = wrappy(wrapperFunction)
11 | 
12 | // make sure a cb is called only once
13 | // See also: http://npm.im/once for this specific use case
14 | var once = wrappy(function (cb) {
15 |   var called = false
16 |   return function () {
17 |     if (called) return
18 |     called = true
19 |     return cb.apply(this, arguments)
20 |   }
21 | })
22 | 
23 | function printBoo () {
24 |   console.log('boo')
25 | }
26 | // has some rando property
27 | printBoo.iAmBooPrinter = true
28 | 
29 | var onlyPrintOnce = once(printBoo)
30 | 
31 | onlyPrintOnce() // prints 'boo'
32 | onlyPrintOnce() // does nothing
33 | 
34 | // random property is retained!
35 | assert.equal(onlyPrintOnce.iAmBooPrinter, true)
36 | ```
37 | 


--------------------------------------------------------------------------------
/frontend/node_modules/wrappy/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "wrappy",
 3 |   "version": "1.0.2",
 4 |   "description": "Callback wrapping utility",
 5 |   "main": "wrappy.js",
 6 |   "files": [
 7 |     "wrappy.js"
 8 |   ],
 9 |   "directories": {
10 |     "test": "test"
11 |   },
12 |   "dependencies": {},
13 |   "devDependencies": {
14 |     "tap": "^2.3.1"
15 |   },
16 |   "scripts": {
17 |     "test": "tap --coverage test/*.js"
18 |   },
19 |   "repository": {
20 |     "type": "git",
21 |     "url": "https://github.com/npm/wrappy"
22 |   },
23 |   "author": "Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)",
24 |   "license": "ISC",
25 |   "bugs": {
26 |     "url": "https://github.com/npm/wrappy/issues"
27 |   },
28 |   "homepage": "https://github.com/npm/wrappy"
29 | }
30 | 


--------------------------------------------------------------------------------
/frontend/node_modules/wrappy/wrappy.js:
--------------------------------------------------------------------------------
 1 | // Returns a wrapper function that returns a wrapped callback
 2 | // The wrapper function should do some stuff, and return a
 3 | // presumably different callback function.
 4 | // This makes sure that own properties are retained, so that
 5 | // decorations and such are not lost along the way.
 6 | module.exports = wrappy
 7 | function wrappy (fn, cb) {
 8 |   if (fn && cb) return wrappy(fn)(cb)
 9 | 
10 |   if (typeof fn !== 'function')
11 |     throw new TypeError('need wrapper function')
12 | 
13 |   Object.keys(fn).forEach(function (k) {
14 |     wrapper[k] = fn[k]
15 |   })
16 | 
17 |   return wrapper
18 | 
19 |   function wrapper() {
20 |     var args = new Array(arguments.length)
21 |     for (var i = 0; i < args.length; i++) {
22 |       args[i] = arguments[i]
23 |     }
24 |     var ret = fn.apply(this, args)
25 |     var cb = args[args.length-1]
26 |     if (typeof ret === 'function' && ret !== cb) {
27 |       Object.keys(cb).forEach(function (k) {
28 |         ret[k] = cb[k]
29 |       })
30 |     }
31 |     return ret
32 |   }
33 | }
34 | 


--------------------------------------------------------------------------------
/frontend/package copy.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "frontend",
 3 |   "version": "1.0.0",
 4 |   "description": "",
 5 |   "main": "dashboard.js",
 6 |   "scripts": {
 7 |     "test": "echo \"Error: no test specified\" && exit 1",
 8 |     "start": "node server.js"
 9 |   },
10 |   "keywords": [],
11 |   "author": "",
12 |   "license": "ISC",
13 |   "type": "commonjs"
14 | }
15 | 


--------------------------------------------------------------------------------
/frontend/package.json:
--------------------------------------------------------------------------------
1 | {
2 |   "dependencies": {
3 |     "@google/generative-ai": "^0.24.1",
4 |     "cors": "^2.8.5",
5 |     "express": "^5.1.0"
6 |   }
7 | }
8 | 


--------------------------------------------------------------------------------
/frontend/register.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/sumitanand713/TeamCse_sjbit/main/frontend/register.jpg


--------------------------------------------------------------------------------
/frontend/signin.js:
--------------------------------------------------------------------------------
 1 | document.getElementById("login-form").addEventListener("submit", async function(event){
 2 |     event.preventDefault();
 3 | 
 4 |     const loginData = {
 5 |         email: document.getElementById("email").value,
 6 |         password: document.getElementById("password").value
 7 |     };
 8 | 
 9 |     const response = await fetch("http://localhost:8080/api/auth/login", {
10 |         method: "POST",
11 |         headers: {"Content-Type": "application/json"},
12 |         body: JSON.stringify(loginData)
13 |     });
14 | 
15 |     const result = await response.json(); // <-- CHANGE: Expecting user object
16 | 
17 |     if(result && result.id){ // Login success
18 |         localStorage.setItem("userId", result.id);
19 |         localStorage.setItem("userName", result.name); // ✅ SAVE NAME
20 |         window.location.href = "dashboard.html";
21 |     } 
22 |     else {
23 |         document.getElementById("error-message").innerText = "Invalid email or password!";
24 |     }
25 | });
26 | 
--------------------------------------------------------------------------------
/frontend/signin_image.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/sumitanand713/TeamCse_sjbit/main/frontend/signin_image.png

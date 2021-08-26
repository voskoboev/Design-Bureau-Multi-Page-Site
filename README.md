## Design Bureau 'Benhome' Multi-Page Site

### Summary:
- Valid, crossbrowser, responsive, accessible, optimized;
- Parcel, Reset.css, SCSS, Vanilla JS, Swiper.js, ESLint, Stylelint;
- [Hosted Site](https://benhome.netlify.app/).

### Business Purpose:

Presentation of design bureau services for potential clients.

### Stack:

Parcel, Reset.css, SCSS, Vanilla JS, Swiper.js, ESLint, Stylelint.

### Stack Reasons:

#### 1. Parcel: </br>

1. Minimal configuration for common stack;
2. Fast speed of bundling.

#### 2. Reset.css: </br>

1.  Lack of important text content;
2.  Web page has many elements with unique styles.

#### 3. SCSS: </br>

1.  Widespread use (potential support);
2.  Useful language structures;
3.  Convenient documentation.

#### 4. Vanilla JS: </br>

1. Fast speed of work;
2. Strict implementation in browser;
3. Exclusion of additional libraries.

#### 5. Swiper.js: </br>

1. Widespread use (potential support);
2. Useful settings' API;
3. Responsiveness;
4. Convenient documentation.

#### 6. ESLint, Stylelint:</br>
1. Widespread use (potential support);
2. Useful standard configs.

### Tech Features:

-   **Project in General**:
    -   Folder structure is mostly file based;
    -  	Crossbrowser compatibility was checked with ‘Chrome’, ‘Opera’, ‘Firefox’, ‘Edge’ and ‘Yandex’.
-   **HTML:**  Semantic layout.
-   **SCSS**: Repeated blocks were transferred to a 'common.blocks' folder.
 - **JS**: 
	 - Used procedural paradigm;
	 - Outer functions' calls were disposed on the top JS files for convenience of search and debugging.
-   **Gulp**: Configured individual project settings.
-   **ESLint, Stylelint:**  Used standard configs with several individual settings.

### Optimizations:
-   **HTML**: HTML entities were changed with CSS pseudo-elements where possible.
-   **CSS**:
	- Minified;
	- Styles were isolated with BEM classes and SASS modules;
	- Excluded excessive properties inheritance where possible;
	- Excluded pseudo-classes where possible;
	- Final CSS bundle was compiled with prefixes.
- **JS**:
	- Transpiled;
	- Minified;
	- DRY, KISS, YAGNI.
- **Pics**: 
	- Changed sizes;
	- Compressed.
- **Video**: Compressed.
- **Fonts**:
	- Compressed;
	- Preloaded.

### Sources:
[Template](https://themeforest.net/item/benhome-architecture-interior-figma-template/29986547)
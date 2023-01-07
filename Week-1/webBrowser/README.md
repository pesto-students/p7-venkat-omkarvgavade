# When a user enters an URL in the browser, how does the browser fetch the desiredresult ? <br>

URL stands for _Uniform Resource Locator_.It is referance on the internet be it images, hypertext pages, audio/video files. <br>

## 1) Main functionality of browser <br>

- The main function is to retrieve information from the World Wide Web and making it available for users <br> - Visiting any website can be done using a web browser. When a URL is entered in a browser, the web server takes us to that website <br>

## 2) High level components of browser <br>

a) The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page. <br>
b) The browser engine: marshals actions between the UI and the rendering engine.<br>
c) The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen. <br>
d) Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.<br>
e) UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.<br>
f) JavaScript interpreter: Used to parse and execute JavaScript code.<br>
g) Data storage: This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.<br>
<img style="width:100%;margin:auto" src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=650"> 

## 3) Rendering engine and its use. <br>
The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen. <br> <br>
By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in <br> <br>
The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.<br> <br>
After that, this is the basic flow of the rendering engine:
<img style="width:100%;margin:auto" src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/bPlYx9xODQH4X1KuUNpc.png?auto=format&w=741">
The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree. <br>
The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.<br>
After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer. <br>
It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network. <br><br>
Figure : WebKit main flow <br><br>
<img style="width:100%;margin:auto" src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/S9TJhnMX1cu1vrYuQRqM.png?auto=format&w=741">
Figure : Mozilla's Gecko rendering engine main flow <br><br>
<img style="width:100%;margin:auto" src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/Tbif2mUJCUVyPdyXntZk.jpg?auto=format&w=741">
In above figures you can see that although WebKit and Gecko use slightly different terminology, the flow is basically the same. <br> <br>
Gecko calls the tree of visually formatted elements a "Frame tree". Each element is a frame. WebKit uses the term "Render Tree" and it consists of "Render Objects". WebKit uses the term "layout" for the placing of elements, while Gecko calls it "Reflow". "Attachment" is WebKit's term for connecting DOM nodes and visual information to create the render tree. A minor non-semantic difference is that Gecko has an extra layer between the HTML and the DOM tree. It is called the "content sink" and is a factory for making DOM elements. <br><br>

## 4) Parsing:-
Since parsing is a very significant process within the rendering engine, we will go into it a little more deeply. Let's begin with a little introduction about parsing. <br>

Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.<br>
  ### Parser:-
   Parsing can be separated into two sub processes: lexical analysis and syntax analysis. <br>
   Lexical analysis is the process of breaking the input into tokens. Tokens are the language vocabulary: the collection of valid building blocks. In human language it will consist of all the words that appear in the dictionary for that language.<br>
   Syntax analysis is the applying of the language syntax rules.<br>
   Parsers usually divide the work between two components: the lexer (sometimes called tokenizer) that is responsible for breaking the input into valid tokens, and the parser that is responsible for constructing the parse tree by analyzing the document structure according to the language syntax rules.<br>
   The lexer knows how to strip irrelevant characters like white spaces and line breaks.<br>
 <img style="width:10%;margin:auto" src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/TfY1qPDNbZS8iBnlAO4b.png?auto=format&w=131">
 The parsing process is iterative. The parser will usually ask the lexer for a new token and try to match the token with one of the syntax rules. If a rule is matched, a node corresponding to the token will be added to the parse tree and the parser will ask for another token. <br>
If no rule matches, the parser will store the token internally, and keep asking for tokens until a rule matching all the internally stored tokens is found. If no rule is found then the parser will raise an exception. This means the document was not valid and contained syntax errors.<br>

### HTML Parser 
The job of the HTML parser is to parse the HTML markup into a parse tree.

### The HTML grammar definition 
The vocabulary and syntax of HTML are defined in specifications created by the W3C organization.

### Not a context free grammar 
As we have seen in the parsing introduction, grammar syntax can be defined formally using formats like BNF.

Unfortunately all the conventional parser topics do not apply to HTML (I didn't bring them up just for fun - they will be used in parsing CSS and JavaScript). HTML cannot easily be defined by a context free grammar that parsers need.

There is a formal format for defining HTML - DTD (Document Type Definition) - but it is not a context free grammar.

This appears strange at first sight; HTML is rather close to XML. There are lots of available XML parsers. There is an XML variation of HTML - XHTML - so what's the big difference?

The difference is that the HTML approach is more "forgiving": it lets you omit certain tags (which are then added implicitly), or sometimes omit start or end tags, and so on. On the whole it's a "soft" syntax, as opposed to XML's stiff and demanding syntax.

This seemingly small detail makes a world of a difference. On one hand this is the main reason why HTML is so popular: it forgives your mistakes and makes life easy for the web author. On the other hand, it makes it difficult to write a formal grammar. So to summarize, HTML cannot be parsed easily by conventional parsers, since its grammar is not context free. HTML cannot be parsed by XML parsers.

### HTML DTD 
HTML definition is in a DTD format. This format is used to define languages of the SGML family. The format contains definitions for all allowed elements, their attributes and hierarchy. As we saw earlier, the HTML DTD doesn't form a context free grammar.

There are a few variations of the DTD. The strict mode conforms solely to the specifications but other modes contain support for markup used by browsers in the past. The purpose is backwards compatibility with older content. The current strict DTD is here: www.w3.org/TR/html4/strict.dtd

### DOM 
The output tree (the "parse tree") is a tree of DOM element and attribute nodes. DOM is short for Document Object Model. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript.

The root of the tree is the "Document" object.

The DOM has an almost one-to-one relation to the markup

<img src="https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/DNtfwOq9UaC3TrEj3D9h.png?auto=format&w=500">

## Script processing:-
The script HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The script element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON. <br>
Script tags are executed in the order they appear <br>
Functionally this means you can significantly slow down your site if you have slow scripts loading early in the page. It also means scripts which appear later on the page can depend on things scripts which appear earlier have done. <br>
Elements on the page won’t render until all the script tags preceding them have loaded and executed. This means you can do all sorts of crazy things where you tweak the page before it loads, if you’re willing to accept the performance hit.<br>
When a script tag executes, everything above it in the DOM is available (but not everything below). <br>
You can think of the HTML parser as traveling through the document tag by tag, executing any JavaScript as it approaches it. This means DOM nodes are available to your JavaScript (through querySelectorAll, jQuery, etc.) only if their opening tag appears earlier in the document than your script tag.<br>

### async and defer
HTML5 has added a couple tools for controlling when scripts execute. <br>
async means “execute this whenever”. More specifically that means: I don’t care if you execute this after the whole page has loaded, and every other script has executed. It’s very useful for analytics tracking codes, for example, where no other code on the page depends on their execution. Defining a variable or function in async code which the page needs is bad news, as you have no way of knowing when the async code will actually run.<br><br>
defer means “wait for the parser to finish to execute this”. It’s roughly equivalent to binding your script to the DOMContentLoaded event, or using jQuery.ready. When the code does run, everything in the DOM will be available for you to use. Unlike async, defer’d code will run in the order it appears in the HTML of the page, it is just deferred until after the HTML is fully parsed.<br><br>
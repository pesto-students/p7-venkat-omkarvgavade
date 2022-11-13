##When a user enters an URL in the browser, how does the browser fetch the desiredresult ? <br/>
      URL stands for *Uniform Resource Locator*.It is referance on the internet be it images, hypertext pages, audio/video files. <br>
    #1) Main functionality of browser <br/>
      - The main function is to retrieve information from the World Wide Web and making it available for users <br>
      - Visiting any website can be done using a web browser. When a URL is entered in a browser, the web server takes us to that website <br/>
    #2) High level components of browser <br/>
        a) The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page. <br/>
        b) The browser engine: marshals actions between the UI and the rendering engine.<br/>
        c) The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen. <br/>
        d) Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.<br/>
        e) UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.<br/>
        f) JavaScript interpreter: Used to parse and execute JavaScript code.<br/>
        g) Data storage: This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.<br/>

        ![alt text](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=650)

    #3) Rendering engine and its use. <br/>
        The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen. <br/> <br/> 

        By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in <br/> <br/> 

        The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.<br/> <br/> 

        After that, this is the basic flow of the rendering engine:

        ![alt text](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/bPlYx9xODQH4X1KuUNpc.png?auto=format&w=741)
          
        The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree. <br/>

        The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.<br/>

        After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer. <br/>

        It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network. <br/>
        
        Figure : WebKit main flow
        ![alt text](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/S9TJhnMX1cu1vrYuQRqM.png?auto=format&w=741)
        Figure : Mozilla's Gecko rendering engine main flow
        ![alt text](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/Tbif2mUJCUVyPdyXntZk.jpg?auto=format&w=741) 
        
        From figures 3 and 4 you can see that although WebKit and Gecko use slightly different terminology, the flow is basically the same. <br/> <br/>

        Gecko calls the tree of visually formatted elements a "Frame tree". Each element is a frame. WebKit uses the term "Render Tree" and it consists of "Render Objects". WebKit uses the term "layout" for the placing of elements, while Gecko calls it "Reflow". "Attachment" is WebKit's term for connecting DOM nodes and visual information to create the render tree. A minor non-semantic difference is that Gecko has an extra layer between the HTML and the DOM tree. It is called the "content sink" and is a factory for making DOM elements. <br/><br/>


function MyThoughtProcess () {
    return (
        <>
            <p>I am learning how to insert an object from a different file, as in using a module. My copilot trial version is running out. My client is a designer, photographer, that needs a website to explore, to imagine, to showcase, to document. It is a webpage that I build using my React learning. It would be cool to have images of surfing, climbing, practicing the feng shui of design.</p>
            <p>The thought process behind this is that to import this text as a module I had to make a package.json file with "type"="module", and had to research how to do it. I looked up the import and export words in devdocs. I was very happy when it finally worked. Now I wonder whether it will work with the react page as well. 🐛 I also learned how to run javascript files on the command line, which is "node name_of_file.js"</p>
        </>
    )
}

function helloWorld() {
    console.log("Hello World!")
}

export { helloWorld }
export default MyThoughtProcess
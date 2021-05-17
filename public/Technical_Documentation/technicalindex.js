const firstDiv = document.querySelector(".row-grid"); // add class nav-link
const secondDiv = document.querySelector(".dropdown-menu"); // add class dropdown-item

const anchors = `
                <a href="#Introduction" class="nav-link">Introduction</a>
                <a href="#What_you_should_already_know" class="nav-link"
                    >What You Should Already Know</a
                >
                <a href="#JavaScript_and_Java">JavaScript and Java</a>
                <a href="#Hello_world">Hello World</a>
                <a href="#Variables">Variables</a>
                <a href="#Declaring_variables">Declaring Variables</a>
                <a href="#Variable_scope">Variable Scope</a>
                <a href="#Global_variables">Global Variables</a>
                <a href="#Constants">Local Variables</a>
                <a href="#Data_types">Data Types</a>
                <a href="#if...else_statement">if...else Statement</a>
                <a href="#While_statement">while Statement</a>
                <a href="#Function_declarations" c>Function Declarations</a
                >
                <a href="#Reference">Reference</a>`;


firstDiv.innerHTML = `<a href="#Introduction" class="nav-link topnav">JS Documentation</a>` + anchors;
secondDiv.innerHTML = anchors;

for (let i = 0; i < firstDiv.children.length; i++) {
    firstDiv.children[i].classList.add("nav-link");
}

for (let i = 0; i < secondDiv.children.length; i++) {
    secondDiv.children[i].classList.add("dropdown-item");
}

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".btn").classList.add("btnClass")
})

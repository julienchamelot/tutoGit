/*
<head>
    ...
    <script src="copier.js" type="text/javascript"></script>
</head>


<body>
    ...
    <span>&#34;message&#34; a &lt;copier></span>
    <button onclick="copierTexte ('&#34;message&#34; a &lt;copier>')">Copier</button>
    &#34; pour gillement
    &lt; pour inferieur 
</body>

*/

function copierTexte(textAcopier) {
    console.log("click !!!!!!!!!!!");
    navigator.clipboard.writeText(textAcopier);
}

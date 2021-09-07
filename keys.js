
function writeRandomKeys()
{
    header = "Notes";
    let sharps = ["C","G","D","A","E","B","F&#x266F;","C&#x266F;"]
    let flats = ["F","B&#x266D;","E&#x266D;","A&#x266D;","D&#x266D;","G&#x266D;","C&#x266D;"]
    
    let allmajors = sharps.concat(flats)

    let minors = allmajors.map(function(element) {
	return `${element}m`
    })
    let allkeys = allmajors.concat(minors)
	      
    allkeys.sort(function(a, b){return 0.5 - Math.random()});
        
    let html = `<h2>${header}</h2><ul>`;
        
    for (const x of allkeys) {
      html += `<li>${x}</li>`;
    }
        
    html += `</ul>`;
    document.getElementById("displayKeys").innerHTML = html;
}

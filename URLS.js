let SelectedLevels = []
let Music = document.getElementById("MusicSound");
Music.volume = 0.7;
//Prelude
PreludeLevels = document.getElementsByClassName("PreludeLevel");
PreludeLayer = document.getElementById("Prelude");
PreludeLayer.addEventListener("click", (event) => {
    if (PreludeLayer.checked === true){
        for (let i of PreludeLevels) {
            let a =SelectedLevels.indexOf(i.value);
            if (a !== -1) {
                SelectedLevels.splice(a, 1);
            }
        }
        for (let i of PreludeLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
        
    }
    else{
        for (let i of PreludeLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value),1 )
        }
    }
    
})

let Option1 = document.getElementById("0-1");
Option1.addEventListener("click", (event) => {
    if (Option1.checked === true)
        SelectedLevels.push(Option1.value)
    else {
        SelectedLevels.splice(SelectedLevels.indexOf(Option1.value),1);
        PreludeLayer.checked = false;
    }
    
})
let Option2 = document.getElementById("0-2");
Option2.addEventListener("click", (event) => {
    if (Option2.checked === true)
        SelectedLevels.push(Option2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Option2.value),1)
        PreludeLayer.checked = false;
    
})
let Option3 = document.getElementById("0-3");
Option3.addEventListener("click", (event) => {
    if (Option3.checked === true)
        SelectedLevels.push(Option3.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Option3.value),1)
        PreludeLayer.checked = false;
    
})

let Option4 = document.getElementById("0-4");
Option4.addEventListener("click", (event) => {
    if (Option4.checked === true)
        SelectedLevels.push(Option4.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Option4.value),1)
        PreludeLayer.checked = false;
    
})

let Option5 = document.getElementById("0-5");
Option5.addEventListener("click", (event) => {
    if (Option5.checked === true)
        SelectedLevels.push(Option5.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Option5.value),1)
        PreludeLayer.checked = false;
    
})

let Option0S = document.getElementById("0-S");
Option0S.addEventListener("click", (event) => {
    if (Option0S.checked === true) {
        SelectedLevels.push(Option0S.value)
    }
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Option0S.value),1)
        PreludeLayer.checked = false;
    
})

document.getElementById("PreludeOpen").addEventListener("click", (event) => {
    if (document.getElementById("PreludeOpen").checked === true){
        for (let i of document.getElementsByClassName("PreludeLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
        };
    for (let i of document.getElementsByClassName("Preludeimg")){
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
        }
    for (let i of document.getElementsByClassName("PreludeLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
        };
    for (let i of document.getElementsByClassName("LabelAndCheckPrelude")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
        };
    document.getElementById("PreludeOpenLabel").textContent = "↑";
    document.getElementById("PreludeDiv").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("PreludeLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("PreludeLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckPrelude")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("PreludeOpenLabel").textContent = "↓"
    document.getElementById("PreludeDiv").style.border = "none"
    }
})

//Limbo
LimboLevels = document.getElementsByClassName("LimboLevel");
LimboLayer = document.getElementById("Limbo");
LimboLayer.addEventListener("click", (event) => {
    if (LimboLayer.checked === true){
        for (let i of LimboLevels) {
            let a = SelectedLevels.indexOf(i.value)
            if (a !== -1) {
                SelectedLevels.splice(a,1)
            }
        }
        for (let i of LimboLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
    }
    else{
        for (let i of LimboLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value),1)
        }
    }
    
})

let Layer1Option1 = document.getElementById("1-1");
Layer1Option1.addEventListener("click", (event) => {
    if (Layer1Option1.checked === true)
        SelectedLevels.push(Layer1Option1.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer1Option1.value),1)
        LimboLayer.checked = false;
    
})
let Layer1Option2 = document.getElementById("1-2");
Layer1Option2.addEventListener("click", (event) => {
    if (Layer1Option2.checked === true)
        SelectedLevels.push(Layer1Option2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer1Option2.value),1)
        LimboLayer.checked = false;
    
})
let Layer1Option3 = document.getElementById("1-3");
Layer1Option3.addEventListener("click", (event) => {
    if (Layer1Option3.checked === true)
        SelectedLevels.push(Layer1Option3.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer1Option3.value),1)
        LimboLayer.checked = false;
    
})

let Layer1Option4 = document.getElementById("1-4");
Layer1Option4.addEventListener("click", (event) => {
    if (Layer1Option4.checked === true)
        SelectedLevels.push(Layer1Option4.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer1Option4.value),1)
        LimboLayer.checked = false;
    
})

let Layer1OptionS = document.getElementById("1-S");
Layer1OptionS.addEventListener("click", (event) => {
    if (Layer1OptionS.checked === true)
        SelectedLevels.push(Layer1OptionS.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer1OptionS.value),1)
        LimboLayer.checked = false;
    
})

document.getElementById("LimboOpen").addEventListener("click", (event) => {
    if (document.getElementById("LimboOpen").checked === true){
        for (let i of document.getElementsByClassName("LimboLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LimboLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LabelAndCheckLimbo")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("Limboimg")){
        
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
    }
    document.getElementById("LimboOpenLabel").textContent = "↑";
    document.getElementById("LimboDiv").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("LimboLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LimboLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckLimbo")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("LimboOpenLabel").textContent = "↓"
    document.getElementById("LimboDiv").style.border = "none";
    }
})

//Lust

LustLevels = document.getElementsByClassName("LustLevel");
LustLayer = document.getElementById("Lust");
LustLayer.addEventListener("click", (event) => {
    if (LustLayer.checked === true){
        for (let i of LustLevels) {
        let a =SelectedLevels.indexOf(i.value);
        if (a !== -1) {
            SelectedLevels.splice(a, 1);
        }
        }    
        for (let i of LustLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
    }
    else{
        for (let i of LustLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value), 1)
        }
    }
    
})

let Layer2Option1 = document.getElementById("2-1");
Layer2Option1.addEventListener("click", (event) => {
    if (Layer2Option1.checked === true)
        SelectedLevels.push(Layer2Option1.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer2Option1.value),1)
        LustLayer.checked = false;
    
})
let Layer2Option2 = document.getElementById("2-2");
Layer2Option2.addEventListener("click", (event) => {
    if (Layer2Option2.checked === true)
        SelectedLevels.push(Layer2Option2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer2Option2.value),1)
        LustLayer.checked = false;
    
})
let Layer2Option3 = document.getElementById("2-3");
Layer2Option3.addEventListener("click", (event) => {
    if (Layer2Option3.checked === true)
        SelectedLevels.push(Layer2Option3.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer2Option3.value),1)
        LustLayer.checked = false;
    
})

let Layer2Option4 = document.getElementById("2-4");
Layer2Option4.addEventListener("click", (event) => {
    if (Layer2Option4.checked === true)
        SelectedLevels.push(Layer2Option4.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer2Option4.value),1)
        LustLayer.checked = false;
    
})

let Layer2OptionS = document.getElementById("2-S");
Layer2OptionS.addEventListener("click", (event) => {
    if (Layer2OptionS.checked === true)
        SelectedLevels.push(Layer2OptionS.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer2OptionS.value),1)
        LustLayer.checked = false;
    
})

document.getElementById("LustOpen").addEventListener("click", (event) => {
    if (document.getElementById("LustOpen").checked === true){
        for (let i of document.getElementsByClassName("LustLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LustLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LabelAndCheckLust")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("Lustimg")){
        
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
    }
    document.getElementById("LustOpenLabel").textContent = "↑";
    document.getElementById("LustDiv").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("LustLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LustLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckLust")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("LustOpenLabel").textContent = "↓";
    document.getElementById("LustDiv").style.border = "none";
    }
})

//Gluttony
GluttonyLevels = document.getElementsByClassName("GluttonyLevel");
GluttonyLayer = document.getElementById("Gluttony");
GluttonyLayer.addEventListener("click", (event) => {
    if (GluttonyLayer.checked === true){
        for (let i of GluttonyLevels) {
        let a =SelectedLevels.indexOf(i.value);
        if (a !== -1) {
            SelectedLevels.splice(SelectedLevels.indexOf(a.value), 1);
        }
        }    
        for (let i of GluttonyLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
    }
    else{
        for (let i of GluttonyLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value))
        }
    }
    
})


let Layer3Option1 = document.getElementById("3-1");
Layer3Option1.addEventListener("click", (event) => {
    if (Layer3Option1.checked === true)
        SelectedLevels.push(Layer3Option1.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer3Option1.value),1)
        GluttonyLayer.checked = false;
    
})
let Layer3Option2 = document.getElementById("3-2");
Layer3Option2.addEventListener("click", (event) => {
    if (Layer3Option2.checked === true)
        SelectedLevels.push(Layer3Option2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer3Option2.value),1)
        GluttonyLayer.checked = false;
    
})

document.getElementById("GluttonyOpen").addEventListener("click", (event) => {
    if (document.getElementById("GluttonyOpen").checked === true){
        for (let i of document.getElementsByClassName("GluttonyLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("GluttonyLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LabelAndCheckGluttony")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("Gluttonyimg")){
        
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
    }
    document.getElementById("GluttonyOpenLabel").textContent = "↑";
    document.getElementById("GluttonyDiv").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("GluttonyLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("GluttonyLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckGluttony")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("GluttonyOpenLabel").textContent = "↓"
    document.getElementById("GluttonyDiv").style.border = "none";
    }
})

//Greed
GreedLevels = document.getElementsByClassName("GreedLevel");
GreedLayer = document.getElementById("Greed");
GreedLayer.addEventListener("click", (event) => {
    if (GreedLayer.checked === true){
        for (let i of GreedLevels) {
        let a =SelectedLevels.indexOf(i.value);
        if (a !== -1) {
            SelectedLevels.splice(a, 1);
        }
        }    
        for (let i of GreedLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
    }
    else{
        for (let i of GreedLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value),1)
        }
    }
    
})

let Layer4Option1 = document.getElementById("4-1");
Layer4Option1.addEventListener("click", (event) => {
    if (Layer4Option1.checked === true)
        SelectedLevels.push(Layer4Option1.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer4Option1.value),1)
        GreedLayer.checked = false;
    
})
let Layer4Option2 = document.getElementById("4-2");
Layer4Option2.addEventListener("click", (event) => {
    if (Layer4Option2.checked === true)
        SelectedLevels.push(Layer4Option2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer4Option2.value),1)
        GreedLayer.checked = false;
    
})
let Layer4Option3 = document.getElementById("4-3");
Layer4Option3.addEventListener("click", (event) => {
    if (Layer4Option3.checked === true)
        SelectedLevels.push(Layer4Option3.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer4Option3.value),1)
        GreedLayer.checked = false;
    
})

let Layer4Option4 = document.getElementById("4-4");
Layer4Option4.addEventListener("click", (event) => {
    if (Layer4Option4.checked === true)
        SelectedLevels.push(Layer4Option4.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer4Option4.value),1)
        GreedLayer.checked = false;
    
})

let Layer4OptionS = document.getElementById("4-S");
Layer4OptionS.addEventListener("click", (event) => {
    if (Layer4OptionS.checked === true)
        SelectedLevels.push(Layer4OptionS.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer4OptionS.value),1)
        GreedLayer.checked = false;
    
})

document.getElementById("GreedOpen").addEventListener("click", (event) => {
    if (document.getElementById("GreedOpen").checked === true){
        for (let i of document.getElementsByClassName("GreedLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("GreedLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LabelAndCheckGreed")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("Greedimg")){
        
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
    }
    document.getElementById("GreedOpenLabel").textContent = "↑";
    document.getElementById("GreedDiv").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("GreedLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("GreedLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckGreed")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("GreedOpenLabel").textContent = "↓"
    document.getElementById("GreedDiv").style.border = "none";
    }
})

//Wrath
WrathLevels = document.getElementsByClassName("WrathLevel");
WrathLayer = document.getElementById("Wrath");
WrathLayer.addEventListener("click", (event) => {
    if (WrathLayer.checked === true){
        for (let i of WrathLevels) {
        let a =SelectedLevels.indexOf(i.value);
        if (a !== -1) {
            SelectedLevels.splice(a, 1);
        }
        }    
        for (let i of WrathLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
    }
    else{
        for (let i of WrathLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value),1)
        }
    }
    
})

let Layer5Option1 = document.getElementById("5-1");
Layer5Option1.addEventListener("click", (event) => {
    if (Layer5Option1.checked === true)
        SelectedLevels.push(Layer5Option1.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer5Option1.value),1)
        WrathLayer.checked = false;
    
})
let Layer5Option2 = document.getElementById("5-2");
Layer5Option2.addEventListener("click", (event) => {
    if (Layer5Option2.checked === true)
        SelectedLevels.push(Layer5Option2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer5Option2.value),1)
        WrathLayer.checked = false;
    
})
let Layer5Option3 = document.getElementById("5-3");
Layer5Option3.addEventListener("click", (event) => {
    if (Layer5Option3.checked === true)
        SelectedLevels.push(Layer5Option3.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer5Option3.value),1)
        WrathLayer.checked = false;
    
})

let Layer5Option4 = document.getElementById("5-4");
Layer5Option4.addEventListener("click", (event) => {
    if (Layer5Option4.checked === true)
        SelectedLevels.push(Layer5Option4.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer5Option4.value),1)
        WrathLayer.checked = false;
    
})

let Layer5OptionS = document.getElementById("5-S");
Layer5OptionS.addEventListener("click", (event) => {
    if (Layer5OptionS.checked === true)
        SelectedLevels.push(Layer5OptionS.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer5OptionS.value),1)
        WrathLayer.checked = false;
    
})

document.getElementById("WrathOpen").addEventListener("click", (event) => {
    if (document.getElementById("WrathOpen").checked === true){
        for (let i of document.getElementsByClassName("WrathLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("WrathLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LabelAndCheckWrath")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("Wrathimg")){
        
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
    }
    document.getElementById("WrathOpenLabel").textContent = "↑";
    document.getElementById("WrathDiv").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("WrathLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("WrathLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckWrath")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("WrathOpenLabel").textContent = "↓"
    document.getElementById("WrathDiv").style.border = "none";
    }
})

//Heresy
HeresyLevels = document.getElementsByClassName("HeresyLevel");
HeresyLayer = document.getElementById("Heresy");
HeresyLayer.addEventListener("click", (event) => {
    if (HeresyLayer.checked === true){
        for (let i of HeresyLevels) {
        let a =SelectedLevels.indexOf(i.value);
        if (a !== -1) {
            SelectedLevels.splice(a, 1);
        }
        }    
        for (let i of HeresyLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
    }
    else{
        for (let i of HeresyLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value),1)
        }
    }
    
})

let Layer6Option1 = document.getElementById("6-1");
Layer6Option1.addEventListener("click", (event) => {
    if (Layer6Option1.checked === true)
        SelectedLevels.push(Layer6Option1.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer6Option1.value),1)
        HeresyLayer.checked = false;
    
})
let Layer6Option2 = document.getElementById("6-2");
Layer6Option2.addEventListener("click", (event) => {
    if (Layer6Option2.checked === true)
        SelectedLevels.push(Layer6Option2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer6Option2.value),1)
        HeresyLayer.checked = false;
    
})

document.getElementById("HeresyOpen").addEventListener("click", (event) => {
    if (document.getElementById("HeresyOpen").checked === true){
        for (let i of document.getElementsByClassName("HeresyLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("HeresyLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LabelAndCheckHeresy")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("Heresyimg")){
        
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
    }
    document.getElementById("HeresyOpenLabel").textContent = "↑";
    document.getElementById("HeresyDiv").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("HeresyLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("HeresyLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckHeresy")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("HeresyOpenLabel").textContent = "↓"
    document.getElementById("HeresyDiv").style.border = "none";
    }
})

//Violence
ViolenceLevels = document.getElementsByClassName("ViolenceLevel");
ViolenceLayer = document.getElementById("Violence");
ViolenceLayer.addEventListener("click", (event) => {
    if (ViolenceLayer.checked === true){
        for (let i of ViolenceLevels) {
        let a =SelectedLevels.indexOf(i.value);
        if (a !== -1) {
            SelectedLevels.splice(a, 1);
        }
        }    
        for (let i of ViolenceLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
    }
    else{
        for (let i of ViolenceLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value),1)
        }
    }
    
})

let Layer7Option1 = document.getElementById("7-1");
Layer7Option1.addEventListener("click", (event) => {
    if (Layer7Option1.checked === true)
        SelectedLevels.push(Layer7Option1.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer7Option1.value),1)
        ViolenceLayer.checked = false;
    
})
let Layer7Option2 = document.getElementById("7-2");
Layer7Option2.addEventListener("click", (event) => {
    if (Layer7Option2.checked === true)
        SelectedLevels.push(Layer7Option2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer7Option2.value),1)
        ViolenceLayer.checked = false;
    
})
let Layer7Option3 = document.getElementById("7-3");
Layer7Option3.addEventListener("click", (event) => {
    if (Layer7Option3.checked === true)
        SelectedLevels.push(Layer7Option3.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer7Option3.value),1)
        ViolenceLayer.checked = false;
    
})

let Layer7Option4 = document.getElementById("7-4");
Layer7Option4.addEventListener("click", (event) => {
    if (Layer7Option4.checked === true)
        SelectedLevels.push(Layer7Option4.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer7Option4.value),1)
        ViolenceLayer.checked = false;
    
})

let Layer7OptionS = document.getElementById("7-S");
Layer7OptionS.addEventListener("click", (event) => {
    if (Layer7OptionS.checked === true)
        SelectedLevels.push(Layer7OptionS.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer7OptionS.value),1)
        ViolenceLayer.checked = false;
    
})

document.getElementById("ViolenceOpen").addEventListener("click", (event) => {
    if (document.getElementById("ViolenceOpen").checked === true){
        for (let i of document.getElementsByClassName("ViolenceLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("ViolenceLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LabelAndCheckViolence")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("Violenceimg")){
        
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
    }
    document.getElementById("ViolenceOpenLabel").textContent = "↑";
    document.getElementById("ViolenceDiv").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("ViolenceLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("ViolenceLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckViolence")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("ViolenceOpenLabel").textContent = "↓"
    document.getElementById("ViolenceDiv").style.border = "none";
    }
})

//Fraud
FraudLevels = document.getElementsByClassName("FraudLevel");
FraudLayer = document.getElementById("Fraud");
FraudLayer.addEventListener("click", (event) => {
    if (FraudLayer.checked === true){
        for (let i of FraudLevels) {
        let a =SelectedLevels.indexOf(i.value);
        if (a !== -1) {
            SelectedLevels.splice(a, 1);
        }
        }    
        for (let i of FraudLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
    }
    else{
        for (let i of FraudLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value),1)
        }
    }
    
})

let Layer8Option1 = document.getElementById("8-1");
Layer8Option1.addEventListener("click", (event) => {
    if (Layer8Option1.checked === true)
        SelectedLevels.push(Layer8Option1.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer8Option1.value),1)
        FraudLayer.checked = false;
    
})
let Layer8Option2 = document.getElementById("8-2");
Layer8Option2.addEventListener("click", (event) => {
    if (Layer8Option2.checked === true)
        SelectedLevels.push(Layer8Option2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer8Option2.value),1)
        FraudLayer.checked = false;
    
})
let Layer8Option3 = document.getElementById("8-3");
Layer8Option3.addEventListener("click", (event) => {
    if (Layer8Option3.checked === true)
        SelectedLevels.push(Layer8Option3.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer8Option3.value),1)
        FraudLayer.checked = false;
    
})

let Layer8Option4 = document.getElementById("8-4");
Layer8Option4.addEventListener("click", (event) => {
    if (Layer8Option4.checked === true)
        SelectedLevels.push(Layer8Option4.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(Layer8Option4.value),1)
        FraudLayer.checked = false;
    
})

document.getElementById("FraudOpen").addEventListener("click", (event) => {
    if (document.getElementById("FraudOpen").checked === true){
        for (let i of document.getElementsByClassName("FraudLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("FraudLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LabelAndCheckFraud")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("Fraudimg")){
        
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
    }
    document.getElementById("FraudOpenLabel").textContent = "↑";
    document.getElementById("FraudDiv").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("FraudLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("FraudLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckFraud")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("FraudOpenLabel").textContent = "↓"
    document.getElementById("FraudDiv").style.border = "none";
    }
})


//Prime Sanctums
PrimeLevels = document.getElementsByClassName("PrimeLevel");
PrimeLayer = document.getElementById("Prime");
PrimeLayer.addEventListener("click", (event) => {
    if (PrimeLayer.checked === true){
        for (let i of PrimeLevels) {
        let a =SelectedLevels.indexOf(i.value);
        if (a !== -1) {
            SelectedLevels.splice(a, 1);
        }
        }    
        for (let i of PrimeLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
    }
    else{
        for (let i of PrimeLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value),1)
        }
    }
    
})

let LayerPOption1 = document.getElementById("P-1");
LayerPOption1.addEventListener("click", (event) => {
    if (LayerPOption1.checked === true)
        SelectedLevels.push(LayerPOption1.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(LayerPOption1.value),1)
        PrimeLayer.checked = false;
    
})
let LayerPOption2 = document.getElementById("P-2");
LayerPOption2.addEventListener("click", (event) => {
    if (LayerPOption2.checked === true)
        SelectedLevels.push(LayerPOption2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(LayerPOption2.value),1)
        PrimeLayer.checked = false;
    
})


document.getElementById("PrimeOpen").addEventListener("click", (event) => {
    if (document.getElementById("PrimeOpen").checked === true){
        for (let i of document.getElementsByClassName("PrimeLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("PrimeLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LabelAndCheckPrime")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("Primeimg")){
        
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
    }
    document.getElementById("PrimeOpenLabel").textContent = "↑";
    document.getElementById("Prime Sanctums").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("PrimeLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("PrimeLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckPrime")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("PrimeOpenLabel").textContent = "↓"
    document.getElementById("Prime Sanctums").style.border = "none"
    }
})

//Encores

EncoreLevels = document.getElementsByClassName("EncoreLevel");
EncoreLayer = document.getElementById("Encore");
EncoreLayer.addEventListener("click", (event) => {
    if (EncoreLayer.checked === true){
        for (let i of EncoreLevels) {
        let a =SelectedLevels.indexOf(i.value);
        if (a !== -1) {
            SelectedLevels.splice(a, 1);
        }
        }    
        for (let i of EncoreLevels) {
        i.checked = true;
        SelectedLevels.push(i.value);
        }
    }
    else{
        for (let i of EncoreLevels) {
        i.checked = false;
        SelectedLevels.splice(SelectedLevels.indexOf(i.value),1)
        }
    }
    
})

let LayerEOption1 = document.getElementById("0-E");
LayerEOption1.addEventListener("click", (event) => {
    if (LayerEOption1.checked === true)
        SelectedLevels.push(LayerEOption1.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(LayerEOption1.value),1)
        EncoreLayer.checked = false;
    
})
let LayerEOption2 = document.getElementById("1-E");
LayerEOption2.addEventListener("click", (event) => {
    if (LayerEOption2.checked === true)
        SelectedLevels.push(LayerEOption2.value)
    else
        SelectedLevels.splice(SelectedLevels.indexOf(LayerEOption2.value),1)
        EncoreLayer.checked = false;
    
})

document.getElementById("EncoreOpen").addEventListener("click", (event) => {
    if (document.getElementById("EncoreOpen").checked === true){
        for (let i of document.getElementsByClassName("EncoreLabel")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("EncoreLevel")) {
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("LabelAndCheckEncore")) {
        i.style.visibility = "visible"
        i.style.width = "auto";
        i.style.height = "auto";
    };
    for (let i of document.getElementsByClassName("Encoreimg")){
        
        i.style.visiblity = "visible";
        i.style.width = "100px";
        i.style.height = "100px";
    }
    document.getElementById("EncoreOpenLabel").textContent = "↑";
    document.getElementById("Encores").style.border = "2px solid white"
    }
    else {
        for (let i of document.getElementsByClassName("EncoreLabel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("EncoreLevel")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    for (let i of document.getElementsByClassName("LabelAndCheckEncore")) {
        i.style.visibility = "hidden"
        i.style.width = "0";
        i.style.height = "0";
    }
    document.getElementById("EncoreOpenLabel").textContent = "↓"
    document.getElementById("Encores").style.border = "none";
    }
})


let Button = document.getElementById("GenerateButton");
Button.addEventListener("click", (event) => {
    let Result= (SelectedLevels[Math.floor(Math.random() * SelectedLevels.length)]);
    if (Result !== undefined) {
        if (document.getElementById("Fail").textContent === "Please select a level :P"){
            document.getElementById("Fail").textContent = "Thank you :3";
        }
        else {
            document.getElementById("Fail").textContent = "";
        }
        let SelectedLabelsImg = document.querySelector(`label[for="${Result}"] img`)
        let SelectedImage = SelectedLabelsImg.getAttribute("src")
        let SelectedLevel = document.getElementById("SelectedLevel");
        console.log(SelectedLevel)
        SelectedLevel.setAttribute("src",SelectedImage)
        document.getElementById("SelectedLevelShowDiv").style.visibility = "visible";
        document.getElementById("TipOfTheDay").textContent = "Tip of the day:\n" + SelectedLabelsImg.getAttribute("alt")
    }
    else {
        document.getElementById("Fail").textContent = "Please select a level :P"
        document.getElementById("SelectedLevelShowDiv").style.visibility = "hidden";
    }
})

document.getElementById("SettingsDiv").addEventListener("click", (event) => {
    document.getElementById("Overlay").style.visibility = "visible";
    document.getElementById("SettingsPage").style.visibility = "visible";
    document.getElementById("HTML").style.overflow = "hidden";
    document.getElementById("MusicOption").addEventListener("click", (event) => {
        if (document.getElementById("MusicOption").checked === true) {
            Music.muted = false;
            Music.currentTime = 5;
            Music.play()
        }
        else {
            Music.muted = true;
        }
    })
    if (document.getElementById("SettingsDiv").style.transform === "rotate(360deg)") {
        document.getElementById("SettingsDiv").style.transform = "rotate(720deg)"
    }
    else {
        document.getElementById("SettingsDiv").style.transform = "rotate(360deg)"
    }
})

document.getElementById("Overlay").addEventListener("click", (event) => {
    document.getElementById("Overlay").style.visibility = "hidden";
    document.getElementById("SettingsPage").style.visibility = "hidden";
    document.getElementById("HTML").style.overflow = "visible";
    if (document.getElementById("SettingsDiv").style.transform === "rotate(360deg)") {
        document.getElementById("SettingsDiv").style.transform = "rotate(720deg)"
    }
    else {
        document.getElementById("SettingsDiv").style.transform = "rotate(360deg)"
    }
})

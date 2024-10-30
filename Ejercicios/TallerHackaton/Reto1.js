function Descriptacion(mensaje) {
    const mapa = {
        "?": "a",
        "[": "e",
        "\\": "i",
        "~": "o",
        "+": "u",
        "¬": "ó",
        "]": "n",
        "¿":"y",
        "()": " ",
        "`": "c",
        "=":"t",
        "^":"m",
        "-":"h",
        "*":"p",
        "/":"l",
        "{":"s",
        ";":"f",
        "$":"r",
        "__":"z",
        "%":"b",
        "#":"v",
        "}":"q",
        "!":"j",
        "¡":"d",
    };
    
    return mensaje.split('').map(caracter => mapa[caracter] || caracter).join('');
}

const mensaje = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";
console.log(Descriptacion(mensaje)); 
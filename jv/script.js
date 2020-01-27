function assert(cond, texto){
	if (!cond){
		texto = texto || "Asserção falhou";
		 if (typeof Error !== "undefined") {
            throw new Error(texto);
        }
     throw texto;
	}
}
function trocaClasse(el,c1, c2){
	assert(typeof el === "object", 'O elemento não foi correctamente passado');
	assert(typeof c1 === "string", 'O argumento c1 não é String');
	assert(typeof c2 === "string", 'O argumento c2 não é String'); 
	
	if (el.classList.contains(c1)){
		el.classList.replace(c1,c2);		
	} else if (el.classList.contains(c2)){
		el.classList.replace(c2,c1);		
	}
}
function removeClasse(elemento, classe){
	assert(typeof classe === "string", "o 2º argumento classe não é uma string");
		if (typeof elemento === "string"){
		elemento = document.getElementById(elemento);
	}
	assert(elemento, "Esse elemento (id) não existe. ");

	elemento.classList.remove(classe);
}
function adicionaClasse(elemento,classe){
	assert(typeof classe === "string", "o 2º argumento classe não é uma string");
	
	if (typeof elemento === "string"){
		elemento = document.getElementById(elemento);
	}
	assert(elemento, "Esse elemento (id) não existe. ");
	
	if(elemento && !elemento.classList.contains(classe)){
		elemento.classList.add(classe);
	}
}
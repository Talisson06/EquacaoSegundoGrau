function Equacion(){
    let number1 = parseInt( document.getElementById('number1').value)
    let number2 = parseInt( document.getElementById('number2').value)
    let number3 = parseInt( document.getElementById('number3').value)
    
    // Variáveis para receber os valores e fazer a substituição e calcular
    let a = number1
    let b = number2
    let c = number3

    if (number1 == "" || number2 == "" || number3 == "" ){
            alert("prenchar os campos")
    }
    // Verificar se os valores são positivos e negativos e fazer a ordem de procedência e calcular
    if (number1 < 0 || number3 < 0){
       multiplication = -4 * ((a) * (c))
       
    }else{
        multiplication = -4 * a * c
    }

    // Calcular o valor de delta e mais a multiplicação anterior, para que eu possa substituir de forma didática e que facilite o entendimento dos usuários.
    let b2 =  b*b 
    let delta = b2 + multiplication

    // Aqui é uma simples verificação se o valor da multiplicação é positivo ou negativo, para adição do "+", para que, facilite o entendimento do usuário.
    if (multiplication > 0){
        multiplication = "+" + multiplication
    }

    // Aqui são variáveis auxiliares para ajudar no, visual da expressão e a resolução da mesma.
    let substitute 
    let auxA
    let auxB 
    let auxC

    // Todas essas validações são para ajudar o entendimento da expressão.
    if (b < 0){
        auxB = number2
    }else{
        auxB = "+" + b
    }
    if(c < 0 ) {
        auxC = number3
        c = '('+c+')'
    }else{
        auxC = "+" + number3
    }
    if (a < 0){
        auxA = number1
        a = "("+a+")"
    }else{
        auxA = a
    }
   
    substitute = `${auxA}x²  ${auxB}x ${auxC} = 0`
    // Fim das Validações

    let x1
    let x2
    let source
    let baskara 

    baskara = "x = (-b ± √(b² – 4ac)) / (2a)"
    if (delta > 0){
        x1 = (-b + Math.sqrt(delta)) / (2*auxA)
        x2 = (-b - Math.sqrt(delta)) / (2*auxA)
        source = "<span>"+ "Formula de Baskara:" +"<br>"+ `${baskara}` + "<br><br> " + 
                  `x1= (${-b} + √${delta}) / (2 * ${auxA})` + "<br>" +
                 ` x1 = ${(-b + Math.sqrt(delta))} / ${2*auxA}` + "<br>" +
                  `x1 = ${x1}` + "<br><br> "+ 

                  `x2= (${-b} - √${delta}) / (2 * ${auxA})` + "<br>" +
                  `x2 = ${(-b + Math.sqrt(delta))} / ${2*auxA}` + "<br>" +
                  `x2 = ${x2}` + "</span>"

    }else if (delta < 0){
        source = "<span>"+"Não existe raizes para Delta negativo! "+"</span>"
    } else{
        x1 = (-b + Math.sqrt(delta)) / (2*auxA)
        source = "<span>" +"Só existe uma raiz para delta = 0 <br>" + `x1= (${-b} + √${delta}) / (2 * ${auxA})<br>
                  x1 = ${(-b + Math.sqrt(delta))} / ${(2*auxA)} <br>
                  x1 = ${x1}` + "</span>"
    }

   //Por o texto na área da tela princinpal
    textarea2 = "<span> ax² + bx + c = 0 subistituindo: <br>" + `${substitute} ` + "</span><br>" + "<span>Agora que você já sabe os valores de A, B e C.</span><br>" +
                "<span>Utilize para descobri o valor de Delta.</span><br>" + "<span>Δ = b² – 4 ac</span><br>" + "<span>" + `Δ = (${b})² – 4 * ${a} * ${c}` + "<br>" + `Δ = ${b2} ${multiplication}`+ "<br>"+ `Δ = ${delta}<br>` +"</span>"
    
     document.getElementById('textarea').innerHTML = textarea2
     document.getElementById('Raizes').innerHTML = source
    
}
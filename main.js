//JA PARA LOGIN 
const formLoginHtml = document.getElementById ('formLogin');

const accounts =[
    
    {userName: 'Gera', password: '123'},
    {userName: 'Maui', password: '456'},
    {userName: 'Mali', password: '789'}  
    ]
function showMistakes (type){
    let mistake =document.getElementById(`mistake${type}`)
    mistake.classList.remove('hide')
    mistake.classList.add('mistake')
    setTimeout(()=>{
        mistake.classList.remove('mistake')
        mistake.classList.add('hide')
    }, 3000)   
}

function validateAccounts(user, pass){
    for (let index=0;index <accounts.length; index++)

    if (user === '' && pass===''){
        showMistakes('Data')
        
    }else if(user!== accounts[index].userName){
        showMistakes('User')
        
        
    }else if(pass!== accounts[index].password){
        showMistakes('Password')
        
        
    }else {
        console.log('Bienvenido');
        location='cajero.html';
        
    }

}
 


formLoginHtml.addEventListener('submit',(eventSubmitLogin)=>{
    eventSubmitLogin.preventDefault()
    let userHtml= document.getElementById('inputUserHtml').value;
    let passwordHtml= document.getElementById('InputPasswordHtml').value;
    
    validateAccounts(userHtml,passwordHtml)
})

//JS PARA CALCULAR SALDO 

function addition(){
    
    let MoneyT = parseInt(document.getElementById ('balanceEnd').value);
    let InputT = parseInt(document.getElementById ('depositValue').value);
    
    document.getElementById('balanceEnd').value = (MoneyT +InputT);

}

function substraction(){
    let MoneyT = parseInt(document.getElementById ('balanceEnd').value);
    let OutputT = parseInt(document.getElementById ('takeValue').value);
    
    document.getElementById('balanceEnd').value = (MoneyT - OutputT);

}

function leave(){
    location='index.html';
}
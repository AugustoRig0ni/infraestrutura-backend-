const bcrypt = require ('bcryptjs');const { login } = require('./src/controllers/authcontrollers');


   async function CadastroDeUsuario(senha) {
    const hash = await bcrypt.hash (senha , 10)
    console.log(senha, hash)
    return hash
   } 


   async function loginUsuario (senha, hashsenha) {
      try {
         
         const isMatch = await bcrypt.compare (senha, hashsenha)
         return isMatch;
      }  catch (err) {
      console.error('Erro ao comparar senha', err);
      return false
      }

   }

    async function FluxoUsuario () {

        const hash = await CadastroDeUsuario ("12345");

        const loginCerto = await loginUsuario ("12345", hash);
        const loginErrado = await loginUsuario ("batata", hash);

        console.log("true", loginCerto);
      console.log("false", loginErrado);
}

FluxoUsuario ();
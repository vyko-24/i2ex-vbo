const SumaController= {}
const ENV = import.meta.env;
const API_URL = `${ENV.VITE_API_URL}`;


SumaController.getIMC = async(num)=> {
    const res = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ peso: num.peso, estatura: num.estatura })
    }).then(res => res.json().then(data => {
        console.log('Respuesta del backend:', data);
        return data;
    })).catch(err => {
        console.error('Error en la solicitud fetch:', err);
    });
    return res;
}

export default SumaController;
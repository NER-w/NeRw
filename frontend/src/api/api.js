const api = require('index')

    /// patient requests


    async function patientRegistration(patientDTO){
    try {
        return await api.post('/patient-registration', patientDTO);

    }catch (e) {
        console.error(e);
    }





    }
    /// doctor requests
    /// appointment requests
    /// notifications requests
    ///  sensor data  requests




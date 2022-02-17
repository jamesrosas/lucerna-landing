const d = document
const FORM = d.querySelector("#contact-form");
const MODAL = d.querySelector(".modal-sent");
const SENDBTN = d.querySelector("#send-mail");

FORM.addEventListener('submit', async (e) => {
    e.preventDefault();
    MODAL.classList.add('modal-show');
    MODAL.innerHTML = `<p id="p-modal">Enviando...</p>
                       <span id="loader"></span>`

    try {
        const response = await fetch("https://formsubmit.co/ajax/jamesadrian777@gmail.com", {
                    method: "POST",
                    body: new FormData(e.target)
                  });
        const data = await response.json();
        
        if(data){
            MODAL.innerHTML = `<p id="p-modal">Mensaje Enviado</p>
                               <span class="check">✔</span>`
            setTimeout( () => {
                MODAL.classList.remove('modal-show')
            } , 2000)

            FORM.reset();
        }

        return data;

    } catch (error) {
        const message = `<p>Ocurrió un error ${error}</p>`;
        MODAL.innerHTML = `${message}`;
    }

})
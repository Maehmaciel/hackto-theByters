
loadChat()

function loadChat() {
    let i = 0;

    setInterval(() => {
        $(`[for=${i}]`).fadeIn()

        i++;
    }, 1200);
}

async function setTourist(id) {
    if (id === 1) {
        localStorage.setItem('userType', true)
        $('#chat').fadeOut("fast", function () {
            $('#chat').html('')
            $('#chat').fadeIn()
            $('#chat').append(`
                <div class="badge" for="1">
                    <p>É ótimo ter você aqui.</p>
                </div>
            `)
            $('#chat').append(`
                <div class="badge" for="2">
                    <p>Pra que eu possa te ajudar melhor, me diz o que te traz à Palmas, por favor.</p>
                </div>
            `)
            $('#chat').append(`
                <div class="badge-buttons" for="3">
                    <button onclick="setTourist(2)">Venho a Lazer</button>
                    <button onclick="setTourist(2)">Venho a trabalho</button>
                </div>
            `)
            loadChat()
        })
    } else if (id === 2) {
        localStorage.setItem('purpose', 'leisure')
        $('#chat').fadeOut("fast", function () {
            $('#chat').html('')
            $('#chat').fadeIn()
            $('#chat').append(`
                <div class="badge" for="1">
                    <p>Eu tenho uma série de informações pra tornar sua estadia incrível. </p>
                </div>
            `)
            $('#chat').append(`
                <div class="badge-buttons" for="2">
                    <button onclick="setTourist(3)">Iniciar experiência</button>
                </div>
            `)
            loadChat()
        })
    } else if (id === 3) {
        let userType = localStorage.getItem('userType')
        let purpose = localStorage.getItem('purpose')

        $.ajax({
            url: '/chat',
            type: 'PUT',
            data: {
                userType,
                purpose
            },
            success: function() {
                window.location.href = "/home"
            }
        })

    }
}

async function setLocalUser(id) {
    if (id === 1) {
        $('#chat').fadeOut("fast", function () {
            $('#chat').html('')
            $('#chat').fadeIn()
            $('#chat').append(`
                <div class="badge" for="1">
                    <p>Conhecer a nossa cidade é sempre bom, né?</p>
                </div>
            `)
            $('#chat').append(`
                <div class="badge" for="2">
                    <p>Eu tenho uma série de informações pra você conhecer ainda mais, a nossa cidade.</p>
                </div>
            `)
            $('#chat').append(`
                <div class="badge-buttons" for="3">
                    <button onclick="setTourist(2)">Simbora</button>
                </div>
            `)
            loadChat()
        })
    }
}
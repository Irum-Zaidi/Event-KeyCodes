const insert = document.getElementById('insert')



window.addEventListener('keydown', (event) => {
    // console.log(e)

    insert.innerHTML = `
    <div class="key">
    <small>Pressed Key</small>
    ${event.key === ' ' ? 'Space' : event.key}
</div>
<div class="key">

<small>Key Code</small>
${event.keyCode}
</div>
<div class="key">
<small>Key Name</small>
${event.code}
</div>`

})


import React from 'react'

export const ContactForm = () => {
    return (
        <form className="container-contact">

            <input id="nombre" name="nombre" type="text" />
            <label htmlFor="nombre">Nombre</label>

            <input id="email" name="email" type="email" />
            <label htmlFor="email">Email</label>

            <textarea id="descripcion" name="descripcion" rows="10" cols="30" />
            <label htmlFor="descripcion">Cuentame, que te intereso sobre mi!</label>

        </form>
    )
}

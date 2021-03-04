import React, { Fragment } from 'react'
import { useInputValue } from '../customHooks/useInputValue'


export const ContactForm = () => {

    const name = useInputValue('');
    const email = useInputValue('');
    const description = useInputValue('');

    const InputName = () => {
        return (
            <div className="col-12 col-lg-6">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="contactName" {...name} placeholder="Name" />
                    <label className="form-label" htmlFor="contactName">Name</label>
                </div>
            </div>
        )
    }

    const InputEmail = () => {
        return (
            <Fragment>
                <div className="input-group">
                    <div className="col-12 col-lg-4">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="contactEmail" {...email} disabled={name.value ? false : true} placeholder="example" />
                            <label className="form-label" htmlFor="contactEmail">Email</label>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2">
                        <div className="form-floating">
                            <select className="form-select" id="contactSelectEmail" defaultValue={1}>
                                <option value="1">Select</option>
                                <option value="2">@gmail.com</option>
                                <option value="3">@hotmail.com</option>
                                <option value="4">@yahoo.com</option>
                            </select>
                            <label className="form-label" htmlFor="contactSelectEmail">Select</label>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    const InputDescription = () => {
        return (
            <div className="col-12 col-lg-6">
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="contactDescription" placeholder="Cuentame, que te intereso sobre mi!" style={{ height: "100px" }} {...description} disabled={email.value ? false : true} />
                    <label className="form-label" htmlFor="contactDescription">Cuentame, que te intereso sobre mi!</label>
                </div>
            </div>
        )
    }

    return (
        <form className="row g-3">
            {InputName()}
            {InputEmail()}
            {InputDescription()}
        </form>
    )
}

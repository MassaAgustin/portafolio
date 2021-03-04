import React, { Fragment } from 'react'

export const Home = () => {
    return (
        <Fragment>
            <label for="homeList" class="form-label">Skill's Search</label>
            <input class="form-control" list="skillListOption" id="homeList" placeholder="Type to search skill..." />
            <datalist id="skillListOption">
                <option value="React" />
                <option value="Redux" />
                <option value="Bootstrap 5" />
                <option value="Node" />
                <option value="SASS" />
            </datalist>
        </Fragment>
    )
}

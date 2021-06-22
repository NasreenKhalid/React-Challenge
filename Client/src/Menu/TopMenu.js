import React from 'react'
import logohere from '../Images/logohere.png'
import debounce from 'lodash.debounce';

function TopMenu(){
    state = {
    users: []
}

onChange = debounce(async (e,client) => {
    console.log('Searching')
    const res =  await client.query({
        query: SEARCH_USERS_QUERY,
        variables: {searchTerm: e.target.value}
    });
    this.setState({
        users: res.data.users,
    })
},350)

    return (
        <div className="top-menu is-shadow-2">
            <div className="menu-logo-container">
                <img className="menu-logo" src={logohere} alt="Logo" />
            </div>
            <div>
                <input
                    className="search-field"
                    placeholder="Search here...."
                    type="search"
                    name="name"
                    autoComplete="off"
                    onChange={e=>this.onChange(e,client)}
                />
            </div>
        </div>
    );
}

export default TopMenu;

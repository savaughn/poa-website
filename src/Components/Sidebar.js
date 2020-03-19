import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import * as ROUTES from "../Constants/routes";
import {Link} from "react-router-dom";
import '../w3.css'

function Sidebar() {
    return (
        <div className="w3-left w3-white w3-card">
            <List>
                <ListItem button>
                    <Link to={ROUTES.HOME} style={{ textDecoration: 'none' }}>Home</Link>
                </ListItem>
                <ListItem button>
                    <Link to={ROUTES.COMMUNITY} style={{ textDecoration: 'none' }}>Community Information</Link>
                </ListItem>
                <ListItem button>
                    <Link to={ROUTES.RULES} style={{ textDecoration: 'none' }}>Rules and Regulations</Link>
                </ListItem>
                <ListItem button>
                    <Link to={ROUTES.PARK} style={{ textDecoration: 'none' }}>About the Park</Link>
                </ListItem>
                <ListItem button>
                    <Link to={ROUTES.WASTE} style={{ textDecoration: 'none' }}>Curbside Waste & Recycling</Link>
                </ListItem>
                <ListItem button>
                    <Link to={ROUTES.CITY} style={{ textDecoration: 'none' }}>City Resources</Link>
                </ListItem>
            </List>
        </div>
    )
}

export default Sidebar

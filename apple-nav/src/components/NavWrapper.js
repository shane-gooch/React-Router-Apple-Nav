import React from 'react';
import { Route, Link } from 'react-router-dom';
import SubNav from './SubNav';

const NavWrapper = props => {
    console.log(props)

    return(
        <div>
            <div className='nav-wrapper'>
            <p className='apple-logo'>Apple</p>
                {props.item.map(title => {
                    return(
                    <div key={title.id} className='nav-links'>
                        <Link to={`/${title.title}`}>
                            {title.title}
                        </Link> 
                    </div>  
                    ) 
                }) }
                
            </div>
            {props.item.map(data => {
                return(
                    <div key={data.id}>
                        <Route 
                        exact 
                        path={`/${data.title}`} 
                        render={props => <SubNav data={data} />} />
                    </div>
                )
            })}
        </div>
    )
}

export default NavWrapper; 
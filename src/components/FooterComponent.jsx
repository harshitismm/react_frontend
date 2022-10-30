import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div>
                <footer className='footer bg-dark text-center fixed-bottom'>
                    <div class="text-center p-3 text-light">
                        All Rights Reserved 2022
                        <a class="text-light" href="https://harshitismm.github.io/My-Portfolio/#">@Harshitismm</a>
                    </div> 
                </footer>
            </div>
        );
    }
}

export default FooterComponent;
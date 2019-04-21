import React from 'react'

import {Button, Overlay} from 'react-bootstrap'
class Example extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.attachRef = target => this.setState({ target });
      this.state = {
        show: false,
      };
    }
  
    render() {
      const { show, target } = this.state;
      return (
        <React.Fragment>
        <Button
          variant="danger"
          ref={this.attachRef}
          onClick={() => this.setState({ show: !show })}
        >
          Cheers App!!!
        </Button>
        <Overlay target={target} show={show} placement="right">
          {({ placement, scheduleUpdate, arrowProps, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Simple tooltip
            </div>
          )}
        </Overlay>
      </React.Fragment>
      )
          

        }
    }

    export default Example
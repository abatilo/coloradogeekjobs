import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        RenderableComponent: null,
      };
    }

    async componentDidMount() {
      const { default: RenderableComponent } = await importComponent();
      this.setState({ RenderableComponent });
    }

    render() {
      const { RenderableComponent } = this.state;
      return RenderableComponent ? <RenderableComponent {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}

import React from 'react';

class IsOnScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRender: false
    }
  }

  intersectAction = (changes, observer) => {
    changes.forEach(change => {
      if (change.intersectionRatio > 0) {
        this.setState({ shouldRender: true });
        observer.unobserve(change.target);
      }
    });
  }

  componentDidMount() {
    if (this.element) {
      const observer = new IntersectionObserver(this.intersectAction, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      });
      observer.observe(this.element);
    }
  }

  render() {
    return <div ref={r => this.element = r} style={{ minHeight: this.props.minHeight || '300px',   maxWidth: '12rem' }}>
      {this.state.shouldRender ? this.props.children : null}
    </div>
  }
}

export default IsOnScreen;

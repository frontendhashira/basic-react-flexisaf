import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mountTime: null,
      updateCount: 0,
      logs: []
    };
  }

  componentDidMount() {
    const mountTime = new Date().toLocaleTimeString();
    this.setState({
      mountTime,
      logs: [...this.state.logs, `Component mounted at ${mountTime}`]
    });
    console.log('LifecycleDemo: componentDidMount');
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.updateCount !== this.state.updateCount) {
      const updateTime = new Date().toLocaleTimeString();
      this.setState({
        logs: [...this.state.logs, `Component updated #${this.state.updateCount} at ${updateTime}`]
      });
      console.log('LifecycleDemo: componentDidUpdate');
    }
  }

  componentWillUnmount() {
    console.log('LifecycleDemo: componentWillUnmount');
  }

  handleUpdate = () => {
    this.setState(prevState => ({
      updateCount: prevState.updateCount + 1
    }));
  }

  render() {
    const { mountTime, updateCount, logs } = this.state;

    return (
      <div className="lifecycle-demo">
        <h3>Lifecycle Methods Demo (Class Component)</h3>
        <div className="lifecycle-info">
          <p><strong>Mounted:</strong> {mountTime || 'Not yet mounted'}</p>
          <p><strong>Update Count:</strong> {updateCount}</p>
          <button type='button' onClick={this.handleUpdate} className="btn btn--secondary">
            Trigger Update
          </button>
        </div>
        <div className="lifecycle-logs">
          <h4>Lifecycle Logs:</h4>
          {logs.map((log, index) => (
            <div key={index} className="log-entry">{log}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default LifecycleDemo
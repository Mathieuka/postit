import { Component, ErrorInfo, ReactNode } from "react";

interface State {
  hasError: boolean;
  fallBack: ReactNode;
}

interface Props {
  fallBack: ReactNode;
  children?: ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    fallBack: this.props.fallBack,
  };

  // if an error happened, set the state to true
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log("%c LOG error", "background: #222; color: #bada55", error);
    console.log(
      "%c LOG errorInfo",
      "background: #222; color: #bada55",
      errorInfo
    );
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>{this.state.fallBack}</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;

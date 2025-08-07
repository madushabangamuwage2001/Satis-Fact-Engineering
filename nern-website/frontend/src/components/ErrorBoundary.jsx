"use client"

import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-construction-lightGray">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-construction-red mb-4">
              <i className="fas fa-exclamation-triangle text-4xl"></i>
            </div>
            <h2 className="text-2xl font-heading font-bold text-construction-red mb-4">Oops! Something went wrong</h2>
            <p className="text-construction-gray mb-6">
              We're sorry for the inconvenience. Please try refreshing the page or contact us if the problem persists.
            </p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Refresh Page
            </button>
            {process.env.NODE_ENV === "development" && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-construction-gray">Error Details (Development)</summary>
                <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
